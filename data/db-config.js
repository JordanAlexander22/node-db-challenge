const knex = require("knex");
const config = require("../knexfileknexfile");

module.exports = knex(config.development);