import "./App.css";
// import Form from "./components/Form";
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';




function App() {
  const [formFields, setFormFields] = useState([
    { cname: '',sname: '',email: '',countryc: '', region: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = async (e) => {
    e.preventDefault();
    const { cname ,sname ,email ,countryc ,region } = formFields;

    const res = await fetch("/register",{
      method :"POST",
      headers :{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        cname ,sname ,email ,countryc ,region
      })
    })
    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");


    }
    else{
      window.alert("Successful Registration");
      console.log("Successful Registration");

    }


    console.log(formFields)
  }

  const addFields = (e) => {
    e.preventDefault();
    let object = {
      cname: '',
      sname: '',
      email: '',
      countryc: '',
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

    <div className="App">
    
      {/* <Form > */}
  
      <Form method="POST" onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='cname'
                placeholder='Customer Name'
                onChange={event => handleFormChange(event, index)}
                value={form.cname}
              />
              <input
                name='sname'
                placeholder='Stakeholder Names'
                onChange={event => handleFormChange(event, index)}
                value={form.sname}
              />
              <input
                name='email'
                placeholder='E Mail'
                onChange={event => handleFormChange(event, index)}
                value={form.email}
              />
              <input
                name='countryc'
                placeholder='Country of Operation'
                onChange={event => handleFormChange(event, index)}
                value={form.countryc}
              />
              <input
                name='region'
                placeholder='Region of Operation'
                onChange={event => handleFormChange(event, index)}
                value={form.region}
              /><br></br>
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

export default App;