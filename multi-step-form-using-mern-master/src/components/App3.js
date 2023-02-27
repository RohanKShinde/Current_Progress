import "./App.css";
// import Form from "./components/Form";
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';




function App3() {
  const [formFields, setFormFields] = useState([
    { name: '',email: '',linkid: '', twitterid: '',facebookid: '' },
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
      name: '',
      email: '',
      linkid: '',
      twitterid: '',
      facebookid: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (

    <div className="App3">
    
      {/* <Form > */}
  
      <Form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='email'
                placeholder='E Mail'
                onChange={event => handleFormChange(event, index)}
                value={form.email}
              />
              <input
                name='linkid'
                placeholder='LinkedIn Id'
                onChange={event => handleFormChange(event, index)}
                value={form.linkid}
              />
              <input
                name='twitterid'
                placeholder='Twitter Id'
                onChange={event => handleFormChange(event, index)}
                value={form.twitterid}
              />
              <input
                name='facebookid'
                placeholder='Facebook Id'
                onChange={event => handleFormChange(event, index)}
                value={form.facebookid}
              />
              <br />
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

export default App3;