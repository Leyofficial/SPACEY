import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ITabItems} from "../../Pages/ProductDetail/productDetail.ts";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p:0}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

interface IFullWidthTabsProps{
    tabItems:ITabItems[]
}
export default function FullWidthTabs({tabItems} : IFullWidthTabsProps) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <>
        <Box sx={{width: '100%' }}>
            <AppBar position="static" style={{background:'white',boxShadow:'none',border:`1px solid rgba(95, 108, 114, 0.22)`}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    style={{width:1000,color:'black',margin:`0 auto`}}
                >
                    {tabItems?.map((item,index) =>      <Tab label={item.tab} {...a11yProps(index)} />)}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{padding:0}}
            >
                {tabItems?.map((item,index) => <TabPanel  value={index} index={index} dir={theme.direction}>
                    {item.content}
                </TabPanel>)}
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </Box>
        </>
    );
}