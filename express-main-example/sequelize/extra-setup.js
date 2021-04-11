function applyExtraSetup(sequelize) {
    const { user, team } = newFunction(sequelize);

    team.hasMany(user);
    user.belongsTo(team);
}

module.exports = { applyExtraSetup };

function newFunction(sequelize) {
    return sequelize.models;
}