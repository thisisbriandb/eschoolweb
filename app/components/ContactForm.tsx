"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending — replace with real API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  }

  if (isSubmitted) {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-icon">
          <i
            className="ph ph-check-circle"
            style={{ fontSize: "3rem", color: "var(--accent)" }}
            aria-hidden="true"
          />
        </div>
        <h3
          className="font-display text-h2"
          style={{ color: "var(--text-primary)", marginTop: "1rem" }}
        >
          Merci pour votre intérêt !
        </h3>
        <p
          className="text-body"
          style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}
        >
          Nous avons bien reçu votre demande. Notre équipe vous contactera dans
          les plus brefs délais.
        </p>
        <button
          type="button"
          className="premium-btn-secondary"
          style={{ marginTop: "1.5rem" }}
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              organization: "",
              message: "",
            });
          }}
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-grid">
      <div className="download-field">
        <label htmlFor="contact-name" className="download-label">
          Nom complet <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Jean Dupont"
          value={formData.name}
          onChange={handleChange}
          className="premium-input"
        />
      </div>

      <div className="download-field">
        <label htmlFor="contact-email" className="download-label">
          Adresse e-mail <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="jean.dupont@ecole.fr"
          value={formData.email}
          onChange={handleChange}
          className="premium-input"
        />
      </div>

      <div className="download-field">
        <label htmlFor="contact-phone" className="download-label">
          Téléphone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+237 6XX XXX XXX"
          value={formData.phone}
          onChange={handleChange}
          className="premium-input"
        />
      </div>

      <div className="download-field">
        <label htmlFor="contact-organization" className="download-label">
          Établissement / Organisation{" "}
          <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="contact-organization"
          name="organization"
          type="text"
          required
          placeholder="Lycée Victor Hugo"
          value={formData.organization}
          onChange={handleChange}
          className="premium-input"
        />
      </div>

      <div className="download-field contact-form-full">
        <label htmlFor="contact-message" className="download-label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Décrivez vos besoins ou posez vos questions…"
          value={formData.message}
          onChange={handleChange}
          className="premium-input"
          style={{ resize: "vertical", minHeight: "100px" }}
        />
      </div>

      <div className="contact-form-full" style={{ marginTop: "0.25rem" }}>
        <button
          type="submit"
          className="premium-btn-primary"
          disabled={isSubmitting}
          style={{ width: "100%" }}
        >
          {isSubmitting ? (
            <>
              <span className="download-spinner" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            <>
              <i
                className="ph ph-paper-plane-tilt"
                style={{ fontSize: "1.125rem" }}
                aria-hidden="true"
              />
              Envoyer ma demande
            </>
          )}
        </button>
      </div>
    </form>
  );
}
