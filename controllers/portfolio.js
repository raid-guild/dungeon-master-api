const { Portfolio } = require('../models/portfolio');

const createPortfolio = async (record) => {
  const response = await Portfolio.create(record);
  return response;
};

const updatePortfolioById = async (id, record) => {
  await Portfolio.updateOne({ _id: id }, { $set: record });
  const updatedPortfolio = await Portfolio.findById(id);
  return updatedPortfolio;
};

module.exports = { createPortfolio, updatePortfolioById };
