// See https://kit.svelte.dev/docs/types#app

import type { ISessionUser } from '$lib/schema/userSchema';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userSession: ISessionUser;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
