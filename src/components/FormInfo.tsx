import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormInfo() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // Definimos las opciones para el selector dinámico
  const formTypes = [
    { value: "registerRace", label: "Registrar Carrera" },
    { value: "teamSignUp", label: "Inscribir a un equipo" },
    { value: "shareInfo", label: "Compartir información" },
    { value: "addComments", label: "Comentarios adicionales" },
  ];

  // Definimos el esquema de validación con Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    formType: Yup.string().required("Por favor selecciona una opción"),
  });

  return (
    <>
      <button className="btn" onClick={() => modalRef.current?.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => modalRef.current?.close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-xl italic">Hola!</h3>
          <p className="py-4">
            ¿Te gustaría compartir información, registrar una carrera o
            inscribir a tu equipo? Completa el siguiente formulario para que tu
            información sea publicada.
          </p>
          <div className="w-full max-w-xs">
            <Formik
              initialValues={{ name: "", formType: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  modalRef.current?.close();
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ingresa tu nombre"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="formType"
                    >
                      Tipo de Información
                    </label>
                    <Field
                      as="select"
                      name="formType"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option
                        value=""
                        label="Selecciona el tipo de información"
                      />
                      {formTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="formType"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Enviar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default FormInfo;
