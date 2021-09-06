module.exports = (sequelize, DataTypes) => {
        
    const alias = "Categoria";
    const cols = {
            id: {
                    type: DataTypes.INTEGER(10),
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
            },
            nombre: {
                    type: DataTypes.STRING(80),
                    allowNull: false
            }
    };
    
    const config = {
            tableName: "Categoria",
            timestamps: false
    };
    
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function (modelo) {

            Categoria.belongsTo(modelo.Usuario, {
                    as:"usuarios",
                    foreingKey: "id_categoria"
            });
    };
    
    
    return Categoria

}