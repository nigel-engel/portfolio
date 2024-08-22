import React from "react";
import "./styles/global.css";
import GridBackgroundLayout from "./component/layout/GridBackgroundLayout";
import Header from "./component/sections/Header";
import About from "./component/sections/About";
import Skills from "./component/sections/Skills";

function App() {
  return (
    <>
      <GridBackgroundLayout>
        <Header />
        <About />
        <Skills />
      </GridBackgroundLayout>
    </>
  );
}

export default App;
