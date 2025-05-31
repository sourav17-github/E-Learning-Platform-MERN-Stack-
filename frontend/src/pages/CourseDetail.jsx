import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { Navbar } from "../components/Navbar";

export const CourseDetail = () => {
  const { id } = useParams();
  const { user, services } = useAuth();

  // Redirect if user is not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Ensure services are loaded
  if (!services) {
    return <div>Loading services...</div>;
  }

  // Find the course
  const course = services.find((service) => service._id === id);

  if (!course) {
    return <div className="container"><h2>Course Not Found</h2></div>;
  }

  const { service, provider, price, description ,CourseDetail} = course;

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="main-heading">{service}</h1>
        <div className="course-detail-card">
          <p><strong>Provider:</strong> {provider}</p>
          <p><strong>Price:</strong> {price}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Detail</strong>{CourseDetail}</p>
        </div>
      </div>
    </>
  );
};
