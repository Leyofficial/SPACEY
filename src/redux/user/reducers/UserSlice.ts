import { createSlice } from '@reduxjs/toolkit'
import {ICardWrapper} from "../../../Pages/UserAccountPage/DashBoardPage/dashboardTypes.ts";

export interface IUserState {
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
    }
}

const initialState : IUserState = {
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
        }]
    }
} as IUserState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state , action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser} = userSlice.actions;
export default userSlice.reducer;
