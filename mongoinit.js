db = db.getSiblingDB('admin');
// move to the admin db - always created in Mongo
db.auth("admin", "password");
// log as root admin if you decided to authenticate in your docker-compose file...
db = db.getSiblingDB('pmdb');

db.createCollection('Associate');
db.createCollection('PaymentMethod');


db.Associate.insert({
    associateNumber: 0,
    name: "Gestor de Associados",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    nickname: "",
    active: true,
    email: "associados@arcum.pt",
    password: "password",
    userRole: "ADMIN",
    joinedIn: '',
    groups: [],
    paindUntilYear: ''
})

db.Associate.insert({
    associateNumber: 1,
    name: "Gonçalo Dias Camaz Moreira",
    phoneNumber: "912345568",
    address: "Rua de Aveleda",
    city: "Vila do Conde",
    postalCode: "4485-123",
    nickname: "Camadas",
    active: true,
    email: "gcamaz@sapo.pt",
    password: "password",
    userRole: "USER",
    joinedIn: '',
    groups: ["TUM"],
    paindUntilYear: 2021
})

db.PaymentMethod.insert({
    name: "Presencial",
    steps: [{
        stepId: 1,
        stepDescription: "Combinar uma data, hora e local para efetuar o pagamento com o gestor de associados através do email: associados@arcum.pt." 
    },
    {
        stepId: 2,
        stepDescription: "Pagar em dinheiro ao gestor de associados." 
    },
    {
        stepId: 3,
        stepDescription: "Poderás fazer download ao recibo assim que o gestor de associados registar o pagamento na plataforma." 
    }]
})


db.PaymentMethod.insert({
    name: "Transferência Bancária",
    steps: [{
        stepId: 1,
        stepDescription: "Transferir a quantia relativa às quotas em atraso (10€/ano) para o NIB da ARCUM." 
    },
    {
        stepId: 2,
        stepDescription: "PT50000706020041579000450" 
    },
    {
        stepId: 3,
        stepDescription: "Enviar o comprovativo para o email associados@arcum.pt" 
    },
    {
        stepId: 4,
        stepDescription: "Poderás fazer download ao recibo assim que o gestor de associados registar o pagamento na plataforma." 
    }]
})