const url = "https://api.spacexdata.com/v4/launchpads";
const urlDragon = "https://api.spacexdata.com/v4/dragons";

d3.json(url).then(function(receivedData){  
    console.log(receivedData)
});
