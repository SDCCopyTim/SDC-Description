import React from 'react';
import AmentitiesList from './AmentitiesList.jsx';

const Amentities = (props) => {
    return(
      <div className="amentities-list">
        {props.amentities.map((item, index) => (
          <AmentitiesList item={item} key={index} />
        ))}
        <div className="footer" onClick={props.showAmentitiesModal}>More Details</div>
      </div>
    );
};

export default Amentities;