"use client";
import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { sendEmail } from "../../src/actions";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [formFeedback, setFormFeedback] = useState("");

  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error message if field is filled
    setFormErrors({
      ...formErrors,
      [name]: false
    });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    let hasErrors = false;
    // Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [key]: true
        }));
        hasErrors = true;
      }
    });
    if (!hasErrors) {
      // Convert formData to FormData object
      const formDataObject = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObject.append(key, value);
      });

      // Send email if all fields are filled
      sendEmailAction(formDataObject);
    }
  };

  useEffect(() => {
    if (sendEmailState.success) {
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setFormFeedback("Merci ! Nous vous recontacterons bientôt !");
      // Clear feedback after 5 seconds
      const timer = setTimeout(() => {
        setFormFeedback("");
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (sendEmailState.error) {
      setFormFeedback("Erreur lors de l'envoi de l'email. Veuillez réessayer.");
    }
  }, [sendEmailState]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
          Nom - Prénom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nom - Prénom"
          className={`w-full rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md`}
        />
        {formErrors.name && <p className="text-red-500 text-sm mt-1">Ce champ est requis.</p>}
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="exemple@email.com"
          className={`w-full rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md`}
        />
        {formErrors.email && <p className="text-red-500 text-sm mt-1">Ce champ est requis.</p>}
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium text-black">
          Votre Message
        </label>
        <textarea
          rows={4}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Description de votre demande"
          className={`w-full resize-none rounded-md border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md`}
        />
        {formErrors.message && <p className="text-red-500 text-sm mt-1">Ce champ est requis.</p>}
      </div>
      <div className="flex items-center">
        <Button type="submit" aria-label="Envoyer le formulaire" >
          Envoyer
        </Button>
        {formFeedback && <p className={`text-sm ml-3 ${sendEmailState.success ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}`}>{formFeedback}</p>}
      </div>
    </form>
  );
}


