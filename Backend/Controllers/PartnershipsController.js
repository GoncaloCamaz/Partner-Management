var Partnership = require('../Models/Partnership')
const Partnerships = module.exports

Partnerships.listAll = () => {
    return Partnership.find()
                      .sort({name: 1})
                      .exec()
}

Partnerships.listAllActive = () => {
    return Partnership.find({active: true})
                      .sort({name: 1})
                      .exec()
}