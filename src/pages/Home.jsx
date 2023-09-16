import React from "react";
import NavigationBar from "../components/Header/NavigationBar";
import Welcome from "../components/Welcome/Welcome";
import MainSection from "../components/Main/MainSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Welcome />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
