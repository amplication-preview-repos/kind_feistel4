import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const ApartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Available" source="available" />
        <TextField label="Bedrooms" source="bedrooms" />
        <TextField label="CompanyOrAgent" source="companyOrAgent" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <BooleanField label="Furnishing" source="furnishing" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Owner" source="owner" />
        <TextField label="Price" source="price" />
        <TextField label="PropertyFeatures" source="propertyFeatures" />
        <TextField label="PropertyType" source="propertyType" />
        <TextField label="RentOrSale" source="rentOrSale" />
        <TextField
          label="ResidentialOrCommercial"
          source="residentialOrCommercial"
        />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
