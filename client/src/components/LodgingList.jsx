import React from 'react';
import { FaVihara, FaBed } from "react-icons/fa";
import { BiWalk } from "react-icons/bi";
import { GrWheelchairActive } from "react-icons/gr";
import { GiForestCamp } from "react-icons/gi";

const LodgingList = (props) => {
  var pic;
  if(props.item === 'Canvas tent'){
    pic = <FaVihara />
  }
  if(props.item === 'Walk to listing'){
    pic = <BiWalk />
  }
  if(props.item === 'Beds available'){
    pic = <FaBed />
  }
  if(props.item === 'Wheelchair accessible'){
    pic = <GrWheelchairActive />
  }
  else if(props.item === 'Campground'){
    pic = <GiForestCamp />
  }
    return(
     <div className="propsItem">{pic} {props.item}
      </div>
    )
};

export default LodgingList;
