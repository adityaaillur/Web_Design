let selectCounter = 0;

function disableSubmitButton() {
    let submitButton = document.getElementById("submit_button");

    submitButton.disabled = true;
    submitButton.style.backgroundColor = "gray";
    submitButton.style.border = "gray";
}

function enableSubmitButton() {
    let submitButton = document.getElementById("submit_button");

    submitButton.disabled = false;
    submitButton.style.backgroundColor = "orange";
    submitButton.style.border = "orange";
}

function initUi() {
    let dropDownAreas = document.getElementsByClassName('dropDownTextArea');
    for (let i = 0; i < dropDownAreas.length; i++) {
        dropDownAreas.item(i).style.display = 'none';
    }
    disableSubmitButton();
}

function getRandomString(length) {
    let allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
    }
    return result;
}

function getNewStudentName() {
    return getRandomString(8);
}

function getNewTeacherName() {
    return getRandomString(8);
}

function getNewAwardStatus() {
    let statusValues = ["Approved", "Unapproved", "In Review"];
    return statusValues[Math.floor(Math.random() * 10) % statusValues.length];
}

function getNewSemester() {
    let statusValues = ["Fall"];
    return statusValues[Math.floor(Math.random() * 10) % statusValues.length];
}

function getNewType() {
    return "TA";
}

function getNewBudget() {
    return Math.floor(Math.random() * 10000).toString();
}

function getNewPercentage() {
    return Math.floor(Math.random() * 100) + "%";
}

function removeRow(row) {
    row.remove();
    selectCounter--;
    updateSubmitButton();
}

function toggeleDropDown(row) {
    debugger;
    let dropDown = row.nextElementSibling;
    if (dropDown.style.display === 'none') {
        dropDown.style.display = '';
    } else {
        dropDown.style.display = 'none';
    }
}


function addStudent() {
    let table = document.getElementById("myTable");

    let dataRow = table.insertRow(-1);

    let col1 = dataRow.insertCell(0);
    let col2 = dataRow.insertCell(1);
    let col3 = dataRow.insertCell(2);
    let col4 = dataRow.insertCell(3);
    let col5 = dataRow.insertCell(4);
    let col6 = dataRow.insertCell(5);
    let col7 = dataRow.insertCell(6);
    let col8 = dataRow.insertCell(7);
    let col9 = dataRow.insertCell(8);
    let col10 = dataRow.insertCell(9);


    col1.innerHTML = "<input type=\"checkbox\" onclick='rowSelected(this)'/><br/><br/><img src=\"down.png\" width=\"25px\" onclick='toggeleDropDown(this.parentElement.parentElement)' />";
    let newStudentName = getNewStudentName();
    let newTeacherName = getNewTeacherName();
    let newAwardStatus = getNewAwardStatus();
    let newSemester = getNewSemester();
    let newType = getNewType();
    let newBudget = getNewBudget();
    let newPercentage = getNewPercentage();

    col2.innerHTML = newStudentName;
    col3.innerHTML = newTeacherName;
    col4.innerHTML = newAwardStatus;
    col5.innerHTML = newSemester;
    col6.innerHTML = newType;
    col7.innerHTML = newBudget;
    col8.innerHTML = newPercentage;

    let dropdownRow = table.insertRow();
    dropdownRow.style.display = 'none';
    let dropdownRow_col1 = dropdownRow.insertCell(0);
    dropdownRow_col1.colSpan = 8;
    let dropdownRow_col2 = dropdownRow.insertCell(1);

    dropdownRow_col1.innerHTML = "Advisor: "+ newTeacherName + "<br/><br/>Award Details<br/>" + newSemester + "(" + newType + ")<br/>Budget Number: "+ newBudget + "<br>Comments:<br/><br/><br/>Award Status:" + newAwardStatus + "<br/><br/><br/>";
}

function updateSubmitButton() {
    if (selectCounter > 0) {
        enableSubmitButton();
    } else {
        disableSubmitButton();
    }
}

function editPrompt(){
prompt("Edit the Details","");
}

function rowSelected(chkBox) {
    let row = chkBox.parentElement.parentElement;
    let lastButOneCell = row.cells[row.cells.length - 2];
    let lastCell = row.cells[row.cells.length - 1];
    console.log(row.cells.length);
    if (chkBox.checked) {
        row.bgColor = "orange";
        selectCounter++;
        lastButOneCell.innerHTML = '<button onclick="removeRow(this.parentElement.parentElement)">Delete</button>';
        lastCell.innerHTML = '<button onclick="editPrompt()">Edit</button>';
    } else {
        row.bgColor = "white";
        lastButOneCell.innerHTML = '';
        lastCell.innerHTML = '';
        selectCounter--;
    }
    updateSubmitButton();
}