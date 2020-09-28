import React from 'react';
// import '../public/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };


  render() {

    return (
      <div id="MainContainer">
        <div class="LeftModule">
          <div class="TitleModule">
            <ul class="nav">
              <li><a href="#about">United States > </a></li>
              <li><a href="#clients">Texas > </a></li>
              <li><a href="#contact">Ardor Wood Farm</a></li>
            </ul>
            <div class="CampSite">
              <h1>CampSite</h1>
            </div>
          </div>
          <div class="DescriptionModule">
            <h1>Description Module</h1>
          </div>
          <div class="AmenitiesEssentialsLodging">
            <h1>Amentities Essentials Lodging</h1>
          </div>
          <div class="QuestionsModule">
            <h1>Questions</h1>
          </div>
          <div class="Details">
            <h1>Details</h1>
          </div>
        </div>
        <div class="Calendar">
          <h1>Calendar</h1>
        </div>
      </div>
    );
  };
};


// <div class="container">
//   <div class="circle" id="circle1"></div>
//   <div class="circle" id="circle2"></div>
//   <div class="circle" id="circle3"></div>
//   <div class="circle" id="circle4"></div>
// </div>

export default App;