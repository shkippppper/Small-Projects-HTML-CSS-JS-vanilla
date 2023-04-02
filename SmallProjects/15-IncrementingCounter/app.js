const twitterNumbers = document.querySelectorAll(".content .container")[0].children[1];
const facebookNumbers = document.querySelectorAll(".content .container")[1].children[1];
const youtubeNumbers = document.querySelectorAll(".content .container")[2].children[1];

var twitterCount = 0;
var facebookCount = 0;
var youtubeCount = 0;

var twitterEndCount = 22750;
var facebookEndCount = 36250;
var youtubeEndCount = 92000;

const constantDivident = 250;

UpdateCount()

function UpdateCount(){
    let intervalTwitter = setInterval(() => {
        twitterCount +=twitterEndCount/constantDivident;
        if(twitterCount >= twitterEndCount){
            clearInterval(intervalTwitter);
        }
        twitterNumbers.innerHTML = twitterCount;
    }, 2);

    let intervalFacebook = setInterval(() => {
        facebookCount +=facebookEndCount/constantDivident;
        if(facebookCount >= facebookEndCount){
            clearInterval(intervalFacebook);
        }
        facebookNumbers.innerHTML = facebookCount;
    }, 2);

    let intervalYoutube = setInterval(() => {
        youtubeCount +=youtubeEndCount/constantDivident;
        if(youtubeCount >= youtubeEndCount){
            clearInterval(intervalYoutube);
        }
        youtubeNumbers.innerHTML = youtubeCount;
    }, 2);

}
