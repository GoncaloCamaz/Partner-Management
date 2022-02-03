db.auth('admin', 'password');
// log as root admin if you decided to authenticate in your docker-compose file...
db = db.getSiblingDB('pmdb');

db.createCollection('associates');
db.createCollection('paymentmethods');
db.createCollection('payments');
db.createCollection('partnerships');
db.createCollection('groups')

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
    joinedIn: null,
    groups: [],
    paindUntilYear: ''
})

db.associates.insert({
    associateNumber: 1,
    name: "Gonçalo Dias Camaz Moreira",
    phoneNumber: "912345568",
    address: "Rua Dr. Alberto Silva",
    city: "Braga",
    postalCode: "4700-123",
    nickname: "Camadas",
    active: true,
    email: "gcamaz@sapo.pt",
    password: "password",
    userRole: "USER",
    joinedIn: new Date(2020,10,2),
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
    joinedIn: new Date(2018,10,2),
    groups: ["TUM", "Bomboémia"],
    paindUntilYear: 2020
})

db.associates.insert({
    associateNumber: 3,
    name: "Maria Albertina",
    phoneNumber: "912345321",
    address: "Rua do Carmo",
    city: "Braga",
    postalCode: "4710-123",
    nickname: "banessa",
    active: true,
    email: "mariaalbertina@gmail.cpm",
    password: "password",
    userRole: "USER",
    joinedIn: new Date(2018,10,2),
    groups: ["Bomboémia"],
    paindUntilYear: 2022
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

db.paymentmethods.insert({
    name: "Transferência MBWay",
    steps: [{
        stepId: 1,
        stepDescription: "Transferir a quantia relativa às quotas em atraso (10€/ano) para o Número da ARCUM." 
    },
    {
        stepId: 2,
        stepDescription: "913421191" 
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
    advantages: ["Desconto de 15% em impressões a Preto e Branco","Desconto de 10% em impressões a cores"]
})

db.partnerships.insert({
    name: "Restaurante do Alberto",
    phoneNumber: 213456432,
    email: "geral@restaurante.pt",
    website: "www.restaurantealberto.pt",
    addresses: [{
        address: "Rua Nova de Santa Cruz 50",
        city: "Braga",
        postalCode: "4710-429",
        latitude: "41.556113163098396",
        longitude: "-8.399318413529137"
    }],
    startDate: new Date(2020,10,2),
    active: true,
    advantages: ["Oferta da Sopa","Pack Full Menu (Café, prato principal, sobremesa)"]
})

db.partnerships.insert({
    name: "Oculista Boa Vista",
    phoneNumber: 3212321,
    email: "geral@boavista.pt",
    website: "www.oculistaboavista.pt",
    addresses: [{
        address: "Rua Nova de Santa Cruz 69",
        city: "Braga",
        postalCode: "4710-429",
        latitude: "41.566113163098396",
        longitude: "-8.499318413529137"
    }],
    startDate: new Date(2020,10,2),
    active: true,
    advantages: ["Oferta de óculos de sol na compra de óculos graduados","Lentes solares"]
})

db.groups.insert({
    name: "Bomboémia",
    initials: "Bomboémia",
    imageName: 'bomboemia.png',
    imageURL: "http://arcum.pt/images/bomboemia/logo_full.png"
})

db.groups.insert({
    name: "Grupo Folclórico da Universidade do Minho",
    initials: "GFUM",
    imageName: 'gfum.png',
    imageURL: "http://arcum.pt/images/gfum/logo.png"
})

db.groups.insert({
    name: "Grupo de Música Popular da Universidade do Minho",
    initials: "GMP",
    imageName: 'gmp.png',
    imageURL: "http://arcum.pt/images/gmp/logo.png"
})

db.groups.insert({
    name: "Grupo de Poesia da Universidade do Minho",
    initials: "GPUM",
    imageName: 'gpum.png',
    imageURL: "http://arcum.pt/images/gpum/logo_alt.png"
})

db.groups.insert({
    name: "Tuna Universitária do Minho",
    initials: "TUM",
    imageName: 'tum.png',
    imageURL: "http://arcum.pt/images/tum/logo.png"
})

db.groups.insert({
    name: "Tun'ao Minho",
    initials: "Tun'ao Minho",
    imageName: 'tunaominho.png',
    imageURL: "http://arcum.pt/images/tunao/logo.png"
})