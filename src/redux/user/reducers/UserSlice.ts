import { createSlice } from '@reduxjs/toolkit'

export interface IUserState {
    user : {
        _id : string,
        email : string ,
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
        locale : string
    }
}

const initialState = {
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
        locale : ''
    }
} as IUserState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state , action) => {
            state.user = action.payload;
            console.log(state.user)
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
