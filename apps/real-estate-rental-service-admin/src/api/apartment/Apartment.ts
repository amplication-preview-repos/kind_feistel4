export type Apartment = {
  available: boolean | null;
  bedrooms: number | null;
  companyOrAgent: string | null;
  createdAt: Date;
  description: string | null;
  furnishing: boolean | null;
  id: string;
  location: string | null;
  owner: string | null;
  price: number | null;
  propertyFeatures: string | null;
  propertyType?: "Option1" | null;
  rentOrSale?: "Option1" | null;
  residentialOrCommercial?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
