import React from "react";
import "./styles.css";
//import FamilyTree from "./components/familyTree";
import members from "./family";
import FamilyTree from './components/index';

export default function App() {
  return (
    <div className="App">
      <h1>FAMILY TREE</h1>
      <FamilyTree members={members} />
    </div>
  );
}
