import {IconButton, InputAdornment, TextField} from "@mui/material";
import {useState} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Select,InputLabel,FormControl} from "@mui/material";

export const CustomInputComponent = (props) => {
    return (
        <TextField
            {...props}
            InputLabelProps={{shrink: true}}
        />
    );
}

export const CustomPasswordComponent = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordField = () => {
        setShowPassword(!showPassword);
    }
    return (
        <TextField
            {...props}
            type={showPassword ? "text" : "password"}
            InputLabelProps={{shrink: true}}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={togglePasswordField}
                            edge="end"
                        >
                            {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                        </IconButton>
                    </InputAdornment>),
            }}
        />
    );
}

export const FormControlSelect = (props) => {
    const {children,selectSx,...rest} = props;
    return (
        <FormControl sx={{opacity:rest.disabled ? 0.6 : 1,...props.selectSx}} size={props.size}>
            <InputLabel>{props.label}</InputLabel>
            <Select {...rest} >
                {children}
            </Select>
        </FormControl>
    );
}
