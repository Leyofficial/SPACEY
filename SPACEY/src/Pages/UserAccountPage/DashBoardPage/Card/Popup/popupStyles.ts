import {styled} from "@mui/system";
import {grey} from "@mui/material/colors";

export const PopupBody = styled('div')(
    ({theme}) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
        theme.palette.mode === 'dark'
            ? `0px 4px 8px rgb(0 0 0 / 0.7)`
            : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  z-index: 1;
`,
);

export const Button = styled('button')(
    () => `
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,
);
