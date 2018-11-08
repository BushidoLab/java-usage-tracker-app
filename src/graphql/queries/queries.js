// graphql queries
import { management } from "./manage";
import { price } from "./price";
import { logs } from "./logs";
import { getEmail } from "./reconcile";
import { userInfo } from "./auth";

export const Queries = {
  ...management,
  ...price,
  ...logs,
  ...getEmail,
  ...userInfo,
}