import React from 'react';
import { FaWater } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { BiWifiOff } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { SiBaidu } from "react-icons/si";
import { GiShower } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";
import { FaVihara } from "react-icons/fa";
import { BiWalk } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { GrWheelchairActive } from "react-icons/gr";
import { GiForestCamp } from "react-icons/gi";



const AmentitiesModal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  var pic;
  var picArr = [];
  for(var i = 0; i < props.amentities.length; i++){
    if(props.amentities[i] === 'Portable water available'){
      pic = <FaWater />;
      picArr.push(pic);
    }
    if(props.amentities[i] === 'Jaccuzis Included'){
      pic = <FaShower />;
      picArr.push(pic);
    }
    if(props.amentities[i] === 'No Free WiFi'){
      pic = <BiWifiOff />;
      picArr.push(pic);
    }
    if(props.amentities[i] === 'Pack it out'){
      pic = <FaUtensils />;
      picArr.push(pic);
    }
    else if(props.amentities[i] === 'Has Wifi'){
      pic = <FaWifi />;
      picArr.push(pic);
    }
  }
  return (
    <div className={showHideClassName}>
      <div className="AmentitiesModal">
      <div className="closeAmentities" onClick={props.handleClose}>X</div>
      <b>Amenities</b>
      <div className="AmentitiesList">
      {props.amentities.map((item,index) => (
          <div className="smolModalItem">{picArr[index]} {item} </div>
        )
      )}
      </div>
      </div>

    </div>
  )
};

export default AmentitiesModal;