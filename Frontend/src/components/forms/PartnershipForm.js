import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    name: '',
    phoneNumber: '',
    email: '',
    startDate: ''
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

export default function PartnershipForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "Insere o nome do parceiro."
        if ('phoneNumber' in fieldValues)
            temp.phoneNumber = fieldValues.phoneNumber ? "" : "Insere o contacto telefónico do parceiro."
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "Insere o email do parceiro."
        if('startDate' in fieldValues)
            temp.startDate = fieldValues.startDate ? "" : "Insere a data de inicio da parceria."
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
                    <Controls.Input
                        label="Nome"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Contacto Telefónico"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                        error={errors.phoneNumber}
                    />
                    <Controls.Input
                        name="startDate"
                        value={values.startDate}
                        type="date"
                        onChange={handleInputChange}
                        error={errors.startDate}
                    />
                    <div>
                        <Controls.Button
                            className={classes.button}
                            type="submit"
                            text="Gravar" 
                            onClick={handleSubmit}
                        />
                        <Controls.Button
                            text="Refazer"
                            color="default"
                            onClick={resetForm} 
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}