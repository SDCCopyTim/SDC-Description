const faker = require('faker');
const fs = require('fs');

const checkInList = ['After 12PM', 'After 1PM', 'After 2PM', 'After 3PM', 'After 4PM', 'After 5PM', 'After 6PM', 'After 7PM', 'After 12PM', 'After 8PM', 'After 9PM'];

const checkOutList = ['Before 7AM', 'Before 8AM', 'Before 9AM', 'Before 10AM', 'Before 11AM', 'Before 12PM', 'Before 1PM', 'Before 2PM'];

const onArrivalList = ['Do it yourself', 'Meet and Greet', 'TBA'];

const LodgingList = [
  'Canvas tent', 'Walk to listing', 'Beds available', 'Wheelchair accessible', 'Campground'
]

const EssentialsList = [
 'Campfires allowed', 'Toilet available', 'Pets allowed', 'Showers available', 'Free dinner'
]

const AmentitiesList = [
 'Portable water available', 'Jaccuzis Included', 'No Free WiFi', 'Pack it out', 'Has Wifi'
]

getRando = () => {
  var rando = Math.ceil(Math.random() * Math.ceil(5) + 1);
  return rando;
}

fillArr = (campArr) => {
  var arr = [];
  var repeat = false;
  for(var i = 0; i < getRando(); i++){
    var temp = campArr[Math.floor(Math.random() * Math.floor(campArr.length))];
    for(var j = 0; j < arr.length; j++){
      if(arr[j] === temp){
      repeat = true;
      }
    }
    if(repeat === false){
      arr.push(temp);
    }
  }
  return arr;
}

const cancellationList = ['Easy', 'Moderate', 'Difficult', 'None'];


// Create 10 million records
const writeRecords = fs.createWriteStream('records.csv');
writeRecords.write('id,States,Farms,Camps,minimumNights,acceptsBookings,checkIn,checkOut,onArrival,costs,description,review,responses,recommended,Parks,Lodging,Essentials,Amentities,Owners,photosofResponsers,cancellation,checkmark\n', 'utf8');

function writeTenMillionRecords(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const campId = id;
      const state = `${faker.address.state()}`;
      const farm = `${faker.random.word()} ${faker.random.word()} Farm`;
      const camp = `Camp ${faker.lorem.word()} ${faker.lorem.word()}`;
      const minimumNights = `${faker.random.number()} nights`;
      const acceptsBookings = `${faker.random.number()} months out`;
      const checkIn = `${checkInList[Math.floor(Math.random() * Math.floor(checkInList.length))]}`;
      const checkOut = `${checkOutList[Math.floor(Math.random() * Math.floor(checkOutList.length))]}`;
      const onArrival = `${onArrivalList[Math.floor(Math.random() * Math.floor(onArrivalList.length))]}`;
      const costs = `${faker.random.number()}`;
      const description = `${faker.lorem.paragraph()}`;
      const review = `${faker.lorem.paragraph()}`;
      const responses = `+${faker.random.number()}`;
      const recommended = `${Math.ceil(Math.random() * Math.ceil(100))}%`;
      const Parks = `${faker.random.word()} Park, ${faker.random.word()} ${faker.random.word()} Park`;
      const Lodging = fillArr(LodgingList).join(",");
      const Essentials = fillArr(EssentialsList).join(",");
      const Amentities = fillArr(AmentitiesList).join(",");
      const Owners = `${faker.name.firstName()}`;
      const photosOfResponsers = `${faker.internet.avatar()},${faker.internet.avatar()},${faker.internet.avatar()},${faker.internet.avatar()}`;
      const cancellation = `${cancellationList[Math.floor(Math.random() * Math.floor(cancellationList.length))]}`;
      const checkmark = `${faker.random.boolean()}`;

      const data = `${campId},${state},${farm},${camp},${minimumNights},${acceptsBookings},${checkIn},${checkOut},${onArrival},${costs},${description},${review},${responses},${recommended},"${Parks}","${Lodging}","${Essentials}","${Amentities}",${Owners},"${photosOfResponsers}",${cancellation},${checkmark}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionRecords(writeRecords, 'utf-8', () => {
  writeRecords.end();
});