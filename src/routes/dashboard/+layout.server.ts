export async function load({ locals }) {
	return {
		auth: locals.userSession
	};
}
