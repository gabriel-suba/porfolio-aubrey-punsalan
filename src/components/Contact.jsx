import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import message from "../assets/message-me_1.svg";

const Contact = () => {
  // TODO:: HIDE KEYS ON .env
  const contactForm = useRef();
  const [sending, setSending] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();

    // setSending(true);

    // emailjs
    //   .sendForm(
    //     "service_hoclj5h",
    //     "contact-aubreyanne",
    //     contactForm.current,
    //     "C3Lhj_9x1BxD_TZ3f"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setSending(false);
    //       contactForm.current.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="contact">
      <div className="contact__wrapper container">
        <div className="contact__illustration">
          <img src={message} />
        </div>
        <form
          ref={contactForm}
          className="contact__form"
          onSubmit={handleSendEmail}
        >
          <h2>MESSAGE ME</h2>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="text" name="user_email" placeholder="Email" />
          <textarea name="message" placeholder="Message..." />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
