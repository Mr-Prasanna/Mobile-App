import React, { Component } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
//import FontAwesome, { SolidIcons, RegularIcons, BrandIcons, FontAwesomeIcon,parseIconFromClassName} from 'react-native-fontawesome';
// import { parseIconFromClassName } from 'react-native-fontawesome';
// import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import MyTabs from "./BottomTabNavigator/BotomTabScreen";
import MyDrawer from "./DrawerNavigator/DrawerNaviagtionScreen";
{/* <ion-icon name="home"></ion-icon>
const settingsIcon = parseIconFromClassName("fa-duotone fa-gear") */}

function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#da9ae3'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

function Rewards() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#e1e39a'}}>
            <Text>Rewards Screen</Text>
        </View>
    );
}

function Help() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#9ad2e3'}}>
            <Text>Help Screen</Text>
        </View>
    );
}
function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#9dfc03'}}>
            <Text>About Screen</Text>
        </View>
    );
}
function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#b0e39a'}}>
            <Text>Profile Screen</Text>
        </View>
    );
}
function Settings() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#03bafc'}}>
            <Text>Settings Screen</Text>
        </View>
    );
}
export const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Tab=createMaterialBottomTabNavigator();
// function MyDrawer() {
//     return (
//         <Drawer.Navigator useLegacyImplementation={false} >
//             <Drawer.Screen name='Home' component={MyTabs}/>
//             <Drawer.Screen name="Rewards" component={Rewards} />
//             <Drawer.Screen name="Help" component={Help} />
//             <Drawer.Screen name="About" component={About} />
//         </Drawer.Navigator>
//     );
// }

// function MyTabs() {
//     return (
//         <Tab.Navigator screenOptions={{ headerShown: true }} barStyle={{ marginLeft:10, marginRight:10 }}>
//             <Tab.Screen
//                 name="Home"
//                 component={Home}
//                 Options={{
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ focused }) => (//home-circle-outline
//                     <MaterialCommunityIcons name="home" color={focused ? 'red' : '#000'} size={26} />),
//                 }}
//             />
//             <Tab.Screen name="Profile"
//                 component={Profile}
//                 options={{
//                     tabBarLabel: 'Profile',
//                     tabBarIcon: ({ focused }) => (
//                     <MaterialCommunityIcons name="account" color={focused ? 'red' : '#000'} size={26} />
//                         ),
//                 }}
//             />
//             <Tab.Screen name="Settings" 
//             component={Settings} 
//             options={{
//                 tabBarLabel: 'Settings',
//                 tabBarIcon: ({ focused }) => (
//                         <MaterialCommunityIcons name="cog" color={focused ? 'red' : '#000'} size={26} />
//                     ),
//             }}
//             />
//         </Tab.Navigator>
//     )
// }
export default function HomePage() {
    return (

        <MyDrawer/>


    )
}
const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    screens:{
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }
})
// export default HomePage;