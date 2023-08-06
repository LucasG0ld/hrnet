import React, { useContext, useState } from 'react';
import { FormDataContext } from '../../../context/formDataContext';
import LeftInputs from '../../molecules/leftInputs/leftInputs';
import MiddleInputs from '../../molecules/middleInputs/middleInputs';
import RightInput from '../../molecules/rightInput/rightInput';
import Button from '../../atoms/button/button';
import CustomModal from '../../atoms/modal/modal';
import CustomModalContent from '../../molecules/modalContent/modalContent';
import './createForm.css';
import { saveDataToLocalStorage, getDataFromLocalStorage } from '../../../context/localStorage';

// Ce composant représente un formulaire de création d'un nouvel employé.
// State :
// - Le composant utilise le hook d'état "useState" pour gérer l'état du modal, en affichant ou masquant le modal en fonction de la valeur de "showModal".
// - Le composant utilise également le hook d'état "useState" pour stocker les données précédentes du formulaire dans "prevformData".

// Fonctionnement :
// - Le composant rend un formulaire de création d'un nouvel employé, divisé en trois parties : "LeftInputs", "MiddleInputs" et "RightInput".
// - Chaque partie du formulaire est gérée par les composants moléculaires correspondants.
// - Le formulaire inclut un bouton de sauvegarde qui déclenche la fonction "handleSave" lorsque l'utilisateur clique dessus.
// - La fonction "handleSave" est appelée lors de la soumission du formulaire.
// - Dans "handleSave", les données du formulaire sont récupérées à l'aide de l'objet "FormData" et stockées dans "formObject".
// - Les données du formulaire sont ensuite mises à jour dans le contexte "FormDataContext" à l'aide de la fonction "updateFormData".
// - Les données mises à jour sont également sauvegardées dans le stockage local (local storage) à l'aide de la fonction "saveDataToLocalStorage".
// - Un modal (fenêtre modale) est affiché à l'utilisateur pour confirmer que le nouvel employé a été créé avec succès.
// - L'utilisateur peut cliquer sur le bouton "Create New Employee" dans le modal pour créer un nouvel employé ou fermer le modal pour voir les employés actuels.

function CreateForm() {
    // Utilisation du hook d'état "useState" pour gérer l'état du modal (afficher/masquer le modal)
    const [showModal, setShowModal] = useState(false);
    const { formData, updateFormData } = useContext(FormDataContext);
    const [prevformData, setPrevFormData] = useState([]);

    // Fonction pour ouvrir le modal
    const openModal = () => {
        setShowModal(true);
    };

    // Fonction pour fermer le modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Fonction pour gérer la création d'un nouvel employé
    const handleCreateEmployee = () => {
        closeModal();
    };

    const isFormValid = () => {
        const form = document.getElementById("hnt-forms");
        const formData = new FormData(form);
      
        // Ajoutez les noms de tous les champs obligatoires ici
        const requiredFields = ["firstName", "lastName", "dateOfBirth", "startDate", "street", "city", "state", "zipCode", "department"];
      
        // Vérifiez si chaque champ requis a une valeur
        for (const field of requiredFields) {
          if (!formData.get(field)) {
            return false;
          }
        }
      
        return true;
      };

    // Fonction pour gérer la soumission du formulaire
    const handleSave = (e) => {
      e.preventDefault();

      if (!isFormValid()) {
        alert("Please, fill in the required fields.");
        return;
      }
      
      const form = document.getElementById("hnt-forms");
      const formData = new FormData(form);
      const formObject = Object.fromEntries(formData.entries());
      
      // Ouvrir le modal de confirmation
      openModal();

      // Mettre à jour les données du formulaire dans le contexte "FormDataContext"
      updateFormData((prevFormData) => {
        const newFormData = [...prevFormData, formObject];
        saveDataToLocalStorage("formData", newFormData);
        return newFormData;
      });

      // Réinitialiser le formulaire après la soumission
      form.reset();
    };

    return (
        <form id="hnt-forms">
            <div className="hnt-form">
                <LeftInputs />
                <MiddleInputs  />
                <RightInput />
            </div>
            <div className='hnt-form-btn'>
                <Button className="hnt-create-button" type="button" onClick={handleSave}>Save</Button>
                {showModal && (
                    <CustomModal isOpen={showModal} onClose={closeModal}>
                        <CustomModalContent onClose={closeModal} handleCreateEmployee={handleCreateEmployee} />
                    </CustomModal>
                )}
            </div>
        </form>
    );
}

export default CreateForm;