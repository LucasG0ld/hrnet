import React from 'react';
import CreateForm from "../../organisms/createForm/createForm";
import TitleH2 from "../../atoms/titleH2/titleH2";
import Cross from "../../atoms/cross/cross";
import "./CreateTemplate.css"

// Ce composant représente le modèle de page pour la création d'un nouvel employé.

// Fonctionnement :
// - Le composant rend une section avec la classe CSS "hnt-create-template".
// - À l'intérieur de la section, il affiche les éléments suivants dans cet ordre :
//   1. Le composant atomique "Cross" pour afficher une icône de croix.
//   2. Le composant atomique "TitleH2" pour afficher le titre "Create Employee".
//   3. Le composant organisme "CreateForm" pour afficher le formulaire de création d'un nouvel employé.

function CreateTemplate() {

    return (
        <section className="hnt-create-template">
            <Cross></Cross>
            <TitleH2 title="Create Employee"></TitleH2>
            <CreateForm></CreateForm>
        </section> 
    )
}

export default CreateTemplate;