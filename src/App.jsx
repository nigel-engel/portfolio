import React from "react";
import GridBackgroundLayout from "./component/layout/GridBackgroundLayout";
import Header from "./component/sections/Header";
import About from "./component/sections/About";
import Skills from "./component/sections/Skills";
import WorkExperience from "./component/sections/WorkExperience";
import Projects from "./component/sections/Projects";

function App() {
  return (
    <>
      <GridBackgroundLayout>
        <Header />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
      </GridBackgroundLayout>
    </>
  );
}

export default App;
