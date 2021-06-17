var Group = require('../Models/Group')
const Groups = module.exports

/**
 * Creates new group
 */
Groups.createGroup = (group) => {
    return Group.create(group)
}

/**
 * Updates a group
 */
Groups.updateGroup = (group) => {
    return Group.update(group)
}

/**
 * Deletes a group
 */
Groups.deleteGroup = group => {
    //TODO
}

/**
 * Lists all groups
 */
Groups.listAll = () => {
    return Group.find({active: true})
                .exec()
}
