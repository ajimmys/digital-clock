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
            timeZone: currentTimeZone
        };
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name] : value})
    }
    

    tick(){

         //Reference for options: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
         //Regerence for timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        var options = {
            'timeStyle': 'short',
            'hour12': true,
            'timeZone': this.state.timeZone
        }

        //console.log(this.state.timeZone)

        if(this.state.showSeconds){
            options.timeStyle = 'medium';
        }

        if(this.state.hour12){
            options.hour12 = false
        }

        this.setState({
            displayTime: new Date().toLocaleString('en-US', options)
        })
    }

    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(), 100);    
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    render() {
        return(
            <div>
                <div class='time'>{ this.state.displayTime }</div>
                <div class='options'>
                    <label>
                        <input 
                            type='checkbox'
                            name='showSeconds'
                            checked={this.state.showSeconds}
                            onChange={this.handleChange}
                        />
                    </label> Show Seconds?
                    <br />
                    <label>
                        <input 
                            type='checkbox'
                            name='hour12'
                            checked={this.state.hour12}
                            onChange={this.handleChange}
                        />
                    </label> 24 Hour Time?
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
                    </label> Change Time Zone

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

export default AppComponent;