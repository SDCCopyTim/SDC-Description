const db = require('./index.js');
const fs = require('fs');

// Fill in the definition of insertMockData so that when
// this file is run in the terminal with `node seed.js`,
// all 10 products are inserted into the database

const States = ['California', 'New York', 'Texas', 'Washington', 'Oregon', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Colorad', 'Conneticut', 'Deleware', 'Florida', 'Georgia'. 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kentucky', 'Kansas', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexicao', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Utah', 'Vermont', 'Virginia', 'West Virgina', 'Wisconsin', 'Wyoming'];

const Farms = ['Brook Haven Ranch', 'Broken Brook Farms', 'Crooked Creek Farms', 'Lost Cove Homestead', 'Riverlands Ranch, Fox Run Farms', 'Badger Hill Farm', 'Wild Turkey Ranch', 'Fox Hollow Grove', 'Candera Cattle Farms', 'Black Acres Farm', 'Done Roaming', 'Almosta Ranch', 'Wits End Farm',' Dairy Air (heir)', 'Blazing Pitchforks', 'Birch Wood Farm', 'Magnolia Ranch', 'Whispering Pines', 'Cedar Tree Hollow'];

const Camps = ['Camp Foster', 'Camp Wonder', 'Camp Companionship', 'Camp Impotence', 'Camp Treachery', 'Camp Struggle', 'Camp Arachnid', 'Camp Woodpecker', 'Camp Enigma', 'Camp Lockheart', 'Camp Immunity', 'Camp Clemency', 'Camp Privilege', 'Camp Spite', 'Camp Mania', 'Camp Woe', 'Camp Brown Bear', 'Camp Morningstar', 'Camp Emerald', 'Camp Gizmo', 'Camp Return', 'Camp Solitude', 'Camp Tribute', 'Camp Frenzy', 'Camp Dishonor', 'Camp Anarchy', 'Camp Azure', 'Camp Firefly', 'Camp Turtle Shell', 'Camp Dawn', 'Camp Unity', 'Camp Salvation', 'Camp Covenant', 'Camp Wrath', 'Camp Abolition', 'Camp Stigma', 'Camp Eagle Eye', 'Camp Stardust', 'Camp Heartbreak', 'Camp Bumblebee'];

const checkIn = [];
const checkOut = [];
const cancellation = ['Easy', 'Moderate', 'Difficult', 'None'];
const onArrival = [];
const minimumNights = [];
const acceptsBookings = [];


const createCamp = () => {
  let camp = {};
  camp.States = `${States[Math.floor(Math.random() * Math.floor(States.length))]}`;
  camp.Farms = `${Farms[Math.floor(Math.random() * Math.floor(Farms.length))]}`;
  camp.Camps = `${Camps[Math.floor(Math.random() * Math.floor(Camps.length))]}`;
  camp.minimumNights = Math.floor(Math.random() * 100) + 1;
  camp.acceptsBookings = Math.floor(Math.random() * 12) + 1;

  camp.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`;
  return camp;
};

const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 10; i++){
    productsArr.push(createProduct())
  }
  return productsArr
}

const insertMockData = function() {
  var productsArr = createProducts();
  productsArr.forEach((product) => {
    db.query(`INSERT INTO Products (States, min_cost, curr_bid, ends_in, image) VALUES ('${product.item}', ${product.min_cost}, ${product.curr_bid}, ${product.ends_in}, '${product.image}')`)
  })
};

insertMockData();

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
