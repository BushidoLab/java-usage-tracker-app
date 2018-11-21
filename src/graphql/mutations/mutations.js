//graphql mutations
import { login, signUp } from './auth';
import { manageForm } from './manage';

export const Mutations = {
  ...login,
  ...signUp,
  ...manageForm,
}