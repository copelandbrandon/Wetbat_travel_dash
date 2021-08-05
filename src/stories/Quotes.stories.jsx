import React from "react";
import {storiesOf } from "@storybook/react";
import {action} from "@storybook/addon-actions";

import QuoteListItem from "../components/Quotes/ListItem/QuoteListItem";
import QuoteList from '../components/Quotes/List/QuoteList';
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