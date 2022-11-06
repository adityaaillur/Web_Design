var isValid = new Boolean(true);
var errorCounter = 0;

function validateInputs(object, type, nameType) {
  if(nameType != "" && nameType != null){
      console.log(" success");
      isValid = new Boolean(true);

      // VARIABLES FOR REGEX VALIDATION

      // var regExEmail =/^[\w.+\-]+@northeastern\.edu$/;
      var regExZipcode = "^[0-9]{5}$";
      var regExPhone = "^[0-9]{3}-[0-9]{3}-[0-9]{4}$";
      var regExName = /^[a-zA-Z]+$/;
      var regExEmail = /([\w\.]+)\.([\w\.]+)@northeastern\.edu/;
      var regExStreetAddress1 = /^([a-zA-Z0-9 _-]+)$/;
      var regExCity = /^[a-zA-Z]+$/;
      var regExState = /^[a-zA-Z]+$/;


      var name = "errorMsg" + nameType;
      isValid = new Boolean(true);

      switch (type) {
        // EMAIL VALIDATION
        case 1:
          if (!object.value.trim().match(regExEmail)) {
            object.style.border = "2px solid red";
            document.getElementById(name).style.display = "block";
            object.value = "";
            isValid = false;
          } else {
            object.style.border = "";
            document.getElementById(name).style.display = "none";
          }
          break;
          // PHONE NUMBER VALIDATION
        case 2:
          if (!object.value.match(regExPhone)) {
            object.style.border = "2px solid red";
            document.getElementById(name).style.display = "block";
            object.value = "";
            isValid = false;
          } else {
            object.style.border = "";
            document.getElementById(name).style.display = "none";
          }
          break;
          // ZIP-CODE VALIDATION
        case 3:
          if (!object.value.match(regExZipcode)) {
            object.style.border = "2px solid red";
            document.getElementById(name).style.display = "block";
            object.value = "";
            isValid = false;
          } else {
            object.style.border = "";
            document.getElementById(name).style.display = "none";
          }
          break;
          // FIRST NAME VALIDATION 
        case 4:
          if (!object.value.match(regExName))
          {
            object.style.border = "2px solid red";
            document.getElementById(name).style.display = "block";
            object.value = "";
            isValid = false;
          }else {
            object.style.border = "";
            document.getElementById(name).style.display = "none";
          }
          break;
          // LAST NAME VALIDATION USING REGEX 
          case 5:
            if (!object.value.match(regExName))
            {
              object.style.border = "2px solid red";
              document.getElementById(name).style.display = "block";
              object.value = "";
              isValid = false;
            }else {
              object.style.border = "";
              document.getElementById(name).style.display = "none";
            }
            break;

            // STREET-ADDRESS VALIDATION 
            case 6:
            if (!object.value.match(regExStreetAddress1))
            {
              object.style.border = "2px solid red";
              document.getElementById(name).style.display = "block";
              object.value = "";
              isValid = false;
            }else {
              object.style.border = "";
              document.getElementById(name).style.display = "none";
            }
            break;
            // CITY VALIDATION
            case 7:
            if (!object.value.match(regExCity))
            {
              object.style.border = "2px solid red";
              document.getElementById(name).style.display = "block";
              object.value = "";
              isValid = false;
            }else {
              object.style.border = "";
              document.getElementById(name).style.display = "none";
            }
            break;
            // STATE VALIDATION
            case 8:
            if (!object.value.match(regExState))
            {
              object.style.border = "2px solid red";
              document.getElementById(name).style.display = "block";
              object.value = "";
              isValid = false;
            }else {
              object.style.border = "";
              document.getElementById(name).style.display = "none";
            }
            break;
      }
  } 
  else{
  var raidoTitle = document.querySelectorAll('#TitleRadio');
  var RaioChecked = false;
  for(var i = 0; i < raidoTitle.length; i++)
    {
        if(raidoTitle[i].checked == true){
           RaioChecked = true;
        }
    }
    if(!RaioChecked){
      isValid = false;
    }
  if(document.getElementById('firstName').value == "" || document.getElementById('firstName').value == null){
    isValid = false;
  }
  if(document.getElementById('lastName').value == "" || document.getElementById('lastName').value == null){
    isValid = false;
  }
  if(document.getElementById('emailId').value == "" || document.getElementById('emailId').value == null){
    isValid = false;
  }
  if(document.getElementById('phoneNumber').value == "" || document.getElementById('phoneNumber').value == null){
    isValid = false;
  }
  if(document.getElementById('streetAddress1').value == "" || document.getElementById('streetAddress1').value == null){
    isValid = false;
  }
  if(document.getElementById('city').value == "" || document.getElementById('city').value == null){
    isValid = false;
  }
   if(document.getElementById('zipcode').value == "" || document.getElementById('zipcode').value == null){
     isValid = false;
   }
  if(document.getElementById('state').value == "" || document.getElementById('state').value == null){
    isValid = false;
  }

  var socialMediaHear = document.querySelectorAll('#mediaFeedback');
  var isMediaSelected = false
  for(var i = 0; i < socialMediaHear.length; i++)
    {
        if(socialMediaHear[i].checked == true){
            isMediaSelected = true;
        }
    }
    if(!isMediaSelected){
      isValid = false;
    }

  if(document.getElementById('comments').value == "" || document.getElementById('comments').value == null){
    isValid = false;
  }

  if(!isValid){

  document.getElementById("errorMsgManditory").style.display = "block";
  }
}
}
// Throwing alert messages after submitting the form.
// Resets with the empty fields on submitting the form.
function onSubmit() {
  window.event.preventDefault();
    validateInputs(null,null,null);

    if(isValid){

    alert("Form submission successful!");
    window.event.preventDefault();

    displayTable();
    document.getElementById("feedback").reset();
    hideonReset();

    }
  }
//This fuction reverts the form to intial state if there are any errors
  function hideonReset(){
    var argErrors = document.querySelectorAll('.Error');

    for(var i = 0; i < argErrors.length; i++)
    {
        argErrors[i].style.display = 'none';
    }
    document.getElementById("phoneNumber").style.border = "";
    document.getElementById("emailId").style.border = "";
    document.getElementById("zipcode").style.border = "";

    hideCheckboxesandNotes();
  }
  //Function to show the dropdown menu selected.
  function showCheckbox(element){
    hideCheckboxesandNotes();
    if (element.value != 'NA' && element.value != null) {
        document.getElementById(element.value).style.display="";
    }
    
  }
  //This function hides the checkboxes and notes of text fields on dropdown change.
  function hideCheckboxesandNotes(){
    var argCheckboxes = document.querySelectorAll('.menuCheckboxes');

    for(var i = 0; i < argCheckboxes.length; i++)
    {
      argCheckboxes[i].style.display = 'none';
    }

    var argNotes = document.querySelectorAll('.NoteField');
    for(var i = 0; i<argNotes.length; i++)
    {
        argNotes[i].style.display = 'none';
    }
  }
  //invoking data into the table and displaying the table next to the feedback form
  function displayTable(){
  document.getElementById('tableForm').style.display = "block";
  var raidoTitle = document.querySelectorAll('#TitleRadio');
  for(var i = 0; i < raidoTitle.length; i++)
    {
        if(raidoTitle[i].checked == true){
            document.getElementById('TTitle').value = raidoTitle[i].value;
        }
    }
  //Initializing Radio values
  document.getElementById('TfirstName').value = document.getElementById('firstName').value;

  document.getElementById('TlastName').value = document.getElementById('lastName').value;

  document.getElementById('TemailId').value = document.getElementById('emailId').value;

  document.getElementById('TphoneNumber').value = document.getElementById('phoneNumber').value;

  document.getElementById('TstreetAddress1').value = document.getElementById('streetAddress1').value;

  document.getElementById('TstreetAddress2').value = document.getElementById('streetAddress2').value;

  document.getElementById('Tcity').value = document.getElementById('city').value;

   document.getElementById('Tzipcode').value = document.getElementById('zipcode').value;

  document.getElementById('Tstate').value = document.getElementById('state').value;

  var socialMediaHear = document.querySelectorAll('#mediaFeedback');
  document.getElementById('Thear').value = "";
  var FeebackResult = "";
  var counter = 0;
  for(var i = 0; i < socialMediaHear.length; i++)
    {
        if(socialMediaHear[i].checked == true){
            if(counter == 0){
            FeebackResult = FeebackResult +socialMediaHear[i].value;
            counter++;
            }
            else{
                FeebackResult = FeebackResult + ", "+ socialMediaHear[i].value;  
            }
        }
    }
  document.getElementById('Thear').value = FeebackResult;

  if(document.getElementById('dropdown').value != 'NA')
  {
  document.getElementById('Trating').value = document.getElementById('dropdown').value;
  } else{
    document.getElementById('Trating').value = "";
  }

  var menuCheckboxes = document.querySelectorAll('.checkboxAns');
  for(var i = 0; i < menuCheckboxes.length; i++)
    {
        if(menuCheckboxes[i].checked == true){
            if(menuCheckboxes[i].value == "Pizzaa")
            {
                document.getElementById('TmenuCheckboxes').value = "Add Olives for extra-2$." ;
            } 
             else if(menuCheckboxes[i].value == "Friess")
             {
                document.getElementById('TmenuCheckboxes').value = "Add Peri-Peri for extra-2$" ;
            }
              else if(menuCheckboxes[i].value == "Burgerr")
              {
                document.getElementById('TmenuCheckboxes').value = "Add Patty for extra-2$" ;
            }else if(menuCheckboxes[i].value == "Doughnutt")
            {
                document.getElementById('TmenuCheckboxes').value = "Add Chocochip for extra-2$" ;
            } else if(menuCheckboxes[i].value == "Sandwichh")
            {
                document.getElementById('TmenuCheckboxes').value = "Add Mayo for extra-2$" ;
            }
        }
    }

  document.getElementById('TNote').value = document.getElementById('note').value;

  document.getElementById('Tcomments').value = document.getElementById('comments').value;
        
  }