// Conversion rate
const marlaToSqft = 272;

// Convert function  
function convert() {

  // Get marla input
  let marla = document.getElementById("marla").value;
  
  // Calculate conversion
  let sqft = marla * marlaToSqft;  

  // Display output
  document.getElementById("result").innerHTML = 
    marla + " marla = " + sqft + " square feet";
}