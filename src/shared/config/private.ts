import { z } from 'zod'
const privateConfigSchema = z.object({})

export const privateConfig = privateConfigSchema.parse(process.env)
