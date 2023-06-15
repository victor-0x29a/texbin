import { textTypeModel } from "../../types/text.type";
import { Model, DataType, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize";
import sequelize from '../index'

interface TextSchema extends Model<InferAttributes<TextSchema>, InferCreationAttributes<TextSchema>>, textTypeModel { }

const TextModel = sequelize.define<TextSchema>("text_column", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    identification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reports: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
})

TextModel.sync({ force: true })

export default TextModel
