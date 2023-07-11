
let chatMinusBtn = document.getElementById("chat-minus-button");
let chatPlusBtn = document.getElementById("chat-plus-button");

let phoneMinusBtn = document.getElementById("phone-minus-button");
let phonePlusBtn = document.getElementById("phone-plus-button");

let webMinusBtn = document.getElementById("web-minus-button");
let webPlusBtn = document.getElementById("web-plus-button");

let minusBtn = document.querySelectorAll(".minus-button");
let plusBtn = document.querySelectorAll(".plus-button");

let chatCount = document.getElementById("chat-count");
let phoneCount = document.getElementById("phone-count");
let webCount = document.getElementById("web-count");

let workData = {
    "12 AM - 1 AM": { chat: 0, phone: 0, web: 0 },
    "1 AM - 2 AM": { chat: 0, phone: 0, web: 0 },
    "2 AM - 3 AM": { chat: 0, phone: 0, web: 0 },
    "3 AM - 4 AM": { chat: 0, phone: 0, web: 0 },
    "4 AM - 5 AM": { chat: 0, phone: 0, web: 0 },
    "5 AM - 6 AM": { chat: 0, phone: 0, web: 0 },
    "6 AM - 7 AM": { chat: 0, phone: 0, web: 0 },
    "7 AM - 8 AM": { chat: 0, phone: 0, web: 0 },
    "8 AM - 9 AM": { chat: 0, phone: 0, web: 0 },
    "9 AM - 10 AM": { chat: 0, phone: 0, web: 0 },
    "10 AM - 11 AM": { chat: 0, phone: 0, web: 0 },
    "11 AM - 12 PM": { chat: 0, phone: 0, web: 0 },
    "12 PM - 1 PM": { chat: 0, phone: 0, web: 0 },
    "1 PM - 2 PM": { chat: 0, phone: 0, web: 0 },
    "2 PM - 3 PM": { chat: 0, phone: 0, web: 0 },
    "3 PM - 4 PM": { chat: 0, phone: 0, web: 0 },
    "4 PM - 5 PM": { chat: 0, phone: 0, web: 0 },
    "5 PM - 6 PM": { chat: 0, phone: 0, web: 0 },
    "6 PM - 7 PM": { chat: 0, phone: 0, web: 0 },
    "7 PM - 8 PM": { chat: 0, phone: 0, web: 0 },
    "8 PM - 9 PM": { chat: 0, phone: 0, web: 0 },
    "9 PM - 10 PM": { chat: 0, phone: 0, web: 0 },
    "10 PM - 11 PM": { chat: 0, phone: 0, web: 0 }
};

// Get the select element
let timeSelect = document.querySelector('.time select');

//let timeSelectHour = timeSelect.value;

timeSelect.value = "9 AM - 10 AM";

let timeSelectHour = timeSelect.value;

let totalUoW = document.getElementById("total-uow");

let chatSum = 0;
let phoneSum = 0;
let webSum = 0;

chatCount.innerHTML = workData[timeSelectHour].chat;
phoneCount.innerHTML = workData[timeSelectHour].phone;
webCount.innerHTML = workData[timeSelectHour].web;

let UoWperHourInfoContainer = document.getElementById("uow-per-hour-info-container");
let UoWperHourTotal = document.getElementById("uow-per-hour-total");
let UoWperHourInfo = document.getElementById("uow-per-hour-info");
let UoWperHourInfo2 = document.getElementById("uow-per-hour-info-2");
let summaryButton = document.getElementById("summary-button");

for (let i = 0; i < timeSelect.length; i++) {

    chatSum += workData[timeSelect[i].value].chat;
    phoneSum += workData[timeSelect[i].value].phone;
    webSum += workData[timeSelect[i].value].web;

    console.log("Chat: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].chat);
    console.log("Phone: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].phone);
    console.log("Web: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].web);


    // if (workData[timeSelect[i].value].chat > 0) {
    //     UoWperHourChat.innerHTML += "<div>" + "Chat: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].chat + " UoW" + "</div>";
    // }
    // if (workData[timeSelect[i].value].phone > 0) {
    //     UoWperHourPhone.innerHTML += "<div>" + "Phone: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].phone + " Uow" + "</div>";
    // }
    // if (workData[timeSelect[i].value].web > 0) {
    //     UoWperHourWeb.innerHTML += "<div>" + "Web: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].web + " UoW" + "</div>";
    // }

    UoWperHourInfo.innerHTML = "";
    UoWperHourInfo2.innerHTML = "";

    for (let i = 0; i < timeSelect.length; i++) {
        if (i <= 11) {
            UoWperHourInfo.innerHTML += "<div>" + timeSelect[i].value + " -- " + " Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
        }

        if (i > 11) {
            UoWperHourInfo2.innerHTML += "<div>" + timeSelect[i].value + " -- " + " Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
        }
    }

}

let totalSum = ((chatSum * 0.62) + phoneSum + webSum).toFixed(2);

totalUoW.innerHTML = "Total UoW: " + "<span style='font-weight:bold'>" + totalSum + "</span>";

//UoWperHourTotal.innerHTML = "Total UoW: " + "<span style='font-weight:bold'>" + totalSum + "</span>";

console.log("Total: " + totalSum);


if (workData[timeSelectHour].chat > 0) {
    chatMinusBtn.disabled = false;
} else {
    chatMinusBtn.disabled = true;
}

if (workData[timeSelectHour].phone > 0) {
    phoneMinusBtn.disabled = false;
} else {
    phoneMinusBtn.disabled = true;
}

if (workData[timeSelectHour].web > 0) {
    webMinusBtn.disabled = false;
} else {
    webMinusBtn.disabled = true;
}


function updateState() {

    chatSum = 0;
    phoneSum = 0;
    webSum = 0;

    for (let i = 0; i < timeSelect.length; i++) {
        chatSum += workData[timeSelect[i].value].chat;
        phoneSum += workData[timeSelect[i].value].phone;
        webSum += workData[timeSelect[i].value].web;
    }

    totalSum = ((chatSum * 0.62) + phoneSum + webSum).toFixed(2);

    totalUoW.innerHTML = "Total UoW: " + "<span style='font-weight:bold'>" + totalSum + "</span>";

    //UoWperHourTotal.innerHTML = "Total UoW: " + "<span style='font-weight:bold'>" + totalSum + "</span>";

    // Enable/disable buttons
    if (workData[timeSelectHour].chat <= 0) {
        chatMinusBtn.disabled = true;
    } else {
        chatMinusBtn.disabled = false;
    }

    if (workData[timeSelectHour].phone <= 0) {
        phoneMinusBtn.disabled = true;
    } else {
        phoneMinusBtn.disabled = false;
    }

    if (workData[timeSelectHour].web <= 0) {
        webMinusBtn.disabled = true;
    } else {
        webMinusBtn.disabled = false;
    }

    console.log("Total: " + totalSum);
    console.log("Chat minus button disabled = true? " + Boolean(chatMinusBtn.disabled === true));
    console.log("Phone minus button disabled = true? " + Boolean(phoneMinusBtn.disabled === true));
    console.log("Web minus button disabled = true? " + Boolean(webMinusBtn.disabled === true));

    UoWperHourInfo.innerHTML = "";
    UoWperHourInfo2.innerHTML = "";

    for (let i = 0; i < timeSelect.length; i++) {

        if (i <= 11) {
            if (workData[timeSelect[i].value].chat > 0 || workData[timeSelect[i].value].phone > 0 || workData[timeSelect[i].value].web > 0) {
                UoWperHourInfo.innerHTML += "<div><span style='padding:3px;background-color:yellow'>" + timeSelect[i].value + "</span> -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            } else {
                UoWperHourInfo.innerHTML += "<div>" + timeSelect[i].value + " -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            }
        }

        if (i > 11) {
            if (workData[timeSelect[i].value].chat > 0 || workData[timeSelect[i].value].phone > 0 || workData[timeSelect[i].value].web > 0) {
                UoWperHourInfo2.innerHTML += "<div><span style='padding:3px;background-color:yellow'>" + timeSelect[i].value + "</span> -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            } else {
                UoWperHourInfo2.innerHTML += "<div>" + timeSelect[i].value + " -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            }
        }
    }

    // for (let i = 0; i < timeSelect.length; i++) {
    //     if (i <= 11) {
    //         if (workData[timeSelect[i].value].chat > 0 || workData[timeSelect[i].value].phone > 0 || workData[timeSelect[i].value].web > 0) {
    //             UoWperHourInfo.innerHTML += "<div><span style='padding:3px;background-color:yellow'>" + timeSelect[i].value + "</span> -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
    //         } else {
    //             UoWperHourInfo.innerHTML += "<div>" + timeSelect[i].value + " -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
    //         }
    //     } else {
    //         if (workData[timeSelect[i].value].chat > 0 || workData[timeSelect[i].value].phone > 0 || workData[timeSelect[i].value].web > 0) {
    //             UoWperHourInfo2.innerHTML += "<div><span style='padding:3px;background-color:yellow'>" + timeSelect[i].value + "</span> -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
    //         } else {
    //             UoWperHourInfo2.innerHTML += "<div>" + timeSelect[i].value + " -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
    //         }
    //     }
    // }


    localStorage.setItem('workData', JSON.stringify(workData));
}



for (let i = 0; i < minusBtn.length; i++) {

    minusBtn[i].addEventListener("click", function (event) {

        timeSelectHour = timeSelect.value;

        if (chatMinusBtn.disabled === false && event.target.getAttribute("id") === "chat-minus-button") {
            workData[timeSelectHour].chat--;
            chatCount.innerHTML = workData[timeSelectHour].chat;
        }

        if (phoneMinusBtn.disabled === false && event.target.getAttribute("id") === "phone-minus-button") {
            workData[timeSelectHour].phone--;
            phoneCount.innerHTML = workData[timeSelectHour].phone;
        }

        if (webMinusBtn.disabled === false && event.target.getAttribute("id") === "web-minus-button") {
            workData[timeSelectHour].web--;
            webCount.innerHTML = workData[timeSelectHour].web;
        }

        updateState();

        // if (workData[timeSelectHour].chat < 1) {
        //     chatMinusBtn.disabled = true;
        // } else {
        //     chatMinusBtn.disabled = false;
        // }

        // if (workData[timeSelectHour].phone < 1) {
        //     phoneMinusBtn.disabled = true;
        // } else {
        //     phoneMinusBtn.disabled = false;
        // }

        // if (workData[timeSelectHour].web < 1) {
        //     webMinusBtn.disabled = true;
        // } else {
        //     webMinusBtn.disabled = false;
        // }

        // chatSum = 0;
        // phoneSum = 0;
        // webSum = 0;

        // for (let i = 0; i < timeSelect.length; i++) {
        //     chatSum += workData[timeSelect[i].value].chat;
        //     phoneSum += workData[timeSelect[i].value].phone;
        //     webSum += workData[timeSelect[i].value].web;
        // }

        // totalSum = ((chatSum * 0.62) + phoneSum + webSum).toFixed(2);

        // totalUoW.innerHTML = "Total: " + "<span style='font-weight:bold'>" + totalSum + "</span>";

        // console.log("Total: " + totalSum);
        // console.log("Chat minus button disabled = true? " + Boolean(chatMinusBtn.disabled === true));
        // console.log("Phone minus button disabled = true? " + Boolean(phoneMinusBtn.disabled === true));
        // console.log("Web minus button disabled = true? " + Boolean(webMinusBtn.disabled === true));

    });

}

for (let i = 0; i < plusBtn.length; i++) {

    plusBtn[i].addEventListener("click", function (event) {

        timeSelectHour = timeSelect.value;

        if (event.target.getAttribute("id") === "chat-plus-button") {
            workData[timeSelectHour].chat++;
            chatCount.innerHTML = workData[timeSelectHour].chat;
        }

        if (event.target.getAttribute("id") === "phone-plus-button") {
            workData[timeSelectHour].phone++;
            phoneCount.innerHTML = workData[timeSelectHour].phone;
        }

        if (event.target.getAttribute("id") === "web-plus-button") {
            workData[timeSelectHour].web++;
            webCount.innerHTML = workData[timeSelectHour].web;
        }

        updateState();

        // if (workData[timeSelectHour].chat > 0) {
        //     chatMinusBtn.disabled = false;
        // } else {
        //     chatMinusBtn.disabled = true;
        // }

        // if (workData[timeSelectHour].phone > 0) {
        //     phoneMinusBtn.disabled = false;
        // } else {
        //     phoneMinusBtn.disabled = true;
        // }

        // if (workData[timeSelectHour].web > 0) {
        //     webMinusBtn.disabled = false;
        // } else {
        //     webMinusBtn.disabled = true;
        // }

        // chatSum = 0;
        // phoneSum = 0;
        // webSum = 0;

        // for (let i = 0; i < timeSelect.length; i++) {
        //     chatSum += workData[timeSelect[i].value].chat;
        //     phoneSum += workData[timeSelect[i].value].phone;
        //     webSum += workData[timeSelect[i].value].web;
        // }

        // totalSum = ((chatSum * 0.62) + phoneSum + webSum).toFixed(2);

        // totalUoW.innerHTML = "Total: " + "<span style='font-weight:bold'>" + totalSum + "</span>";

        // console.log("Total: " + totalSum);
        // console.log("Chat minus button disabled = true? " + Boolean(chatMinusBtn.disabled === true));
        // console.log("Phone minus button disabled = true? " + Boolean(phoneMinusBtn.disabled === true));
        // console.log("Web minus button disabled = true? " + Boolean(webMinusBtn.disabled === true));

    });
}


console.log("Chat minus button disabled = true? " + Boolean(chatMinusBtn.disabled === true));
console.log("Phone minus button disabled = true? " + Boolean(phoneMinusBtn.disabled === true));
console.log("Web minus button disabled = true? " + Boolean(webMinusBtn.disabled === true));



timeSelect.addEventListener('change', function () {

    // Get the selected hour
    timeSelectHour = this.value;

    // Get the data for the selected hour
    //let hourData = workData[timeSelectHour];

    chatCount.innerHTML = workData[timeSelectHour].chat;
    phoneCount.innerHTML = workData[timeSelectHour].phone;
    webCount.innerHTML = workData[timeSelectHour].web;

    updateState();

    // if (workData[timeSelectHour].chat < 1) {
    //     chatMinusBtn.disabled = true;
    // } else {
    //     chatMinusBtn.disabled = false;
    // }

    // if (workData[timeSelectHour].phone < 1) {
    //     phoneMinusBtn.disabled = true;
    // } else {
    //     phoneMinusBtn.disabled = false;
    // }

    // if (workData[timeSelectHour].web < 1) {
    //     webMinusBtn.disabled = true;
    // } else {
    //     webMinusBtn.disabled = false;
    // }

    // chatSum = 0;
    // phoneSum = 0;
    // webSum = 0;

    // for (let i = 0; i < timeSelect.length; i++) {
    //     chatSum += workData[timeSelect[i].value].chat;
    //     phoneSum += workData[timeSelect[i].value].phone;
    //     webSum += workData[timeSelect[i].value].web;
    // }

    // totalSum = ((chatSum * 0.62) + phoneSum + webSum).toFixed(2);

    // totalUoW.innerHTML = "Total: " + "<span style='font-weight:bold'>" + totalSum + "</span>";

    // console.log("Total: " + totalSum);
    // console.log("Chat minus button disabled = true? " + Boolean(chatMinusBtn.disabled === true));
    // console.log("Phone minus button disabled = true? " + Boolean(phoneMinusBtn.disabled === true));
    // console.log("Web minus button disabled = true? " + Boolean(webMinusBtn.disabled === true));


});




// let mySelect = document.getElementById("my-select");

// mySelect.addEventListener('change', function () {
//     let selectedHour = this.value;
//     // Save the value in local storage
//     localStorage.setItem('selectedHour', selectedHour);
// });

// // When the page is loaded, check if there is a saved value in local storage
// window.addEventListener('load', function () {
//     let savedWorkData = localStorage.getItem('workData');

//     // If there is, parse it back into an object and use it
//     if (savedWorkData) {
//         workData = JSON.parse(savedWorkData);
//     }

//     let savedHour = localStorage.getItem('selectedHour');
//     if (savedHour) {
//         // If there is, set the select value to the saved value
//         mySelect.value = savedHour;
//     }

//     // Initialize the view
//     timeSelectHour = timeSelect.value;
//     chatCount.innerHTML = workData[timeSelectHour].chat;
//     phoneCount.innerHTML = workData[timeSelectHour].phone;
//     webCount.innerHTML = workData[timeSelectHour].web;
//     updateState();

//     for (let i = 0; i < timeSelect.length; i++) {
//         console.log("Chat: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].chat);
//         console.log("Phone: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].phone);
//         console.log("Web: " + timeSelect[i].value + " = " + workData[timeSelect[i].value].web);
//     }

// });

summaryButton.addEventListener("click", function () {

    if (UoWperHourInfoContainer.style.display === "flex") {
        UoWperHourInfoContainer.style.display = "none";
        summaryButton.innerHTML = "Summary";
    } else {
        UoWperHourInfoContainer.style.display = "flex";
        summaryButton.innerHTML = "Hide summary";
    }

    UoWperHourInfo.innerHTML = "";
    UoWperHourInfo2.innerHTML = "";

    for (let i = 0; i < timeSelect.length; i++) {

        if (i <= 11) {
            if (workData[timeSelect[i].value].chat > 0 || workData[timeSelect[i].value].phone > 0 || workData[timeSelect[i].value].web > 0) {
                UoWperHourInfo.innerHTML += "<div><span style='padding:3px;background-color:yellow'>" + timeSelect[i].value + "</span> -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            } else {
                UoWperHourInfo.innerHTML += "<div>" + timeSelect[i].value + " -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            }
        }

        if (i > 11) {
            if (workData[timeSelect[i].value].chat > 0 || workData[timeSelect[i].value].phone > 0 || workData[timeSelect[i].value].web > 0) {
                UoWperHourInfo2.innerHTML += "<div><span style='padding:3px;background-color:yellow'>" + timeSelect[i].value + "</span> -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            } else {
                UoWperHourInfo2.innerHTML += "<div>" + timeSelect[i].value + " -- Chat " + workData[timeSelect[i].value].chat + " Phone " + workData[timeSelect[i].value].phone + " Web " + workData[timeSelect[i].value].web + "</div>";
            }
        }
    }

});

