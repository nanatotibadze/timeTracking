
import data from "./data.json";


const currentTime = document.querySelectorAll(".heading-1");
const prevTime = document.querySelectorAll(".heading-4");
const buttons = document.querySelector(".header__selection");

const markupPrevious = function (timeFrame) {
    if (timeFrame === "daily") return "Yesterday";
    if (timeFrame === "monthly") return "Last Month";
    if (timeFrame === "weekly") return "Last Week";

}

const duration = data.map(el => el.timeframes);

const changeCurrentTime = function (header, duration, timeFrame) {
    header.forEach((heading, index) => {
        duration.forEach((el, ind) => header[ind].textContent = `${el[timeFrame].current} hrs`);
    });

}

const changePrevTime = function (header, duration, timeFrame) {
    header.forEach((heading, index) => {
        duration.forEach((el, ind) => header[ind].textContent = `${markupPrevious(timeFrame)} - ${el[timeFrame].previous} hrs`);
    });
}


buttons.addEventListener("click", function (e) {
    e.preventDefault();

    const btn = e.target.closest('.selection__btn');
    if (!btn) return;
    const { timeFrame } = btn.dataset;
    changeCurrentTime(currentTime, duration, timeFrame);
    changePrevTime(prevTime, duration, timeFrame);


});

window.addEventListener("load", function (e) {
    e.preventDefault();

    const defaultButton = document.getElementById("weekly");
    defaultButton.focus();

    const { timeFrame } = defaultButton.dataset;

    currentTime.forEach((heading, index) => {
        duration.forEach((el, ind) => currentTime[ind].textContent = `${el[timeFrame].current} hrs`);
    });

    changeCurrentTime(currentTime, duration, timeFrame);
    changePrevTime(prevTime, duration, timeFrame);

});


