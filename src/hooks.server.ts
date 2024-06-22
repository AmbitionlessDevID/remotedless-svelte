import type { Handle } from '@sveltejs/kit';
import { JWT_ACCESS_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

import { db } from '$lib/server/db';

const handle: Handle = async ({ event, resolve }) => {
	const authToken = event.cookies.get('authToken');

	event.locals.userSession = { authenticated: false };
	if (authToken) {
		// Remove Bearer prefix
		const token = authToken.split(' ')[1];

		try {
			const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);
			if (typeof jwtUser === 'string') {
				throw new Error('Something went wrong');
			}

			const loggedUser = await db.query.user.findFirst({
				columns: {
					id: true,
					name: true,
					email: true
				},
				where: (user, { eq }) => eq(user.id, jwtUser.id)
			});

			if (!loggedUser) {
				throw new Error('User not found');
			}

			const sessionUser = {
				id: loggedUser.id,
				authenticated: true,
				user: loggedUser
			};

			event.locals.userSession = sessionUser;
		} catch (error) {
			console.error(error);
		}
	}

	return await resolve(event);
};

export { handle };
