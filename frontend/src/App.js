import React, { useState } from "react";
import Header from "./components/Header/Header";
import DeliveryTime from "./components/DeliveryTime/DeliveryTime";

function App() {
  const [inHomeAvailable, setInHomeAvailable] = useState(false);
  return (
    <>
      <Header setInHomeAvailable={setInHomeAvailable} />
      <DeliveryTime isInHomeAvailable={inHomeAvailable} />
    </>
  );
}

export default App;
