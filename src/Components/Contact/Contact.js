import React from 'react';
import "./Contact.css";
import MSGICON from '../../Components/Assets/msg-icon.png';
import location from "../../Components/Assets/location-icon.png";
import phone from "../../Components/Assets/phone-icon.png";
import mail from "../../Components/Assets/mail-icon.png";
import white_arrow from "../../Components/Assets/white-arrow.png";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "314f867e-13e4-400f-b3ce-4ea462b1967f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className='contact' id='contact'>
        <div className='contact-col'>
            <h3> <img src={MSGICON} alt='' />  Send us a Message  </h3>
            <p>We’re here to help! Whether you have a question, need assistance, or want to provide feedback, you can reach us through any of the following methods:</p>
            <h3> <img src={phone} alt='' /> Phone Support </h3>
            <p>Call us at<b> (123) 456-7890</b></p>
            <h3> <img src={mail} alt='' /> Email Support  </h3>
            <p>Send us an email at <b>support@yourcompany.com</b></p>
            <h3><img src={location} alt='' /> Address  </h3>
            <p>40 Great George St, West Yorkshire, United Kingdom</p>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name:</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number:</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write Your Opinion:</label>
                <textarea name='message' id='' cols={30} rows={10} placeholder='Enter Your Message'
                required/>
                <button type='submit' className='btn'>Submit now <img src={white_arrow} alt='Submit' /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact