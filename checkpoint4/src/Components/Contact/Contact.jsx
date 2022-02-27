import './Contact.css';
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0nkucvi",
      "template_fyawrff",
      e.target,
      "user_2q5ee1RYRTjglVbkWn7xs"
    );
    alert("Thank you, for your message ! ");
    e.target.reset();
  };

  return (
    <div className="divContact">
      <form onSubmit={sendEmail}>
        <div className="divInput">
          <input
            type="text"
            className="texte"
            placeholder="Name"
            name="subject"
            required="required"
          />
        </div>
        <div className="divInput">
          <input
            type="text"
            className="texte"
            placeholder="Subject"
            name="subject"
            required="required"
          />
        </div>
        <div className="divInput">
          <input
            type="email"
            className="texte"
            placeholder="Email"
            name="email"
            required="required"
          />
        </div>
        <div className="divMessage">
          <textarea className="message" name="message"></textarea>
        </div>
        <div className="divbutton">
          <input
            type="submit"
            className="contact-button"
            value="Submit"
            required
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Contact;
