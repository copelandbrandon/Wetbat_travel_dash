import React from "react";
import {storiesOf } from "@storybook/react";
import {action} from "@storybook/addon-actions";

import QuoteListItem from "../components/Quotes/ListItem/QuoteListItem";
import QuoteList from '../components/Quotes/List/QuoteList';
import SingleQuote from '../components/Quotes/SingleQuote/SingleQuote';
import QuoteForm from '../components/Quotes/Form/QuoteForm';

const data = {id: 1, name: "Ken Jeurgensen", destination: "YYC", price: 1500};
const data2 = [{id: 1, name: "Ken Jeurgensen", destination: "YYC", price: 1500}, {id: 1, name: "Ken Jeurgensen", destination: "YYC", price: 1500}, {id: 1, name: "Ken Jeurgensen", destination: "YYC", price: 1500}];
storiesOf("Quotes", module)
.add("Default", () => (
  <QuoteListItem
  id={data.id}
  name={data.name}
  destination={data.destination}
  price={data.price}
  />
))

storiesOf("Quotes List", module)
  .add("Default", () => (
    <QuoteList
    data={data2}
    />
  ))

storiesOf('Quote Details', module)
    .add("Default", () => (
      <SingleQuote
      id={1}
      phone_num={'403-897-2309'}
      email={'Herb@gmail.com'}
      name={'Herb Kzazz'}
      transport={'Town Car'}
      departure={'YYC'}
      destination={'YVR'}
      departure_date={'2021-08-17 15:00:00'}
      return_date={'2021-09-7 12:00:00'}
      number_of_travellers={6}
      price={1500}
      />
    ));

storiesOf("Quote Form", module)
      .add("Default", () => (
        <QuoteForm
        
        />
      ))