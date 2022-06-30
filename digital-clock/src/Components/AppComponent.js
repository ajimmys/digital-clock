import React, { Component } from "react";

class AppComponent extends Component {
    constructor(props) {
        super(props); 

        var options = {
            'timeStyle': 'medium',
            'hour12': true
        }

        this.state =  {
            displayTime: new Date().toLocaleString('en-US', options),
            showSeconds: false,
            hour12: false
        };
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name] : value})
    }
    
    tick(){

         //Reference for options: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
        var options = {
            'timeStyle': 'short',
            'hour12': true
        }

        if(this.state.showSeconds){
            options['timeStyle'] = 'medium';
        }

        if(this.state.hour12){
            options['hour12'] = false
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
                <div class="time">{ this.state.displayTime }</div>
                <div class="options">
                    <label>
                        <input 
                            type="checkbox"
                            name="showSeconds"
                            checked={this.state.showSeconds}
                            onChange={this.handleChange}
                        />
                    </label> Show Seconds?
                    <br />
                    <label>
                        <input 
                            type="checkbox"
                            name="hour12"
                            checked={this.state.hour12}
                            onChange={this.handleChange}
                        />
                    </label> 24 Hour Time?

                </div>
            </div>
        )
    }

}

export default AppComponent;