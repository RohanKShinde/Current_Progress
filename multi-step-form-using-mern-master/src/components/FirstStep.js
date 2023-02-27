import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import App from "./App";
import { useState } from 'react';

const FirstStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      cname: user.cname,
      sname: user.sname,
      email: user.email,
      region: user.sname,
      country: user.country
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    
    props.history.push('/second');
  };
 
  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}> 
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        {/* <Form.Group controlId="customer_name">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            type="text"
            name="customer_name"
            placeholder="Enter the Customers name"
            autoComplete="off"
            ref={register({
              required: 'Customer name is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'Customer name should contain only characters.'
              }
            })}
            className={`${errors.customer_name ? 'input-error' : ''}`}
          />
          {errors.customer_name && (
            <p className="errorMsg">{errors.customer_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="stakeholder_name">
          <Form.Label>Stakeholder Names</Form.Label>
          <Form.Control
            type="text"
            name="stakeholder_name"
            placeholder="Enter Stakeholders names"
            autoComplete="off"
            ref={register({
              required: 'Stakeholder name is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'Stakeholder name should contain only characters.'
              }
            })}
            className={`${errors.stakeholder_name ? 'input-error' : ''}`}
          />
          {errors.stakeholder_name && (
            <p className="errorMsg">{errors.stakeholder_name.message}</p>
          )}
        </Form.Group> */}

        <Form.Group>
          <App />
        </Form.Group>



        {/* <Form.Group controlId="url">
          <Form.Label>Customer URL :</Form.Label>
          <Form.Control
            type="text"
            name="url"
            placeholder="Enter url"
            autoComplete="off"
            ref={register({
              required: 'url is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'url should contain only characters.'
              }
            })}
            className={`${errors.url ? 'input-error' : ''}`}
          />
          {errors.url && (
            <p className="errorMsg">{errors.url.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="region">
          <Form.Label>Region of Operation</Form.Label>
          <Form.Control
            type="text"
            name="region"
            placeholder="Enter the Region"
            autoComplete="off"
            ref={register({
              required: 'Region is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'Region should contain only characters.'
              }
            })}
            className={`${errors.region ? 'input-error' : ''}`}
          />
          {errors.region && (
            <p className="errorMsg">{errors.region.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="country_name">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country_name"
            placeholder="Enter the Country"
            autoComplete="off"
            ref={register({
              required: 'Country is required.',
              pattern: {
                // value: /^[a-zA-Z]+$/,
                message: 'Country name should contain only characters.'
              }
            })}
            className={`${errors.country_name ? 'input-error' : ''}`}
          />
          {errors.country_name && (
            <p className="errorMsg">{errors.country_name.message}</p>
          )}
        </Form.Group> */}
      






        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default FirstStep;
