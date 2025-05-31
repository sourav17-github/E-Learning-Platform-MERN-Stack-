import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
    <Navbar/>
  
  <main>
    {/* 1st section */}
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
        <p>Unlock Your Potential with World-Class Learning</p>
        <h1>Welcome to the <br /> Shiksha</h1>
          <p>
          At Shiksha, we are dedicated to empowering students, professionals, and lifelong learners to achieve their goals. Whether you are looking to upskill, change careers, or explore new interests, we offer comprehensive courses designed to help you succeed.
          </p>
          <div className="btn btn-group">
            <a href="/contact">
            <button className="btn">Connect Now</button>
            </a>
            <a href="/service">
            <button className="btn secondary-btn">learn more</button>
            </a>
          </div>
        </div>

        <div className="hero-images">
          <img src="/images/home1.png" alt="" width= "500" height= "500"/>
        </div>
      </div>
    </section>
  </main>
   {/* 2nd  section*/}
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

  {/* 3rd section */}

  <section className="section-hero">
      <div className="container grid grid-two-cols">
       

        <div className="hero-images">
          <img src="/images/design.png" alt="" width= "500" height= "500"/>
        </div>
        <div className="hero-content">
        <p>We are here to help you</p>
        <h1>Start Your Learning Journey Today!</h1>
          <p>
          Join thousands of learners and take the first step towards achieving your goals.Whether you are looking to advance your career, learn a new skill, or explore a new subject, our platform offers a wide range of courses tailored to your needs. With flexible learning options, expert instructors, and a supportive community, your journey starts here!
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
      </div>
    </section>
    </>
  );
};


