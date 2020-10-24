const db = require('./pg.index.js');

const models = {
  getOne: (id) => {
    return new Promise((resolve, reject) => {
      db
        .query(`SELECT * FROM CampSites WHERE id = ${id}`)
        .then(res => resolve(res.rows[0]))
        .catch(e => reject(e.stack));
    })
  },

  addOne: (data, callback) => {
    const {
      States,
      Farms,
      Camps,
      minimumNights,
      acceptsBookings,
      checkIn,
      checkOut,
      onArrival,
      costs,
      description,
      responses,
      recommended,
      Parks,
      Lodging,
      Essentials,
      Amentities,
      Owners,
      photosofResponsers,
      cancellation,
      checkmark
    } = data

    db.query(`INSERT INTO CampSites (States, Farms, Camps, minimumNights, acceptsBookings, checkIn, checkOut, onArrival, costs, description, responses, recommended, Parks, Lodging, Essentials, Amentities, Owners, photosofResponsers, cancellation, checkmark) VALUES ("${States}", "${Farms}", "${Camps}", "${minimumNights}", "${acceptsBookings}", "${checkIn}", "${checkOut}", "${onArrival}", ${costs}, "${description}", "${responses}", "${recommended}", "${Parks}", "${Lodging}", "${Essentials}", "${Amentities}", "${Owners}", "${photosofResponsers}", "${cancellation}", "${checkmark}")`, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
  },

  updateOne: (id, data, callback) => {
    let queryStr = `UPDATE CampSites SET ${Object.keys(data)[0]}="${Object.values(data)[0]}" WHERE id=${id}`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  deleteOne: (id, callback) => {
    db.query(`DELETE FROM CampSites WHERE id=${id}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

}

module.exports = models;