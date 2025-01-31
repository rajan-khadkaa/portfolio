import "./Contact.css";
import { useState } from "react";
import { Copy01Icon } from "hugeicons-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copy, setCopy] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");

  const form = useRef(); // Use ref to connect the form with EmailJS

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const replyTemplateId = import.meta.env.VITE_REPLY_TEMPLATE_ID;

  function handleCopy() {
    navigator.clipboard.writeText("rajankhadkaa0809@gmail.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  }

  function handleSendMessage(e) {
    e.preventDefault(); // Prevent form reload on submit

    if (username.trim() && email.trim() && message.trim()) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            console.log(form.current);
            // setUserName("");
            // setEmail("");
            // setMessage("");
            alert("Message sent.");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed to send message. Please try again later.");
          }
        )
        .then(
          emailjs
            .sendForm(
              serviceId,
              replyTemplateId,
              // {
              //   user_name: form.current.user_name,
              //   user_email: form.current.user_email,
              //   message: form.current.message,
              // }
              form.current,
              publicKey
            )
            .then(
              () => {
                console.log("reply sent to user");
                setUserName("");
                setEmail("");
                setMessage("");
              },
              (error) => {
                console.log("error replying back", error.text);
              }
            )
        );
    } else {
      setValidationMsg("Please fill out all fields.");
      setTimeout(() => {
        setValidationMsg("");
      }, 2600);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-whole-container">
        <div className="info-text">
          <div className="contact-titles">
            <p>I'd love to hear from you</p>
            <h2>Let's Connect</h2>
          </div>
          <div className="my-info">
            <p>
              If you have a project idea or simply want to get in touch, feel
              free to drop me a message in the form or send an email directly
              using the address below. I'm excited to collaborate and bring your
              ideas to life!
            </p>
            <div className="my-email">
              <p>rajankhadkaa0809@gmail.com</p>
              {/* <button>Copy</button> */}
              <Copy01Icon
                className="copy-text"
                onClick={handleCopy}
                size={14}
                color={"#f1f1f1"}
                variant={"stroke"}
              />
              <div className="copied-text">{copy ? <p>Copied</p> : ""}</div>
            </div>
          </div>
        </div>
        <div className="info-box">
          <form ref={form} onSubmit={handleSendMessage}>
            <input
              type="text"
              name="user_name"
              value={username}
              placeholder="Enter your name"
              onChange={(event) => setUserName(event.target.value)}
              // required
            />
            <input
              type="email"
              name="user_email"
              value={email}
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
              // required
            />
            <textarea
              value={message}
              name="message"
              placeholder="Enter message"
              onChange={(event) => setMessage(event.target.value)}
              // required
            />
            <div className="btn-msg">
              <button type="submit" className="btn-send-message">
                Send Message
              </button>
              {validationMsg ? <p>{validationMsg}</p> : ""}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
