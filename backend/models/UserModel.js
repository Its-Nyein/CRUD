import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes} = Sequelize;
// one of the sequelize functions

const User = db.define('crud_users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
}, {
    freezeTableName: true
})

export default User;

(async () => {
    await db.sync();
})();