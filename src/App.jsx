import React from "react";
import "./styles/global.css";
import ContainerLayout from "./component/layout/ContainerLayout";
import GridBackgroundLayout from "./component/layout/GridBackgroundLayout";
import HeaderText from "./component/text/HeaderText";

function App() {
  return (
    <GridBackgroundLayout>
      <ContainerLayout>
        <h1>Hi, I'm Nigel 👋</h1>
        <p>Solutions Engineer with a pasion for codeing.</p>
      </ContainerLayout>
    </GridBackgroundLayout>
  );
}

export default App;
