import type { Access } from 'payload'

/**
 * Access control: Only authenticated users
 */
export const authenticated: Access = ({ req: { user } }) => {
  return Boolean(user)
}

