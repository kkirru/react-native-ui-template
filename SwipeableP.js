import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import SwipeablePanel from "rn-swipeable-panel";

export default class SwipeableP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swipeablePanelActive: false
        };
    }

    componentDidMount = () => {
        this.openPanel();
    };

    openPanel = () => {
        this.setState({ swipeablePanelActive: true });
    };

    closePanel = () => {
        this.setState({ swipeablePanelActive: false });
    };

    render() {
        return (
            // <View style={styles.container}>
            <View >
                {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>*/}
                <SwipeablePanel
                    fullWidth={true}
                    closeOnTouchOutside={true}
                    onlyLarge={true}
                    isActive={this.state.swipeablePanelActive}
                    onClose={this.closePanel}
                    onPressCloseButton={this.closePanel}
                >
                </SwipeablePanel>
            </View >
        );
    }
}
