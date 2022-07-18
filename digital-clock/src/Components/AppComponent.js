import React, { Component } from "react";

class AppComponent extends Component {
    constructor(props) {
        super(props); 

        var currentTimeZone = getTimeZone()
        var options = {
            'timeStyle': 'medium',
            'hour12': true,
            'timeZone': currentTimeZone
        }

        this.state =  {
            displayTime: new Date().toLocaleString('en-US', options),
            showSeconds: false,
            hour12: false,
            timeZone: currentTimeZone,
            clockFont: 'Rokkitt, Kameron, serif',
            clockColor: '#2C2C54',
            shadowColor: '#ACC3A6',
            backgroundColor: '#F5D6BA'
        };
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name] : value})
    }

    resetColors = () => { 
        this.setState({clockColor: '#2C2C54', shadowColor: "#ACC3A6", backgroundColor: '#F5D6BA'})
    }

    //Make this able to do both the font (based on the background - add 127 to background color) and the shadow (based on the Clock Color - below)
    updateColors = () => {

        var newShadow = calculateNewColor(this.state.clockColor, "shadow")

        this.setState({shadowColor : newShadow})
    }

    tick(){

         //Reference for options: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
         //Regerence for timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        var options = {
            'timeStyle': 'short',
            'hour12': true,
            'timeZone': this.state.timeZone
        }

        if(this.state.showSeconds){
            options.timeStyle = 'medium';
        }

        if(this.state.hour12){
            options.hour12 = false
        }

        this.updateColors()

        this.setState({
            displayTime: new Date().toLocaleString('en-US', options)
        })

        document.title = this.state.displayTime
    }

    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    render() {
        return(
            <div class='App App-header' style={{
                backgroundColor: this.state.backgroundColor,
                fontFamily: this.state.clockFont}}>
                <div class='time' style={{color: this.state.clockColor, textShadow: `.3rem .3rem ${this.state.shadowColor}`}}>{this.state.displayTime }</div>
                <div class='options'>
                    <label>
                        <input 
                            type='checkbox'
                            name='showSeconds'
                            checked={this.state.showSeconds}
                            onChange={this.handleChange}
                        />
                        <span class='option-label'> Show Seconds? </span>
                    </label> 
                    <br />
                    <label>
                        <input 
                            type='checkbox'
                            name='hour12'
                            checked={this.state.hour12}
                            onChange={this.handleChange}
                        />
                        <span class='option-label'>24 Hour Time?</span>
                    </label> 
                    <br />
                    <label>
                        <select
                        value={this.state.timeZone}
                        onChange={this.handleChange}
                        name='timeZone'
                        >
                            <option value='Etc/GMT+4'>US/Eastern (UTC-5)</option>
                            <option value='Etc/GMT+5'>US/Central (UTC-6)</option>
                            <option value='Etc/GMT+6'>US/Mountain (UTC-7)</option>
                            <option value='Etc/GMT+7'>US/Pacific (UTC-8)</option>
                            <option value='Etc/GMT+8'>Anchorage(UTC-9)</option>
                            <option value='Etc/GMT+10'>Honolulu (UTC-10)</option>
                            <option value='Etc/GMT+11'>Midway (UTC-11)</option>
                            <option value='Pacific/Chatham'>Chathman Islands (UTC+12.75)</option>
                            <option value='Etc/GMT-10'>Sydney (UTC+10)</option>
                            <option value='Etc/GMT-9'>Tokyo (UTC+9)</option>
                            <option value='Etc/GMT-8'>Beijing (UTC+8)</option>
                            <option value='Etc/GMT-7'>Bangkok (UTC+7)</option>
                            <option value='Asia/Calcutta'>New Delhi (UTC+5.5)</option>
                            <option value='Etc/GMT-5'>Islamabad (UTC+5)</option>
                            <option value='Etc/GMT-4'>Abu Dubai (UTC+4)</option>
                            <option value='Etc/GMT-3'>Moscow (UTC+3)</option>
                            <option value='Etc/GMT-2'>Berlin (UTC+2)</option>
                            <option value='Etc/GMT-1'>London (UTC+1)</option>
                            <option value='Etc/GMT+0'>Reykjavik (UTC)</option>
                            <option value='Etc/GMT+2'>Nuuk (UTC-2)</option>
                            <option value='Etc/GMT+3'>Goose Bay (UTC-3)</option>
                        </select>
                        <span class='option-label'>Change Time Zone</span> 
                    </label>
                    <br />
                    <label>
                        <select 
                        value={this.state.clockFont}
                        onChange={this.handleChange}
                        name='clockFont'
                        >
                            <option value='Rokkitt, Kameron, serif'>Default</option>
                            <option value='Bebas Neue, cursive'>Benas Neue</option>
                            <option value='Edu VIC WA NT Beginner, cursive'>Slanted</option>
                            <option value='Rubik Moonrocks, cursive'>Moon Rock</option>
                            
                        </select>
                        <span class='option-label'>Change Font</span>
                    </label>
                    <br />
                    <label>
                        <input 
                            type='color'
                            name='clockColor'
                            value={this.state.clockColor}
                            onChange={this.handleChange}
                        />
                        <span class='option-label'>Clock Font Color</span> 
                    </label>
                    <br />
                    <label>
                        <input 
                            type='color'
                            name='backgroundColor'
                            value={this.state.backgroundColor}
                            onChange={this.handleChange}
                        />
                        <span class='option-label'>Background Color</span> 
                    </label>
                    <br />
                    <input 
                            type='button'
                            value='Reset Colors'
                            onClick={this.resetColors}  
                    />
                </div>
            </div>
        )
    }

}

function getTimeZone(){
    var timeZoneOffset = new Date().getTimezoneOffset()
    var gmtOffset = timeZoneOffset / (60)

    return gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset
}

function calculateNewColor(oldColorHex, newColorDestination){

    var oldColorValues = []
    var colorValues = []

    oldColorValues.push(oldColorHex.slice(1, 3))
    oldColorValues.push(oldColorHex.slice(3, 5))
    oldColorValues.push(oldColorHex.slice(5, 7))

    if(newColorDestination === "shadow"){
        oldColorValues[0] = parseInt(oldColorValues[0], 16) + 128
        oldColorValues[1] = parseInt(oldColorValues[1], 16) + 151
        oldColorValues[2] = parseInt(oldColorValues[2], 16) + 82
    } else {
        oldColorValues[0] = parseInt(oldColorValues[0], 16) + 76
        oldColorValues[1] = parseInt(oldColorValues[1], 16) + 57
        oldColorValues[2] = parseInt(oldColorValues[2], 16) - 76
    }

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

export default AppComponent;