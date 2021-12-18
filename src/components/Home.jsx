import React from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

function Home() {
  const [names, setNames] = React.useState("");

  //   const path = window.location.pathname.substring(1);
  let componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handlePrint}>Print this out!</button>
      <ComponentToPrint ref={componentRef} />

      <h3>{names}</h3>
      <button onClick={() => handlePrint()}>Print</button>
    </div>
  );
}

export default Home;
