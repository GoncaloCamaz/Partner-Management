import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';

const initialFValues = {
    associateNumber: '',
    associateName: '',
    valueReceived: '',
    yearsPaid: '',
    paymentDate: ''
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

export default function PaymentForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('associateNumber' in fieldValues)
            temp.associateNumber = fieldValues.associateNumber ? "" : "Insere o número do associado."
        if ('associateName' in fieldValues)
            temp.associateName = fieldValues.associateName ? "" : "Insere o nome do associado."
        if('valueReceived' in fieldValues)
            temp.valueReceived = fieldValues.valueReceived ? "" : "Insere o montante que o associado pagou."
        if('yearsPaid' in fieldValues)
            temp.yearsPaid = fieldValues.yearsPaid ? "" : "Indica quantos anos correspondem o valor que foi pago."
        if('paymentDate' in fieldValues)
            temp.paymentDate = fieldValues.paymentDate ? "" : "Seleciona a data em que foi feito o pagamento."
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
                        label="Número de Associado"
                        name="associateNumber"
                        value={values.associateNumber}
                        onChange={handleInputChange}
                        error={errors.associateNumber}
                    />
                    <Controls.Input
                        name="associateName"
                        label="Nome do Associado"
                        value={values.associateName}
                        onChange={handleInputChange}
                        error={errors.associateName}
                    />
                    <Controls.Input
                        label="Anos Pagos"
                        name="yearsPaid"
                        value={values.yearsPaid}
                        onChange={handleInputChange}
                        error={errors.yearsPaid}
                    />
                    <Controls.Input
                        label="Valor Pago (€)"
                        name="valueReceived"
                        value={values.valueReceived}
                        onChange={handleInputChange}
                        error={errors.valueReceived}
                    />
                    <h4>Data do Pagamento:</h4>
                    <Controls.Input
                        name="paymentDate"
                        value={values.paymentDate}
                        type="date"
                        onChange={handleInputChange}
                        error={errors.paymentDate}
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