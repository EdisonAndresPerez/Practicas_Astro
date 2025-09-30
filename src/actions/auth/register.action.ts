import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const register = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    user: z.string().min(2),
    password: z.string().min(6)
  }),
  handler: async ({name, lastName, email, user, password}) => {

console.log({name, lastName, email, user, password})

    return true;
  }
})
