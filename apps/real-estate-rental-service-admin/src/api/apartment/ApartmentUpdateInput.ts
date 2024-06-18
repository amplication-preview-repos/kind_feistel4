export type ApartmentUpdateInput = {
  available?: boolean | null;
  bedrooms?: number | null;
  companyOrAgent?: string | null;
  description?: string | null;
  furnishing?: boolean | null;
  location?: string | null;
  owner?: string | null;
  price?: number | null;
  propertyFeatures?: string | null;
  propertyType?: "Option1" | null;
  rentOrSale?: "Option1" | null;
  residentialOrCommercial?: "Option1" | null;
  title?: string | null;
};
