import { styled } from '@mui/material/styles';
import {Stack, Step, StepConnector, stepConnectorClasses, StepIconProps, StepLabel, Stepper} from "@mui/material";
import {FaCheckCircle} from "react-icons/fa";
import style from './Stepper.module.scss'
import {ISteps} from "../../Pages/TrackOrderPage/TrackOrderStatus/TrackOrderWrapper/TrackOrderSteps.tsx";
interface IActiveStep {
    activeStep : number | string,
    steps : ISteps[]
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 7px)',
        right: 'calc(50% + 7px)',
        zIndex: 1,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#FA8232',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#FA8232',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#FFE7D6',
        borderTopWidth: 6,
        borderRadius: 10,
    },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'white',
        display: 'flex',
        zIndex: 2,
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#FA8232',
        }),
        '& .QontoStepIcon-completedIcon': {
            zIndex: 10,
            color: '#FA8232',
            fontSize: 26,
        },
        '& .QontoStepIcon-circle': {
            border : '2px solid #FA8232',
            width : 22,
            height: 22,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
    }),
);

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <FaCheckCircle backgroundColor={'#FA8232'} className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}



export default function CustomizedSteppers({activeStep , steps} : IActiveStep) {
    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={+activeStep} connector={<QontoConnector />}>
                {steps.map((item:  ISteps ) => (
                    <Step key={item.label}>
                        <StepLabel  StepIconComponent={QontoStepIcon}><div className={style.labelBlock}>
                            {item.icon}
                           <p>{item.label}</p>
                        </div></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}