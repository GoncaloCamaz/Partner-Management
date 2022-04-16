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
    joinedIn: new Date(),
    currentFeePaidYear: '',
    initialGroup: '',
	city: '',
    postalCode: '',
    address: ''
}

const useStyles = makeStyles(({
    button: {
        color: '#fff',
        background: 'rgb(26, 23, 89)',
        '&:hover': {
            background: "#1888ff"
          }
    },
	item: {
		display: 'flex',
		justifyContent: 'center'
	}
}))

export default function CreateAssociateForm(props) {
    const { addOrEdit, recordForEdit, isCreate } = props
    let groups = props.groups.filter(value => value.id !== 'Todos') || []
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "Insere o nome do elemento."
        if('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "Insere o email do elemento."
        if('joinedIn' in fieldValues)
            temp.joinedIn = fieldValues.joinedIn ? "" : "Insere a data de entrada do elemento."
        if('initialGroup' in fieldValues)
            temp.initialGroup = fieldValues.initialGroup ? "" : "Seleciona o grupo de entrada do elemento."
		if('currentFeePaidYear' in fieldValues)
            temp.currentFeePaidYear = fieldValues.currentFeePaidYear ? "" : "Insere o ano (yyyy) de quotas do elemento."
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
                        label="Nome *"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.Input
                        label="Email *"
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
					   <Controls.Input
                        label="Morada"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="city"
                        label="Cidade"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Código Postal"
                        name="postalCode"
                        value={values.postalCode}
                        onChange={handleInputChange}
                        error={errors.postalCode}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
					{
						isCreate ? 
							<Controls.Select
								name="initialGroup"
								label="Grupo Inicial *"
								value={values.initialGroup}
								onChange={handleInputChange}
								options={groups}
								error={errors.initialGroup}
							/>
						:
							null
					}
					<Controls.Input
                        label="Alcunha"
                        name="nickname"
                        value={values.nickname}
                        onChange={handleInputChange}
                    />
					<h4>Data de Entrada:</h4>
                    <Controls.Input 
                        name="joinedIn"
						type="date"
                        value={values.joinedIn}
                        onChange={handleInputChange}
                        error={errors.joinedIn}
                    />
                    <Controls.Input
                        name="paidUntilYear"
                        label="Ano de Quota *"
                        value={values.currentFeePaidYear}
                        onChange={handleInputChange}
						error={errors.currentFeePaidYear}
                    />
                </Grid>
                <Grid className={classes.item}item lg={12} md={12} sm={12} xs={12}>
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