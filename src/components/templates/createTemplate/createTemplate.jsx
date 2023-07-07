import React from 'react';
import { FormDataProvider } from '../../../context/formDataContext';
import CreateForm from "../../organisms/createForm/createForm";
import TitleH2 from "../../atoms/titleH2/titleH2";
import Cross from "../../atoms/cross/cross";
import "./CreateTemplate.css"

function CreateTemplate() {

    return (
        <section className="hnt-create-template">
            <Cross></Cross>
            <TitleH2 title="Create Employee"></TitleH2>
            <FormDataProvider>
            <CreateForm></CreateForm>
            </FormDataProvider>
            

        </section>
        
    )
}

export default CreateTemplate;