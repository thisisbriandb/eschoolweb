"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { sendDownloadNotificationEmail } from "@/app/actions";

export default function DownloadButton({
  className = "",
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  // Ensure portal only renders client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendDownloadNotificationEmail(formData);
    } catch (err) {
      console.error("Failed to send download notification:", err);
    }

    const link = document.createElement("a");
    link.href = "/Eschool-1.1.5.exe";
    link.download = "Eschool-1.1.5.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmitting(false);
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "", organization: "" });
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  }

  const btnClass =
    variant === "primary" ? "premium-btn-primary" : "premium-btn-secondary";

  const modal = isOpen ? (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-panel">
        {/* Header */}
        <div className="download-modal-header">
          <div>
            <h2 className="font-display text-h3" style={{ color: "var(--text-primary)" }}>
              Télécharger e-school
            </h2>
            <p className="text-body-sm" style={{ color: "var(--text-secondary)", marginTop: "0.25rem" }}>
              Renseignez vos informations pour lancer le téléchargement.
            </p>
          </div>
          <button
            type="button"
            className="download-modal-close"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer"
          >
            <i className="ph ph-x" style={{ fontSize: "1.25rem" }} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="download-modal-form">
          <div className="download-field">
            <label htmlFor="dl-name" className="download-label">
              Nom complet <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              id="dl-name"
              name="name"
              type="text"
              required
              placeholder="Jean Dupont"
              value={formData.name}
              onChange={handleChange}
              className="premium-input"
              autoFocus
            />
          </div>

          <div className="download-field">
            <label htmlFor="dl-email" className="download-label">
              Adresse e-mail <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              id="dl-email"
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
            <label htmlFor="dl-phone" className="download-label">
              Téléphone
            </label>
            <input
              id="dl-phone"
              name="phone"
              type="tel"
              placeholder="+237 6XX XXX XXX"
              value={formData.phone}
              onChange={handleChange}
              className="premium-input"
            />
          </div>

          <div className="download-field">
            <label htmlFor="dl-organization" className="download-label">
              Établissement / Organisation{" "}
              <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              id="dl-organization"
              name="organization"
              type="text"
              required
              placeholder="Lycée Victor Hugo"
              value={formData.organization}
              onChange={handleChange}
              className="premium-input"
            />
          </div>

          <div className="download-modal-actions">
            <button
              type="button"
              className="premium-btn-secondary"
              onClick={() => setIsOpen(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="premium-btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="download-spinner" aria-hidden="true" />
                  Préparation…
                </>
              ) : (
                <>
                  <i
                    className="ph ph-download-simple"
                    style={{ fontSize: "1.125rem" }}
                    aria-hidden="true"
                  />
                  Télécharger
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className={`${btnClass} ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <i
          className="ph ph-download-simple"
          style={{ fontSize: "1.25rem" }}
          aria-hidden="true"
        />
        Télécharger l&apos;installeur
      </button>

      {mounted && createPortal(modal, document.body)}
    </>
  );
}
