import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    newPassword: '',
    oldPassword: '',
    newPasswordConfirmation: '',
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

export default function AssociatePasswordForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('newPassword' in fieldValues)
            temp.newPassword = fieldValues.newPassword ? "" : "Insere a nova Password."
        if ('oldPassword' in fieldValues)
            temp.oldPassword = fieldValues.oldPassword ? "" : "Insere a tua antiga Password."
        if ('newPasswordConfirmation' in fieldValues)
            temp.newPasswordConfirmation = fieldValues.newPasswordConfirmation ? "" : "Insere novamente a nova Password."
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
                        label="Password Antiga"
                        name="oldPassword"
                        type="password"
                        value={values.oldPassword}
                        onChange={handleInputChange}
                        error={errors.oldPassword}
                    />
                      <Controls.Input
                        label="Nova Password"
                        name="newPassword"
                        type="password"
                        value={values.newPassword}
                        onChange={handleInputChange}
                        error={errors.newPassword}
                    />
                    <Controls.Input
                        label="Confirmação da nova Password"
                        name="newPasswordConfirmation"
                        type="password"
                        value={values.newPasswordConfirmation}
                        onChange={handleInputChange}
                        error={errors.newPasswordConfirmation}
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