import React, { useContext, useState } from 'react';
import { FormDataContext } from '../../../context/formDataContext';
import LeftInputs from '../../molecules/leftInputs/leftInputs';
import MiddleInputs from '../../molecules/middleInputs/middleInputs';
import RightInput from '../../molecules/rightInput/rightInput';
import Button from '../../atoms/button/button';
import CustomModal from '../../atoms/modal/modal';
import CustomModalContent from '../../molecules/modalContent/modalContent';
import './createForm.css';
import { saveDataToLocalStorage } from '../../../context/localStorage';

function CreateForm() {
    const [showModal, setShowModal] = useState(false);
    const { formData, updateFormData } = useContext(FormDataContext);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleCreateEmployee = () => {
        closeModal();
    };

    const handleSave = (e) => {
      e.preventDefault();
      openModal();
      updateFormData((prevFormData) => {
        if (Array.isArray(prevFormData)) {
            const newFormData = [...prevFormData, { ...formData }];
            saveDataToLocalStorage('formData', newFormData);
            return newFormData;
        } else {
          const newFormData = [formData];
          saveDataToLocalStorage('formData', newFormData);
          return newFormData;
        }
      });
    };

    return (
        <form>
            <div className="hnt-form">
                <LeftInputs />
                <MiddleInputs />
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