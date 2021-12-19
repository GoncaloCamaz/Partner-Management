import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    newPassword: ''
}

const useStyles = makeStyles(({
    root: {
        backgroundColor: "#fff",
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        color: '#fff',
        background: 'rgb(26, 23, 89)',
        '&:hover': {
            background: "#1888ff"
          }
    }
}))

export default function AdminProfileForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "Insere o nome do gestor de associados."
        if('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "Insere o email do gestor de associados."
        if('phoneNumber' in fieldValues)
            temp.phoneNumber = fieldValues.phoneNumber ? "" : "Insere o número de telemóvel do gestor de associados."
        if('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "Insere a password caso a pretendas alterar."
        if('newPassword' in fieldValues)
        {
            temp.newPassword = (fieldValues.newPassword === fieldValues.password 
                && fieldValues.newPassword !== "" 
                && fieldValues.password !== "") ? "" : "Verifica se as passwords inseridas são iguais."
        }
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
        <div className={classes.root}>
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Controls.Input
                            name="name"
                            label="Nome"
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}
                        />
                        <Controls.Input
                            label="Email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                        <Controls.Input
                            label="Número de Telemóvel"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            type="tel"
                            onChange={handleInputChange}
                            error={errors.phoneNumber}
                        />
                        <Controls.Input 
                            name="password"
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={handleInputChange}
                            error={errors.password}
                        />
                        <Controls.Input
                            name="newPassword"
                            label="Confirmação da Password"
                            type="password"
                            value={values.newPassword}
                            onChange={handleInputChange}
                            error={errors.newPassword}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Controls.Button
                            className={classes.button}
                            type="submit"
                            text="Gravar Alterações" 
                            onClick={handleSubmit}
                        />
                        <Controls.Button
                            text="Refazer"
                            color="default"
                            onClick={resetForm} 
                        />
                    </Grid>
                </Grid>
            </Form>
        </div>
    )
}