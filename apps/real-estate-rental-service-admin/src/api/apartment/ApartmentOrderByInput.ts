import { SortOrder } from "../../util/SortOrder";

export type ApartmentOrderByInput = {
  available?: SortOrder;
  bedrooms?: SortOrder;
  companyOrAgent?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  furnishing?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  owner?: SortOrder;
  price?: SortOrder;
  propertyFeatures?: SortOrder;
  propertyType?: SortOrder;
  rentOrSale?: SortOrder;
  residentialOrCommercial?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
