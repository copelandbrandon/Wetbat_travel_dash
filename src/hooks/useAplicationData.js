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

  // useEffect(() => {
  //   Promise.all([
  //     axios.get('/api/quotes'),
  //     axios.get('/api/quote/details'),
  //   ]).then((all) => {
  //     console.log("data: ", all);
  //     setState((prev) => ({
  //       ...prev,
  //       quotesList: all[0].data,
  //       quoteDetails: all[1].data
  //     }))
  //   })
  // }, [])

  return {state, setState};
}