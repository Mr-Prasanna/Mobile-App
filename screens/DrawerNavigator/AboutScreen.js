import React, { Component } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#9dfc03'}}>
            <Text>About Screen</Text>
        </View>
    );
}

export default About;