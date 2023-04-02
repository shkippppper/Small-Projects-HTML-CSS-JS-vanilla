const table = document.getElementById("table");
let startDateClicked = true;
let endDateClicked = false;

if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify({}))
}


LoadData()

setInterval(() => {
    SaveData();
}, 3000); //save every 3 seconds

function AddRow(){
    var row = document.createElement("tr");
    table.appendChild(row);
    CreateNewRowFromTemplate(row);
}


function CreateNewRowFromTemplate(row){

    row.appendChild(CreateDescription());
    row.appendChild(CreateCategory());
    row.appendChild(CreateStartDate());
    row.appendChild(CreateEndDate());
    row.appendChild(CreateStatus());
    row.appendChild(CreateDeleteButton());
    
}

function LoadRow(data){
    var row = document.createElement("tr");
    table.appendChild(row);
    CreateNewRowWithData(row, data);
}

function CreateNewRowWithData(row, data){
    var dataArray = data.split('|')

    row.appendChild(CreateDescription(dataArray[0]));
    row.appendChild(CreateCategory(dataArray[1]));
    row.appendChild(CreateStartDate(dataArray[2]));
    row.appendChild(CreateEndDate(dataArray[3]));
    row.appendChild(CreateStatus(dataArray[4]));
    row.appendChild(CreateDeleteButton());
    
}

function SaveData(){

    var data = {};

    for (var i = 0; i < table.rows.length; i++) {
        
        var dataToString = GetDescription(i) + "|" + GetCategory(i) + "|" + GetStartDate(i) + "|" + GetEndDate(i) + "|" + GetStatus(i);  
        data[i] = dataToString;
    }

    var JSONString = JSON.stringify(data)


    availableLocalStorageData = localStorage.getItem('data')

    if(JSONString !== availableLocalStorageData){
        localStorage.setItem('data', JSONString);
    }


}


function LoadData(){

    var JSONString = localStorage.getItem("data");
    var data = JSON.parse(JSONString);

    for (var j = 0; j < Object.keys(data).length; j++){
        LoadRow(data[j])
    }

    return Object.keys(data).length;
}


function deleteRow(button) {
    
    var row = button.parentNode.parentNode;

    table.deleteRow(row.rowIndex-1);
}



//table templates

function CreateDescription(value){

    //create input element 
    var inputElement = document.createElement("input")
    inputElement.type = "text";
    inputElement.name = "task";
    
    if(arguments.length == 0){
        inputElement.placeholder = "Click here to write the task";
    }
    else{

        if(value != "-"){
            inputElement.value = value;

        }
        else{
            inputElement.placeholder = "Click here to write the task";
            
        }
    }
    


    //append to the td element
    var cell = document.createElement("td")
    cell.appendChild(inputElement)

    return cell;


}

function CreateCategory(value){
    //create select element 
    var selectElement = document.createElement("select")
    selectElement.name = "categories"; 

    //create options with their "value"-s and "innerHTML"-s
    var categoriesPersonal = document.createElement("option");
    categoriesPersonal.value = "Personal";
    categoriesPersonal.innerHTML = "Personal";

    var categoriesWork = document.createElement("option");
    categoriesWork.value = "Work";
    categoriesWork.innerHTML = "Work";

    var categoriesStudy = document.createElement("option");
    categoriesStudy.value = "Study";
    categoriesStudy.innerHTML = "Study";

    //append the categories to the select element
    selectElement.appendChild(categoriesPersonal);
    selectElement.appendChild(categoriesWork);
    selectElement.appendChild(categoriesStudy);

    if(arguments.length != 0){  
        selectElement.value = value;
    }


    //append the select element to td element
    var cell = document.createElement("td")
    cell.appendChild(selectElement)

    return cell;

}

function CreateStartDate(value){

    //create input element 
    var inputElement = document.createElement("input")
    inputElement.type = "date";
    inputElement.style = "text-align: center;";

    if(arguments.length != 0){  
        inputElement.value = value;
    }

    //append to the td element
    var cell = document.createElement("td")
    cell.appendChild(inputElement)

    return cell;
}

function CreateEndDate(value){

    //create input element 
    var inputElement = document.createElement("input")
    inputElement.type = "date";
    inputElement.style = "text-align: center;";

    if(arguments.length != 0){  
        inputElement.value = value;
    }

    //append to the td element
    var cell = document.createElement("td")
    cell.appendChild(inputElement)

    return cell;
}

function CreateStatus(value){
    
    //create select element 
    var selectElement = document.createElement("select")
    selectElement.name = "statuses"; 

    //create options with their "value"-s and "innerHTML"-s
    var optionsInProgress = document.createElement("option");
    optionsInProgress.value = "In Progress";
    optionsInProgress.innerHTML = "In Progress"

    var optionCompleted = document.createElement("option");
    optionCompleted.value = "Completed";
    optionCompleted.innerHTML = "Completed";

    var optionCanceled = document.createElement("option");
    optionCanceled.value = "Cancelled";
    optionCanceled.innerHTML = "Cancelled";

    var optionPending = document.createElement("option");
    optionPending.value = "Pending";
    optionPending.innerHTML = "Pending";

    var optionDeferred = document.createElement("option");
    optionDeferred.value = "Deferred";
    optionDeferred.innerHTML = "Deferred";

    //append the options to the select element
    selectElement.appendChild(optionsInProgress);
    selectElement.appendChild(optionCompleted);
    selectElement.appendChild(optionCanceled);
    selectElement.appendChild(optionPending);
    selectElement.appendChild(optionDeferred);

    if(arguments.length != 0){  
        selectElement.value = value;
    }

    //append the select element to td element
    var cell = document.createElement("td")
    cell.appendChild(selectElement)

    return cell;
}

function CreateDeleteButton(){

    //create button element
    var buttonElement = document.createElement("button");
    buttonElement.onclick = function() {
        deleteRow(this);
    };
    buttonElement.innerHTML = "X";

    var cell = document.createElement("td");
    cell.appendChild(buttonElement);

    return cell;
}

function GetDescription(index){

    var tableData = table.rows.item(index);
    var inputValue = tableData.cells[0].querySelector('input').value;

    if (inputValue == "")
    {
        return "-";
    }
    return inputValue;
}

function GetCategory(index){
    var tableData = table.rows.item(index);
    var selectValue = tableData.cells[1].querySelector('select').value;

    return selectValue;
}

function GetStartDate(index){
    var tableData = table.rows.item(index);
    var startDateValue = tableData.cells[2].querySelector('input').value;

    if (startDateValue == "")
    {
        return "-";
    }
    return startDateValue;

}

function GetEndDate(index){
    var tableData = table.rows.item(index);
    var endDateValue = tableData.cells[3].querySelector('input').value;

    if (endDateValue == "")
    {
        return "-";
    }
    return endDateValue;

}

function GetStatus(index){
    var tableData = table.rows.item(index);
    var statusValue = tableData.cells[4].querySelector('select').value;

    return statusValue;
}