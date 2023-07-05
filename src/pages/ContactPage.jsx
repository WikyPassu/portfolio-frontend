import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import TOAST_CONFIG from "../constants/Toast";
import { validateText, validateEmail } from "../utils/Validations";
import Button from "../components/Button";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import emailjs from "@emailjs/browser";

const mailSample = {
  name: "",
  email: "",
  subject: "",
  message: "",
  "g-recaptcha-response": ""
};

const ContactPage = ({lang, languages}) => {
  const {contactES, contactEN} = languages;

  const [mail, setMail] = useState(mailSample);
  const {name, email, subject, message, "g-recaptcha-response": recaptcha} = mail;

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const recaptchaRef = useRef(null);

  useEffect(() => {
    setMail(mailSample);
    setNameError("");
    setEmailError("");
    setSubjectError("");
    setMessageError("");
  }, [lang]);

  const handleOnChangeInput = e => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value
    });
  };

  const handleOnBlurInput = (e) => {
    switch(e.target.name) {
      case "name":
        !validateText(e.target.value) ? setNameError(lang ? contactES.emptyError : contactEN.emptyError) : setNameError("");
        break;
      case "email":
        if(!validateText(e.target.value)) {
          setEmailError(lang ? contactES.emptyError : contactEN.emptyError);
        }
        else if(!validateEmail(e.target.value)) {
          setEmailError(lang ? contactES.invalidError : contactEN.invalidError);
        }
        else {
          setEmailError("");
        }
        break;
      case "subject":
        !validateText(e.target.value) ? setSubjectError(lang ? contactES.emptyError : contactEN.emptyError) : setSubjectError("");
        break;
      case "message":
        !validateText(e.target.value) ? setMessageError(lang ? contactES.emptyError : contactEN.emptyError) : setMessageError("");
        break;
    }
  };

  const handleOnChangeReCAPTCHA = () => {
    setMail({
      ...mail,
      "g-recaptcha-response": recaptchaRef.current.getValue()
    });
  };

  const handleOnClickButton = async () => {
    if(!name || !email || emailError || !subject || !message || !recaptcha){
      toast.error(lang ? contactES.toastError : contactEN.toastError, TOAST_CONFIG);
      return;
    }
    
    try {
      const res = await axios.post("https://a-p-portfolio-api.vercel.app/api/mail/", { mail });
      emailjs.send("service_2zdsc4z", "template_hfbx3ag", mail, "h6cmth_7EZffjbuYR")
      .then(r => {
        resetForm();
        toast.success(lang ? res.data.msg.es : res.data.msg.en, TOAST_CONFIG);
      })
      .catch(e => {
        resetForm();
        toast.error(lang ? contactES.toastEmailjsError : contactEN.toastEmailjsError, TOAST_CONFIG);
      });
    } catch({response}) {
      resetForm();
      toast.error(lang ? response.data.msg.es : response.data.msg.en, TOAST_CONFIG);
    }
  };

  const resetForm = () => {
    setMail(mailSample);
    recaptchaRef.current.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="heading">
          {lang ? contactES.headingFirst : contactEN.headingFirst}
          <span>{lang ? contactES.headingSecond : contactEN.headingSecond}</span>
        </h2>
        <form autoComplete="off">
          <div className="input-box">
            <input
              className={nameError ? "error" : ""} 
              type="text" 
              name="name" 
              value={name}
              placeholder={lang ? contactES.namePH : contactEN.namePH}
              onChange={handleOnChangeInput}
              onBlur={handleOnBlurInput}
            />
            {
              nameError ? <p>{nameError}</p> : null
            }
            <input 
              className={emailError ? "error" : ""}
              type="email" 
              name="email"  
              value={email}
              placeholder={lang ? contactES.emailPH : contactEN.emailPH}
              onChange={handleOnChangeInput}
              onBlur={handleOnBlurInput}
            />
            {
              emailError ? <p>{emailError}</p> : null
            }
            <input
              className={subjectError ? "error" : ""}
              type="text" 
              name="subject"  
              value={subject}
              placeholder={lang ? contactES.subjectPH : contactEN.subjectPH} 
              onChange={handleOnChangeInput}
              onBlur={handleOnBlurInput} 
            />
            {
              subjectError ? <p>{subjectError}</p> : null
            }
            <textarea
              className={messageError ? "error" : ""}
              name="message" 
              cols="30" 
              rows="10"  
              value={message}
              placeholder={lang ? contactES.messagePH : contactEN.messagePH}
              onChange={handleOnChangeInput}
              onBlur={handleOnBlurInput}
            />
            {
              messageError ? <p>{messageError}</p> : null
            }
            <div className="recaptcha">
              <ReCAPTCHA
                key={lang}
                ref={recaptchaRef}
                sitekey="6Lcue9MmAAAAAJx4Qee_uf-qmelCLWOvZ0RDLLWL"
                onChange={handleOnChangeReCAPTCHA}
                theme="dark"
                hl={lang ? "es" : "en"}
              />
            </div>
          </div>
          <Button
            onClick={handleOnClickButton} 
            text={lang ? contactES.formBtn : contactEN.formBtn}
          />
        </form>
      </div>
      <div className="contact-img">
        <img src="/assets/contact/contact-img.png" alt="" />
      </div>
    </section>
  );
};

export default ContactPage;