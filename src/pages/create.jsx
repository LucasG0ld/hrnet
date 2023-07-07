import CreateTemplate from "../components/templates/createTemplate/createTemplate";
import { FormDataProvider } from "../context/formDataContext";

function Create() {
    return (
        <main className="hnt-main">
            <FormDataProvider>
                <CreateTemplate></CreateTemplate>
            </FormDataProvider>
            
        </main>
    );
};

export default Create;