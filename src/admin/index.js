import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import firebase from "firebase/compat/app";

import { UserList } from "./posts";

const config = {
  apiKey: "AIzaSyCseLPq4LHT-7yAZY2Q04oYrvL4QIbw7cI",
  authDomain: "neobank-86c46.firebaseapp.com",
  projectId: "neobank-86c46",
  storageBucket: "neobank-86c46.appspot.com",
  messagingSenderId: "842821057138",
  appId: "1:842821057138:web:57c64b9697a6bda59360eb",
  measurementId: "G-JKVY9Z4LTF",
};
const options = {
  logging: true,
};
const firebaseApp = firebase.initializeApp(config);

const authProvider = FirebaseAuthProvider(config, options);
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// const dataProvider = FirebaseDataProvider(config, {
//   logging: true,
//   app: firebaseApp,
//   persistence: "local",
//   disableMeta: true,
//   dontAddIdFieldToDoc: true,
//   lazyLoading: {
//     enabled: true,
//   },
//   firestoreCostsLogger: {
//     enabled: true,
//   },
// });

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} show={ShowGuesser} />
    <Resource name="posts" list={ListGuesser} show={ShowGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
