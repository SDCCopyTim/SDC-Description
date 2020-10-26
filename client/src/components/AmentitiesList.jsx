import React from 'react';
import { FaWater, FaShower, FaWifi, FaUtensils } from "react-icons/fa";
import { BiWifiOff } from "react-icons/bi";



const AmentitiesList = (props) => {
  var pic;
  if(props.item === 'Portable water available'){
    pic = <FaWater />
  }
  if(props.item === 'Jaccuzis Included'){
    pic = <FaShower />
  }
  if(props.item === 'No Free WiFi'){
    pic = <BiWifiOff />
  }
  if(props.item === 'Pack it out'){
    pic = <FaUtensils />
  }
  else if(props.item === 'Has Wifi'){
    pic = <FaWifi />
  }
    return(
     <div className="propsItem">{pic} {props.item} </div>
    )
};

export default AmentitiesList;
