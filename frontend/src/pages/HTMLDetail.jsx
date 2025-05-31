import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth"; // Assuming you're using context

export const HTMLDetail = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const { services } = useAuth(); // Get the services list from context
  const [course, setCourse] = useState(null);

  // Use effect to fetch course data
  useEffect(() => {
    if (services) {
      const foundCourse = services.find((service) => service._id === id);
      if (foundCourse) {
        setCourse(foundCourse);
      }
    }
  }, [services, id]);

  // If course is not found or loading
  if (!course) {
    return <div>Loading course details...</div>;
  }

  const { service, CourseDetail } = course;

  // Error handling in case CourseDetail structure is not what we expect
  if (!CourseDetail || !CourseDetail.overview) {
    return <div>Error loading course details.</div>;
  }

  return (
    <div className="container">
      <h1>{service}</h1>

      {/* Render Course Overview */}
      <div className="course-overview">
        <h2>Overview</h2>
        <div dangerouslySetInnerHTML={{ __html: CourseDetail.overview }} />
      </div>

      {/* Render Core Concepts */}
      <div className="core-concepts">
        <h2>Core Concepts</h2>
        {CourseDetail.coreConcepts && CourseDetail.coreConcepts.length > 0 ? (
          CourseDetail.coreConcepts.map((concept, index) => (
            <div key={index}>
              <h3>{concept.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: concept.content }} />
              <pre>
                <code>{concept.example}</code>
              </pre>
            </div>
          ))
        ) : (
          <div>No core concepts available.</div>
        )}
      </div>

      {/* Render Best Practices */}
      <div className="best-practices">
        <h2>Best Practices</h2>
        {CourseDetail.bestPractices && CourseDetail.bestPractices.length > 0 ? (
          CourseDetail.bestPractices.map((practice, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))
        ) : (
          <div>No best practices available.</div>
        )}
      </div>
    </div>
  );
};
