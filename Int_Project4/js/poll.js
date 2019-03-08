$(document).ready(function() {

  $('input:radio').click(function() {

    $('input').removeClass('activeradio');
    $(this).addClass('activeradio');

  });

});

var script_url6 = "https://script.google.com/macros/s/AKfycbyqLukU8uoMgsETK76PyX7t6jEpWiOXIwPZCqSB0GZJYOs3o-E/exec";

// Make an AJAX call to Google Script
function insert_value() {

  $("#re").css("visibility", "hidden");
  // document.getElementById("loader6").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');

  var goodbad = $(".activeradio").val();
  var name = $(".yername").val();
  var thoughts = $(".yerthoughts").val();


  var url6 = script_url6 + "?callback=ctrlq&name=" + name + "&goodbad=" + goodbad + "&thoughts=" + thoughts + "&action=insert";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url6,
    method: "GET",
    dataType: "jsonp"
  });

}







function update_value() {
  $("#re").css("visibility","hidden");
     document.getElementById("loader8").style.visibility = "visible";


     var goodbad = $(".activeradio").val();
     var name = $(".name").val();
     var thoughts = $(".thoughts").val();



  var url6 = script_url6 + "?callback=ctrlq&name=" + name + "&goodbad=" + goodbad + "&thoughts=" + thoughts + "&action=update";


    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });


}





function delete_value() {

  $("#re").css("visibility","hidden");
     document.getElementById("loader8").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');

  var goodbad = $(".activeradio").val();
  var name = $(".name").val();
  var thoughts = $(".thoughts").val();



 var url6 = script_url6 + "?callback=ctrlq&name=" + name + "&goodbad=" + goodbad + "&thoughts=" + thoughts + "&action=delete";

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

}




// print the returned data
function ctrlq(e) {


  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
  read_value();

}




function read_value() {
  //

  $("#re").css("visibility","hidden");

     // document.getElementById("loader2").style.visibility = "visible";
   var url = script_url6+"?action=read";

  $.getJSON(url, function (json) {

      // Set the variables from the results array




          // CREATE DYNAMIC TABLE.
          var table = document.createElement("table");



          var header = table.createTHead();
  		var row = header.insertRow(0);
  		var cell1 = row.insertCell(0);
  		var cell2 = row.insertCell(1);

  		cell1.innerHTML = "<b>ID</b>";
  		cell2.innerHTML = "<b>name</b>";

          // ADD JSON DATA TO THE TABLE AS ROWS.
          for (var i = 0; i < json.records.length; i++) {

              tr = table.insertRow(-1);
  				var tabCell = tr.insertCell(-1);
                  tabCell.innerHTML = json.records[i].ID;
  				tabCell = tr.insertCell(-1);
  				tabCell.innerHTML = json.records[i].NAME;
              }


          // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
          var divContainer = document.getElementById("showData8");
          divContainer.innerHTML = "";
          divContainer.appendChild(table);
  		document.getElementById("loader8").style.visibility = "hidden";
  		$("#re").css("visibility","visible");
      });
}
