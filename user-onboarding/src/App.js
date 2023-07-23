import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './Components/Form';
import schema from './Validation/formSchema';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setFormErrors({ ... formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ... formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, values) => {
    validate(name, values);
    setFormValues({...formValues, [name]: values});
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} />
    {users.map(user => (
      <div key={user.id}>
        <p>{user.username}</p>
        <p>{user.createdAt}</p>
      </div>
    ))}
    </div>
  );
}

export default App;
