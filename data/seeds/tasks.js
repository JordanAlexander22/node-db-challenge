exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "Fork repo",
          notes: " create a new branch",
          completed: true
        },
        {
          project_id: 1,
          description: "Initialize repo",
          notes: "start up and test server",
          completed: true
        },
        {
          project_id: 2,
          description: "youtube search crash course for learning Pug",
          notes: "make sure its a recent video",
          completed: false
        },
        {
          project_id: 2,
          description: "Read the documentation from the official site",
          notes: null,
          completed: true
        },
        {
          project_id: 3,
          description: "search up resume templates",
          notes: "specifically for junior devs",
          completed: true
        },
        {
          project_id: 3,
          description: "sit down and type it out",
          notes: "ask people to review it",
          completed: true
        }
      ]);
    });
};
