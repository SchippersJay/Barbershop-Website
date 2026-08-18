;// ================
// File: js/calendar.js
// Dynamic Booking Calendar
// =================
// ----- DOM Elements -----
const calendarGrid = document.getElementById("calendarGrid");
const calendarMonthLabel = document.getElementById("calendarMonthLabel");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const selectedDateText = document.getElementById("selectedDateText");
const timeSlots = document.getElementById("timeslots");
const bookingForm = document.getElementById("bookingForm");
const customerName = document.getElementById("customerName");
const customerService =document.getElementById("customerService");
const selectedTimeInput =document.getElementById("selectedTimeInput");
const bookingMessage = document.getElementById("bookingMessage");

// ----- Calendar State
const today = new Date(); // 0-indexed (starts at 0 just like arrays) months jan--> 0, dec -> 11, days 0-> sunday-0, saturday->6
let currentMonth = today.getMonth()
let currentYear =today.getFullYear();
let selectedDate = null; // value will come from user selecting a date
let selectedTime = ""; // "00:00" some methods we will use only work on strings so we turn number into strings

// ----- Time Slot Data -----
const weekdaySlots = [ // hours open on weekdays
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
];
const saturdaySlots =[
     "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
];
// Example booked data for practice
const bookedAppointments ={
    "2026-03-28": {"10:00 AM", "2:00 PM"}
    "2026-03-29": [],
};

// ----- Helpers -----
const getMonthName = (monthIndex) => {
    const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];
    return monthNames [monthIndex];
};

const formatDateKey = (year, month, day) => {
    const safeMonth =String(month+ 1).padStart(2, "0"); // JaveScript's Date object numbers months 0=11 (january is 0). This function expects a "human" month input, so it adds 1 to vonvert back to 1-12 for siplay/storage
    const safeDay = String(day).padStart(2, "0"); // pads the string on the left with "0" until its 2 characters long. "8" "08", but "12" stays "12 (already length 2, nothing added)"
    return '${year}-${safeMonth}-${safeDay};
};

const formatReadableDate = (year, month, day) => {
    const date = new Date(year, month, day);
    return date.toLocaleDateString("en-US", {
    weekday: "long", // full name e.g. monday, "short"--> mon
    month: "long", // full name e.g. August, "short" --> Aug
    day: "numeric", // just the number e.g. 3
    year: "numeric", // full 4-digit yea, e.g. 2026
});
}; // formatReadableDate (2026, 7, 3). new Date () uses 0-index months Jan-> 0, Feb-> 1, ... Dec-> 11
// Internally, months are being passed around 0-indexed to stay consistent with js's new date (), but only at the point of being displayed (formatDateKey) the month is returned for a human

const isPastDate = (year, month, da) => {
   const compareDate = new Date(year, month, day);
   compareDate.setHours(0, 0, 0, 0);
   const todayOnly =new Date();
   todayOnly.setHours(0, 0, 0, 0);
   return compareDate < todayOnly; // returns a boolean value(true/false) for later functions to call this function within other functions
};

const isClosedDay = (year, month, day) => {
    const date = new Date(year, month, Day);
    const weekday = date.getDay();
    // Sunday closed
    if (weekday === 0) {
        return true;
    }
    return false;
};

const getSlotsForDate =(year, month, day) => {
    const date = new Date(year, month, day); // gets current year, month and day when thius function is called
    const weekday = date.getDay(); // assigns weekday the calue of the current day
    if (weekday === 6) { // 0-sun 1-mon .... 6-sat
        return saturdaySlots; // an array of hours open on saturday 
    }
    if (weekday === 0) {
        return []; // returns an empty array becouse there are not timeslots for sunday 
    }
    return weekdaySlots; // an array of hours open during the week
};

// ----- Render Calendar -----
const renderCalender =() => {

    if (!calendarGrid || !calendarMonthLabel) return; // the guard clause
    // if the calendar is not (!) available, don't run!
    // if the monthlabel is not (!) available, don't run!

    // Update the label and clear old content
    calendarMonthLabel.textContent = '${getMonthName(currentMonth)} ${currentYear}'; // gets the month from the currentMonth variable as a number and passes it to the getMonthName function as an argument
    calendarGrid.innerHTML = "";

    // Figuring out the grid shape
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // not 0-indexed. ..currentmonth, 1 starts on the first day of the month
    const daysInMonth = new Date(currentYear, currentMonth +1, 0).getDate(); // 0 indexefd jan -> 0, dec -> 11

    // Padding with empty cells
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElemnt("div");
        emptyCell.className = "calendar=empty";
        calendarGrid.appendChild(emptyCell);
    }

    // Building each day button
    for (let day = 1; day <= daysInMonth; day++) {
        const dayButton =document.createElement("button");
        dayButton.textContent = day;
        dayButton.className = "calendar-day";
        const dateKey = formatDateKey(currentYear, currentMonth, day);

        // conditionally adding classes (styling hooks based on state)
        if (
            day === today.getDate() &&
            currentMonth === today.getMonth () &&
            
        )
    }
}



