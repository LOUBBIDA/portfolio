import React from 'react'
import './Contact.css'
import {BsBriefcaseFill,BsFillTelephoneFill,BsLinkedin ,BsTwitter, BsFacebook,BsChatQuoteFill } from "react-icons/bs";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  function submit(e) {
    e.preventDefault();
    if (name.length > 2) {
      emailjs.send("service_0o9bvgu", "template_5n7qqpa", {
        'from_name' : name,
        'from_email' : email,
        'from_subject' : subject,
        'from_message' : message
      }, 'mFZLpFsxVrlRQAAlf');

      setName('')
      setEmail('')
      setSubject('')
      setMessage('')

      toast("Votre message a été envoyé avec succès", {
        duration: 5000,
        position: "bottom-left",
        icon: "✅"
      })
} else {
      setError("Nom est obligatoire")
    }
  }

  function change(e) {
    const name = e.target.name;

    if (name === "name") {
      setName(e.target.value)
    } else if(name === "email") {
      setEmail(e.target.value)
    } else if(name === "subject") {
      setSubject(e.target.value)
    } else {
      setMessage(e.target.value)
    }
  }
  
 
  return (
    <>
        <div className="section-title text-center">
        <img src="images/bois.png" alt="" className='w-25 '/>
          <div className='arij'> <h4 className="text text-danger fs-2">CONTACT US</h4></div> 
            <h2>Ways To Contact Me</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Magni voluptates <br /> odio
                 fugit dolores minus? Labore laborum,
                  voluptate repellendus ullam <br />
                 quo ratione quia ex! Tempora nulla 
                 quos in eveniet quaerat? Fugiat?</p>
        </div>
              
             <div className="container">
               <div className="row justify-content-betwen"> 
                <div className=' col-md-6 mt-4'> 
                   <div className="haj ">
                   
                 
                         <a href="https://mail.google.com/mail/u/0/#inbox"> <button className='mt-2'> <div  className='card shadow-lm'  >
                     
                     <h3 className='text text-center pt- 5'><span className=' s-4 mx-5'><BsBriefcaseFill/></span> Ayoubloubb@ <br />gmail.com</h3>
                      </div></button>  </a>  
                      <a href="https://mail.google.com/mail/u/0/#inbox"> <button className='mt-2'> <div  className='card shadow-lm'  >
                     
                     <h3 className='text text-center pt- 5'><span className=' s-4 mx-5'><BsFillTelephoneFill /></span>  +212 0639474466</h3>
                      </div></button>  </a>  
                   
                  <a href="https://myaccount.google.com/profile"> <button className='mt-2'><div className='card shadow-lm' > 
                  <h3 className='text text-center pt-4'><span className=' s-4 mx-5'><BsTwitter/></span> Loubbida</h3>
                  </div>  </button>  </a>              
                 
                  
                 
                     <a href="https://myaccount.google.com/profile"> <button className='mt-2'>  <div className=' card shadow-lm'>
                  <h3 className='text text-center pt-4'><span className=' s-4 mx-5'><BsLinkedin/></span>  ayoub loubb</h3>
                     </div></button>  </a> 
                   
                  <a href=" https://www.facebook.com/ayoub.lebbayda/"> <button className='mt-2'> <div className='card shadow-lm' >
                  <h3 className='text text-center pt-4'><span className=' s-4 mx-5'><BsFacebook/></span> AyouB</h3>
                  </div></button>  </a> 
                    </div>
                   
              </div>
          
              <Toaster/>
        
            <div className="col-md-6 W-75 bg-danger">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="text-center my-3 fs-4">Contactez-nous </h5>
                    <form onSubmit={submit}>
                      <div className="form-group mb-3">
                        <label htmlFor="name">Nom complet</label>
                        <input type="text" className="form-control" value={name} id="name" name="name" onChange={change}/>
                        <span className="text-danger">{error}</span>
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="email">Adresse e-mail</label>
                        <input type="email" className="form-control" value={email} id="email" name="email" onChange={change}/>
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="subject">Sujet</label>
                        <input type="text" className="form-control" value={subject} id="subject" name="subject" onChange={change}/>
                      </div>
                          <div className="form-group mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"   value={message} className="form-control fs-4 " onChange={change}></textarea>
                      </div>

                      <div className="form-group mb-3">
                        <button className="btn btn-primary w-100">Envoyer le message</button>
                      </div>
                    </form>
                </div>
              </div>
            
             
          
              </div>


              </div>
                 
              
             </div>
                  
            
    </>
  )
}
