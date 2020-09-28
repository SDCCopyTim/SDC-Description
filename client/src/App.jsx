import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };


  render() {

    return (
    <div id="MainContainer">
      <div class="TitleModule">
        <h1>Title Module</h1>
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
      <div class="Calendar">
        <h1>Calendar</h1>
      </div>
    </div>
    );
  };
};

export default App;