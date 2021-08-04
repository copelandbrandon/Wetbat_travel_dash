import React from "react";
import {storiesOf } from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Nav from "../components/Nav/Nav_bar"

storiesOf("Nav", module)
  .add("Default", () => (
    <Nav onClick={action("Clicked!")}/>
  ));