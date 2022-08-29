import React from "react";
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = React.useState(false)
  const handleSubmit = e => {
    e.preventDefault();
    setMessage(true)
    document.getElementById("input").value = ""
    document.getElementById("input2").value = ""
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assests/shake.svg" alt="shakeHands" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" id="input" />
          <textarea placeholder="Message" id="input2"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
