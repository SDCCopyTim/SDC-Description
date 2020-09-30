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



const AmentitiesModal = ({handleClose, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main-amentities">
      <h1>Amentities</h1>
      </div>
      <div className="close" onClick={handleClose}>X</div>
    </div>
  )
};

export default AmentitiesModal;