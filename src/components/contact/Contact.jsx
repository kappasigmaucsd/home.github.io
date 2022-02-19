import React from "react";

import { StyledContact } from "./Contact.styled";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xaylrlaj");

  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }

  return (
    <StyledContact>
      <h2>Reach out</h2>

      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name *"
          required
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email *"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />

        <input id="subject" type="text" name="subject" placeholder="Subject" />
        <br />

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="10"
          cols="49"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button className="" type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </StyledContact>
  );
};

export default Contact;
