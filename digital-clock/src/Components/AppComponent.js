import React, { Component } from "react";

class AppComponent extends Component {
    constructor(props) {
        super(props); 

        var options = {
            'timeStyle': 'medium',
            'hour12': true,
            'timeZone': 'US/Central'
        }

        this.state =  {
            displayTime: new Date().toLocaleString('en-US', options),
            showSeconds: false,
            hour12: false,
            timeZone: 'US/Central'
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
                            <option value='US/Eastern'>US/Eastern (UTC-5)</option>
                            <option value='US/Central'>US/Central (UTC-6)</option>
                            <option value='US/Mountain'>US/Mountain (UTC-7)</option>
                            <option value='US/Pacific'>US/Pacific (UTC-8)</option>
                            <option value='US/Alaska'>US/Alaska (UTC-9)</option>
                            <option value='Pacific/Honolulu'>Pacific/Honolulu (UTC-10)</option>
                            <option value='US/Samoa'>US/Samoa (UTC-11)</option>
                            <option value='Etc/GMT+12'>Etc/GMT+12 (UTC-12)</option>
                            <option value='Pacific/Auckland'>Pacific/Auckland (UTC+12)</option>
                            <option value='Pacific/Norfolk'>Pacific/Norfolk (UTC+11)</option>
                            <option value='Pacific/Guam'>Pacific/Guam (UTC+10)</option>
                            <option value='Asia/Tokyo'>Asia/Tokyo (UTC+9)</option>
                            <option value='Asia/Hong_Kong'>Asia/Hong_Kong (UTC+8)</option>
                            <option value='Asia/Bangkok'>Asia/Bangkok (UTC+7)</option>
                            <option value='Etc/GMT-6'>Etc/GMT-6 (UTC+6)</option>
                            <option value='Etc/GMT-5'>Etc/GMT-5 (UTC+5)</option>
                            <option value='Asia/Dubai'>Asia/Dubai (UTC+4)</option>
                            <option value='Europe/Moscow'>Europe/Moscow (UTC+3)</option>
                            <option value='Europe/Kiev'>Europe/Kiev (UTC+2)</option>
                            <option value='Europe/Dublin'>Europe/Dublin (UTC+1)</option>
                            <option value='Europe/London'>Europe/London (UTC+0)</option>
                            <option value='Atlantic/Cape_Verde'>Atlantic/Cape Verde (UTC-1)</option>
                            <option value='Brazil/DeNoronha'>Brazil/DeNoronha (UTC-2)</option>
                            <option value='Brazil/East'>Brazil/East (UTC-3)</option>
                            <option value='America/Goose Bay'>America/Goose Bay (UTC-4)</option>
                        </select>
                    </label> Change Time Zone

                </div>
            </div>
        )
    }

}

export default AppComponent;