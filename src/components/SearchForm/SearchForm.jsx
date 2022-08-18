import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
  searchMovie: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long')
    .required('Required'),
});

const SearchForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ searchMovie: '' }}
      onSubmit={onSubmit}
      validatorSchema={searchSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="searchMovie">
            {errors.searchMovie && touched.searchMovie ? (
              <div>{errors.searchMovie}</div>
            ) : null}
          </Field>
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

// const SearchForm = ({ onSubmit }) => {
//   const [value, setValue] = useState('');

//   const handleChangeForm = e => {
//     setValue(e.currentTarget.value);
//   };

//   const handleSubmitForm = e => {
//     e.preventDefault();
//     onSubmit(value);
//   };
//   return (
//     <form onSubmit={handleSubmitForm}>
//       <label>
//         <input type="text" onChange={handleChangeForm} value={value} />
//         <button type="submit">Search</button>
//       </label>
//     </form>
//   );
// };

export default SearchForm;
