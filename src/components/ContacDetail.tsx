import { Button } from "flowbite-react";
import { Contact } from "../types";
import { useContactStore } from "../useContactStore";
import { toast } from "react-toastify";

export default function ContacDetail({ contact }: { contact: Contact }) {
  const { deleteContact, getContactById } = useContactStore();

  const handleClick = () => {
    deleteContact(contact.id);
    toast.error("Contacto Eliminado exitosamente");
  };
  return (
    <section className="bg-white p-4 rounded-md shadow-md flex flex-col">
      <p className="font-black ">
        ID: <span className="font-normal">{contact.id}</span>
      </p>
      <p className="font-black ">
        Nombre: <span className="font-normal">{contact.name}</span>
      </p>
      <p className="font-black ">
        Teléfono: <span className="font-normal">{contact.phone}</span>
      </p>
      <p className="font-black ">
        Email: <span className="font-normal">{contact.email}</span>
      </p>
      <div className="flex justify-between mt-4">
        <Button onClick={() => getContactById(contact.id)} color="warning">
          Editar
        </Button>
        <Button onClick={handleClick} color="failure">
          Eliminar
        </Button>
      </div>
    </section>
  );
}
