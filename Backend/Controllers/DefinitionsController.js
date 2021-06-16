var Definition = require('../Models/Definitions')
const Definitions = module.exports

Definitions.create = definitions => {
    return Definition.create(definitions)
}

Definitions.listAll = () => {
    return Definition.find()
                     .exec()
}
