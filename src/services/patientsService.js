const { Patient } = require('../models');

const findAll = async () => {
  console.log(Patient);
  // const res = await patient.findAll();
  // return res;
};

module.exports = {
  findAll,
};