import {createSlice} from '@reduxjs/toolkit'

export interface IUser{
    _id: string,
    email: string,
    familyName: string,
    givenName: string,
    isConfirm: boolean,
    isGoogleAccount: boolean,
    name: string,
    password: string,
    passwordChangedAt: string,
    passwordResetExpires: string
    passwordResetToken: string,
    randomNumberToUpdatePassword: string,
    role: string,
    picture: string
    locale: string
    displayName: string,
    address: {
        country: string,
        zipCode: string | number,
        city: string
    },
    fullyName:string,
    phone:number | string
}

export interface IUserState {
    user: IUser

}

const initialState: IUserState = {
    user: {
        email: '',
        familyName: '',
        givenName: '',
        isConfirm: false,
        isGoogleAccount: false,
        name: '',
        password: '',
        passwordChangedAt: '',
        passwordResetExpires: '',
        passwordResetToken: '',
        randomNumberToUpdatePassword: '',
        role: '',
        picture: '',
        locale: '',
        displayName: "",
        address: {
            country: "",
            zipCode: "",
            city: ""
        },
        phone:"",
        fullyName:""
    }
} as IUserState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
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
    },
});

export const {setUser,changeCountry,changeCity,changeEmail,changeFullName,changeGivenName,changeDisplayName,changePhone,changeZipCode} = userSlice.actions;
export default userSlice.reducer;
