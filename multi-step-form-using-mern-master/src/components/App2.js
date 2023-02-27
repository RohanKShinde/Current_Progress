import "./App.css";
// import Form from "./components/Form";
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';




function App2() {
  const [formFields, setFormFields] = useState([
    { indname: '',global: '',country: '', region: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = (e) => {
    e.preventDefault();
    let object = {
      indname: '',
      global: '',
      country: '',
      region: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (

    <div className="App2">
    
      {/* <Form > */}
      {/* //Industries to follow */}
  
      <Form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='indname'
                placeholder='Name:'
                onChange={event => handleFormChange(event, index)}
                value={form.indname}
              />
              <input
                name='global'
                placeholder='Global'
                onChange={event => handleFormChange(event, index)}
                value={form.global}
              />
              <input
                name='country'
                placeholder='Country/s of Operation'
                onChange={event => handleFormChange(event, index)}
                value={form.country}
              />
              <input
                name='region'
                placeholder='Region of Operation'
                onChange={event => handleFormChange(event, index)}
                value={form.region}
              />
              <br></br>
              <Button onClick={() => removeFields(index)}>Remove</Button>
            </div>
          )
        })}
      </Form>
      <Button type="button" onClick={addFields}>Add More..</Button>
      <br />
      <Button onClick={submit}>Submit</Button>
      {/* </Form> */}
    </div>
  );
}

export default App2;