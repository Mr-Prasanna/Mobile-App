import axios from 'axios';
import { SHOW_ATTENDANCE_API } from './api';

export const showTimesheet = async(params) =>{

    const response = await axios.post(SHOW_ATTENDANCE_API,params, {
        headers: {
            Accept: 'application/json',
           'Content-Type': 'application/json',
            // 'Content-Type':"application/x-www-from-urlencoded"
        },
    })
    .then((res)=>{
        console.log("show attendance",res.data)
        return res.data;
    })
    .catch((err)=>{
        // console.log('error',err.response.data)
        console.log('error',err)
        return err;
    })
    return response;
};

export default showTimesheet;