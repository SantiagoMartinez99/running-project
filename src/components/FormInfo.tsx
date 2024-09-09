import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import HelpUsImg from "../assets/images/helpUsImage.png";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/features/modalSlice";
import { RootState } from "../redux/store";
import { useEffect } from "react";

function FormInfo() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useDispatch();

  const formTypes = [
    { value: "registerRace", label: "Registrar Carrera" },
    { value: "teamSignUp", label: "Inscribir a un equipo" },
    { value: "trackSignUp", label: "Registrar una pista" },
    { value: "addComments", label: "Comentarios adicionales" },
  ];

  const raceTypes = [
    { value: "road", label: "Calle" },
    { value: "trail", label: "Trail" },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    formType: Yup.string().required("Por favor selecciona una opción"),
    raceType: Yup.string()
      .nullable()
      .when("formType", {
        is: "registerRace",
        then: (schema) => schema.required("El tipo de carrera es requerido"),
        otherwise: (schema) => schema.nullable(),
      }),
    raceName: Yup.string()
      .nullable()
      .when("formType", {
        is: "registerRace",
        then: (schema) =>
          schema.required("El nombre de la carrera es requerido"),
        otherwise: (schema) => schema.nullable(),
      }),
    raceDate: Yup.date()
      .nullable()
      .when("formType", {
        is: "registerRace",
        then: (schema) => schema.required("La fecha es requerida"),
        otherwise: (schema) => schema.nullable(),
      }),
    distance: Yup.string()
      .nullable()
      .when("formType", {
        is: "registerRace",
        then: (schema) => schema.required("La distancia es requerida"),
        otherwise: (schema) => schema.nullable(),
      }),
    registerLink: Yup.string()
      .nullable()
      .when("formType", {
        is: "registerRace",
        then: (schema) =>
          schema
            .url("Debe ser un enlace válido")
            .required("El link de registro es requerido"),
        otherwise: (schema) => schema.nullable(),
      }),
    location: Yup.string()
      .nullable()
      .when("formType", {
        is: "trackSignUp",
        then: (schema) => schema.required("La dirección es requerida"),
        otherwise: (schema) => schema.nullable(),
      }),
    city: Yup.string()
      .nullable()
      .when("formType", {
        is: "trackSignUp",
        then: (schema) => schema.required("La ciudad es requerida"),
        otherwise: (schema) => schema.nullable(),
      }),
    teamName: Yup.string()
      .nullable()
      .when("formType", {
        is: "teamSignUp",
        then: (schema) => schema.required("El nombre del equipo es requerido"),
        otherwise: (schema) => schema.nullable(),
      }),
    socialLink: Yup.string()
      .nullable()
      .when("formType", {
        is: "teamSignUp",
        then: (schema) =>
          schema
            .url("Debe ser un enlace válido")
            .required("El link de red social es requerido"),
        otherwise: (schema) => schema.nullable(),
      }),
    imageFile: Yup.mixed()
      .nullable()
      .when("formType", {
        is: "teamSignUp",
        then: (schema) => schema.required("La imagen es requerida"),
        otherwise: (schema) => schema.nullable(),
      }),
    additionalComments: Yup.string()
      .nullable()
      .when("formType", {
        is: "addComments",
        then: (schema) => schema.required("Por favor ingresa tus comentarios"),
        otherwise: (schema) => schema.nullable(),
      }),
  });

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          id="myModal"
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="relative bg-white rounded-lg shadow-lg w-3/5 max-w-md p-6 max-h-sm">
            <button
              id="closeModalBtn"
              className="px-2 bg-red-500 text-white rounded-3xl hover:bg-red-600 absolute top-2 right-2 "
              onClick={() => dispatch(closeModal())}
            >
              X
            </button>
            <h2 className="text-2xl font-semibold my-2">Ayudanos a mejorar</h2>
            <p className="text-md">
              ¿Te gustaría compartir información, registrar una carrera o
              inscribir a tu equipo? Completa el siguiente formulario para que
              tu información sea publicada.
            </p>
            <div className="w-full">
              <Formik
                initialValues={{
                  name: "",
                  formType: "",
                  raceType: "",
                  raceName: "",
                  raceDate: "",
                  distance: "",
                  registerLink: "",
                  location: "",
                  city: "",
                  teamName: "",
                  socialLink: "",
                  imageFile: null,
                  additionalComments: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    dispatch(closeModal());
                  }, 400);
                }}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form className="bg-white w-full pt-4 mb-4">
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
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

                    {values.formType === "registerRace" && (
                      <>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="raceName"
                          >
                            Nombre de la Carrera
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="raceName"
                            name="raceName"
                            type="text"
                            placeholder="Ingresa el nombre de la carrera"
                          />
                          <ErrorMessage
                            name="raceName"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="raceDate"
                          >
                            Fecha de la Carrera
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="raceDate"
                            name="raceDate"
                            type="date"
                          />
                          <ErrorMessage
                            name="raceDate"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="distance"
                          >
                            Distancia
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="distance"
                            name="distance"
                            type="text"
                            placeholder="Distancia de la carrera(5K, 10K, 15K, 21K, 42K)"
                          />
                          <ErrorMessage
                            name="distance"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="registerLink"
                          >
                            Link de Registro
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="registerLink"
                            name="registerLink"
                            type="url"
                            placeholder="Enlace para registro"
                          />
                          <ErrorMessage
                            name="registerLink"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="raceType"
                          >
                            Tipo de Carrera
                          </label>
                          <Field
                            as="select"
                            name="raceType"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option
                              value=""
                              label="Selecciona el tipo de carrera"
                            />
                            {raceTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="raceType"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                      </>
                    )}

                    {values.formType === "trackSignUp" && (
                      <>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="trackName"
                          >
                            Nombre
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="trackName"
                            name="trackName"
                            type="text"
                            placeholder="Ingresa el nombre del parque o la pista"
                          />
                          <ErrorMessage
                            name="trackName"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="location"
                          >
                            Dirección
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Dirección de la pista"
                          />
                          <ErrorMessage
                            name="location"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="city"
                          >
                            Ciudad
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Ciudad de la pista"
                          />
                          <ErrorMessage
                            name="city"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                      </>
                    )}

                    {values.formType === "teamSignUp" && (
                      <>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="teamName"
                          >
                            Nombre del Equipo
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="teamName"
                            name="teamName"
                            type="text"
                            placeholder="Nombre del equipo"
                          />
                          <ErrorMessage
                            name="teamName"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="socialLink"
                          >
                            Link de Red Social
                          </label>
                          <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="socialLink"
                            name="socialLink"
                            type="url"
                            placeholder="Enlace a red social"
                          />
                          <ErrorMessage
                            name="socialLink"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="imageFile"
                          >
                            Imagen
                          </label>
                          <input
                            type="file"
                            id="imageFile"
                            name="imageFile"
                            onChange={(event) => {
                              const input =
                                event.currentTarget as HTMLInputElement;
                              setFieldValue("imageFile", input.files?.[0]);
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                          <ErrorMessage
                            name="imageFile"
                            component="div"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                      </>
                    )}

                    {values.formType === "addComments" && (
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="additionalComments"
                        >
                          Comentarios Adicionales
                        </label>
                        <Field
                          as="textarea"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="additionalComments"
                          name="additionalComments"
                          placeholder="Ingresa tus comentarios"
                        />
                        <ErrorMessage
                          name="additionalComments"
                          component="div"
                          className="text-red-500 text-xs italic"
                        />
                      </div>
                    )}

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
            </div>
          </div>
        </div>
      ) : (
        <>
          <button
            className="btn fixed text-md bottom-5 left-5 btn-primary uppercase text-white z-10 block h-16 w-60 font-thin italic"
            onClick={() => dispatch(openModal())}
          >
            <p>¿Tienes información de una carrera?</p>
            <p className="block">¡Compártela aquí!</p>
          </button>
          <img
            className=" fixed h-52 w-52 z-10 bottom-20 left-5"
            src={HelpUsImg}
          ></img>
        </>
      )}
    </>
  );
}

export default FormInfo;
