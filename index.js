
const myLabel =  document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        return `${String(hours).padStart(2, '0')}:
        ${String(minutes).padStart(2, '0')}:
        ${formatZero(seconds)} ${amOrPm}`
    }

    // Other way to lead a zero digit to the clock when the value is one digit size.
    function formatZero(time){
        return time.toString().length < 2 ? `0${time}` : time.toString()
    }
}