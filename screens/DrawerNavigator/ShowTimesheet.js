import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight, BackHandler, ScrollView, StyleSheet } from 'react-native';
import { DatePickerInput } from "react-native-paper-dates";
import { useSelector, useDispatch } from 'react-redux';
import DropDownPicker from "react-native-dropdown-picker";
import { showAttendanceRequest } from "../../actions/showAttendanceAction";
import moment from 'moment';
import { SHOW_ATTENDANCE_API } from "../../apis/api";
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Rows } from "react-native-table-component";
import axios from 'axios';
import { DataTable } from "react-native-paper";

function ShowTimesheet() {

    const [empId, setEmpId] = useState('');
    // const [empName, setEmpName] = useState('');
    const [fromDate, setFromDate] = React.useState(undefined);
    const date1 = moment(fromDate, 'DD-MM-YYYY').format();
    const dateFrom = date1.split('T')[0];
    const [toDate, setToDate] = React.useState(undefined);
    const date2 = moment(toDate, 'DD-MM-YYYY').format();
    const dateTo = date2.split('T')[0];
    // const [open, setOpen] = useState(false);
    // const [values, setValues] = useState(null);
    // const [items, setItems] = useState([
    //     { label: 'Leave', value: 'Leave' },
    //     { label: 'Work from home', value: 'Work from home' }])

    const tableHead = ["Emp_ID", "Emp_Name", "Designation", "Date", "Status"];


    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [tableData, setTableData] = useState([]);

    // const handleSubmit = () => {
    //     fetch(SHOW_ATTENDANCE_API)
    //       .then(response => response.json())
    //       .then(json => setTableData(json))
    //       console.log("tableData+++",tableData)

    //   }


    // const fetchData = async () => {
    //   try {
    //     const response = await axios.post(SHOW_ATTENDANCE_API);
    //     console.log("fetchapi++",response)
    //     // setTableData(response.data.attendanceDetails); 
    //     // console.log("TestDisplay+++",response.data.attendanceDetails);

    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    const handleLogin = () => {
        navigation.navigate('Login');
    }
    const handleSearch = () => {
        const getData = {
            "empid": empId,
            "dateFrom": dateFrom,
            "dateTo": dateTo,
        }
        dispatch(showAttendanceRequest(getData, onSuccess, onError));
    }

    function onSuccess(response) {
        setTableData(response.attendanceDetails)
        //  console.log("setTableData",tableData)
        console.log("tableResponse++", response.attendanceDetails);
        console.log("onSuccessResponse", response)
    }
    console.log("setTableData", tableData)
    function onError(error) {
        console.log("onErrorResponse", error)
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Show Attendence</Text>

            </View>
            <View style={styles.body}>
                <View >
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setEmpId(value)}
                        value={empId}
                        placeholder='Employee Id'
                        minLength={3}
                        maxLength={25}
                    />
                </View>
                {/* <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setEmpName(value)}
                        value={empName}
                        placeholder="Employee name"
                        minLength={3}
                        maxLength={25}
                    />
                </View> */}
            </View>
            <View style={{ marginTop: 40, backgroundColor: 'white' }}>
                <DatePickerInput
                    // style={{ marginHorizontal: 20, marginBottom: 10,marginTop:60, width: 40, backgroundColor: 'white', borderColor: 'black', borderTopColor: 'black' }}
                    style={{ marginTop: 20, marginHorizontal: 20, marginBottom: 20, width: 45, backgroundColor: 'white' }}
                    // locale="en"
                    value={fromDate}
                    label="From date"
                    onChange={(d) => setFromDate(d)}
                    inputMode="start"
                />
                <DatePickerInput
                    // style={{ marginTop: 120, marginHorizontal: 20, width: 40, backgroundColor: 'white', borderColor: 'grey' }}
                    style={{ marginTop: 140, marginHorizontal: 20, width: 45, backgroundColor: 'white' }}
                    // locale="en"
                    value={toDate}
                    label="To date"
                    onChange={(d) => setToDate(d)}
                    inputMode="start"
                />
            </View>
            <View style={{ marginTop: 120, marginHorizontal: 20 }}>
                {/* <DropDownPicker
                    open={open}
                    value={values}
                    label="Days"
                    items={items}
                    setOpen={setOpen}
                    setValue={setValues}
                    setItems={setItems}
                    placeholder="Select Leave Type"
                // dropDownDirection="TOP"
                /> */}
            </View>
            <View style={styles.submitevent}>
                <TouchableHighlight onPress={handleSearch}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>Search</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View>
                <TouchableHighlight onPress={handleLogin}>
                    <View >
                        <Text style={{ color: 'blue', textAlign: 'right' }}> Back to Login </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <ScrollView horizontal>
                <View style={styles.mainbox}>
                    <DataTable>
                        {/* <ScrollView  contentContainerStyle={{ flexDirection: 'column' }}> */}
                        <DataTable.Header style={styles.databeHeader}>
                            <DataTable.Title style={{ width: 100 }}>ID</DataTable.Title>
                            <DataTable.Title style={{ width: 100 }}>Name</DataTable.Title>
                            <DataTable.Title style={{ width: 100 }}>Designation</DataTable.Title>
                            <DataTable.Title style={{ width: 100 }}> Date</DataTable.Title>
                            <DataTable.Title style={{ width: 100 }}>Status</DataTable.Title>
                        </DataTable.Header>
                        <ScrollView verticle>
                            {
                                tableData.map((l, i) => (
                                    // <DataTable.Row style={styles.databeBox} key={i}>
                                    <DataTable.Row style={{ flex: 1, width: '100%', height: 50 }} key={i}>

                                        <DataTable.Cell style={{ width: 100 }}>{l.EmpID}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{l.EmpName}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{l.Designation}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{l.Date}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{l.Status}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </ScrollView>
                    </DataTable>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10
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
    title: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 25,
        color: '#f0b20a'
    },
    button: {
        // alignItems: "center",
        marginHorizontal: 0,
        backgroundColor: '#eb692d',
        color: '#fafaf7',
        fontSize: 30,
        //fontWeight: '200',
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 10
    },
    submitevent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 30,
        // borderCurve:20

    },
    text: { margin: 6 },
    tableheader: { height: 40, backgroundColor: "#f1f8ff", textAlign: "center", fontWeight: "bold" },
    tabledBorder: {
        borderWidth: 2, borderColor: "gray"
    },
    databeBox: {
        margin: 10,
        textAlign: 'center',
    },
    dataWrapper: { marginTop: -1 },
    mainbox: {
        textAlign: 'center',
        margin: 15,
        flex: 1,
        justifyContent: 'space-between',
    },
    databeHeader: {
        margin: 10,
        textAlign: 'left',
    }

})
export default ShowTimesheet;