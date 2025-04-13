import React from "react";

export default function Contact() {
  const handleFormSubmit = (formData) => {
    console.log("Form Submitted", Object.fromEntries(formData.entries()));
  };

  return (
    <div>
      <form action={handleFormSubmit}>
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Name"
          name="username"
          value="Rana"
        />

        <input
          type="email"
          required
          autoComplete="false"
          placeholder="Enter your email"
          name="email"
        />

        <textarea
          name="message"
          //   id=""
          //   cols="30"
          rows="10"
          placeholder="Enter your message"
          required
          autoComplete="false"
        />

        <button type="submit" value="send">
          Submit
        </button>
      </form>
    </div>
  );
}
