import React from 'react'
import FormInput from './FormInput'
import './Form.css'
import { useState } from 'react'

const FormAddSyllabus = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Title",
      type: "text",
      errorMessage:
        "Title should be 3-16 characters and shouldn't include any special character!",
      label: "Title",
      pattern: "^[A-Za-z0-9]{3,50}$",
      required: true,
    },
    {
      id: 2,
      name: "Description",
      type: "text",
      errorMessage:
        "Syllabus Description!",
      label: "Description",
      pattern: "^[A-Za-z0-9]{3,200}$",
      required: true,
      placeholder:"Gain a solid understanding of the core principles of digital marketing, including SEO, social media marketing, email marketing, and content strategy."
    },

   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Create class</h2>
        <h1>Add Syllabus</h1>
<div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
          
        ))}
        <button className='buttonAddMore'>+ Add More</button>
        </div>
        <button type='' className='buttonNext'>Next</button>
      </form>
    </div>
  );
  
}

export default FormAddSyllabus;