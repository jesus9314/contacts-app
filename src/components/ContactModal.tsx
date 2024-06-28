import { Modal } from "flowbite-react";
import { useContactStore } from "../useContactStore";
import ContactForm from "./ContactForm";

export default function ContactModal() {
  const { modal, closeModal } = useContactStore();
  return (
    <>
      <Modal show={modal} dismissible onClose={() => closeModal()}>
        <Modal.Header>Nuevo Contacto</Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
