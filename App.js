import React from "react";
import Container from "./components/Container";
import ContainerFlex from "./components/ContainerFlex";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Header from "./components/Header";

import { DataProvider } from "./contexts/DataContext";
import { VisualizacionProvider } from "./contexts/VisibleContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <VisualizacionProvider>
          <LanguageProvider>
            <Container>
              <Header />
              <ContainerFlex>
                <Aside />
                <Main />
              </ContainerFlex>
            </Container>
          </LanguageProvider>
        </VisualizacionProvider>
      </DataProvider>
    </div>
  );
}

export default App;
