exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Pass this challenge",
          description: "make mvp and work on portfolio projects this weekend",
          completed: true
        },
        {
          name: "Learn Pug.js",
          description: "create an express app implenting the template library called Pug",
          completed: false
        },
        {
          name: "Put together my resume",
          description: "Stop putting it off",
          completed: false
        }
      ]);
    });
};
