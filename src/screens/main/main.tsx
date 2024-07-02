import TBUtil from "@/utils/tailwind_breakpoints";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Navbar />
      <main className="bg-gray-700 flex-grow">
        <Hero />
        <About />
        <Resume />
        {/* <Blog /> */}
        {/* <Lab /> */}
        <Contact />
      </main>
      <Footer />
      {/* <TBUtil /> */}
    </div>
  );
};

export default Main;
