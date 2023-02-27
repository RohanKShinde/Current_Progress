import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const departments = [
  { value: "Aerospace industry", label: "Aerospace industry" },
  { value: "Agricultural industry", label: "Agricultural industry" },
  { value: "Computer industry", label: "Computer industry" },
  { value: "Construction industry", label: "Construction industry" }
];

// const {
//   control,
//   handleSubmit,
//   formState: { errors }
// } = useForm();

const SecondStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      user_email: user.user_email,
      user_password: user.user_password

    }
  });

  const {
    control
  } = useForm();


  const onSubmit = (data) => {
    props.updateUser(data);
    props.history.push('/third');
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="user_email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.user_email ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>
        



        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter First Name"
            autoComplete="on"
            ref={register({
              required: 'First Name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First Name should contain only characters.'
              }
            })}
            className={`${errors.first_name ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter Last Name"
            autoComplete="on"
            ref={register({
              required: 'Last Name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last Name should contain only characters.'
              }
            })}
            className={`${errors.last_name ? 'input-error' : ''}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="org_name">
          <Form.Label>Organisation Name</Form.Label>
          <Form.Control
            type="text"
            name="org_name"
            placeholder="Enter Organisation Name"
            autoComplete="on"
            ref={register({
              required: 'Organisation Name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Organisation Name should contain only characters.'
              }
            })}
            className={`${errors.org_name ? 'input-error' : ''}`}
          />
          {errors.org_name && (
            <p className="errorMsg">{errors.org_name.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="org_url">
          <Form.Label>Organisation Website URL :</Form.Label>
          <Form.Control
            type="text"
            name="org_url"
            placeholder="Enter url"
            autoComplete="on"
            ref={register({
              required: 'url is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'url should contain only characters.'
              }
            })}
            className={`${errors.org_url ? 'input-error' : ''}`}
          />
          {errors.org_url && (
            <p className="errorMsg">{errors.org_url.message}</p>
          )}
        </Form.Group>

      
        {/* <Form.Group controlId="ind_name">        
          <Form.Label>Select Industry of Interest</Form.Label>
          <Form.Control
            name="ind_name"
            placeholder="Enter Industries"
            
            // control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} isMulti options={departments} />
            )}
          />
          {errors.department && (
            <p className="errorMsg">This is a required field.</p>
          )}
        </Form.Group>   */}

        

        {/* <div class="form-group">
    <label for="exampleFormControlSelect1">Select the Industries you sell to</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option>Select</option>
      <option></option>
      <option></option>
      <option>Automotive industry</option>
      <option>Basic metal industry</option>
      <option>Chemical industry</option>
      <option></option>
      <option></option>
      <option>Creative industry</option>
      <option>Cultural industry</option>
      <option>Defense industry</option>
      <option>Education industry</option>
      <option>Electric power industry</option>
      <option>Electronics industry</option>
      <option>Energy industry</option>
      <option>Engineering industry</option>
      <option>Entertainment industry</option>
      <option>Farming industry</option>
      <option>Fashion industry</option>
      <option>Film industry</option>
      <option>Financial services industry</option>
      <option>Fishing industry</option>
      <option>Food industry</option>
      <option>Forestry industry</option>
      <option>Gambling industry</option>
      <option>Gas industry</option>
      <option>Green industry</option>
      <option>Health services industry</option>
      <option>Hospitality industry</option>
      <option>Hotels industry</option>
      <option>Industrial robot industry</option>
      <option>Information industry</option>
      <option>Information technology industry</option>
      <option>Infrastructure industry</option>
      <option>Insurance industry</option>
      <option>Leisure industry</option>
      <option>Low technology industry</option>
      <option>Manufacturing industry</option>
      <option>Meat industry</option>
      <option>Media industry</option>
      <option>Merchandising industry</option>
      <option>Mining industry</option>
      <option>Music industry</option>
      <option>News media industry</option>
      <option>Oil and gas industry</option>
      <option>Pharmaceutical industry</option>
      <option>Professional industry</option>
      <option>Publishing industry</option>
      <option>Pulp and paper industry</option>
      <option>Railway industry</option>
      <option>Real estate industry</option>
      <option>Retail industry</option>
      <option>Scientific industry</option>
      <option>Services industry</option>
      <option>Sex industry</option>
      <option>Software industry</option>
      <option>Space industry</option>
      <option>Sport industry</option>
      <option>Steel industry</option>
      <option>Technology industry</option>
      <option>Telecommunications industry</option>
      <option>Textile industry</option>
      <option>Tobacco industry</option>
      <option>Transport industry</option>
      <option>Utility industry</option>
      <option>Video game industry</option>
      <option>Water industry</option>
      <option>Wholesale industry</option>
      <option>Wood industry</option>
      
    </select>
  </div> */}
 

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password"
            placeholder="Choose a password"
            autoComplete="off"
            ref={register({
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should have at-least 6 characters.'
              }
            })}
            className={`${errors.user_password ? 'input-error' : ''}`}
          />
          {errors.user_password && (
            <p className="errorMsg">{errors.user_password.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="deciding_roles">
          <Form.Label>Whom do you sell?</Form.Label>
          <Form.Control
            type="text"
            name="deciding_roles"
            placeholder="Business Roles that take purchase decisions."
            autoComplete="off"
            ref={register({
              required: 'This field is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'Should contain only characters.'
              }
            })}
            className={`${errors.deciding_roles ? 'input-error' : ''}`}
          />
          {errors.deciding_roles && (
            <p className="errorMsg">{errors.deciding_roles.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="roles">
          <Form.Label>Whom do you have to convince of your product or service's value?</Form.Label>
          <Form.Control
            type="text"
            name="roles"
            placeholder="Enter the Business roles "
            autoComplete="off"
            ref={register({
              required: 'This Field is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'Stakeholder name should contain only characters.'
              }
            })}
            className={`${errors.roles ? 'input-error' : ''}`}
          />
          {errors.roles && (
            <p className="errorMsg">{errors.roles.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="news_tags">
          <Form.Label>Please list Tags/Keywords that make a news important for you.
</Form.Label>
          <Form.Control
            type="text"
            name="news_tags"
            placeholder="Enter Tags/Keywords names"
            autoComplete="off"
            ref={register({
              required: 'Tags/Keywords are required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'Tags/Keywords should contain only characters.'
              }
            })}
            className={`${errors.news_tags ? 'input-error' : ''}`}
          />
          {errors.new_tags && (
            <p className="errorMsg">{errors.news_tags.message}</p>
          )}
        </Form.Group>

        {/* <div className="form-control">
        <Form.Label>Select Industry of Interest</Form.Label>
          <Controller
            name="ind_name"
            type="select"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} isMulti options={departments} />
            )}
            ref={register({
            })}
          />
          {errors.department && (
            <p className="errorMsg">This is a required field.</p>
          )}
        </div> */}


<br></br>


        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default SecondStep;
