module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    coverage: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'Plans',
  });
  return Plan;
};