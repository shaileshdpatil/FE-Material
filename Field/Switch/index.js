import React from 'react';
import {FormControlLabel, FormGroup, Stack, Switch, Typography} from "@mui/material";
import {styled} from "@mui/styles";
import Checkbox from '@mui/material/Checkbox';


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({theme}) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : 'linear-gradient(260.66deg, #7742E9 7.06%, #C736EB 92.94%)',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? "theme.palette.grey[100]"
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export const SwitchComponent = (props) => {
    return (
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
            <Typography>{props.label}</Typography>
            <FormControlLabel
                label=""
                control={
                    <IOSSwitch
                        {...props.field}
                        checked={props.field.value[props.field.name]}
                        sx={{m: 1}}
                    />
                }
            />
        </Stack>
    );
};


export const CheckboxComponent = (props) => {
    return (
        <FormControlLabel
            label={props.label}
            control={
                <Checkbox
                    {...props.field}
                    checked={props.field.value[props.field.name]}
                />
            }
        />
    );
};
