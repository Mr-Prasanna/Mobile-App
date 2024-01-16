import React, { useState } from "react";
import { View, Text, TouchableHighlight, TouchableOpacity,BackHandler, StyleSheet } from 'react-native';
import { TextInput, Button, Provider } from 'react-native-paper';
import { DatePickerInput } from "react-native-paper-dates";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

function Profiles() {
    const [inputDate, setInputDate] = React.useState(undefined)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, date) => {
        setShowDatePicker(Platform.OS === 'ios'); // Hide on iOS immediately, on Android, it will be hidden when the user selects a date
        if (date) {
          setSelectedDate(date);
        }
      };
    
      const showDatePickerModal = () => {
        setShowDatePicker(true);
      };
    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b0e39a' }}>
        <Provider>
       <View style={{ marginTop: 150, backgroundColor: '#b0e39a' }}>
            <View>
                <Text>Profile Screen</Text>
            </View>
            {/* <Text style={styles.label}>Selected Date: {selectedDate.toISOString().split('T')[0]}</Text>
      <TouchableOpacity onPress={showDatePickerModal}>
        <Text style={styles.showPickerButton}>Show Date Picker</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )} */}
            {/* <Text style={styles.label}>Selected Date: {selectedDate}</Text> */}
        {/* <DatePickerInput
          style={styles.datePicker}
          date={selectedDate}
          mode="date"
          placeholder="Select Date"
          format="YYYY-MM-DD" // Set the desired format here
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={handleDateChange}
        /> */}
            {/* <View>
                <DatePickerInput
                    
                    style={{ marginBottom: 50 }}
                    locale="en"
                    label="Birthdate"
                    value={inputDate}
                    onChange={(d) => setInputDate(d)}
                    inputMode="start"
                />
            
                <DatePickerInput
                    style={{ marginTop: 60 }}
                    locale="en"
                    label="Birthdate"
                    value={inputDate}
                    onChange={(d) => setInputDate(d)}
                    inputMode="start"
                />
            </View> */}
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