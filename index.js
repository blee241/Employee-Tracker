const sequelize = require('./config/connection');

async function displayTable(table) {
    try {
        const [results] = await sequelize.query(`SELECT * FROM ${table}`);
        console.log(results);
    } catch (err) {
        console.log(err);
    }
}

displayTable(Department);