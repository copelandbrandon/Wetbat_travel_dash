import './App.css';
import Nav from "./components/Nav/Nav_bar";
import Sidebar from "./components/Sidebar/Sidebar";
import Welcome from "./components/Welcome_widget/Welcome";
import QuoteList from './components/Quotes/List/QuoteList';
import useApplicationData from './hooks/useAplicationData';
import SingleQuote from './components/Quotes/SingleQuote/SingleQuote';
import axios from 'axios';
import QuoteForm from './components/Quotes/Form/QuoteForm';

function App() {
  const {state, setState} = useApplicationData();

  const getDetails = function(id) {
    axios.get(`/api/quote/details/${id}`)
      .then((data) => {
        setState((prev) => ({...prev, quoteDetails: data.data[0]}));
      })
  }
  return (
    <main>
      <Nav/>
      <div className="layout-container">
      <Sidebar/>
      <div className="upper-container">
      {state.visualMode === "" && <Welcome/>}
      <div className="lower-container">
      {state.visualMode === "" && <QuoteForm/>}
      { (state.quotesList.length > 0 && state.visualMode === "") && <QuoteList data={state.quotesList} onClick={(event) => {getDetails(event.target.classList[0]); setState((prev) => ({...prev, visualMode: "details"}))}}/>}
      {state.visualMode === "details" && <SingleQuote onClick={() => { setState((prev) => ({...prev, visualMode: ""}))}} data={state.quoteDetails}/>}
      </div>
      </div>
      </div>
    </main>
  );
}

export default App;
