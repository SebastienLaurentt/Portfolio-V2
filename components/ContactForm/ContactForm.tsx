"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { sendEmail } from "../../src/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formFeedback, setFormFeedback] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message if field is filled
    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let hasErrors = false;
    // Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [key]: true,
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
        message: "",
      });
      setFormFeedback("Merci pour votre message ! ");
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-12">
      <div className="relative">
        <Input
          type="text"
          placeholder="Votre Nom"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && (
          <p className="text-red-500 text-sm mt-1 absolute top-10">
            Ce champ est requis.
          </p>
        )}
      </div>
      <div className="relative">
        <Input
          type="email"
          placeholder="Votre Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1 absolute top-10">
            Ce champ est requis.
          </p>
        )}
      </div>
      <div className="relative">
        <Textarea
          placeholder="Votre Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {formErrors.message && (
          <p className="text-red-500 text-sm mt-1 absolute top-18">
            Ce champ est requis.
          </p>
        )}
      </div>

      <div className="flex items-center">
        <Button type="submit" aria-label="Envoyer le formulaire">
          Envoyer
        </Button>
        {formFeedback && (
          <p
            className={`text-sm ml-3 ${
              sendEmailState.success
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
            }`}
          >
            {formFeedback}
          </p>
        )}
      </div>
    </form>
  );
}
