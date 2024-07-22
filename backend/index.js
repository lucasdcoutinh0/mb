const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));

const REQUIRED_FIELDS_INDIVIDUAL = "emailAddress, personType, fullName, cpf, birthdate, phone, and password are required.";
const REQUIRED_FIELDS_COMPANY = "emailAddress, personType, companyName, cnpj, openingDate, phone, and password are required.";

app.get("/registration", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/registration", (req, res) => {
  const {
    emailAddress,
    personType,
    fullName,
    cpf,
    birthdate,
    phone,
    companyName,
    cnpj,
    openingDate,
    password,
  } = req.body;

  if (!emailAddress || !personType || !password) {
    return res.status(400).send("Email address, person type, and password are required.");
  }

  if (personType === "individual" && (!fullName || !cpf || !birthdate || !phone)) {
    return res.status(400).send(REQUIRED_FIELDS_INDIVIDUAL);
  }

  if (personType === "company" && (!companyName || !cnpj || !openingDate || !phone)) {
    return res.status(400).send(REQUIRED_FIELDS_COMPANY);
  }

  res.status(200).send("Registration successful");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
