import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        ph={contacts[0].ph}
        mail={contacts[0].mail}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        ph={contacts[1].ph}
        mail={contacts[1].mail}
      />
    </div>
  );
}

export default App;
