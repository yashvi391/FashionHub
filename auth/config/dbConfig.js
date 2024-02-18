const knex = require("knex");
const dbConfig = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "fashionhub",
  },
});
