const MONTHS = {
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December"
};

const DAYSINMONTHS = {
    "January":31,
    "February":28,
    "March":31,
    "April":30,
    "May":31,
    "June":30,
    "July":31,
    "August":31,
    "September":30,
    "October":31,
    "November":30,
    "December":31
};

let day29 = document.getElementById("day29");
let day30 = document.getElementById("day30");
let day31 = document.getElementById("day31");
let flag = document.getElementById("flag");


let currentMonthIndex = 0;
let currentYear = 0;
let currentWeekday = "";
let currentDay = 0;

let calendarMonth = document.getElementById("monthCalendar");
let calendarYear = document.getElementById("yearCalendar");

let firstDayOfTheMonthElement = document.getElementById("first");
let firstDayOfTheMonth = 0;

let selectedDate = document.getElementById("selectedDate");

GetToday()

function GetToday(){
    const today = new Date();
    currentMonthIndex = today.getMonth();       //get the current month index
    calendarMonth.innerHTML = MONTHS[currentMonthIndex]; // update calendar
    currentYear = today.getFullYear();  //get the current year
    calendarYear.innerHTML = currentYear;  //update calendar year
    currentWeekday = today.getDay()  //get current weekday index sun-0 mon-1... sat-6
    currentDay = today.getDate()  //get the current day number
    firstDayOfTheMonth = FirstDayOfTheMonthWeekday(currentYear,currentMonthIndex); // get first day of the month weekday
    firstDayOfTheMonthElement.style.gridColumnStart = firstDayOfTheMonth; //update calendar first day 
    UpdateLastDayInMonth(currentYear,MONTHS[currentMonthIndex]) // update last day in month
    UpdateToday(currentDay, currentMonthIndex ,currentYear); //update todays date
}

function UpdateMonth(index){

    if(index === 0){ "0"

        if(currentMonthIndex === 0){
            currentMonthIndex = 11;
            currentYear -= 1;
        }
        else{
            currentMonthIndex -=1;
        }
        
    }
    else if(index === 1){

        if(currentMonthIndex === 11){
            currentMonthIndex = 0;
            currentYear += 1;
        }
        else{
            currentMonthIndex +=1;
        }
    }

    

    calendarMonth.innerHTML = MONTHS[currentMonthIndex];
    calendarYear.innerHTML = currentYear;

    firstDayOfTheMonth=FirstDayOfTheMonthWeekday(currentYear, currentMonthIndex);
    
    firstDayOfTheMonthElement.style.gridColumnStart = firstDayOfTheMonth; //update calendar first day 

    UpdateLastDayInMonth(currentYear,MONTHS[currentMonthIndex]);

    UpdateToday(currentDay,currentMonthIndex,currentYear);

    UpdateToday(currentDay,currentMonth,currentYear);
}


function FirstDayOfTheMonthWeekday (year, month) {
    
    var firstDay = new Date(year, month, 1);

    if(firstDay.getDay() === 0){
        return 7;
    }
    else return firstDay.getDay();

}

function IsLeapYear(year,month){
    
    if(year%4 === 0){
        if(month == "February"){
            return true;
        }
    }
    else{return false;}

}

function UpdateLastDayInMonth(year,month){
    
    let lastDay = 0;

    for (var monthKey in DAYSINMONTHS) {
        if(month == monthKey){
            lastDay = DAYSINMONTHS[monthKey]
        }
    }
    if(IsLeapYear(year, month)){
        lastDay = 29;
    }

    if(lastDay == 28){
        day29.style.display = "none";
        day30.style.display = "none";
        day31.style.display = "none";
        flag.style.display = "inline";
    }
    else if(lastDay == 29){
        day29.style.display = "inline";
        day30.style.display = "none";
        day31.style.display = "none";
        flag.style.display = "inline";
    }
    else if(lastDay == 30){
        day29.style.display = "inline";
        day30.style.display = "inline";
        day31.style.display = "none";
        flag.style.display = "inline";
    }
    else if(lastDay == 31){
        day29.style.display = "inline";
        day30.style.display = "inline";
        day31.style.display = "inline";
        flag.style.display = "none";

    }


}

function UpdateSelectedDate(elementDay){
    
    let childElement = elementDay.getElementsByTagName("time");
    selectedDate.innerHTML = MONTHS[currentMonthIndex] + "," + childElement[0].innerHTML + "," + currentYear;

}

function UpdateToday(currentDay,currentMonth,currentYear){

    var today = new Date()

    var parentElement = document.getElementById("datesId"); 
    
    for (var k = 0; k < parentElement.children.length; k++) {
        
        var childElement = parentElement.children[k].getElementsByTagName("time")[0];

        if (childElement.parentNode.classList.contains("today")) {
            childElement.parentNode.classList.remove("today");
            console.log("yes")

        }
        console.log(today.getMonth() == currentMonth)
        if(childElement.innerHTML == currentDay && today.getMonth() == currentMonth && today.getFullYear() == currentYear){
            childElement.parentNode.classList.add("today");
        }

    }

}