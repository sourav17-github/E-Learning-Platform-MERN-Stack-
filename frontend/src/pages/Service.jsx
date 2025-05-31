import { Navbar } from "../components/Navbar";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

export const Service = () => {
  const { services, user } = useAuth();  // Ensure this reflects login status correctly
  const navigate = useNavigate();

  const handleViewCourse = (courseId) => {
    if (user) {
      // User is logged in; navigate to course details
      navigate(`/course/${courseId}`);
    } else {
      // User is not logged in; redirect to login page
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>

        <div className="container grid grid-three-cols">
          {services.map((curElem, index) => {
            const { _id, price, description, provider, service } = curElem; // Ensure unique 'id' is used
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src="/images/design.png" alt="our web page" width="200" />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                  <button className="btn-view-course" onClick={() => handleViewCourse(_id)}>
                    View Course
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
