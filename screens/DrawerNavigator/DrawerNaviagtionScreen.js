import React, { Component } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "../BottomTabNavigator/BotomTabScreen";
import About from "./AboutScreen";
import Help from "./HelpScreen";
import ShowTimesheet from "./ShowTimesheet";
import Logout from "./LogoutScreen";
// import TimeSheet from "./TimesheetScreen";


const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation={false} >
            <Drawer.Screen name='Home' component={MyTabs}/>
            {/* <Drawer.Screen name="Timesheet" component={TimeSheet} /> */}
            <Drawer.Screen name="Show attendence" component={ShowTimesheet} />
            <Drawer.Screen name="Help" component={Help} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;