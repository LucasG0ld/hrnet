import React, {useContext} from "react";
import FormDataDisplay from "../context/formDataDisplay";
import { FormDataContext } from "../context/formDataContext";

function Test() {
    const { formData, setFormData } = useContext(FormDataContext);
    
    return (
        <main className="hnt-main">
            <FormDataContext.Provider value={{ formData, setFormData }}>
                <FormDataDisplay/>
            </FormDataContext.Provider>
        </main>
    );
};

export default Test;