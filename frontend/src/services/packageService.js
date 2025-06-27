import api from '../config/api';

const packageService = {
  // Get all packages
  getAllPackages: async () => {
    try {
      const response = await api.get('/packages');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch packages');
    }
  },

  // Purchase a package
  purchasePackage: async (packageId, amount) => {
    try {
      const response = await api.post('/payment/create-order', { 
        packageId,
        amount
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to purchase package');
    }
  },

  // Get user's purchased packages
  getUserPackages: async () => {
    try {
      const response = await api.get('/packages/user');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user packages');
    }
  }
};

export default packageService; 