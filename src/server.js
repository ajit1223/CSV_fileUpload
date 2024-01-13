const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const initRoutes = require("./routes/tutorial.routes");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);


db.mongoose.connection.on('connected', () => {
  console.log('connected ot mongodb database')
});
db.mongoose.connection.on('error', (err) => {
  console.log(`connection failed : ${err}`)
  process.exit(-1);
});


const tutorial = db.Tutorial;

const newTutorial = new tutorial({
  title: 'fisrt csv file',
  discription: 'this is tutorial file of csv upload',
  published: true,
});

// newTutorial.save()
//   .then(tutorial => {
//     console.log('Tutorial saved:', tutorial);
//   })
//   .catch(err => {
//     console.error(`Error saving tutorial: ${err}`);
//   });

newTutorial.save()
  .then(tutorial => {
    console.log('Tutorial saved:', tutorial);
  })
  .catch(err => {
    if (err instanceof mongoose.Error.BufferingTimeoutError) {
      console.error('MongoDB write operation timed out:', err);
    } else {
      console.error(`Error saving tutorial: ${err}`);
    }
  });

// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let port = 3500;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
