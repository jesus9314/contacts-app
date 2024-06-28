export type Contact = {
  id: string;
  name: string;
  phone: number;
  email: string;
};

export type DraftContact = Omit<Contact, "id">;
