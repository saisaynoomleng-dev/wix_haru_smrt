import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { imageType } from './imageType';
import { orderType } from './orderType';
import { categoryType } from './categoryType';
import { userType } from './userType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, imageType, orderType, categoryType, userType],
};
