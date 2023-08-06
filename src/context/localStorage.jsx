// Cette fonction permet de sauvegarder des données dans le stockage local du navigateur.
// Elle prend en paramètres une clé (key) sous laquelle les données seront sauvegardées, ainsi que les données (data) elles-mêmes.
export const saveDataToLocalStorage = (key, data) => {
  try {
    // On utilise "JSON.stringify" pour convertir les données en format JSON avant de les stocker.
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

// Cette fonction permet de récupérer des données depuis le stockage local du navigateur en fonction de la clé (key) spécifiée.
// Elle renvoie les données sous forme d'objet JavaScript ou "null" si les données n'existent pas.
export const getDataFromLocalStorage = (key) => {
  try {
    // On récupère les données depuis le stockage local en utilisant "localStorage.getItem".
    const storedData = localStorage.getItem(key);
    const parsedData = storedData ? JSON.parse(storedData) : null;

    // On utilise "JSON.parse" pour convertir les données JSON en objet JavaScript.
    return parsedData;
  } catch (error) {
    console.error('Error retrieving data from localStorage:', error);
    // On renvoie les données récupérées.
    return null;
  }
};