import React, { createContext, useContext, useState, useEffect } from 'react';
import packageService from '../services/packageService';
import { useAuth } from './AuthContext';

const PackageContext = createContext();

export const usePackage = () => {
  const context = useContext(PackageContext);
  if (!context) {
    throw new Error('usePackage must be used within a PackageProvider');
  }
  return context;
};

export const PackageProvider = ({ children }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  // Fetch all packages
  const fetchPackages = async () => {
    try {
      setLoading(true);
      const response = await packageService.getAllPackages();
      if (response.success) {
        setPackages(response.data);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Purchase package
  const purchasePackage = async (packageId) => {
    try {
      setLoading(true);
      const response = await packageService.purchasePackage(packageId, token);
      if (response.success) {
        // Update packages list after purchase
        await fetchPackages();
        return { success: true, message: 'Package purchased successfully' };
      } else {
        return { success: false, message: response.message };
      }
    } catch (err) {
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Fetch packages on mount
  useEffect(() => {
    fetchPackages();
  }, []);

  const value = {
    packages,
    loading,
    error,
    fetchPackages,
    purchasePackage
  };

  return (
    <PackageContext.Provider value={value}>
      {children}
    </PackageContext.Provider>
  );
}; 