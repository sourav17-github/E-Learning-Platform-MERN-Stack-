import { Navbar } from "../components/Navbar";
import { useState } from "react";
const URL = "http://localhost:5000/api/auth/login";
import { useNavigate  } from "react-router-dom";
import { useAuth } from "../store/auth";   
import { toast } from "react-toastify";            

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
const navigate = useNavigate();
const {storeTokenInLS} = useAuth();
  // Handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    // alert(`Email: ${user.email}\nPassword: ${user.password}`);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);

      const res_data = await response.json();


      if (response.ok) {
        // alert("Login Successful");
        //store token in local storage
         storeTokenInLS(res_data.token);
        setUser({ email: "", password: "", }); 
        toast.success("Login successful");
        navigate("/")
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message) ;
        console.log("invaild credential")
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
       <Navbar/>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/login1.png"
                  alt="login illustration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form ">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
