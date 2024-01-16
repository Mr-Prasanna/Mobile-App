import axios from 'axios';
import { ADD_ATTENDANCE_API } from './api';


export const addTimeSheet = async (params) => {
  console.log("attendanceParamApi+++",params);//
    const response = await axios.post(ADD_ATTENDANCE_API, params, {//ADD_ATTENDANCE_API
      // console.log("ApiResponse",response.data)
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Content-Type': "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log("TimesheetResponse+++", res.data);
        return res.data;
      })
      .catch((err) => {
       console.log('AddTimeSheetErr1', err);
       console.log('AddTimeSheetErr2', err.data);
        // return err.data;
        return err.data;
      })
    return response;
  };

//-------------------------------------------

// export const addTimeSheet = async (params) => {
//   try {
//     const response = await fetch(ADD_ATTENDANCE_API,  {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(params),
      
//     }
    
//     );
//     if (!response.ok) {
    
//       const errorData = await response.json();
//       console.log('AddTimeSheetErr1', errorData);
//       throw new Error(errorData.message);
//     }
  
//     const responseData = await response.json();
//     console.log('TimesheetResponse+++', responseData);
//    // return responseData;
//      return response;
//   } catch (error) {
//     console.log('AddTimeSheetErr', error);

//     return error;
//   }
// }
// export const addTimeSheet = async (params) => {
// const response = fetch("http://localhost:8082/employee/addAttendance", {
//   headers: {
//     Accept: 'application/json',
//    'Content-Type': 'application/x-www-form-urlencoded',
//     'Access-Control-Allow-Origin': '*',

//   }
// })
//   .then(response => {
//     console.log("response++",response);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });
// }
  export default addTimeSheet;