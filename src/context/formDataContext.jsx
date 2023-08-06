import { createContext, useState, useEffect } from 'react';
import { getDataFromLocalStorage, saveDataToLocalStorage } from './localStorage';

// Création du contexte
const FormDataContext = createContext();

// Ce composant est un "provider" qui gère l'état des données du formulaire de création d'employés et les partage via le contexte "FormDataContext".
const FormDataProvider = ({ children }) => {
  // Utilisation du "useState" pour stocker les données du formulaire
  const [formData, setFormData] = useState([]);

  // Utilisation du "useEffect" pour récupérer les données sauvegardées dans le stockage local lors du montage du composant
  useEffect(() => {
    const storedFormData = getDataFromLocalStorage('formData');
    console.log(storedFormData)
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  // Fonction "updateFormData" pour mettre à jour les données du formulaire
  const updateFormData = (newFormData) => {
    console.log('Updated formData:', newFormData);
    setFormData(newFormData);
  };

  // Rendu du composant "FormDataProvider" avec le contexte "FormDataContext.Provider" qui partage les données et la fonction "updateFormData" avec ses enfants
  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };