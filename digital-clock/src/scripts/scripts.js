export function getTimeZone(){
    var timeZoneOffset = new Date().getTimezoneOffset()
    var gmtOffset = timeZoneOffset / (60)

    return gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset
}

export function calculateNewColor(oldColorHex){

    var oldColorValues = []
    var colorValues = []

    oldColorValues.push(oldColorHex.slice(1, 3))
    oldColorValues.push(oldColorHex.slice(3, 5))
    oldColorValues.push(oldColorHex.slice(5, 7))


    oldColorValues[0] = parseInt(oldColorValues[0], 16) + 128
    oldColorValues[1] = parseInt(oldColorValues[1], 16) + 151
    oldColorValues[2] = parseInt(oldColorValues[2], 16) + 82

    oldColorValues.forEach((value) => {
        if(value > 255){
            value = value - 255
        } else if (value < 0) {
            value = value + 255
        }

        value = value.toString(16)

        if(value.length === 1){
            value = "0" + value
        }

        colorValues.push(value)
    });

    return "#" + colorValues[0].toString(16) + colorValues[1].toString(16) + colorValues[2].toString(16)
}
