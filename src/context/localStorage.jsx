export const saveDataToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

export const getDataFromLocalStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    const parsedData = storedData ? JSON.parse(storedData) : null;
    return parsedData;
  } catch (error) {
    console.error('Error retrieving data from localStorage:', error);
    return null;
  }
};