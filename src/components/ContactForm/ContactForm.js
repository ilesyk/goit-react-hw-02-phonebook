import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const quizSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan'
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Phone number must be digits with dashes. Example: 123-45-67'
    )
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="Name">Name
        <Field
          id="name"
          name="name"
          type="text"
          placeholder="Add contact name"
        />
        <ErrorMessage name="name" component="div" />
</label>
        <label htmlFor="number">Number
        <Field
          id="number"
          name="number"
          type="text"
          placeholder="Example: 123-45-67"
                />
                <ErrorMessage name="number" component="div" />
</label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </div>
);
