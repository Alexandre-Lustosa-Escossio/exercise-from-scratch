const patientsService = require('../services/patientsService');
 
const findAll = async (req, res) => {
  await patientsService.findAll();
  return res.status(200).json({ message: 'deu bom' });
};
module.exports = {
  findAll,
};