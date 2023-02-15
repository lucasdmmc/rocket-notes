require("express-async-errors");
const express = require("express");

const AppError = require("./utils/AppError");

const routes = require("./routes");
const migrationsRun = require("./database/sqlite/migrations");

const app = express();

migrationsRun();

app.use(express.json());

app.use(routes);


app.use(( error, request, response, next ) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "Error",
      statusCode: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "Error",
    statusCode: "Internal server error"
  });
});

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));