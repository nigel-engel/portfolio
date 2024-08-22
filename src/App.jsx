import React from "react";
import GridBackgroundLayout from "./component/layout/GridBackgroundLayout";
import Header from "./component/sections/Header";
import About from "./component/sections/About";
import Skills from "./component/sections/Skills";
import ContainerLayout from "./component/layout/ContainerLayout";
import TitleText from "./component/text/TitleText";

function App() {
  return (
    <>
      <GridBackgroundLayout>
        <Header />
        <About />
        <Skills />
        <ContainerLayout>
          <TitleText text="Work Experience" />
        </ContainerLayout>
      </GridBackgroundLayout>
    </>
  );
}

export default App;
