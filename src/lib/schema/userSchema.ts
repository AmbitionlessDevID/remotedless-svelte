import { z } from 'zod';

export const userSchema = z.object({
	name: z.string().min(1),
	email: z.string().email().nullable(),
	photoUrl: z.string().optional().nullable()
});

export const userSignupSchema = userSchema.extend({
	password: z.string().min(5)
});

export const userLoginSchema = userSchema.pick({ email: true }).extend({
	password: z.string()
});

export interface ISessionUser {
	id?: number;
	authenticated: boolean;
	user?: z.infer<typeof userSchema>;
}
