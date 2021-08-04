import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav_bar";
import Sidebar from "./components/Sidebar/Sidebar";
import Welcome from "./components/Welcome_widget/Welcome";

function App() {
  return (
    <main>
      <Nav/>
      <div className="layout-container">
      <Sidebar/>
      <Welcome/>
      </div>
    </main>
  );
}

export default App;
