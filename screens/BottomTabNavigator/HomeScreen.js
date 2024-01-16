import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Card } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
function Home() {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate('Login');
    }
    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#da9ae3'}}>
        //     <Text>Home Screen</Text>
        // </View>
        <View style={styles.container}>
            <View style={{ margin: 10, backgroundColor: "#776B5D" }}>
                <Card styles={styles.mainCardView}>
                    <View >
                        <Text style={styles.birthTitle}>Birthdays</Text>
                    </View>
                    <View style={styles.birthdayDetails}>
                        <View style={styles.contents}>
                            <Image source={require('./../../images/profile1.jpeg')} style={styles.imagesize} />
                            <Text style={styles.contents}>Kumar</Text>
                            <Text style={styles.contents}>01-01-2000</Text>
                            {/* <Text style={styles.contents}>Year</Text> */}
                        </View>
                        <View>
                            <Image source={require('./../../images/profile1.jpeg')} style={styles.imagesize} />
                            <Text style={styles.contents}>Dinesh</Text>
                            <Text style={styles.contents}>12-10-1999</Text>
                            {/* <Text style={styles.contents}>Year</Text> */}
                        </View>

                    </View>
                </Card>
            </View>
            <View style={{ marginVertical: 20, margin: 10 }}>
                <Calendar />
            </View>
            <View>
                <TouchableHighlight onPress={handleLogin}>
                    <View >
                        <Text style={{ color: 'white' ,textAlign:'right'}}> Back to Login </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: '#527853',
        backgroundColor:  '#61A3BA'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mainCardView: {
        height: 10,
        width: 10,
        marginHorizontal: 10,
        backgroundColor: "#776B5D",
        // backgroundColor: '#F9E8D9'
        // backgroundColor: '#E26EE5',
        // marginBottom:200,
        // paddingTop:20,
        // marginHorizontal: 10,
        borderRadius: 10,
        // elevation: 5,

    },
    birthTitle: {
        fontSize: 30,
        textAlign: 'center'
    },
    birthdayDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        textAlign: "center"
    },
    imagesize: {
        // marginVertical: 30
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10
    },
    contents: {
        alignSelf: 'center',
        fontSize: 20,
    }

})
export default Home;