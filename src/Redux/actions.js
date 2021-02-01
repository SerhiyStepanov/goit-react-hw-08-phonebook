import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");

export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");

export const fetchContactRejected = createAction(
  "contacts/fetchContactRejected"
);

export const addContactRequest = createAction("contacts/addContactRequest");

export const addContactSuccess = createAction("contacts/addContactSuccess");

export const addContactRejected = createAction("contacts/addContactRejected");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactRejected = createAction(
  "contacts/deleteContactRejected"
);

export const filterContacts = createAction("contact/filter");

const actions = {
  filterContacts,
};
export default actions;
