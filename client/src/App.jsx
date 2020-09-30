import React from 'react';
import axios from 'axios';
import { FaCamera } from "react-icons/fa";
import { MdShare } from "react-icons/md"
import { FaThumbsUp } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: [],
      currCampSite: {},
      photos: [],
      loding: [],
      amentities: [],
      essentials: []
    };
  };
  componentDidMount(){
    axios.get('/all')
      .then((results) => {
        this.setState({
          campsites: results.data,
          currCampSite: results.data[0],
          photos: results.data[0].photosOfResponsers.split(','),
          lodging: results.data[0].Lodging.split(','),
          amentities: results.data[0].Amentities.split(','),
          essentials: results.data[0].Essentials.split(',')
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
              <h1>{this.state.currCampSite.Farms}</h1>
              <p><b>Nearby:</b> {this.state.currCampSite.Parks}</p>
            </div>

            <div className="Recommends">

              <div className="Recommend">
                <a><FaThumbsUp />{this.state.currCampSite.recommended} </a>
                <div className="color">Recommend
                </div>
              </div>

              <div className="Photos">
                <img src={this.state.photos[0]} className="circle" id="circle1" />
                <img src={this.state.photos[1]} className="circle" id="circle2" />
                <img src={this.state.photos[2]} className="circle" id="circle3" />
                <img src={this.state.photos[3]} className="circle" id="circle4" />
                <div class="circle" id="notCircle">{this.state.currCampSite.responses}</div>
              </div>
              <div className="Share">
                <div className='A'><a className='a'><FaCamera /> Upload</a>
                </div>
                <div className='B'><a className='b'>Save To List</a>
                </div>
                <div className='C'><a className='c'><MdShare /></a>
                </div>
              </div>
            </div>

          </div>
          <br></br>
          <div className="DescriptionModule">
            <p>
            </p>{this.state.currCampSite.description}
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