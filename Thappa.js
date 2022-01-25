import React, { useState } from 'react';
const Thappa = () => {

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    emailid: "",
    password: "",
    mobileno: "",
  });
  const [records, setRecord] = useState([]);

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
    console.log(records);
    setRecord([...records, newRecord])
    console.log(records);

    setUserRegistration({ username: "", emailid: "",password:"", mobileno: "" });   //to remove words after onclick Registration button
  }
  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type="text" autoComplete="off"
            value={userRegistration.username}
            onChange={handleinput}
            name='username' id='username' />
        </div>
        <div>
          <label htmlFor='emailid'>emailid</label>
          <input type="text" autoComplete="off" //for not showing previous data in input box
            value={userRegistration.emailid}
            onChange={handleinput}
            name='emailid' id='emailid' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="text" autoComplete="off"
            value={userRegistration.password}
            onChange={handleinput}
            name='password' id='password' />
        </div>
        <div>
          <label htmlFor='mobileno'>mobileno</label>
          <input type="text" autoComplete="off"
            value={userRegistration.mobileno}
            onChange={handleinput}
            name='mobileno' id='mobileno' />
        </div>
        <button type='submit'>Registration</button>
      </form>
      <div>
        {
          records.map((currentelement) => {
            return (
              <div className='showDataStyle' key={currentelement.id}>
                <p>{currentelement.username}</p>
                <p>{currentelement.emailid}</p>
                <p>{currentelement.password}</p>
                <p>{currentelement.mobileno}</p>

              </div>
            )
          })
        }
      </div>
    </div>
  );
}


export default Thappa;
