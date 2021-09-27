import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    name: '',
    nickname: '',
    phoneNumber: '',
    email: '',
    joinedIn: '',
    paidUntilYear: '',
    initialGroup: ''
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

export default function CreateAssociateForm(props) {
    const { addOrEdit, recordForEdit } = props
    const groups = props.groups
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "Insere o nome do elemento."
        if('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "Insere o email do elemento."
        if('joinedIn' in fieldValues)
            temp.joinedIn = fieldValues.joinedIn ? "" : "Insere o ano (yyyy) de entrada do elemento."
        if('initialGroup' in fieldValues)
            temp.initialGroup = fieldValues.initialGroup ? "" : "Seleciona o grupo de entrada do elemento."
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
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Controls.Input
                        name="name"
                        label="Nome"
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
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Número de Telemóvel"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Controls.Select
                        name="group"
                        label="Grupo Inicial"
                        value={values.group}
                        onChange={handleInputChange}
                        options={groups}
                        error={errors.initialGroup}
                    />
                    <Controls.Input 
                        name="joinedIn"
                        label="Ano de Entrada"
                        value={values.joinedIn}
                        onChange={handleInputChange}
                        error={errors.joinedIn}
                    />
                    <Controls.Input
                        name="paidUntilYear"
                        label="Ano de Quota"
                        value={values.paidUntilYear}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Controls.Button
                        className={classes.button}
                        type="submit"
                        text="Adicionar" 
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
    )
}