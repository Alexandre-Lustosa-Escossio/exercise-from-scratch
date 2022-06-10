const express = require('express');
const patientsController = require('./src/controllers/patientsController');

const router = express();

router.use(express.json());

router.get('/', patientsController.findAll);

router.listen(3000, () => {
  console.log('Rodando na porta 3000');
});