const server = require("./src/server");
const { conn } = require('./src/db.js');
const fCargarDB = require('./src/DB_json-Postgres/fCargarDB.js');
const PORT = 3001 || process.env.PORT;


conn.sync({ force: true })
.then(() => {
  fCargarDB()
  server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
})
.catch(error => console.error(error))
