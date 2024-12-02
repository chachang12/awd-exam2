import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface Preferences {
  newsletter: boolean;
  notifications: boolean;
}

interface Address {
  street: string;
  city: string;
  zip: string;
}

interface FormData {
  user: User;
  preferences: Preferences;
  address: Address;
}

const ComplexStateUnifiedControlledForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user: { name: '', email: '' },
    preferences: { newsletter: false, notifications: false },
    address: { street: '', city: '', zip: '' },
  });

  // Handle input change for user information
  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      user: { ...prevState.user, [name]: value },
    }));
  };

  // Handle input change for preferences
  const handlePreferencesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      preferences: { ...prevState.preferences, [name]: checked },
    }));
  };

  // Handle input change for address
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      address: { ...prevState.address, [name]: value },
    }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { user, address } = formData;
    if (user.name.trim() === '' || user.email.trim() === '' || address.street.trim() === '' || address.city.trim() === '' || address.zip.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Complex State Unified Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <h2>User Information</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.user.name}
            onChange={handleUserChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.user.email}
            onChange={handleUserChange}
          />
        </div>

        <h2>Preferences</h2>
        <div>
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.preferences.newsletter}
              onChange={handlePreferencesChange}
            />
            Subscribe to newsletter
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={formData.preferences.notifications}
              onChange={handlePreferencesChange}
            />
            Receive notifications
          </label>
        </div>

        <h2>Address</h2>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="zip">ZIP Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.address.zip}
            onChange={handleAddressChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplexStateUnifiedControlledForm;