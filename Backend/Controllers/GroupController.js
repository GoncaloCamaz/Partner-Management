var Group = require('../Models/Groups')
const Groups = module.exports

Groups.listAll = () => {
    return Group.find()
                .exec()
}
