import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav_bar";
import Sidebar from "./components/Sidebar/Sidebar";
import Welcome from "./components/Welcome_widget/Welcome";
import QuoteList from './components/Quotes/List/QuoteList';
function App() {
  return (
    <main>
      <Nav/>
      <div className="layout-container">
      <Sidebar/>
      <Welcome/>
      {/* <QuoteList/> */}
      </div>
    </main>
  );
}

export default App;
