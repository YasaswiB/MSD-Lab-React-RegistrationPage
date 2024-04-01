const UserDetails = ({ onChange, firstName, lastName, dob }) => {
  return (
    <div>
      <h2>User Details</h2>
      <div>
      <label>
        First Name:
        <input type="text" name="firstName" value={firstName} onChange={onChange} />
      </label>
      </div>
      <div>
      <label>
        Last Name:
        <input type="text" name="lastName" value={lastName} onChange={onChange} />
      </label>
      </div>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={dob} onChange={onChange} />
      </label>
    </div>
  );
};

export default UserDetails;
