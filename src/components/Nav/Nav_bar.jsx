import React, {useState} from "react";
import "./Nav_bar.css";
import TextField from "@material-ui/core/TextField";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
export default function Nav(props) {
  const [inputValue, setControlled] = useState("");

  return (
  <div className="nav-bar">
    <span className="nav-left" onClick={props.onClick}>
      <DashboardIcon/>
      <p>Wetbat</p>
    </span>
    <span className="nav-right">
      <TextField variant="outlined" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <button className="search-button" onClick={props.onClick}><SearchIcon/></button>
            </InputAdornment>
          ),
        }}
        value={inputValue}
        onChange={(event) => setControlled(event.target.value)}
        />
      <NotificationsIcon onClick={props.onClick}/>
      <ChatBubbleIcon onClick={props.onClick}/>
      <SettingsIcon onClick={props.onClick}/>
      <AccountCircle onClick={props.onClick}/>
    </span>
  </div>
    );
};