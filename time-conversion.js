// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Option 1
function timeConversion(s) {
    let resultTime = '';
    let hours = s.slice (0,2);
    let minutes = s.slice(3,5);
    let seconds = s.slice(6,8);
    if (s.includes('AM')){
            if (hours === '12'){
                    hours = '00';
            }            
    }
    else {
            if (hours < 12 && hours > 0){
                    hours = parseFloat(hours) + 12;
            }
    }
    resultTime = hours + ':'+minutes +':'+seconds;
    return resultTime;

}

// Option 2

Javascript easy sollution
function timeConversion(s) {
    let hours;
    let tfhours;
    let minutes;
    let seconds;
    const AM = 'AM'
    const PM = 'PM'
    let result;
    if(s.includes(PM)){
      PMConvertor(s)
    } else if (s.includes(AM)){
       AMConvertor(s)
    }
    function PMConvertor (e) {
        hours= +s.slice(0,2)
        minutes = s.slice(3,5)
        seconds = s.slice(6,8)
        tfhours = 12 + hours 
        return result = (`${tfhours}:${minutes}:${seconds}`)
        
    }
    function AMConvertor (e) {
        hours=s.slice(0,2)
        minutes = s.slice(3,5)
        seconds = s.slice(6,8)
        if(hours === '12'){
            tfhours = '00'
            return result = (`${tfhours}:${minutes}:${seconds}`)
        }
        return result = (`${hours}:${minutes}:${seconds}`)
    }
    return result
    }
