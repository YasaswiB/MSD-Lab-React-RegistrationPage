import React from 'react';

const ContactInfo = ({ onChange, email, phone, linkedin }) => {
  return (
    <div>
      <h2>Info</h2>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <br>
      </br>
      <label>
        Phone:
        <input type="tel" name="phone" value={phone} onChange={onChange} />
      </label>
      <br></br>
      <label>
        Linkedin Address:
        <input type="text" name="linkedin" value={linkedin} onChange={onChange} />
      </label>
    </div>
  );
};

export default ContactInfo;
