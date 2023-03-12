import React from 'react';
import PropTypes from 'prop-types';
import {connect, ErrorMessage, Field as FormikField} from "formik";
import {FormHelperText, Stack} from "@mui/material"
import {CustomInputComponent, CustomPasswordComponent, FormControlSelect} from "./CustomInputComponent";
import {SwitchComponent,CheckboxComponent} from "./Switch";

const Field = (props) => {
    const {type, formik, name} = props;
    const {errors, touched} = formik;
    const error = Boolean(errors[name] && touched[name]);

    let fieldItem = (
        <FormikField
            {...props}
            error={Boolean(error)}
            as={CustomInputComponent}
        />
    )

    if (type === "password") {
        fieldItem = (
            <FormikField
                {...props}
                type={type}
                error={Boolean(error)}
                as={CustomPasswordComponent}
            />
        )
    }

    if (type === "file") {
        fieldItem = (
            <FormikField
                type="file"
                {...props}
            />
        )
    }

    if (type === "select") {
        fieldItem = (
            <FormikField
                {...props}
                error={Boolean(error)}
                as={FormControlSelect}
            />
        )
    }

    if (type === "switch") {
        fieldItem = (
            <FormikField>
                {({field})=> (
                    <SwitchComponent
                        field={{...field, name: props.name}}
                        label={props.label}
                    />
                )}
            </FormikField>
        )
    }

    if (type === "checkbox") {
        fieldItem = (
            <FormikField>
                {({field})=> (
                    <CheckboxComponent
                        field={{...field, name: props.name}}
                        label={props.label}
                    />
                )}
            </FormikField>
        )
    }

    return (
        <Stack sx={props.sx} mb={props.mb}>
            {fieldItem}
            <ErrorMessage
                name={name}
                render={error => <FormHelperText error={Boolean(error)}>{error}</FormHelperText>}
            />
        </Stack>
    );
};

Field.propTypes = {
    type: PropTypes.oneOf([
        "password",
        "text",
        "select",
        "switch",
        "checkbox",
        "file",
    ]).isRequired,
    validate: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    sx: PropTypes.object,
    name: PropTypes.string.isRequired,
}
Field.defaultProps = {
    className: "mb-3",
    name: "default_name",
    sx: null,
    mb:2
}
export default connect(Field);
