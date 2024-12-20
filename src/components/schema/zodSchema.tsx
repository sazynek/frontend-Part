import { z as zod } from 'zod'
export const schemaFunc = (usernameExist: 0 | 1) => {
	const schema = zod.object({
		username: zod
			.string({ message: "it's require field" })
			.min(usernameExist, { message: "it's require field" })
			.trim()
			.toLowerCase(),
		email: zod
			.string({ message: "it's require field" })
			.email({ message: 'your email must be valid' })
			.trim(),
		password: zod
			.string({ message: "it's require field" })
			.min(7, {
				message: 'men length must be 7',
			})
			.trim(),
	})
	return schema
}

export const schema = zod.object({
	username: zod
		.string({ message: "it's require field" })
		.min(1, { message: "it's require field" })
		.trim()
		.toLowerCase(),
	email: zod
		.string({ message: "it's require field" })
		.email({ message: 'your email must be valid' })
		.trim(),
	comment: zod
		.string({ message: "it's require field" })
		.trim(),
})
