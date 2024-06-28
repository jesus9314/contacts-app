import { useContactStore } from "../useContactStore";
import ContacDetail from "./ContacDetail";

export default function ContactsList() {
  const { contacts } = useContactStore();
  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-md space-y-2 h-full">
      {contacts ? (
        contacts.map((contact) => <ContacDetail key={contact.id} contact={contact} />)
      ) : (
        <p>No hay contactos aún</p>
      )}
    </div>
  );
}
