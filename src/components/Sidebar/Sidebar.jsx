import React from "react";
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Sidebar(props) {

  return (
    <div className="sidebar">
      <span onClick={props.onClick}><HomeIcon/> Home</span>
      <span onClick={props.onClick}><AttachMoneyIcon/> Quotes</span>
      <span onClick={props.onClick}><ListAltIcon/> Leads</span>
      <span onClick={props.onClick}><FlightTakeoffIcon/> Tours</span>
      <hr className="solid"/>
      <span onClick={props.onClick}><InsertDriveFileIcon/> Invoices</span>
      <span onClick={props.onClick}><TimelineIcon/> Analytics</span>
      <span onClick={props.onClick}><GroupIcon/> Team</span>
      <span onClick={props.onClick}><SettingsIcon/> Admin</span>
      <span onClick={props.onClick}><HelpOutlineIcon/> Support</span>
      <hr className="solid"/>
      <p className="footer">Allright received by wetbat 2020 *</p>
    </div>
  );
};