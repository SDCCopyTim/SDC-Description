import React from 'react';
import { FaFireAlt, FaToilet } from "react-icons/fa";
import { SiBaidu } from "react-icons/si";
import { GiShower, GiFoodTruck } from "react-icons/gi";

const EssentialsList = (props) => {
  var pic;
  if(props.item === 'Campfires allowed'){
    pic = <FaFireAlt />
  }
  if(props.item === 'Toilet available'){
    pic = <FaToilet />
  }
  if(props.item === 'Pets allowed'){
    pic = <SiBaidu />
  }
  if(props.item === 'Showers available'){
    pic = <GiShower />
  }
  else if(props.item === 'Free dinner'){
    pic = <GiFoodTruck />
  }
    return(
     <div className="propsItem">{pic} {props.item}
      </div>
    )
};

export default EssentialsList;
