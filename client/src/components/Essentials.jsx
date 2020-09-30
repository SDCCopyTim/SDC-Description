import React from 'react';
import EssentialsList from './EssentialsList.jsx';

const Essentials = (props) => {
    return(
      <div className="essentials-list">
      {props.essentials.map((item, index) =>(
        <EssentialsList item={item} key={index}/>
      ))}
      <div className="footer" onClick={props.showEssentialsModal}>More Details</div>
      </div>
    );
};

export default Essentials;