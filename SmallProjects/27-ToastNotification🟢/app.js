const button = document.querySelector(".content button");


const errorMessages = [
    "Invalid username or password. Please try again.",
    "The file you uploaded is too large. Please choose a smaller file.",
    "There was an error processing your request. Please try again later.",
    "The email you entered is already registered. Please choose a different email.",
    "Your session has expired. Please log in again.",
    "Your connection to the server has been lost. Please check your internet connection.",
    "The product you requested is out of stock. Please choose a different product.",
    "There was a problem loading the page. Please try again later."
];
  
const infoMessages = [
    "Your order has been confirmed and is being processed.",
    "Your password has been reset. Please log in with your new password.",
    "The website will be undergoing scheduled maintenance tonight.",
    "Please update your account information to ensure uninterrupted service.",
    "Your subscription is about to expire. Please renew to continue using our service.",
    "Your support request has been received and will be addressed shortly.",
    "A new feature has been added to our app. Check it out!",
    "Please verify your email address to complete your registration."
];

const warningMessages = [
    "Your account is about to be deactivated due to inactivity.",
    "The email you entered may be incorrect. Please double-check.",
    "The credit card you used for payment is about to expire.",
    "The address you entered may be incomplete. Please double-check.",
    "Your device is running low on storage space.",
    "Your session will expire in 5 minutes. Please save your work and refresh the page.",
    "Your account has been flagged for suspicious activity. Please contact support.",
    "The product you ordered is on backorder. Please expect a delay in delivery.",
];

const successMessages = [
    "Your account has been created successfully.",
    "Your payment has been processed. Thank you for your purchase!",
    "Your message has been sent successfully.",
    "Your profile has been updated successfully.",
    "Your subscription has been renewed successfully.",
    "Your review has been submitted successfully.",
    "Your appointment has been confirmed.",
    "Your file has been uploaded successfully.",
    "Your password has been changed successfully.",
];

const messageBox = [errorMessages, infoMessages, warningMessages, successMessages]

const messageTypes = ["Error","Info","Warning","Success"];

button.addEventListener("click", function(){
    var messageTypeRNG = Math.floor(Math.random()*messageTypes.length);
    var messageType = messageBox[messageTypeRNG];
    var messageContentRNG = Math.floor(Math.random()*messageType.length);
    var messageContent = messageType[messageContentRNG];

    createNotification(messageTypes[messageTypeRNG], messageContent);
})


function createNotification(type, message){

    const toastDiv = document.createElement("div");
    toastDiv.classList.add("toast");

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");

    const icon = document.createElement("i");
    

    if(type === "Error"){
        iconDiv.classList.add("red");
        icon.classList.add("fa-regular", "fa-circle-xmark");
    }else if (type === "Info"){
        iconDiv.classList.add("blue");
        icon.classList.add("fa-solid", "fa-circle-info");
    }else if (type === "Warning"){
        iconDiv.classList.add("yellow");
        icon.classList.add("fa-solid", "fa-triangle-exclamation");
    }else if (type === "Success"){
        iconDiv.classList.add("green");
        icon.classList.add("fa-solid", "fa-check");
    }

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const messageTypeDiv = document.createElement("div");
    messageTypeDiv.classList.add("message-type");
    messageTypeDiv.innerHTML = type;

    const messageDisplayDiv = document.createElement("div");
    messageDisplayDiv.classList.add("message-display");
    messageDisplayDiv.innerHTML = message;

    //append all the children

    iconDiv.appendChild(icon);
    messageDiv.appendChild(messageTypeDiv);
    messageDiv.appendChild(messageDisplayDiv);
    toastDiv.appendChild(iconDiv);
    toastDiv.appendChild(messageDiv);

    const toastsDiv = document.querySelector(".toasts");
    toastsDiv.appendChild(toastDiv);

    setTimeout(function() {
        toastDiv.remove();
    }, 7000);

}


