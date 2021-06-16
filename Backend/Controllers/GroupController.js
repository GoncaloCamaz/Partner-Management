var Group = require('../Models/Group')
const Groups = module.exports

Groups.createGroup = (group) => {
    return Group.create(group)
}

Groups.listAll = () => {
    return Group.find()
                .exec()
}
