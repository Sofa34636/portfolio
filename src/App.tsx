import React from 'react';
import {Header} from "./layout/header/header";
import {Main} from "./sections/main/main";
import {Skills} from "./sections/skills/Skills";
import {Works} from "./sections/works/Works";
import {Testimony} from "./sections/testimony/Testimony";
import {Footer} from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
        <Skills/>
        <Works/>
        <Testimony/>
        <Footer/>
    </div>
  );
}

export default App;
