const portfolio = require('../models/portfolio');

const createPortfolio = async (record) => {
  const response = await portfolio.create(record);
  return response;
};

const updatePortfolioById = async (id, record) => {
  let data = record;
  data['modifed_on'] = Date.now();
  const response = await portfolio.updateOne({ _id: id }, { $set: data });
  return response;
};

module.exports = { createPortfolio, updatePortfolioById };
