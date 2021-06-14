function calcTime (){

    var selectedDate = new Date(document.getElementById('requestedDate').value)
    var currentDate = new Date
    var selectedHour = document.getElementById('requestedHour').value
    var timeHours = (selectedHour.split(":")[0])  * 3600000
    var timeMinutes = (selectedHour.split(":")[1])  * 60000   
    var timeTo = selectedDate.getTime() - currentDate.getTime() + timeHours + timeMinutes + 10800000
     
   // time calculation

    var days = Math.floor(timeTo/86400000)
    var hours = Math.floor(timeTo/3600000) % 24
    var minutes = Math.floor(timeTo/60000) % 60
    var seconds = Math.floor(timeTo/1000) % 60

    if(days == 0 && hours == 0 & minutes == 0 & seconds == 0){alert('A hora chegou!')}  

    // timer display

    if(timeTo > 0 && (isNaN(selectedHour)) == true)

    {document.getElementById('timerDays').innerHTML = days
    document.getElementById('timerHours').innerHTML = hours  
    document.getElementById('timerMinutes').innerHTML = minutes  
    document.getElementById('timerSeconds').innerHTML = seconds} 

    else

    {document.getElementById('timerDays').innerHTML = "T"
    document.getElementById('timerHours').innerHTML = "I"
    document.getElementById('timerMinutes').innerHTML = "M" 
    document.getElementById('timerSeconds').innerHTML = "E"}

    return selectedHour   
}

var interval
    
function stop(){
clearInterval(interval)}

function changeTimer(){
stop() 
interval = setInterval(calcTime, 1000)}

function bugFix(){
if ((calcTime()>= 0)==true){alert('Por favor, insira uma hora válida')}
}