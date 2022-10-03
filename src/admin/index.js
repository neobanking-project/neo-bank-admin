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
  apiKey: "AIzaSyB-yzOdcTr83J_AXFSwUF22dvFdBW3Ubpk",
  authDomain: "neo-bank-ae818.firebaseapp.com",
  projectId: "neo-bank-ae818",
  storageBucket: "neo-bank-ae818.appspot.com",
  messagingSenderId: "248597643386",
  appId: "1:248597643386:web:dbb0782c0b7d1d82cbfbc3",
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
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
