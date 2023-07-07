import { createContext, useState, useEffect } from 'react';
import { getDataFromLocalStorage, saveDataToLocalStorage } from './localStorage';

const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const storedFormData = getDataFromLocalStorage('formData');
    console.log(storedFormData)
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const updateFormData = (newFormData) => {
    console.log('Updated formData:', newFormData);
    setFormData(newFormData);
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };