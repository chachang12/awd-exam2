import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

/**
 * ControlledForm is a React functional component that renders a controlled form with two input fields: name and email.
 * 
 * The component maintains the form data in its state using the `useState` hook. The `formData` state object contains
 * the values of the name and email fields. The `submitted` state is used to track whether the form has been submitted.
 * 
 * The `handleInputChange` function updates the `formData` state when the user types into the input fields. It uses the
 * `name` attribute of the input elements to determine which field to update.
 * 
 * The `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior,
 * checks if both fields are filled, and if so, sets the `submitted` state to true and logs the form data to the console.
 * If any field is empty, it shows an alert asking the user to fill in all fields.
 * 
 * The component conditionally renders the form or a success message based on the `submitted` state. If the form is
 * submitted successfully, it displays the submitted name and email.
 * 
 * @returns {JSX.Element} The rendered controlled form component.
 */

const ControlledForm: React.FC = () => {
    // Define the form data state
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  // Define the submitted state
  const [submitted, setSubmitted] = useState<boolean>(false);

    // Handle input change
    // Uses the name attribute of the input element to determine which field to update
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      {submitted ? (
        <div>
          <h2>Form Submitted Successfully</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ControlledForm;