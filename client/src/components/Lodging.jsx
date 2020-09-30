import React from 'react';
import LodgingList from './LodgingList.jsx';

const Lodging = (props) => {
    return(
      <div className="lodging-list">
      {props.lodging.map((item, index) =>(
        <LodgingList item={item} key={index}/>
      ))}
      <div className="footer">More Details</div>
      </div>
    );
};

export default Lodging;