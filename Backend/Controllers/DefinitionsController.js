var Definition = require('../Models/Definitions')
const Definitions = module.exports

/**
 * Creates definitions
 * //TODO CREATE BY DEFAULT
 */
Definitions.create = definitions => {
    return Definition.create(definitions)
}

/**
 * Updates definitions
 */
Definitions.update = definitions => {
    return Definition.update(definitions)
}

/**
 * Lists all definitions
 */
Definitions.listAll = () => {
    return Definition.find()
                     .exec()
}
