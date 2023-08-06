import React from 'react';
import InputLabel from '../inputLabel/inputLabel';
import DatepickerLabel from '../datepickerLabel/datepickerLabel';

// Ce composant représente une section contenant plusieurs champs de saisie de texte et de dates réutilisables.

// Fonctionnement :
// - Le composant rend une div contenant plusieurs champs de saisie de texte et de dates réutilisables.
// - Les champs de saisie de texte sont créés en utilisant le composant moléculaire "InputLabel".
// - Les champs de saisie de date sont créés en utilisant le composant moléculaire "DatepickerLabel".
// - Chaque champ de saisie de texte et de date est configuré avec une étiquette associée (label) et un ID unique pour l'attribut "htmlFor".

function LeftInputs() {

  return (
    <div>
      <InputLabel htmlFor="first-name" label="First Name" id="firstName" name="firstName" verificationMessage="Please, enter your first name." />
      <InputLabel htmlFor="last-name" label="Last Name" id="lastName" name="lastName" verificationMessage="Please, enter your name."/>
      <DatepickerLabel htmlFor="date-of-birth" label="Date of Birth" id="dateOfBirth" name="dateOfBirth" verificationMessage="Please, enter your date of birth."/>
      <DatepickerLabel htmlFor="start-date" label="Start Date" id="startDate" name="startDate" verificationMessage="Please, enter your sater date."/>
    </div>
  );
}

export default LeftInputs;