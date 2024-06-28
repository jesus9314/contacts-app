import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { DraftContact } from "../types";
import Error from "./Error";
import { useContactStore } from "../useContactStore";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DraftContact>();
  const { contacts, addContact, editingId, editContact } = useContactStore();

  useEffect(() => {
    if (editingId) {
      const activeContact = contacts.filter(
        (contact) => contact.id === editingId
      )[0];
      setValue("name", activeContact.name);
      setValue("phone", activeContact.phone);
      setValue("email", activeContact.email);
    }
  }, [editingId]);

  const registerContact = (data: DraftContact) => {
    if (editingId) {
      editContact({ ...data, id: editingId });
      toast.success("Contacto editado con exito!");
    } else {
      addContact(data);
      toast.success("Nuevo contacto Creado");
    }
    reset();
  };
  return (
    <form noValidate onSubmit={handleSubmit(registerContact)}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="name" value="Nombre" />
          <TextInput
            id="name"
            type="text"
            {...register("name", {
              required: "El campo Nombre es requerido",
            })}
            color={errors.name ? "failure" : ""}
            helperText={errors.name && <Error>{errors.name.message}</Error>}
          />

          <Label htmlFor="phone" value="Teléfono" />
          <TextInput
            id="phone"
            type="text"
            {...register("phone", {
              required: "El campo Teléfono es requerido",
            })}
            color={errors.phone ? "failure" : ""}
            helperText={errors.phone && <Error>{errors.phone.message}</Error>}
          />

          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
            color={errors.email ? "failure" : ""}
            helperText={errors.email && <Error>{errors.email.message}</Error>}
          />
        </div>
        <div className="w-full">
          <Button type="submit">Guardar Contacto</Button>
        </div>
      </div>
    </form>
  );
}
