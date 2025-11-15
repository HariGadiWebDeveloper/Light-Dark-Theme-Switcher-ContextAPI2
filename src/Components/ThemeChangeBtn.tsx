import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { useTheme } from "../Context/ThemeContext";

const ThemeChangeBtn: React.FC = () => {
  const { isLight, handleChangeTheme } = useTheme();
  return (
    <div>
      <FormControlLabel
        control={<Switch checked={isLight} />}
        label={isLight ? "Light Mode" : "Dark Mode"}
        onChange={handleChangeTheme}
      />
    </div>
  );
};

export default ThemeChangeBtn;
