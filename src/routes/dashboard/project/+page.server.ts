import { db } from '$lib/server/db/index.js';

export async function load({ locals }) {
	const projects = await db.query.project.findMany({
		where: (project, { eq }) => eq(project.createdBy, locals.userSession.id as number)
	});

	return {
		projects
	};
}
