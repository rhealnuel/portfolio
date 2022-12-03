import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Talk from "../components/talk/talk";
import Skills from "../components/skills/skills";
import Reach from "../components/reach/reach";
import Footer from "../components/footer/footer";

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Talk />
            <Skills />
            <Reach />
            <Footer />

        </div>
    )
}

export default Home;