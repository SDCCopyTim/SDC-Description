const db = require('./index.js');
const fs = require('fs');


// Fill in the definition of insertMockData so that when
// this file is run in the terminal with `node seed.js`,
// all 10 products are inserted into the database

const States = ['California', 'New York', 'Texas', 'Washington', 'Oregon', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Colorad', 'Conneticut', 'Deleware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kentucky', 'Kansas', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexicao', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Utah', 'Vermont', 'Virginia', 'West Virgina', 'Wisconsin', 'Wyoming'];

const Farms = ['Brook Haven Ranch', 'Broken Brook Farms', 'Crooked Creek Farms', 'Lost Cove Homestead', 'Riverlands Ranch, Fox Run Farms', 'Badger Hill Farm', 'Wild Turkey Ranch', 'Fox Hollow Grove', 'Candera Cattle Farms', 'Black Acres Farm', 'Done Roaming', 'Almosta Ranch', 'Wits End Farm',' Dairy Air (heir)', 'Blazing Pitchforks', 'Birch Wood Farm', 'Magnolia Ranch', 'Whispering Pines', 'Cedar Tree Hollow'];

const Camps = ['Camp Foster', 'Camp Wonder', 'Camp Companionship', 'Camp Impotence', 'Camp Treachery', 'Camp Struggle', 'Camp Arachnid', 'Camp Woodpecker', 'Camp Enigma', 'Camp Lockheart', 'Camp Immunity', 'Camp Clemency', 'Camp Privilege', 'Camp Spite', 'Camp Mania', 'Camp Woe', 'Camp Brown Bear', 'Camp Morningstar', 'Camp Emerald', 'Camp Gizmo', 'Camp Return', 'Camp Solitude', 'Camp Tribute', 'Camp Frenzy', 'Camp Dishonor', 'Camp Anarchy', 'Camp Azure', 'Camp Firefly', 'Camp Turtle Shell', 'Camp Dawn', 'Camp Unity', 'Camp Salvation', 'Camp Covenant', 'Camp Wrath', 'Camp Abolition', 'Camp Stigma', 'Camp Eagle Eye', 'Camp Stardust', 'Camp Heartbreak', 'Camp Bumblebee'];

const onArrival = ['Do it yourself', 'Meet and Greet', 'TBA'];
const cancellation = ['Easy', 'Moderate', 'Difficult', 'None'];
const checkIn = ['After 12PM', 'After 1PM', 'After 2PM', 'After 3PM', 'After 4PM', 'After 5PM', 'After 6PM', 'After 7PM', 'After 12PM', 'After 8PM', 'After 9PM'];
const checkOut = ['Before 7AM', 'Before 8AM', 'Before 9AM', 'Before 10AM', 'Before 11AM', 'Before 12PM', 'Before 1PM', 'Before 2PM'];
const costs = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]

var data = fs.readFileSync(('./paragraphs.txt'), 'utf8', (err, results) => {
  if (err) {
    console.log(err);
  } else {
    return results;
  }
});
let resArr = data.toString().split('. ');


const getData = () => {
  let parag = '';
  for (let i = 5; i >= 0; i--) {
    parag = parag + (resArr[(Math.floor(Math.random() * Math.floor(resArr.length)))]) + ". ";
  }
  return parag;
}

  const createCamp = () => {
  let camp = {};
  camp.States = `${States[Math.floor(Math.random() * Math.floor(States.length))]}`;
  camp.Farms = `${Farms[Math.floor(Math.random() * Math.floor(Farms.length))]}`;
  camp.Camps = `${Camps[Math.floor(Math.random() * Math.floor(Camps.length))]}`;
  camp.minimumNights = (Math.floor(Math.random() * 100) + 1) + ' nights';
  camp.acceptsBookings = (Math.floor(Math.random() * 12) + 1) + 'months out';
  camp.checkIn = `${checkIn[Math.floor(Math.random() * Math.floor(checkIn.length))]}`;
  camp.checkOut = `${checkOut[Math.floor(Math.random() * Math.floor(checkOut.length))]}`;
  camp.onArrival = `${onArrival[Math.floor(Math.random() * Math.floor(onArrival.length))]}`;
  camp.costs = `${costs[Math.floor(Math.random() * Math.floor(costs.length))]}`;
  camp.description = getData();
  camp.review = getData();
  camp.responses = Math.ceil(Math.random() * Math.ceil(200)) + " Responses";
  camp.recommended = "+" + Math.ceil(Math.random() * Math.ceil(200));
  return camp;
  }

const createCamps = () => {
  let campsArr = [];
  for(let i = 1; i <= 100; i++){
    campsArr.push(createCamp())
  }
  return campsArr
}

const insertMockData = function() {
  var campsArr = createCamps();
  campsArr.forEach((camp) => {
    db.query(`INSERT INTO CampSites (States, Farms, Camps, minimumNights, acceptsBookings, checkIn, checkOut, onArrival, description, costs, review, responses, recommended) VALUES ('${camp.States}', '${camp.Farms}', '${camp.Camps}',  '${camp.minimumNights}', '${camp.acceptsBookings}', '${camp.checkIn}', '${camp.checkOut}', '${camp.onArrival}', '${camp.description}', ${camp.costs}, '${camp.review}', '${camp.responses}', '${camp.recommended}')`)
  })
};

insertMockData();

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
