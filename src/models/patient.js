module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    fullname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
  Patient.associate('plans');
};