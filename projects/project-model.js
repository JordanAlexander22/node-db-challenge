const db = require("../data/db-config");

module.exports = {
  findProjects,
  findById, //(id)
  add,
  remove
};

function findProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id });
}

function add(project) {
  return db("projects").insert(project);
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}
