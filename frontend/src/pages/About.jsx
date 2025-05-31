import { Navbar } from "../components/Navbar";
import { useAuth } from "../store/auth";



export const About = () => {
  const { user } = useAuth();
    return <>
     <Navbar/>
   
  <main>
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">

        {/* <p>At E-learning, we believe in making education accessible, engaging, and interactive for everyone. Our mission is to provide high-quality learning resources and courses across various subjects, empowering learners worldwide to achieve their academic and career goals.</p> */}
        {/* <h1>Our Vision</h1>
        <p>We aim to revolutionize online education by creating a seamless and personalized learning experience. By combining cutting-edge technology with expert-driven content, we enable students and professionals to master new skills at their own pace.</p> */}
        <p>Welcome, { user? `${user.username} to our website`: `to our website`}!!!</p>
        <h1 className="about-headings">Why Choose Us?</h1>
          <p>
          At Shiksha, we are dedicated to helping you reach your goals, whether you’re advancing your career, changing fields, or exploring new interests. Our courses are designed to support your success at every stage.</p>
          <p>We offer a wide range of courses, covering topics from programming and data science to business and design, catering to learners from all backgrounds. Each course is developed and taught by industry professionals and educators who are passionate about sharing their expertise.
          {/* Each course is developed and taught by industry professionals and educators who are passionate about sharing their expertise. To ensure practical, hands-on learning, our courses include quizzes, assignments, and real-world projects, giving you the skills to apply what you’ve learned.  */}
          Learn at your own pace from anywhere in the world, with the freedom to access our courses on any device, anytime.</p>
          <p> Be part of a global community of learners and educators. Whether you are a beginner looking to learn new skills or a professional seeking to enhance your expertise, Shiksha is here to support you on your educational journey. Start learning today and unlock new opportunities with us!

</p>
          <div className="btn btn-group">
            <a href="/contact">
            <button className="btn">Connect Now</button>
            </a>
            <a href="/services">
            <button className="btn secondary-btn">learn more</button>
            </a>
          </div>
        </div>

        <div className="hero-images">
          <img src="/images/about.png" alt="" width= "500" height= "500"/>
        </div>
      </div>
    </section>
  </main>


  <section className="section-analytics">
    <div className="container grid grid-four-cols">
      <div className="div1">
        <h2>50+</h2>
        <p>registered companies</p>
      </div>
      <div className="div1">
        <h2>100,00+</h2>
        <p>Happy Clients</p>
      </div>
      <div className="div1">
        <h2>500+</h2>
        <p>Well known Developers</p>
      </div>
      <div className="div1">
        <h2>24/7</h2>
        <p>service</p>
      </div>
    </div>
  </section>

    </>
    
  };
  
  
  