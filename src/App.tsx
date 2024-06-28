import { Button } from "flowbite-react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ContactModal from "./components/ContactModal";
import { useContactStore } from "./useContactStore";
import ContactsList from "./components/ContactsList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { openModal } = useContactStore();
  return (
    <>
      <header className="text-center py-10 text-5xl font-black text-slate-500">
        Contactos
      </header>
      <main className="container mx-auto">
        <div className="max-w-xl md:max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-4">
          <Button onClick={() => openModal()} className="">
            <IoMdAddCircleOutline className="text-xl" />
            Nuevo Contacto
          </Button>
          <ContactsList />
        </div>
      </main>
      <ContactModal />
      <ToastContainer />
    </>
  );
}
