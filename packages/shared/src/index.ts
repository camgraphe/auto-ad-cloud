import { z } from 'zod'

export const JobStatus = z.enum(['PENDING', 'PROCESSING', 'DONE', 'ERROR'])

export type JobStatus = z.infer<typeof JobStatus>
