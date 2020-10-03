import React from 'react';
import { FaFireAlt } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { SiBaidu } from "react-icons/si";
import { GiShower } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";



const EssentialsModal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  var pic;
  var picArr = [];
  for(var i = 0; i < props.essentials.length; i++){
    if(props.essentials[i] === 'Campfires allowed'){
      pic = <FaFireAlt />;
      picArr.push(pic);
    }
    if(props.essentials[i] === 'Toilet available'){
      pic = <FaToilet />;
      picArr.push(pic);
    }
    if(props.essentials[i] === 'Pets allowed'){
      pic = <SiBaidu />;
      picArr.push(pic);
    }
    if(props.essentials[i] === 'Showers available'){
      pic = <GiShower />;
      picArr.push(pic);
    }
    else if(props.essentials[i] === 'Free dinner'){
      pic = <GiFoodTruck />;
      picArr.push(pic);
    }
  }
  return (
    <div className={showHideClassName}>
      <div className="EssentialsModal" >
      <div className="closeEssentials" onClick={props.handleClose}>X</div>
      <b>Essentials</b>
      <div className="EssentialsList">
      {props.essentials.map((item,index) => (
          <div className="smolModalItem">{picArr[index]} {item} </div>
        )
      )}
      </div>
      </div>

    </div>
  )
};

export default EssentialsModal;