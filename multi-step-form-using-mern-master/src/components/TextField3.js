import { Component } from "react";
// import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
// import { Form, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

class TextField3 extends Component {
  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.props.onChange({
      ...this.props.value,
      [name]: value
    });
    
  };

  render() {
    
    const { value: user } = this.props;
    return (
      <>
        <input
          className="form-control"
          name="name"
          value={user.cname}
          onChange={this.handleChange}
          placeholder="Please Enter Interested Person to follow"
          type="text"
        />

<br></br>

{/* <Form.Group controlId="stakeholder_name">
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
        </Form.Group> */ }

        <input
          className="form-control"
          name="LinkedIn"
          value={user.lid}
          onChange={this.handleChange}
          placeholder="LinkedIn ID"
          type="text"
        />
        <br></br>
        <input
          className="form-control"
          name="GoogleId"
          value={user.gid}
          onChange={this.handleChange}
          placeholder="Google Id"
          type="text"
        />

      </>
      
    );
  }
}

export default TextField3;
