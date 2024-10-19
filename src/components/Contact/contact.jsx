import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 10);
  };
  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className={`submit-button ${isSubmitted ? "submitted" : ""}`}
        >
          {isSubmitted ? "✔" : "Submit"}
        </button>
        <button
          type="button"
          className="return-button"
          onClick={() => (window.location.href = "/")}
        >
          Return Home
        </button>
      </form>
    </div>
  );
};

export default Contact;
