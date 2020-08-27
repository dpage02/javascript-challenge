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
        tdCell.text(value);
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

