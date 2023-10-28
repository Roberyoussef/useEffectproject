import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <p>
        name:{name} <br /> phone:{phone}
      </p>
    </div>
  );
}
