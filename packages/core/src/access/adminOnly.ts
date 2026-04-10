import type { Access } from 'payload'

/**
 * Access control: Only admin users
 */
export const adminOnly: Access = ({ req: { user } }) => {
  return user?.roles?.includes('admin') ?? false
}