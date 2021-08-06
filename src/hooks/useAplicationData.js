import {useState, useEffect } from 'react';
const axios = require("axios");

export default function useApplicationData() {
  const [state, setState] = useState({
    visualMode: "",
    quotesList: [],
    quoteDetails: {}
  })


  useEffect(() => {
    axios.get('api/quotes')
      .then(data => setState((prev) => ({...prev, quotesList: data.data})))
  }, [])
  return {state, setState};
}