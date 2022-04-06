import React from "react";
import './Contact.css'

const Contact = () => {
    

    return (
        <div className="contact-container">
        <p className='contact-heading'>CONTACT ME</p>
        {/* <a className='resume-download' href='https://www.docdroid.net/dxVSMg0/kowalkowski-resume-pdf' download='Kowalkowski_Resume'>Download my resume</a> */}
          <p className='contact-form-text'>
          Fill out the form below to send me an email. I will get back to you
          as soon as possible.
          </p>
          <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdZxcL-IsZTs9rY5aQo2l65jav3q3LjatckkoEsw6-mxbtfiA/viewform?embedded=true"
          width="100%;"
          height="1041"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Loading…</iframe
        >
        </div>
      );
};

export default Contact;