import React from 'react';

import styled from '@emotion/styled';

//this form works only Netlify

const Form: React.FCX = ({ className }) => (
  <form
    className={className}
    name='contact'
    method='POST'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
  >
    <input type='hidden' name='form-name' value='contact' />
    <input type='hidden' name='bot-field' />
    <label>
      name<abbr title='required'>*</abbr>
      <input
        type='text'
        className='form-control'
        name='name'
        placeholder='your name'
        maxLength={30}
        minLength={2}
        required
        autoComplete='name'
      />
    </label>

    <label>
      mail<abbr title='required'>*</abbr>
      <input
        type='email'
        name='email'
        placeholder='your e-mail'
        pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        required
        autoComplete='email'
      />
    </label>

    <label>
      <p>message</p>
      <abbr title='required'></abbr>
      <textarea name='content' rows={8} required />
    </label>

    <button type='submit'>submit</button>
  </form>
);

export const StyledForm = styled(Form)`
  position: relative;

  abbr {
    text-decoration: none;
  }

  label {
    width: 100%;
    max-width: 300px;
    display: block;
    padding: 1rem 0;
  }

  input[type='text'],
  input[type='email'] {
    color: #ffffff;
    width: 100%;
    padding: 0.3em;
    border: none;
    border-bottom: 1px solid #fff;
    transition: border 0.15s;
    :focus {
      border-bottom: 1px solid #ffffff55;
      outline: none;
    }
    :hover {
      border-bottom: 1px solid #ffffff95;
      outline: none;
    }
  }

  textarea {
    width: 100%;
    color: #ffffff;
    border: 1px solid #ffffff;
    transition: border 0.15s;
    margin-top: 1rem;
    :focus {
      border: 1px solid #ffffff55;
      outline: none;
    }
    :hover {
      border: 1px solid #ffffff95;
    }
  }

  button {
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: opacity 0.15s;

    :hover {
      opacity: 0.6;
    }
  }
`;

export default StyledForm;
