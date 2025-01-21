import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import blog from "./blog";
import order from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, blog, order],
};
