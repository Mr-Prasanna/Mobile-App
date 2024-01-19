import React, { useState } from "react";
import { View, Text, TouchableHighlight, TouchableOpacity,BackHandler, StyleSheet } from 'react-native';
import { TextInput, Button, Provider } from 'react-native-paper';
import { DatePickerInput } from "react-native-paper-dates";
// import DatePicker from 'react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker';

function Profiles() {
   
    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b0e39a' }}>
        <Provider>
       <View style={{ marginTop: 150, backgroundColor: '#b0e39a' }}>
            <View>
                <Text>Profile Screen</Text>
            </View>
        </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 20,
      },
      showPickerButton: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 20,
      },
  });
export default Profiles;