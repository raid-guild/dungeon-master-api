import { Portfolio as portfolio } from '../models/portfolio';

import { PortfolioInterface } from '../utils/types';

export const createPortfolio = async (record: PortfolioInterface) => {
  const response = await portfolio.create(record);
  return response;
};

export const updatePortfolioById = async (
  id: string,
  record: PortfolioInterface
) => {
  const response = await portfolio.updateOne({ _id: id }, { $set: record });
  return response;
};
