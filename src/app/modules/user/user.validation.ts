import { z } from 'zod';

export const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'Password can not be more than 20 character' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-pregress', 'blocked']).default('in-pregress'),
  isDeleted: z.boolean().optional().default(false),
});
