/*
   @name Police Data API
   @author john@invisiblearchitects.com
   @description Fetches Data from the UK Police Database

*/

/*
 @name getCrimeForLocation
 @description  Crimes at street-level within a 1 mile radius of a single point
 @param {number|string} latitude
 @param {number|string} longitude
 @param {object|Date} date object
 @returns {object} object containing crime data
*/

const getCrimesForLocation = async(latitude,longitude,date) => {

  let crimes = [];

  try {
      
    let response = await fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date.getFullYear()}-${date.getMonth()}`)
    crimes = await response.json();
    
  } catch(e) {
    console.error(e);
  }
  
  return crimes.map(crime=>{ // map out any non essential data
    return { type:crime.category,lat:parseFloat(crime.location.latitude,10),lng:parseFloat(crime.location.longitude,10) }
  });
  
}

export default {
  getCrimesForLocation
}
