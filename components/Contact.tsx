import styles from "../styles/ContactStyles.module.css";
import Button from "./Button";

export default function Contact(): JSX.Element {
  return (
    <div className={styles.contactWrapper}>
      <h1>Contact</h1>
      {/* <p>I would love to discuss the project or role you are looking to </p> */}
      <form method="post">
        <label htmlFor="name">Name/Company Name:</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />

        <fieldset>
          <legend>How can I help you?</legend>

          <div className={styles.radioGroup}>
            <div>
              <input type="radio" name="contact" value="I need a website" />
              <label htmlFor="contact">I need a website</label>
            </div>

            <div>
              <input
                type="radio"
                name="contact"
                value="My company is (or I am) hiring a developer"
              />
              <label htmlFor="contact">
                My company is (or I am) hiring developers
              </label>
            </div>

            <div>
              <input type="radio" name="contact" value="I am a designer" />
              <label htmlFor="contact">
                I am a designer looking to collaborate
              </label>
            </div>

            <div>
              <input type="radio" name="contact" value="Other" />
              <label htmlFor="contact">Other (please explain below)</label>
            </div>
          </div>
        </fieldset>

        <label htmlFor="description">Project or Role Description:</label>
        <textarea name="description" cols={30} rows={10}></textarea>
        <Button
          buttonText={"Submit Form"}
          variant={"primary"}
          onClick={(e) => {
            e.preventDefault();
            console.log("form submitted");
          }}
        />
      </form>
    </div>
  );
}
