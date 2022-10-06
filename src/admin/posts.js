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
import { useMediaQuery } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// export const UserList = (props) => (
//   <List {...props}>
//     <Datagrid rowClick="show" bulkActionButtons={false}>
//       <TextField source="id" />
//       <TextField source="name" />
//       <TextField source="username" />
//       <EmailField source="email" />
//       <TextField source="address.street" />
//       <TextField source="phone" />
//       <TextField source="website" />
//       <TextField source="company.name" />
//     </Datagrid>
//   </List>
// );

export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <>
          <SimpleList
            linkType="show"
            primaryText={(record) => record.name}
            tertiaryText={(record) => `Username: ${record.username}`}
            secondaryText={(record) => `Email: ${record.email}`}
          />
        </>
      ) : (
        <Datagrid rowClick="show" bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" /> <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
