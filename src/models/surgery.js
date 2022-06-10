module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgeries', {
    specialty: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    doctor: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
  Surgery.associate = (models) => {
    Surgery.hasMany(models.Patient_Surgery, {
      foreignKey: 'surgery_id', as: 'surgery',
    });
  };
  return Surgery;
};