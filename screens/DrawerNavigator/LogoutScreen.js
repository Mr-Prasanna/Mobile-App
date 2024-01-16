import React, { Component, useEffect } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet, Alert } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons, FontAwesomeIcon, parseIconFromClassName } from 'react-native-fontawesome';

function Logout() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b0e39a' }}>
            <Text>Logout Screen</Text>
            <View>
            <TouchableHighlight onPress={BackHandler.exitApp()}>Logout</TouchableHighlight>
            </View>
        </View>
    );
}

export default Logout;