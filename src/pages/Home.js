import React from "react";
import { Helmet } from "react-helmet";
import Typed from "react-typed";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Layout>
        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="hero-container" data-aos="fade-in">
            <h1>Milton Chowdhury</h1>
            <p>
              I'm{" "}
              <Typed
              strings={["Designer, Developer, Freelancer"]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
            >
              <span />
            </Typed>
            </p>
        
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
