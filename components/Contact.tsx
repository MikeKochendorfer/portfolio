import React, { useState } from "react";
import styles from "../styles/ContactStyles.module.css";
import Button from "./Button";

export default function Contact(): JSX.Element {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    purpose: "",
    description: "",
  });

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  async function handleSubmit() {
    console.log("Hold on...sending that email...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    console.log(res.status);
  }

  return (
    <div className={styles.contactWrapper}>
      <h1>Contact</h1>
      <form method="post">
        <label htmlFor="name">Name/Company Name:</label>
        <input type="text" name="name" onChange={handleInput} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleInput} />

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

        <label htmlFor="description">Project or Role Description:</label>
        <textarea
          name="description"
          cols={30}
          rows={10}
          onChange={handleInput}
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
