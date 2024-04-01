import React, { useState } from 'react';
import UserDetails from './UserDetails';
import ContactInfo from './ContactInfo';
import Address from './Address';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    linkedin: '',
    dno: '',
    streetNo: '',
    streetName: '',
    streetName2: '',
    city: '',
    state: '',
    country: '',
    pinCode: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      linkedin: '',
      dno: '',
      streetNo: '',
      streetName: '',
      streetName2: '',
      city: '',
      state: '',
      country: '',
      pinCode: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserDetails {...formData} onChange={handleChange} />
      <ContactInfo {...formData} onChange={handleChange} />
      <Address {...formData} onChange={handleChange} />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default RegistrationForm;
