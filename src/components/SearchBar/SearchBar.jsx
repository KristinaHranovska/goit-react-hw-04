import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.search);
    actions.resetForm();
    if (values.search.trim() === "") {
      toast.error("The search field cannot be empty!");
      return;
    }
  };

  return (
    <>
      <header>
        <Toaster position="top-center" reverseOrder={false} />
        <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
          <Form>
            <Field
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </>
  );
};

export default SearchBar;
