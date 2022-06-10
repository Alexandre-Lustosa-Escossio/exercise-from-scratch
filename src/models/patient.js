module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    fullname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'plan_id', as: 'plans',
    });
    Patient.hasMany(models.Patient_Surgery, {
      foreignKey: 'patient_id', as: 'patient',
    });
  };
  return Patient;
};