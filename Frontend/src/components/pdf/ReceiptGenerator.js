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

    doc.addImage(arcum, "PNG",10,10,80,40)
    doc.setTextColor("#023b7e")

    // Receipt Title and date
    doc.setFontSize(20);
    doc.text("Recibo Pagamento Quotas", 100,20)
    const date = new Date().toISOString().split('T')[0]
    doc.text("Data do Recibo: " + date, 100, 30)
    doc.text("NIF: 502652381", 100,40)

    // Receipt text
    const textToAdd = "A Associação Recreativa e Cultural da Universidade do Minho (ARCUM)\ndeclara que o(a) associado(a) " + 
        associateName + ",\nsócio(a) nº " + associateNumber + ", pagou no dia " + paymentDate + 
        " o valor de " + paidValue + "€, correspondente a " +  
        yearsPaid + " anos de quotas.\n"
        + "Mais informa que as quotas se encontram regularizadas até ao ano de " + associateFeeYear+ " inclusive."
    doc.setFontSize(13);
    doc.text(textToAdd, 10,120)

    return doc
}