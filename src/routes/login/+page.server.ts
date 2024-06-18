import { JWT_ACCESS_SECRET } from '$env/static/private';
import { userLoginSchema } from '$lib/schema/userSchema';
import { db } from '$lib/server/db/index.js';
import { user } from '$lib/server/db/schema.js';
import { hash, verify } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import { message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
	const form = await superValidate(zod(userLoginSchema));

	return { form };
};

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(userLoginSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const passwordHash = await hash(form.data.password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		const existingUser = await db.query.user.findFirst({
			where: eq(user.email, form.data.email)
		});

		if (!existingUser) {
			return message(
				form,
				{ message: 'Incorrect username or password', type: 'danger' },
				{ status: 403 }
			);
		}

		const validPassword = await verify(existingUser.password, form.data.password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		if (!validPassword) {
			return message(
				form,
				{ message: 'Incorrect username or password', type: 'danger' },
				{ status: 403 }
			);
		}

		const token = jwt.sign({ id: existingUser.id }, JWT_ACCESS_SECRET, { expiresIn: '1d' });

		cookies.set('authToken', `Bearer ${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 // 1 day
		});

		redirect(301, '/dashboard');
	}
};
