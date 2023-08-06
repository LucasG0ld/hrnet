import React, { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";
import TitleH2 from "../atoms/titleH2/titleH2";
import Cross from "../atoms/cross/cross";
import Table from "../atoms/table/table";

// Ce composant représente le modèle de page pour afficher les informations des employés actuels.

// Fonctionnement :
// - Le composant rend une section avec la classe CSS "hnt-create-template".
// - À l'intérieur de la section, il affiche les éléments suivants dans cet ordre :
//   1. Le composant atomique "Cross" pour afficher une icône de croix.
//   2. Le composant atomique "TitleH2" pour afficher le titre "Current Employee".
//   3. Le composant atomique "Table" pour afficher les données des employés actuels dans un tableau.
//      Les données des employés actuels sont récupérées à partir du contexte "FormDataContext" et passées au composant "Table" en tant que propriété "data".

function ViewTemplate() {
    const { formData } = useContext(FormDataContext);

    return (
        <section className="hnt-create-template">
            <Cross></Cross>
            <TitleH2 title="Current Employee"></TitleH2>
            <Table data={formData}></Table>
        </section>
    )
}

export default ViewTemplate;