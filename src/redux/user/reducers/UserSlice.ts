import { createSlice } from '@reduxjs/toolkit'
import {ICardWrapper} from "../../../Pages/UserAccountPage/DashBoardPage/dashboardTypes.ts";

export interface IUser {
    user : {
        _id : string,
        email : string ,
        emailVerified : boolean,
        familyName : string ,
        givenName : string ,
        isConfirm : boolean ,
        isGoogleAccount : boolean,
        name : string,
        password : string,
        passwordChangedAt : string,
        passwordResetExpires : string
        passwordResetToken : string,
        randomNumberToUpdatePassword : string,
        role : string,
        picture : string
        locale : string,
        cards : ICardWrapper[]
        displayName: string,
        address: {
            country: string,
            zipCode: string | number,
            city: string
        },
        fullyName:string,
        phone:number | string
    }
}


export interface IUserState {
    user: IUser

}
const initialState : IUser = {
    user : {
        email : '' ,
        familyName : '',
        givenName : '',
        isConfirm : false,
        isGoogleAccount : false,
        name : '',
        password : '',
        passwordChangedAt : '',
        passwordResetExpires : '',
        passwordResetToken : '',
        randomNumberToUpdatePassword : '',
        role : '',
        picture : '',
        locale : '',
        cards : [{
            name : '',
            idCard : '',
            number : '',
            expiry : '',
            cvc : '',
        }],
        displayName: "",
        address: {
            country: "",
            zipCode: "",
            city: ""
        },
        phone:"",
        fullyName:""

    }
} as IUser

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state , action) => {
            state.user = action.payload;
        },
        changeCountry: (state, action) => {
            state.user.address.country = action.payload

        },
        changeCity: (state, action) => {
            state.user.address.city = action.payload
        },
        changeZipCode:(state,action) => {
            state.user.address.zipCode = action.payload
        },
        changeDisplayName:(state,action) => {
            state.user.displayName = action.payload
        },
        changeEmail:(state,action) => {
            state.user.email = action.payload
        },
        changeGivenName:(state,action) => {
            state.user.givenName = action.payload
        },
        changeFullName:(state,action) => {
            state.user.fullyName = action.payload
        },
        changePhone:(state,action) => {
            state.user.phone = action.payload
        },
        logoutUser : () => {
            return initialState
        }
    },
});

export const { setUser,changeCountry,changeCity,changeEmail,changeFullName,changeGivenName,changeDisplayName,changePhone,changeZipCode , logoutUser} = userSlice.actions;
export default userSlice.reducer;
