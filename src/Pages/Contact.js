import React, {useState} from 'react'
import { Layout } from '../Layout'; 
import { IntroWrapper } from '../Pages/introwrapper'




const Contact = () => {
  
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


const encode = (data) => {
  return Object.keys(data)
  .map(
    (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  )
  .join("&");
}
const handleSubmit = (e) => {
  e.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", name, email, message }),
  })
    .then(() => alert("Message sent!"))
    .catch((error) => alert(error));
}
return (
  <Layout>
    <main>
    <IntroWrapper>
         <div style ={{position: 'relative'}}>
           <iframe
            width="100%"
            height="100%"
            title="map"
            style ={{position:'absolute','inset':0,filter: 'opacity(0.7)'}}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
            <div style={{display: 'flex',flexWrap:'nowrap',padding:'2.5rem',borderRadius:'0.25rem',}}>
              <div style={{paddingRight:'1.5rem',paddingLeft:'1.5rem'}}>
                    <h2 style={{}}>Address</h2>
                    <p style={{marginTop:'0.25rem'}}>
                    97 Warren St. <br />
                      New York, NY 10007
                    </p>
              </div>
              <div style={{paddingRight:'1.5rem',paddingLeft:'1.5rem'}}>
                <h2>Email</h2>
                <a href='/' style={{lineHeight:1.6,}}>reedbarger@email.com</a>
                <h2>Phone</h2>
                <p>123-456-7890</p>
              </div>
            </div>
           </div> 
           <form onSubmit={handleSubmit}
          netlify
          name="contact" className="contact-form">
          <h2>
            Hire Me
          </h2>
          <p style={{lineHeight:1.6}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div style={{position:'relative',marginBottom:'1rem'}}>
            <label htmlFor="name">
              Name
            </label>
            <input className = "input-field"
              type="text"
              id="name"
              name="name"
              onChange={(e) => { setName(e.target.value)} }
            />
          </div>
          <div style={{position:'relative', marginBottom:'1rem'}}>
            <label htmlFor="email">
              Email
            </label>
            <input className ="input-field"
              type="email"
              id="email"
              name="email"
              onChange={(e) => {setEmail(e.target.value) } }
            />
          </div>
          <div style={{position:'relative',marginBottom:'1rem'}}>
            <label
              htmlFor="message">
              Message
            </label>
            <textarea
            onChange={(e) => { setMessage(e.target.value)} }
              id="message"
              name="message"
            />
          </div>
          <button className="submit-button"
            type="submit">
            Submit
          </button>
          </form>
        </IntroWrapper> 
    </main>
  </Layout>
);
}
export default Contact;