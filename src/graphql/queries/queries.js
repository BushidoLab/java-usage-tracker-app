// graphql queries
import { management } from "./manage";
import { price } from "./price";
import { logs } from "./logs";
import { getEmail } from "./reconcile"

export const Queries = {
  ...management,
  ...price,
  ...logs,
  ...getEmail,
}