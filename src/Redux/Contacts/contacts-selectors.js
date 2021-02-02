import { createSelector } from "@reduxjs/toolkit";

export const getAllContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getAllContactsLength = (state) => {
  const items = getAllContacts(state);
  return items.length;
};

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter((item) => {
      return item.name.toLowerCase().includes(normalizedFilter);
    });
  }
);
