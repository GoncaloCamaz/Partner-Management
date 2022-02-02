import jsPDF from 'jspdf'
import arcum from '../../static/arcum.png'

export default function generateReceipt(props)
{
    const associateNumber = props.associateNumber
    const associateName = props.associateName
    const paidValue = props.paidValue
    const yearsPaid = props.yearsPaid
    const paymentDate = props.paymentDate
    const associateFeeYear = props.associateFeeYear
    var doc = new jsPDF({orientation: "landscape", format: "A5"})
    
    doc.setFontSize(12);
    doc.setTextColor("#023b7e")
    const textToAdd = "A ARCUM declara que o(a) associado(a) " + 
        associateName + ", sócio(a) nº " + associateNumber + ",\npagou no dia " + paymentDate + 
        " o valor de " + paidValue + "€, correspondente a " +  
        yearsPaid + " anos de quotas.\n"
        + "Mais informa que as quotas se encontram regularizadas até ao ano de " + associateFeeYear+ " inclusive."
    doc.text(textToAdd, 10,80)
    doc.addImage(arcum, "PNG",10,10,80,40)

    return doc
}