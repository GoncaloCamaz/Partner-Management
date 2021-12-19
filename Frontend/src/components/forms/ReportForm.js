import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    group: 'All',
    feeYear: new Date().getFullYear()
}

const useStyles = makeStyles(({
    button: {
        color: '#fff',
        background: 'rgb(26, 23, 89)',
        '&:hover': {
            background: "#1888ff"
          }
    }
}))

export default function ReportForm(props) {
    const { addOrEdit, recordForEdit } = props
    const groups = props.groups
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('group' in fieldValues)
            temp.group = fieldValues.group ? "" : "Seleciona um grupo."
        if ('feeYear' in fieldValues)
            temp.feeYear = fieldValues.feeYear ? "" : "Insere o Ano da Quota."
        setErrors({
            ...temp
        })
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    // eslint-disable-next-line
    }, [recordForEdit])


    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                <Controls.Select
                        name="group"
                        label="Grupo"
                        value={values.group}
                        onChange={handleInputChange}
                        options={groups}
                        error={errors.initialGroup}
                    />
                    <Controls.Input
                        name="feeYear"
                        label="Ano de Quota"
                        value={values.feeYear}
                        onChange={handleInputChange}
                        error={errors.feeYear}
                    />
                    <div>
                        <Controls.Button
                            className={classes.button}
                            type="submit"
                            text="Download" 
                            onClick={handleSubmit}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}