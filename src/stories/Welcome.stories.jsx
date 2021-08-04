import React from "react";
import {storiesOf } from "@storybook/react";

import Welcome from "../components/Welcome_widget/Welcome";

storiesOf("Welcome", module)
  .add("Default", () => (
    <Welcome newLeads={50} createdQuotes={15} pendingOrders={30}/>
  ));