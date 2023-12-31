import React, {useEffect, useState} from "react";
import { styled, Box } from "@mui/system";
import style from "./PriceRange.module.scss";
import {Slider, TextField} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {useGetParams} from "../../../../hooks/params/getAllParams.ts";

const CustomSlider = styled(Slider)`
  color: #fa8232; /* Цвет для неактивной части */
  & .MuiSlider-thumb {
    color: #fa8232;
    background-color: #fa8232; /* Цвет для ползунка (активной части) */
  }
  & .MuiSlider-rail {
    color: #e4e7e9; /* Цвет для неактивной части */
    background-color: #e4e7e9; /* Цвет для активной части */
  }
`;

function PriceRange() {
    const location = useLocation();
    const navigate = useNavigate();
    const [range, setRange] = useState([180, 660]);

    useEffect(() => {
        const {minPriceParam , maxPriceParam  } = useGetParams()
        setRange([ +minPriceParam , +maxPriceParam])
    }, [location.search]);
    const handleChanges = (_event: any, newValue: number | number[] ) => {
        setRange(newValue as number[]);
    };
    function handleClickBtn () {
        const queryParams = new URLSearchParams(location.search);
        queryParams.set("minPrice", String(range[0]));
        queryParams.set("maxPrice" , String(range[1]))
        const newSearch = "?" + queryParams.toString();
        const newUrl = location.pathname  + newSearch;
        navigate(newUrl)
    }
    function handleTextFieldChange(index : number, value : React.ReactNode) {
        const newRange = [...range];
        newRange[index] = Number(value); // Преобразуйте значение в число, так как TextField возвращает строку
        setRange(newRange);
    }

    return (
        <div className={style.block}>
            <p className={style.title}>Price Range</p>
            <div className={style.rangeBlock}>
                <Box sx={{ width: 300 }}>
                    <CustomSlider
                        getAriaLabel={() => "Temperature range"}
                        value={range}
                        onChange={handleChanges}
                        valueLabelDisplay="auto"
                        min={10} // Минимальное значение
                        max={1000} // Максимальное значение
                        step={5}
                    />
                    <div className={style.inputs}>
                    <TextField value={range[0]}  onChange={(e) => handleTextFieldChange(0, e.target.value)} id="outlined-basic" label="Min price" variant="outlined" />
                    <TextField value={range[1]}  onChange={(e) => handleTextFieldChange(1, e.target.value)} id="outlined-basic" label="Max price" variant="outlined" />
                    </div>
                </Box>
                <CustomBtn callback={handleClickBtn}   text={'OK'}/>
            </div>
        </div>
    );
}
export default PriceRange