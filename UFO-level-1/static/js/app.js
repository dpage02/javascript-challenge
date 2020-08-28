// from data.js
var tableData = data;

// select tbody section 
var tbody = d3.select("tbody");

// loop through the tableData
tableData.forEach((sighting) => {
    
    // add a row for every object in array 
    var row = tbody.append("tr");

    // loop through object, add td and place value of entry 
    Object.entries(sighting).forEach(([key,value]) => {
        var tdCell = row.append("td");
        if (key === 'city' || key === 'shape'){
            
            tdCell.text(value[0].toUpperCase() + value.substring(1));
        }
        else if (key === 'state' || key === 'country') {
            tdCell.text(value.toUpperCase());
        }
        else {
            tdCell.text(value);
        };
    });
});

// select referenes for form
var form = d3.select("form");
var button = d3.select("#filter-btn");

// create event handlers for values entered in form 
form.on("submit", run);
button.on("click", run);


function run(){

    // clear table
    tbody.html("");

    // prevent page from refreshing
    d3.event.preventDefault();
    
    // select the input element and get the raw Html node
    var inputEl = d3.select("input"); 

    // capture value property of the input element
    var inputVal = inputEl.property("value");
    console.log(inputVal); 

    // filter data based on input value
    var filteredSightings = tableData.filter(search => search.datetime === inputVal);
    console.log(filteredSightings);

    filteredSightings.forEach((sighting) => {
        console.log(sighting)
        // add a row for every object in array 
        var row = tbody.append("tr");
    
        // loop through object, add td and place value of entry 
        Object.entries(sighting).forEach(([key,value]) => {
            var tdCell = row.append("td");
            tdCell.text(value);
        });
    });
};
