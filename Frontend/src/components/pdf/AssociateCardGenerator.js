import jsPDF from 'jspdf'
import arcum from '../../static/arcum.png'
import { imageSync } from 'qr-image'

export default function generateCard(props)
{
    const associateNumber = props.associate.associateNumber
    const associateName = props.associate.name
    const fee = props.associate.paidUntilYear
    const qrcode = generateQRCode(fee)

    var doc = new jsPDF({orientation: "landscape", format: "A6"})
    
    doc.setFontSize(18);
    doc.setTextColor("#023b7e")
    doc.text("Sócio: " + associateNumber, 10,80)
    doc.text("Nome: " + associateName, 10, 90)
    doc.addImage(arcum, "PNG",10,10,80,40)
    doc.addImage(qrcode, "PNG",105,5,40,40)


    return doc
}

function generateQRCode(fee)
{
    var qr = imageSync("Quota " + fee, { type: 'png' })
    return qr
}