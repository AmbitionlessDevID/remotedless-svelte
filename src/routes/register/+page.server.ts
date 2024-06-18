import { userSignupSchema } from '$lib/schema/userSchema';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { hash } from '@node-rs/argon2';
import { fail } from '@sveltejs/kit';
import { message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
	const form = await superValidate(zod(userSignupSchema));

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(userSignupSchema));

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		const passwordHash = await hash(form.data.password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		await db.insert(user).values({
			name: form.data.name,
			email: form.data.email,
			password: passwordHash
		});

		return message(form, 'Signup successfully');
	}
};
