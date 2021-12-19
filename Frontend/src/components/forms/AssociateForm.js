import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    name: '',
    nickname: '',
    email: '',
    phoneNumber: '',
    city: '',
    postalCode: '',
    address: '',
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

export default function AssociateForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "Insere o teu nome."
        if ('phoneNumber' in fieldValues)
            temp.phoneNumber = fieldValues.phoneNumber ? "" : "Insere o teu contacto telefónico."
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "Insere o teu email."
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
                        autoComplete="name"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                      <Controls.Input
                        label="Alcunha"
                        name="nickname"
                        value={values.nickname}
                        onChange={handleInputChange}
                    />
                      <Controls.Input
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Número de Telemóvel"
                        name="phoneNumber"
                        autoComplete="phone"
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                        error={errors.phoneNumber}
                    />
                    <Controls.Input
                        label="Morada"
                        name="address"
                        autoComplete="address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="city"
                        label="Cidade"
                        value={values.city}
                        autoComplete="address-level2"
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Código Postal"
                        name="postalCode"
                        autoComplete="postal-code"
                        value={values.postalCode}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            className={classes.button}
                            type="submit"
                            text="Atualizar" 
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