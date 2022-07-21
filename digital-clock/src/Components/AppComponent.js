import React, { Component } from "react";
import {getTimeZone, calculateNewColor} from '../scripts/scripts';
import OptionsComponent from "./OptionsComponent";

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

    updateColors = () => {
        var newShadow = calculateNewColor(this.state.clockColor)
        this.setState({shadowColor : newShadow})
    }

    tick(){
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
            <div class='App App-header' 
                style={{backgroundColor: this.state.backgroundColor, fontFamily: this.state.clockFont}}>
                <div class='time' 
                    style={{color: this.state.clockColor, textShadow: `.3rem .3rem ${this.state.shadowColor}`}}>
                    {this.state.displayTime }
                </div>
                <OptionsComponent 
                    handleChange={this.handleChange}
                    resetColors={this.resetColors}
                    showSeconds={this.state.showSeconds}
                    hour12={this.state.hour12}
                    timeZone={this.state.timeZone}
                    clockFont={this.state.clockFont}
                    clockColor={this.state.clockColor}
                    backgroundColor={this.state.backgroundColor} />
            </div>
        )
    }

}

export default AppComponent;