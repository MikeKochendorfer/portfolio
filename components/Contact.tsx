import React, { useEffect, useState } from "react";
import styles from "../styles/ContactStyles.module.css";
import Button from "./Button";

export default function Contact(): JSX.Element {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    purpose: "",
    description: "",
  });

  const [descriptionLength, setDescriptionLength] = useState(0);
  useEffect(() => {
    setDescriptionLength(inputs.description.length);
  }, [inputs]);

  const fieldsEmpty =
    inputs.name.length < 1 || inputs.email.length < 1 || descriptionLength < 1;

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  async function handleSubmit() {
    if (fieldsEmpty) {
      window.alert("Please fill out all fields before submitting the form.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    if (res.status === 200) {
      window.alert(
        "Your submission was successfull. Thank you for your interest in working together. Please give me a few days to get back to you."
      );
    } else {
      window.alert(
        "Something went wrong with your form submission. Please review your details or try again later."
      );
    }
  }

  return (
    <div className={styles.contactWrapper}>
      <h1>Contact</h1>
      <form method="post">
        <label htmlFor="name">Name/Company Name:</label>
        <input
          type="text"
          name="name"
          required
          maxLength={100}
          onChange={handleInput}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          required
          maxLength={100}
          onChange={handleInput}
        />

        <fieldset>
          <legend>How can I help you?</legend>

          <div className={styles.radioGroup}>
            <div>
              <input
                type="radio"
                name="purpose"
                value="I need a website"
                onChange={handleInput}
              />
              <label htmlFor="purpose">I need a website</label>
            </div>

            <div>
              <input
                type="radio"
                name="purpose"
                value="My company is (or I am) hiring a developer"
                onChange={handleInput}
              />
              <label htmlFor="purpose">
                My company is (or I am) hiring developers
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="purpose"
                value="I am a designer"
                onChange={handleInput}
              />
              <label htmlFor="purpose">
                I am a designer looking to collaborate
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="purpose"
                value="Other"
                onChange={handleInput}
              />
              <label htmlFor="purpose">Other (please explain below)</label>
            </div>
          </div>
        </fieldset>

        <label htmlFor="description">
          Project or Role Description: ({descriptionLength}/1000)
        </label>
        <textarea
          name="description"
          cols={30}
          rows={10}
          onChange={handleInput}
          required
          maxLength={1000}
        ></textarea>
        <Button
          buttonText={"Submit Form"}
          variant={"primary"}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
    </div>
  );
}
