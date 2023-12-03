import {MdLibraryBooks} from "react-icons/md";
import {PiHandshakeLight, PiPackageDuotone, PiTruck} from "react-icons/pi";
import React from "react";

export interface ISteps {
    icon : React.ReactNode,
    label : string
}
export const steps : ISteps[] = [
    {
        icon : <MdLibraryBooks size={'2rem'} color={'#69da62'}/>,
    label :  'Order Placed'
}, {
    icon: <PiPackageDuotone size={'2rem'} color={'#FA8232'} />,
    label: 'Packaging'
},
{
    icon : <PiTruck size={'2rem'} color={'#FA8232'} />,
    label: 'Create an ad'
},
{
    icon : <PiHandshakeLight size={'2rem'} color={'#FA8232'} /> ,
    label:  'Delivered'
}
];