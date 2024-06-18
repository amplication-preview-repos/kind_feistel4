import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ApartmentWhereInput = {
  available?: BooleanNullableFilter;
  bedrooms?: IntNullableFilter;
  companyOrAgent?: StringNullableFilter;
  description?: StringNullableFilter;
  furnishing?: BooleanNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  owner?: StringNullableFilter;
  price?: FloatNullableFilter;
  propertyFeatures?: StringNullableFilter;
  propertyType?: "Option1";
  rentOrSale?: "Option1";
  residentialOrCommercial?: "Option1";
  title?: StringNullableFilter;
};
