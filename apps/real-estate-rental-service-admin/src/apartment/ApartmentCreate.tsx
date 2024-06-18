import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const ApartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Available" source="available" />
        <NumberInput step={1} label="Bedrooms" source="bedrooms" />
        <TextInput label="CompanyOrAgent" source="companyOrAgent" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="Furnishing" source="furnishing" />
        <TextInput label="Location" source="location" />
        <TextInput label="Owner" source="owner" />
        <NumberInput label="Price" source="price" />
        <TextInput
          label="PropertyFeatures"
          multiline
          source="propertyFeatures"
        />
        <SelectInput
          source="propertyType"
          label="PropertyType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="rentOrSale"
          label="RentOrSale"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="residentialOrCommercial"
          label="ResidentialOrCommercial"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
