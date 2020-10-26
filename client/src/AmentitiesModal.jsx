import React from 'react';
import { FaWater, FaShower, FaWifi, FaUtensils, FaToilet, FaVihara, FaBed } from "react-icons/fa";
import { BiWifiOff, BiWalk } from "react-icons/bi";
import { SiBaidu } from "react-icons/si";
import { GiShower, GiFoodTruck, GiForestCamp } from "react-icons/gi";
import { GrWheelchairActive } from "react-icons/gr";



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
