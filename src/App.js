import "./App.css";
import Details from "./components/details/Details";
import Header from "./components/header/header";
import Main from "./components/main/Main";
import Partner from "./components/partner/Partner";
import Service from "./components/services/Service";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Partner />
      <Service />
      <Details />
    </div>
  );
}

export default App;
