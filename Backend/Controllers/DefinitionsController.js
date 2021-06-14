var Definition = require('../Models/Definitions')
const Definitions = module.exports

Definitions.listAll = () => {
    return Definition.find()
                     .exec()
}
