exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "performing macbook",
          description: "cleaned up and optimized storage for fast performance"
        },
        {
          name: "Coffee",
          description: "caffeine is the secret ingredient to good programming"
        },
        {
          name: "Good Wifi",
          description: "As fast as vietnam allows"
        },
        {
          name: "Youtube Crash Course",
          description: "video for learing Pug"
        },
        {
          name: "Docs",
          description: "Use documentation to learn more"
        },
        {
          name: "Self discipline and google doc",
          description: "For this resume"
        }
      ]);
    });
};
