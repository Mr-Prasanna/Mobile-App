import React, { Component } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./HomeScreen";
import Profiles from "./ProfileScreen";
import Settings from "./SettingScreen";
import TimeSheet from "../DrawerNavigator/TimesheetScreen";


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: true }} barStyle={{ marginLeft:10, marginRight:10 }}>
            {/* <Tab.Screen
                name="Home"
                component={Home}
                Options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (//home-circle-outline
                    <MaterialCommunityIcons name="home-circle" color={focused ? 'red' : '#000'} size={26} />),
                }}
            /> */}
             <Tab.Screen
                name="Home Screen"
                component={Home}
                Options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (//home-circle-outline
                    <MaterialCommunityIcons name="home-circle" color={focused ? 'red' : '#000'} size={26} />),
                }}
            />
            <Tab.Screen name="Profile"
                component={Profiles}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="account" color={focused ? 'red' : '#000'} size={26} />
                        ),
                }}
            />
            <Tab.Screen name="Settings" 
            component={Settings} 
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="cog" color={focused ? 'red' : '#000'} size={26} />
                    ),
            }}
            />
             <Tab.Screen name="Timesheet" 
            component={TimeSheet} 
            options={{
                tabBarLabel: 'timesheet',
                tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="cog" color={focused ? 'red' : '#000'} size={26} />
                    ),
            }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    screens:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})

