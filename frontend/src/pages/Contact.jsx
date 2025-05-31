import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username:"",
  email:"",
  message:"", 
};
export const Contact = () => {
  const [contact, setContact]= useState(defaultContactFormData); 
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
   // console.log(contact);

try {
  const response = await fetch ("http://localhost:5000/api/form/contact", { 
    method:"POST",
    headers:{
      'Content-Type':"application/json",
    },
    body:JSON.stringify(contact),
  });

  if(response.ok){
    setContact(defaultContactFormData);
    const data = await response.json();
    console.log(data);
    alert('Message send successfully');
  }
} catch (error) {
  alert("Message not send");
  console.log(error);
}
  } ;
    return <>
     <Navbar/>
    <section className="section-contact">
      <div className="contact-content container">
       
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="" />
          </div>
          <section className="section-form">
          <h1 className="main-heading">contact us</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input type="text"
                 name="username"
                 id="username"
                 autoComplete="off"
                 value={contact.username}
                 onChange={handleInput}
                 required />
                <br />
                <label htmlFor="email">email</label>
                <input type="text"
                 name="email"
                 id="email"
                 autoComplete="off"
                 value={contact.email}
                 onChange={handleInput}
                 required />
                
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea name="message"
                 id="message"
                 cols="30"
                 rows="10"
                 autoComplete="off"
                 value={contact.message}
                 onChange={handleInput}
                 required
                 ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <iframe src="https://www.google.com/maps" width={1580} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    </section>

    </>
    
  };
  
  