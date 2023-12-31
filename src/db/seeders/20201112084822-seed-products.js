'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Products', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

const data = [
  {
    "name": "Macbook Pro",
    "image": "",
    "stock": 9,
    "price": 1234,
  }
]