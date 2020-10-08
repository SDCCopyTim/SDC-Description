const db = require('./index.js');
const fs = require('fs');
const path = require('path');


// Fill in the definition of insertMockData so that when
// this file is run in the terminal with `node seed.js`,
// all 10 products are inserted into the database

const States = ['California', 'New York', 'Texas', 'Washington', 'Oregon', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Colorad', 'Conneticut', 'Deleware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kentucky', 'Kansas', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexicao', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Utah', 'Vermont', 'Virginia', 'West Virgina', 'Wisconsin', 'Wyoming'];

const Farms = ['Brook Haven Ranch', 'Broken Brook Farms', 'Crooked Creek Farms', 'Lost Cove Homestead', 'Riverlands Ranch, Fox Run Farms', 'Badger Hill Farm', 'Wild Turkey Ranch', 'Fox Hollow Grove', 'Candera Cattle Farms', 'Black Acres Farm', 'Done Roaming', 'Almosta Ranch', 'Wits End Farm',' Dairy Air (heir)', 'Blazing Pitchforks', 'Birch Wood Farm', 'Magnolia Ranch', 'Whispering Pines', 'Cedar Tree Hollow'];

const Camps = ['Camp Foster', 'Camp Wonder', 'Camp Companionship', 'Camp Impotence', 'Camp Treachery', 'Camp Struggle', 'Camp Arachnid', 'Camp Woodpecker', 'Camp Enigma', 'Camp Lockheart', 'Camp Immunity', 'Camp Clemency', 'Camp Privilege', 'Camp Spite', 'Camp Mania', 'Camp Woe', 'Camp Brown Bear', 'Camp Morningstar', 'Camp Emerald', 'Camp Gizmo', 'Camp Return', 'Camp Solitude', 'Camp Tribute', 'Camp Frenzy', 'Camp Dishonor', 'Camp Anarchy', 'Camp Azure', 'Camp Firefly', 'Camp Turtle Shell', 'Camp Dawn', 'Camp Unity', 'Camp Salvation', 'Camp Covenant', 'Camp Wrath', 'Camp Abolition', 'Camp Stigma', 'Camp Eagle Eye', 'Camp Stardust', 'Camp Heartbreak', 'Camp Bumblebee'];

const Parks = ['Hamilton Park', 'Gautama Park', 'Allen Poe Park', 'Earhart Park', 'Truth Park', 'Yarrow Park', 'Bellflower Park', 'Maidenhair Park', 'Candytuft Park', 'Daphne Park', 'Agouti Park', 'Galah Park', 'Komodo Park', 'Raccoon Park',' Woodchuck Park', 'Horizon Park', 'Harmony Park', 'Aurora Park', 'Serein Park', 'Gaia Park', 'Pie Form Park', 'Pie Awe Park', 'Pie Oasis Park', 'Pie Resource Park', 'Piezoid Park', 'Pie Blizzard Park', 'Pie Valley Park', 'Pie Earth Park', 'Pie Exist Park', 'Pie Cloud Park', 'Pie Nature']

const Owners = ['Tim', 'Tracy', 'Jason', 'Nick', 'Alphina', 'Alvin', 'Paul', 'Tiffany', 'Jeff', 'Justin', 'Anthony', 'Julian', 'Hilary', 'Mark', 'Polo', 'Kenny', 'Henry', 'Timothy', 'Tomothy', 'Brent', 'Howard', 'Hiep', 'Andy', 'Jessica']

const check = ['true', 'false'];

const Lodging = [
  // {'Canvas tent' : 'fas fa-hotel'},
  // {'Walk to listing' : 'fas fa-blind'},
  // {'Beds available' : 'fas fa-bed'},
  // {'Wheelchair accessable' : 'fab fa-accessible-icon'},
  // {'Campground' : 'far fa-campground'}
  'Canvas tent', 'Walk to listing', 'Beds available', 'Wheelchair accessible', 'Campground'
]

const Essentials = [
  // {'Campfires allowed' : 'fas fa-fire'},
  // {'Toilet available' : 'fas fa-toilet-paper'},
  // {'Pets allowed' : 'fas fa-dog'},
  // {'Showers available' : 'fas fa-shower'},
  // {'Free dinner' : 'fas fa-hamburger'}
  'Campfires allowed', 'Toilet available', 'Pets allowed', 'Showers available', 'Free dinner'
]

const Amentities = [
  // {'Portable water available' : 'fas fa-water'},
  // {'No showers': 'fas fa-shower'},
  // {'No Wifi' : 'fas fa-wifi'},
  // {'Pack it out' : 'fas fa-pizz-slice'}
  'Portable water available', 'No showers', 'No WiFi', 'Pack it out', 'Has Wifi'
]

const photosOfResponsers =[]

const onArrival = ['Do it yourself', 'Meet and Greet', 'TBA'];
const cancellation = ['Easy', 'Moderate', 'Difficult', 'None'];
const checkIn = ['After 12PM', 'After 1PM', 'After 2PM', 'After 3PM', 'After 4PM', 'After 5PM', 'After 6PM', 'After 7PM', 'After 12PM', 'After 8PM', 'After 9PM'];
const checkOut = ['Before 7AM', 'Before 8AM', 'Before 9AM', 'Before 10AM', 'Before 11AM', 'Before 12PM', 'Before 1PM', 'Before 2PM'];
const costs = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]

var data = fs.readFileSync(path.join(__dirname, './paragraphs.txt'), 'utf8', (err, results) => {
  if (err) {
    console.log(err);
  } else {
    return results;
  }
});
let resArr = data.toString().split('. ');


const getData = () => {
  let parag = '';
  for (let i = 15; i >= 0; i--) {
    parag = parag + (resArr[(Math.floor(Math.random() * Math.floor(resArr.length)))]) + ". ";
  }
  return parag;
}

getPhotos = () => {
  for(var i = 0; i< 346; i++){
    photosOfResponsers.push(`https://timcamp.s3-us-west-1.amazonaws.com/camp${i}.jpg`);
  }
}
getPhotos();

returnPhotos = () => {
  var arr = [];
  for(var i = 0; i < 4; i++){
    arr.push(`${photosOfResponsers[Math.floor(Math.random() * Math.floor(photosOfResponsers.length))]}`);
  }
  return arr;
}

getRando = () => {
  var rando = Math.ceil(Math.random() * Math.ceil(5) + 1);
  return rando;
}

fillArr = (campArr) => {
  var arr = [];
  for(var i = 0; i < getRando(); i++){
    arr.push(campArr[Math.floor(Math.random() * Math.floor(campArr.length))]);
  }
  return arr;
}


  const createCamp = () => {
  let camp = {};
  camp.States = `${States[Math.floor(Math.random() * Math.floor(States.length))]}`;
  camp.Farms = `${Farms[Math.floor(Math.random() * Math.floor(Farms.length))]}`;
  camp.Camps = `${Camps[Math.floor(Math.random() * Math.floor(Camps.length))]}`;
  camp.minimumNights = (Math.floor(Math.random() * 100) + 1) + ' nights';
  camp.acceptsBookings = (Math.floor(Math.random() * 12) + 1) + ' months out';
  camp.checkIn = `${checkIn[Math.floor(Math.random() * Math.floor(checkIn.length))]}`;
  camp.checkOut = `${checkOut[Math.floor(Math.random() * Math.floor(checkOut.length))]}`;
  camp.onArrival = `${onArrival[Math.floor(Math.random() * Math.floor(onArrival.length))]}`;
  camp.costs = `${costs[Math.floor(Math.random() * Math.floor(costs.length))]}`;
  camp.description = getData();
  camp.review = getData();
  camp.responses = "+" + Math.ceil(Math.random() * Math.ceil(200));
  camp.recommended = + Math.ceil(Math.random() * Math.ceil(100)) + "%";
  camp.Parks = [`${Parks[Math.floor(Math.random() * Math.floor(Parks.length))]}`, ` ${Parks[Math.floor(Math.random() * Math.floor(Parks.length))]}`];
  camp.Lodging = fillArr(Lodging);
  camp.Essentials = fillArr(Essentials);
  camp.Amentities = fillArr(Amentities);
  camp.Owners = Owners[Math.floor(Math.random() * Math.floor(Owners.length))];
  camp.photosOfResponsers = returnPhotos();
  camp.cancellation = `${cancellation[Math.floor(Math.random() * Math.floor(cancellation.length))]}`;
  camp.checkmark = `${check[Math.floor(Math.random() * Math.floor(check.length))]}`;

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
    db.query(`INSERT INTO CampSites (States, Farms, Camps, minimumNights, acceptsBookings, checkIn, checkOut, onArrival, description, costs, review, responses, recommended, Parks, Lodging, Essentials, Amentities, Owners, photosOfResponsers, cancellation, checkmark) VALUES ('${camp.States}', '${camp.Farms}', '${camp.Camps}',  '${camp.minimumNights}', '${camp.acceptsBookings}', '${camp.checkIn}', '${camp.checkOut}', '${camp.onArrival}', '${camp.description}', ${camp.costs}, '${camp.review}', '${camp.responses}', '${camp.recommended}', '${camp.Parks}', '${camp.Lodging}', '${camp.Essentials}', '${camp.Amentities}', '${camp.Owners}', '${camp.photosOfResponsers}', '${camp.cancellation}', '${camp.checkmark}')`)
  })
};

insertMockData();

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
