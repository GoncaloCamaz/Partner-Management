import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    step_id: '',
    step_name: ''
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

export default function PaymentMethodStepForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('step_id' in fieldValues)
            temp.step_id = fieldValues.step_id ? "" : "Insere o ID do Passo."
        if ('step_id' in fieldValues)
            temp.step_name = fieldValues.step_name ? "" : "Insere a Descrição do Passo."
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
                        label="ID"
                        name="step_id"
                        value={values.step_id}
                        onChange={handleInputChange}
                        error={errors.step_id}
                    />
                    <Controls.Input
                        label="Nome"
                        name="name"
                        value={values.step_name}
                        onChange={handleInputChange}
                        error={errors.step_name}
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