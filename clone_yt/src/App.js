import Header from "./components/header";
import Menu from "./components/menu";
import { useState } from "react";
import { House } from "react-bootstrap-icons";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div style={{ width: "100%", display: "flex" }}>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ backgroundColor: "#000", width: "100%" }}></div>
      </div>
      <House size={40} />
    </div>
  );
}

export default App;
