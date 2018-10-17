// graphql queries
import { management } from "./manage";
import { price } from "./price";
import { logs } from "./logs";

export const Queries = {
  ...management,
  ...price,
  ...logs,
}