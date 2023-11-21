import React, {useState} from "react";
import { styled, Box } from "@mui/system";
import style from "./PriceRange.module.scss";
import {Slider, TextField} from "@mui/material";
import {useLocation} from "react-router-dom";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";

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
    console.log(location)
    const [range, setRange] = useState([180, 660]);
    // console.log(params.category)
    const handleChanges = (event: any, newValue: number | number[] ) => {
        setRange(newValue as number[]);
    };
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
                        // getAriaValueText={valuetext}
                        min={10} // Минимальное значение
                        max={1000} // Максимальное значение
                        step={5}
                    />
                    <div className={style.inputs}>
                    <TextField value={range[0]}      onChange={(e) => handleTextFieldChange(0, e.target.value)} id="outlined-basic" label="Min price" variant="outlined" />
                    <TextField value={range[1]}  onChange={(e) => handleTextFieldChange(1, e.target.value)} id="outlined-basic" label="Max price" variant="outlined" />
                    </div>
                </Box>
                {/* params.category ? `${params.category}?minPrice=${range[0]}&maxPrice=${range[1]}` : `?minPrice=${range[0]}&maxPrice=${range[1]}*/}
                <CustomBtn path={ location.search && !location.search.includes('minPrice=') ? location.search + '&' + `minPrice=${range[0]}&maxPrice=${range[1]}` : '?' + `minPrice=${range[0]}&maxPrice=${range[1]}` } text={'OK'}/>
            </div>
        </div>
    );
}
export default PriceRange