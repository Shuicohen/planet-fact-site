import axios from "axios";

const API_BASE_URL = 'https://planet-fact-site-z05k.onrender.com';

export const fetchPlanets = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/planets`);
    if (!response.ok) {
      throw new Error('Failed to fetch planets');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching planets:', error);
    throw error;
  }
};
