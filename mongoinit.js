db.auth('admin', 'password');

db = db.getSiblingDB('pmdb');

db.createCollection('associates');
db.createCollection('paymentmethods');
db.createCollection('payments');
db.createCollection('partnerships');
db.createCollection('groups');

db.associates.insert({
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

db.associates.insert({
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

db.associates.insert({
    associateNumber: 2,
    name: "António Joaquim Manuel",
    phoneNumber: "913333333",
    address: "Rua do Minho",
    city: "Braga",
    postalCode: "4710-123",
    nickname: "TóManel",
    active: true,
    email: "tomanel@gmail.cpm",
    password: "password",
    userRole: "USER",
    joinedIn: '',
    groups: ["TUM", "Bomboémia"],
    paindUntilYear: 2020
})

db.paymentmethods.insert({
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


db.paymentmethods.insert({
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

db.payments.insert({
    associateNumber: 1,
    associateName: "Gonçalo Dias Camaz Moreira",
    paymentDate: new Date(2021,12,20),
    valueReceived: 20,
    yearsPaid: 2
})

db.partnerships.insert({
    name: "VideoNorte",
    phoneNumber: 253051420,
    email: "geral@videonorte.pt",
    website: "www.videonorte.pt",
    addresses: [{
        address: "Rua Nova de Santa Cruz 49",
        city: "Braga",
        postalCode: "4710-409",
        latitude: "41.557213163098396",
        longitude: "-8.399418413529137"
    }],
    startDate: new Date(2020,10,2),
    active: true,
    advantages: ["Desconto de 15% em impressões a cores","Desconto de 10% em impressões a cores"]
})

db.groups.insert({
    name: "Bomboémia",
    initials: "Bomboémia",
    imagePath: ''
})

db.groups.insert({
    name: "Grupo Folclórico da Universidade do Minho",
    initials: "GFUM",
    imagePath: ''
})

db.groups.insert({
    name: "Grupo de Música Popular da Universidade do Minho",
    initials: "GMP",
    imagePath: ''
})

db.groups.insert({
    name: "Grupo de Poesia da Universidade do Minho",
    initials: "GPUM",
    imagePath: ''
})

db.groups.insert({
    name: "Tuna Universitária do Minho",
    initials: "TUM",
    imagePath: ''
})

db.groups.insert({
    name: "Tun'ao Minho",
    initials: "Tun'ao Minho",
    imagePath: ''
})