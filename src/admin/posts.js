import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  DeleteWithConfirmButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  ReferenceArrayField,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleFormIterator,
  DateInput,
  ArrayField,
  SimpleList,
  SelectField,
  SingleFieldList,
  ChipField,
  Resource,
  EmailField,
} from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
