import { hot } from "react-hot-loader/root";
import "./App.css";
import  Layout  from "./pages/Layout/Layout.js";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default hot(App);
