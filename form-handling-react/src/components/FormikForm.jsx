import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("User registered (Formik):", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2>User Registration (Formik)</h2>

        <div>
          <Field
            type="text"
            name="username"
            placeholder="Username"
          />
          <ErrorMessage
            name="username"
            component="p"
            style={{ color: "red" }}
          />
        </div>

        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="p"
            style={{ color: "red" }}
          />
        </div>

        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="p"
            style={{ color: "red" }}
          />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
