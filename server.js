const express= require ("express");
const projectRouter= require("./projects/project-router")
const resourceRouter= require("./resources/resource-router")
const server = express();


server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (req, res) => {
  res.send("<h1>Sprint Challenge</h1>");
});

module.exports= server;
