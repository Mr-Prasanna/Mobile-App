import React, { Component } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "../BottomTabNavigator/BotomTabScreen";
import About from "./AboutScreen";
import Help from "./HelpScreen";
import ShowTimesheet from "./ShowTimesheet";
import Logout from "./LogoutScreen";
import TimeSheet from "./TimesheetScreen";

const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation={false} >
            <Drawer.Screen name='Home' component={MyTabs}
             options={{
                title: 'Home',
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="home-circle" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ),
             }}
            />
            {/* <Drawer.Screen name="Timesheet" component={TimeSheet} /> */}
            <Drawer.Screen name="Show timesheet" component={ShowTimesheet} />
            <Drawer.Screen name="Help" component={Help} 
             options={{
                title: 'Help',
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="help-box" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ),
             }}
            />
            <Drawer.Screen name="About" component={About}
             options={{
                title: 'About',
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="information" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ),
             }}
            />
            <Drawer.Screen name="Logout" component={Logout} 
             options={{
                title: 'Logout',
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="logout" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ),
             }}
            />
        </Drawer.Navigator>
    );
}

const styles= StyleSheet.create({
    Icon: {
        position: 'absolute',
        // right: 75,
        alignSelf: 'right',
        alignItems: 'left',

    }
})

export default MyDrawer;