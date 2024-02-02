import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://pma-1-env.eba-v2xqi53u.us-west-2.elasticbeanstalk.com/api/clients"
      )
      .then((response) => {
        setClients(response.data);
      });
  });

  return (
    <div className="App">
      <h1>Hello World it works update 3 successful</h1>
      {clients.map((client) => (
        <div>
          <p>{client.c_name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
