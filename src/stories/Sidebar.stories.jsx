import React from "react";
import {storiesOf } from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Sidebar from "../components/Sidebar/Sidebar";

storiesOf("Sidebar", module)
  .add("Default", () => (
    <Sidebar onClick={action("Button Clicked!")}/>
  ));