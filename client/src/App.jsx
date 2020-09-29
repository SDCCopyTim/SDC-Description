import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: [],
      currCampSite: {}
    };
  };
  componentDidMount(){
    axios.get('/all')
      .then((results) => {
        this.setState({
          campsites: results.data,
          currCampSite: results.data[0]
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }




  render() {

    return (
      <div className="MainContainer">
        <div className="LeftModule">
          <div className="TitleModule">
            <ul className="nav">
              <li><a>United States</a></li>
              <li><a> > </a></li>
              <li><a href="#States">{this.state.currCampSite.States}</a></li>
              <li><a> > </a></li>
              <li><a href="#Farms">{this.state.currCampSite.Farms}</a></li>
              <li><a> > </a></li>
            </ul>
            <div className="CampSite">
              <h1>CampSite</h1>
              <p>Nearby: Bastrop State Park, Buescher State Park</p>
              <ul className="Recommend">
                <li><a href="#about">Recommend</a></li>
                <li>
                  <div className="container">
                    <div className="circle" id="circle1"></div>
                    <div className="circle" id="circle2"></div>
                    <div className="circle" id="circle3"></div>
                    <div className="circle" id="circle4"></div>
                  </div>
                </li>
                <li><a href="#contact">Upload</a></li>
                <li><a href="#contact">Save To List</a></li>
                <li><a href="#contact">Share</a></li>
              </ul>
            </div>
          </div>
          <div className="DescriptionModule">
            <h1>Description Module</h1>
            <p>
            </p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Id consectetur purus ut faucibus pulvinar. Vestibulum rhoncus est pellentesque elit ullamcorper. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Nisl condimentum id venenatis a condimentum vitae. Eros in cursus turpis massa tincidunt dui ut. Lacus vestibulum sed arcu non odio euismod lacinia. At urna condimentum mattis pellentesque id nibh. Adipiscing bibendum est ultricies integer.
           <details>
              <summary>Read more...</summary>
            </details>
          </div>


          <br></br>

          <div className="AmentitiesEssentialsLodging">
            <div className="Lodging">Lodging
              <p>Lodging</p>
            </div>
            <div className="Essentials">Essentials
              <p>Essentials</p>
            </div>
            <div className="Amentities">Amentities
            <p>Amentities</p>
            </div>
          </div>

            <div className="QuestionsModule">
              <p>
                Have a Question? Send X & Y a message!
           </p>
            </div>
            <div className="Details">
              <div className="details">Details
           </div>
              <div className="checkIn">
                <ul>
                  <li>Check In:</li>
                  <li>Check Out:</li>
                  <li>Cancellation Policy:</li>
                </ul>
              </div>
              <div className="onArrival">
                <ul>
                  <li>On Arrival:</li>
                  <li>Minimum Nights:</li>
                  <li>Accepts Bookings:</li>
                </ul>
              </div>

            </div>
      </div>
            <div className="Calendar">
              <h1>Calendar</h1>
            </div>
       </div>
    );
  };
};


export default App;