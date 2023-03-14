import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    border: none;
    outline: none;
    background-color: var(--deep-dark);
    margin-top: 1rem;
    border-radius: 8px;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    padding: 1rem 4rem;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 2rem;
    display: inline-block;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <FormStyles>
      <div className="form-group">
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email
          <input
            type="text"
            id="Email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your Message
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Send</button>
    </FormStyles>
  );
}
