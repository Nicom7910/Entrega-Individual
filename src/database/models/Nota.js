module.exports = function(sequelize, dataTypes) {
    let alias = "Nota";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: dataTypes.STRING(500),
            notNull: true
        },
        texto: {
            type: dataTypes.STRING(500),
            notNull: true
        }
    }
    
    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true,
        paranoid: true       
    }

    const Nota = sequelize.define(alias, cols, config);
    return Nota;
}