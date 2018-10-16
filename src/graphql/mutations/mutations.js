//graphql mutations
import { login, signUp } from './auth'

export const Mutations = {
  ...login,
  ...signUp
}