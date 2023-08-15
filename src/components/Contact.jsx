import "../styles/Contact.css";
import message from "../assets/message-me_1.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__wrapper container">
        <div className="contact__illustration">
          <img src={message} />
        </div>
        <form className="contact__form">
          <h2>MESSAGE ME</h2>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message..." />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
