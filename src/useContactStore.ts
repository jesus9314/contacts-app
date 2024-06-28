import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Contact, DraftContact } from "./types";
import { v4 as uuidv4 } from "uuid";

type ContactState = {
  contacts: Contact[];
  modal: boolean;
  editingId: Contact["id"];
  openModal: () => void;
  closeModal: () => void;
  addContact: (data: DraftContact) => void;
  deleteContact: (id: Contact["id"]) => void;
  getContactById: (id: Contact["id"]) => void;
  editContact: (data: Contact) => void;
};

const createContact = (contact: DraftContact): Contact => {
  return {
    ...contact,
    id: uuidv4(),
  };
};

export const useContactStore = create<ContactState>()(
  devtools(
    persist(
      (set) => ({
        contacts: [],
        modal: false,
        editingId: "",
        openModal: () => {
          set(() => ({
            modal: true,
          }));
        },
        closeModal: () => {
          set(() => ({
            modal: false,
          }));
        },
        addContact: (data) => {
          const newContact = createContact(data);
          set((state) => ({
            contacts: [...state.contacts, newContact],
            modal: false,
          }));
        },
        deleteContact: (id) => {
          set((state) => ({
            contacts: state.contacts.filter((contact) => contact.id !== id),
          }));
        },
        getContactById: (id) => {
          set(() => ({
            editingId: id,
            modal: true,
          }));
        },
        editContact: (data) => {
          set((state) => ({
            contacts: state.contacts.map((contact) =>
              contact.id === data.id ? data : contact
            ),
            modal: false,
            editingId: "",
          }));
        },
      }),
      {
        name: "contact-store",
      }
    )
  )
);
