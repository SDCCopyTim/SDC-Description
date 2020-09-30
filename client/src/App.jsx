import React from 'react';
import axios from 'axios';
import Lodging from './components/Lodging.jsx';
import Essentials from './components/Essentials.jsx';
import Amentities from './components/Amentities.jsx';
import Modal from './Modal.jsx';
import LodgingModal from './LodgingModal.jsx';
import EssentialsModal from './EssentialsModal.jsx';
import AmentitiesModal from './AmentitiesModal.jsx';
import { FaCamera } from "react-icons/fa";
import { MdShare } from "react-icons/md"
import { FaThumbsUp } from "react-icons/fa";
import { BsChevronBarDown } from "react-icons/bs";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: [],
      currCampSite:[],
      photos: [],
      lodging: [],
      amentities: [],
      essentials: [],
      show: false,
      showAmentities: false,
      showLodging: false,
      showEssentials: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showAmentitiesModal = this.showAmentitiesModal.bind(this);
    this.hideAmentities = this.hideAmentities.bind(this);
    this.showEssentialsModal = this.showEssentialsModal.bind(this);
    this.hideEssentials = this.hideEssentials.bind(this);
    this.showLodgingModal = this.showLodgingModal.bind(this);
    this.hideLodging = this.hideLodging.bind(this);
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

  showModal(e) {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    })
  }

  hideModal(){
    this.setState({
      show:false
    })
  }

  showAmentitiesModal(e){
    e.preventDefault();
    this.setState({
      showAmentities: !this.state.showAmentities
    })
  }

  hideAmentities(){
    this.setState({
      showAmentities:false
    })
  }

  showEssentialsModal(e){
    e.preventDefault();
    this.setState({
      showEssentials: !this.state.showEssentials
    })
  }

  hideEssentials(){
    this.setState({
      showEssentials:false
    })
  }
  showLodgingModal(e){
    e.preventDefault();
    this.setState({
      showLodging: !this.state.showLodging
    })
  }

  hideLodging(){
    this.setState({
      showLodging:false
    })
  }


  render() {

    return (
      <div>
        <Modal id="modal" show={this.state.show} handleClose={this.hideModal} onClick={this.showModal} />

        <AmentitiesModal id="modal" show={this.state.showAmentities} handleClose={this.hideAmentities} onClick={this.showAmentitiesModal} amentities={this.state.amentities}/>

        <LodgingModal id="modal" show={this.state.showLodging} handleClose={this.hideLodging} onClick={this.showLodgingModal} lodging={this.state.lodging}/>

        <EssentialsModal id="modal" show={this.state.showEssentials} handleClose={this.hideEssentials} onClick={this.showEssentialsModal} essentials={this.state.essentials}/>

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
                  <div className="circle" id="notCircle">{this.state.currCampSite.responses}</div>
                </div>
                <div className="Share">
                  <div className="A" onClick={this.showModal}><a className="a"><FaCamera /><div className="upload">Upload</div></a>
                  </div>
                  <div className='B' onClick={this.showModal}><a className='b'><BsChevronBarDown /><div className="save">Save To List</div></a>
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

            </div>


            <br></br>

            <div className="AmentitiesEssentialsLodging">
              <div className="Lodging"><b>Lodging</b>
                <Lodging lodging={this.state.lodging} showLodgingModal={this.showLodgingModal}/>
              </div>
              <div className="Essentials"><b>Essentials</b>
                <Essentials essentials={this.state.essentials} showEssentialsModal={this.showEssentialsModal}/>
              </div>
              <div className="Amentities"><b>Amentities</b>
                <Amentities amentities={this.state.amentities} showAmentitiesModal={this.showAmentitiesModal}/>
              </div>
            </div>

            <div className="QuestionsModule" onClick={this.showModal}>
              Have a Question? <div className="owners">Send {this.state.currCampSite.Owners} a message! </div>
            </div>
            <div className="Details">
              <div className="details">Details
           </div>
              <div className="checkIn">
                <ul>
                  <li>Check In: {this.state.currCampSite.checkIn}</li>
                  <li>Check Out: {this.state.currCampSite.checkOut}</li>
                  <li>Cancellation Policy: {this.state.currCampSite.cancellation}</li>
                </ul>
              </div>
              <div className="onArrival">
                <ul>
                  <li>On Arrival: {this.state.currCampSite.onArrival}</li>
                  <li>Minimum Nights: {this.state.currCampSite.minimumNights}</li>
                  <li>Accepts Bookings: {this.state.currCampSite.acceptsBookings}</li>
                </ul>
              </div>

            </div>
          </div>
          <div className="Calendar">
            <div className="smolCalendar">
              <div className="Cost">
                <b>${this.state.currCampSite.costs}</b>
                <div className="pernight">per night</div>
              </div>
              <div className="CheckInCheckOutGuests">
                <div className="checkin"><b>Check In</b><br></br>
              Select Date</div>
                <div className="checkout"><b>Check Out</b><br></br>
              Select Date</div>
                <div className="guests"><b>Guests</b><br></br>
              Select Date</div>
              </div>
              <div className="InstantBook">Instant Book</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};


export default App;