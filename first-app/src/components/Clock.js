import React, { Component } from "react";
import { Button, View, Text } from "react-native";

class MyClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimerOn: true,
            date: new Date(),
            buttonText: "Stop timer"
        };
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(event) {
        event.preventDefault();
        var isTimerOn = this.state.isTimerOn;
        if (isTimerOn) {
            this.setState({buttonText: "Start timer"});
            clearInterval(this.timer);
        } else {
            this.setState({buttonText: "Stop timer"})
            this.timer = setInterval(() => {
                this.tick()
            }, 1000);
        }
        this.setState({
            isTimerOn: !isTimerOn,
            date: new Date()
        });
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return(
            <View>
                <Text>{new Date().toLocaleTimeString()}</Text>
                <Text>{this.state.date.toLocaleDateString()}</Text>
                <Button title={this.state.buttonText} onPress={this.buttonClicked} />
            </View>
        );
    }
}

export default MyClock;