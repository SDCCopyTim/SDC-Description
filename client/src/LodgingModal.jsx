import React from 'react';
import { FaVihara, FaBed } from "react-icons/fa";
import { BiWalk } from "react-icons/bi";
import { GrWheelchairActive } from "react-icons/gr";
import { GiForestCamp } from "react-icons/gi";

const LodgingModal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  var pic;
  var picArr = [];
  for(var i = 0; i < props.lodging.length; i++){
    if(props.lodging[i] === 'Canvas tent'){
      pic = <FaVihara />;
      picArr.push(pic);
    }
    if(props.lodging[i] === 'Walk to listing'){
      pic = <BiWalk />;
      picArr.push(pic);
    }
    if(props.lodging[i] === 'Beds available'){
      pic = <FaBed />;
      picArr.push(pic);
    }
    if(props.lodging[i] === 'Wheelchair accessible'){
      pic = <GrWheelchairActive />;
      picArr.push(pic);
    }
    else if(props.lodging[i] === 'Campground'){
      pic = <GiForestCamp />;
      picArr.push(pic);
    }
  }
  return (
    <div className={showHideClassName}>
      <div className="LodgingModal">
      <div className="closeLodging" onClick={props.handleClose}>X</div>
      <b>Essentials</b>
      <div className="LodgingList">
      {props.lodging.map((item,index) => (
          <div className="smolModalItem">{picArr[index]} {item} </div>
        )
      )}
      </div>
      </div>

    </div>
  )
};

export default LodgingModal;
