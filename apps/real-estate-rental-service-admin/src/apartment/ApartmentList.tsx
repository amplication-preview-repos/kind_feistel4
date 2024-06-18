import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ApartmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Apartments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
