import React, { Component, useState } from "react";
import { View, Text, TextInput, Image, TouchableHighlight, BackHandler, StyleSheet, Alert } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { DatePickerInput ,LocaleProvider} from "react-native-paper-dates";
import moment from 'moment';
import { Card } from "react-native-paper";
import { addAttendenceRequest } from "../../actions/attendanceAction";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { useSelector, useDispatch } from 'react-redux';


export default function TimeSheet() {
    const [empId, setEmpId] = useState('');
    const [empIdError, setEmpIdError] = useState('');
    const [empName, setEmpName] = useState('');
    const [empNameError, setEmpNameError] = useState('');
    const [designation, setDesignation] = useState('')
    const [designationError, setDesignationError] = useState('')
    const [fromDate, setFromDate] = React.useState(undefined)///new Date()
    const date1 = moment(fromDate, 'DD-MM-YYYY').format();
    const dateFrom=date1.split('T')[0];
    const [fromDateError, setFromDateError] = useState('');
    const [toDate, setToDate] = React.useState(undefined)
    const date2 = moment(toDate, 'DD-MM-YYYY').format();
    const dateTo=date2.split('T')[0];
    const [task, setTask] = useState('');
    const [taskError, setTaskError] = useState('');
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(null);
    const [valuesError, setValuesError] = useState(null);
    const [openItem, setOpenItem] = useState(false)
    const [items, setItems] = useState([
        { label: 'Work from home', value: '1' },
        { label: 'Work from office', value: '2' },
        { label: 'Casual leave', value: '3' },
    ]);
    const [itemsError, setItemsError] = useState('');
    const [value1, setValue1] = useState(null);
    const [days, setDays] = useState([
        { label: 'One Day', value: 'One Day' },
        { label: 'Two Days', value: 'Two Days' }
    ]);
    const dispatch = useDispatch();
    const navigation = useNavigation();
  
   
    const handleValidate = () => {
        if (empId.trim().length > 0) {
            setEmpIdError('')
        } else {
            setEmpIdError('Employee ID Required')
        }
        if (empName.trim().length > 0) {
            setEmpNameError('')
        } else {
            setEmpNameError('EmployeeName Required')
        }
        if (designation.trim().length > 0) {
            setDesignationError('')
        } else {
            setDesignationError('Designation Required')
        }
        if (fromDate !== null) {
            setFromDateError('')
        }
        else {
            setFromDateError('Date Feild is required');
        }
        if (values !== null) {
            setValuesError('');
        }
        else {
            setValuesError('Select one item')
        }
        if (task.length > 0) {
            setTaskError('');
        }
        else {
            setTaskError('Task feild is required');
        }
    }
    const handleShowAttendance = () => {
        navigation.navigate('Show timesheet');
    }

    const handleAddAttendance = () => {

        const getAttendanceData = {
            "empid": empId,
            "empname": empName,
            "designation": designation,
            "dateFrom": dateFrom,
            "dateTo": dateTo,
            "mode": values,

        }
        dispatch(addAttendenceRequest(getAttendanceData, onSuccess, onError))
        //console.log("getData", getAttendanceData);
    };

    function onSuccess(response) {

        if(response.status === "Success"){
        console.log("onSuccessAttendanceResponse", response.message);
        Alert.alert("onSuccess", response.message);  
        }
        else{
            console.log("onErrorAddAttendanceResponse", response.message);
            Alert.alert("onError",response.message)
        }
    }

    function onError(error) {
        if(response.status === "Error"){
        console.log("onAttendanceError+", error.message)
        // console.log("onAttendanceError1+", error.message)
        Alert.alert(" Timesheet Error", error.message);
        // Alert.alert("Error", error.message);
        }
    }
    return (

        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Apply leave</Text>
            </View>
            <Card styles={styles.mainCardView}>
                <View style={styles.body}>
                    <View >
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setEmpId(value)}
                            value={empId}
                            placeholder='Employee Id'
                            minLength={3}
                            maxLength={25}
                            onChange={handleValidate}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{empIdError}</Text>
                    <View >
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setEmpName(value)}
                            value={empName}
                            placeholder='Employee Name'
                            minLength={3}
                            maxLength={25}
                            onChange={handleValidate}
                        // inlineImageLeft="user"
                        // left={<TextInput.Icon icon="account" />}
                        />
                        {/* <MaterialCommunityIcons name="account-circle" color={'#000'} size={26} style={styles.Icon} /> */}

                    </View>
                    <Text style={{ color: 'red' }}>{empNameError}</Text>
                    <View >
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setDesignation(value)}
                            value={designation}
                            placeholder='Designation'
                            minLength={3}
                            maxLength={25}
                            onChange={handleValidate}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{designationError}</Text>
                    {/* <View> */}
                  <View style={{ marginBottom: 40, marginHorizontal: 30, marginTop: 10 }}>
                        <DropDownPicker
                            open={openItem}
                            value={values}
                            label="Days"
                            items={items}
                            setOpen={setOpenItem}
                            setValue={setValues}
                            onChange={handleValidate}
                            setItems={setItems}
                            placeholder="Select Leave Type"
                            dropDownDirection="TOP"
                        />

                    </View>
                    <Text style={{ color: 'red' }}>{valuesError}</Text>
                   {/*  <View style={{ marginBottom: 50, marginHorizontal: 30, alignSelf: 'stretch' }}>
                        <DropDownPicker
                            open={open}
                            value={value1}
                            items={days}
                            setOpen={setOpen}
                            setValue={setValue1}
                            setItems={setDays}
                            onChange={handleValidate}
                        />

                    </View>*/} 
                    {/* </View> */}
                </View>
                <View style={{ marginBottom: 95, backgroundColor: 'white' }}>
                    <DatePickerInput
                        style={{ marginHorizontal: 20, marginBottom: 10, width: 40, backgroundColor: 'white', borderColor: 'black', borderTopColor: 'black' }}
                        locale="en"
                        //format="DD-MM-YYYY"
                        value={fromDate}
                        label="From date"
                        onChange={(d) => setFromDate(d)}
                        inputMode="start"
                       // onDateChange={handleDateChange}

                    />
                    <Text style={{ color: 'red' }}>{fromDateError}</Text>
                    <DatePickerInput
                        style={{ marginTop: 120, marginHorizontal: 20, width: 40, backgroundColor: 'white', borderColor: 'grey' }}
                        locale="en"
                        value={toDate}
                        label="To date"
                        onChange={(d) => setToDate(d)}
                        inputMode="start"
                    
                    />
                </View>

                <View style={styles.body}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setTask(value)}
                        value={task}
                        placeholder='Task'
                        minLength={3}
                        maxLength={25}
                        onChange={handleValidate}
                    />
                </View>
                <Text style={{ color: 'red' }}>{taskError}</Text>

                <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                    <View style={styles.submitevent}>
                        <TouchableHighlight onPress={handleAddAttendance}> 
                            <View style={styles.button}>
                                <Text style={{ color: 'white', fontWeight: '700' }}>Submit</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.submitevent}>
                        <TouchableHighlight onPress={handleShowAttendance}>
                            <View style={styles.button}>
                                <Text style={{ color: 'white' }}>Show Attendence</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Card>

        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        backgroundColor: '#61A3BA'
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 25,
        color: '#f0b20a'
    },
    body: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor:'white'
    },
    input: {
        height: 40,
        width: 350,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10
        // marginRight: 20
    },
    taskInput: {
        height: 40,
        width: 350,
        // margin: 10,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 30,
        // marginRight: 20
        marginBottom: 50
    },
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        color: 'black'
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    mainCardView: {
        height: 200,
        // width: 0,
        // marginHorizontal: 10,
        marginBottom: 60,
        backgroundColor: "#776B5D",
        paddingBottom: 30,
        // backgroundColor: '#F9E8D9'
        // backgroundColor: '#E26EE5',
        // marginBottom:200,
        // paddingTop:20,
        // marginHorizontal: 10,
        borderRadius: 10,
        // elevation: 5,

    },
    button: {
        // alignItems: "center",
        marginHorizontal: 0,
        backgroundColor: '#eb692d',
        //color: '#fafaf7',
        //color:'white',
        fontSize: 20,
        //fontWeight: '200',
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 10

    },
    submitevent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignSelf: 'center'
    },
})
