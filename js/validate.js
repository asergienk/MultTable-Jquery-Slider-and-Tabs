//Function to generate a multiplication table based on user's range input.
function generateTable() {
  //getting input values
  var minCol = parseInt(document.getElementById("minCol").value);
  var maxCol = parseInt(document.getElementById("maxCol").value);
  var minRow = parseInt(document.getElementById("minRow").value);
  var maxRow = parseInt(document.getElementById("maxRow").value);
  var error = document.getElementById("message");


  var table = document.getElementById("multTable");
  var result = "";
  //creating a multTable
  for(var i=minRow; i<=maxRow;i++)
  {
      //executed only once
      if(i==minRow)
      {
        //starting a new row
        result += "<tr>";
        result += "<th>&times;</th>";
      }

      for(var j=minCol; j<=maxCol; j++)
      {
          if(i==minRow || j==minCol)
          {
            //filling out top row of the table
            if(i==minRow)
              result += "<th>" + j + "</th>";
            else
              result += "<td>"+ (i-1)*j + "</td>";
          }
          else
            result += "<td>"+ (i-1)*j + "</td>";
      }
        //closing the row
        result += "</tr>";
        result += "<tr>";
        //filling out left most column of the table
        result += "<th>" + i + "</th>";
        if(i==maxRow)
        {
          for(var j=minCol; j<=maxCol; j++)
          {
            result += "<td>"+ i*j + "</td>";
          }
        }
    }
  //printing the table
  table.innerHTML=result;

  return false;
}

//Function to validate user's input
$(function() {
  //Methods that I added for validation
  //Checks if maxCol is greater than minCol and maxRow is greater than minRow: returns true if it is or false otherwise
  $.validator.addMethod('greaterThan', function(value, element, params) {
    return this.optional(element) || parseInt(value) >= parseInt($(params).val());
  });
  //Checks if inputted numbers are integers: returns true if they are or false otherwise
  $.validator.addMethod('numberIsInteger', function(value, element) {
      if(Math.floor(value) == value && $.isNumeric(value))
        return true;
      return false;
  });
//Prevent default submission of the form
  $("#inputForm").submit(function(e) {
    e.preventDefault();
  }).validate({
    errorClass: 'error',
    rules: {
      minCol: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        numberIsInteger: true
      },
      maxCol: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        greaterThan: "#minCol",
        numberIsInteger: true
      },
      minRow: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        numberIsInteger: true
      },
      maxRow: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        greaterThan: "#minRow",
        numberIsInteger: true
      }
    },
    messages: {
      minCol: {
        required: 'Please enter a Minimum Column Value.',
        number: 'Please enter a number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.',
        numberIsInteger: 'Please enter an integer.'
      },
      maxCol: {
        required: 'Please enter a Maximum Column Value.',
        number: 'Please enter a number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.',
        greaterThan: 'This value should be greater than Minimum Column Value.',
        numberIsInteger: 'Please enter an integer.'
      },
      minRow: {
        required: 'Please enter a Minimum Row Value.',
        number: 'Please enter a number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.',
        numberIsInteger: 'Please enter an integer.'
      },
      maxRow: {
        required: 'Please enter a Minimum Column Value.',
        number: 'Please enter a number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.',
        greaterThan: 'This value should be greater than Minimum Row Value.',
        numberIsInteger: 'Please enter an integer.'
      }
    },//end messages
    //Only submits the form if the input is valid
    submitHandler: function(form) {
      generateTable();
      return false;
    }
  });//end validate

$('.sliderMC').slider({
  range: "max",
  value: -50,
  min: -50,
  max: 50,
  slide: function(event, ui) {
    $( "#minCol" ).val( ui.value );
    $(ui.value).val($('#minCol').val());
  },
});//end slider
$("#minCol").change(function() {
  $('.sliderMC').slider("value", $(this).val());
});

$('.sliderMC2').slider({
  range: "max",
  value: -50,
  min: -50,
  max: 50,
  slide: function(event, ui) {
    $( "#maxCol" ).val( ui.value );
    $(ui.value).val($('#maxCol').val());
  },
});//end slider
$("#maxCol").change(function() {
  $('.sliderMC2').slider("value", $(this).val());
});

$('.sliderMR').slider({
  range: "max",
  value: -50,
  min: -50,
  max: 50,
  slide: function(event, ui) {
    $( "#minRow" ).val( ui.value );
    $(ui.value).val($('#minRow').val());
  },
});//end slider
$("#minRow").change(function() {
  $('.sliderMR').slider("value", $(this).val());
});

$('.sliderMR2').slider({
  range: "max",
  value: -50,
  min: -50,
  max: 50,
  slide: function(event, ui) {
    $( "#maxRow" ).val( ui.value );
    $(ui.value).val($('#maxRow').val());
  },
});//end slider
$("#maxRow").change(function() {
  $('.sliderMR2').slider("value", $(this).val());
});


});//end function
