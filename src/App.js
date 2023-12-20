import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [username, setUserName] = useState(0);
  const shoot = async () => {
    try {
      axios.defaults.withCredentials = true;
      const post = await axios.get(
        `https://app2.learnwithtapos.com/WeatherForecast/get-from-api`
      );
      console.log(post.data);
      setUserName(post.data);
    } catch (e) {
      const msg = e?.response?.error.message ?? e?.message ?? "Unknown Error";

      console.error(msg);

      return false;
    }
  };
  return (
    <div className="App">
      <h1>
        <a href="https://localhost:7004/WeatherForecast/test">
          Setting page start
        </a>
      </h1>
      <h3>Setting page start </h3>
      <h1>Setting page start </h1>
      <h5>Setting page start </h5>
      <button onClick={shoot}>Take the Shot</button>
      <pre>{JSON.stringify(username)}</pre>
    </div>
  );
}

export default App;
