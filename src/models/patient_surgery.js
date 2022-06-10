module.exports = (sequelize, _DataTypes) => {
  const PatientSurgery = sequelize.define('Patient_Surgery', {
  });
  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'Patients',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'Surgeries',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };
  return PatientSurgery;
};