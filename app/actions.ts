"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organization: string;
  message?: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, email, phone, organization, message } = formData;

    if (!name || !email || !organization) {
      return { success: false, error: "Champs requis manquants." };
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kidinguievelin@gmail.com",
      subject: `Nouveau message de contact : ${name} (${organization})`,
      html: `
        <h2>Nouvelle demande de contact - E-School</h2>
        <p><strong>Nom complet :</strong> ${name}</p>
        <p><strong>Adresse e-mail :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Établissement / Organisation :</strong> ${organization}</p>
        <p><strong>Message :</strong></p>
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap;">
          ${message ? message.replace(/\n/g, "<br/>") : "Aucun message fourni."}
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error?.message || "Une erreur est survenue lors de l'envoi de l'e-mail.",
    };
  }
}

interface DownloadFormData {
  name: string;
  email: string;
  phone?: string;
  organization: string;
}

export async function sendDownloadNotificationEmail(formData: DownloadFormData) {
  try {
    const { name, email, phone, organization } = formData;

    if (!name || !email || !organization) {
      return { success: false, error: "Champs requis manquants." };
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kidinguievelin@gmail.com",
      subject: `Nouveau téléchargement : ${name} (${organization})`,
      html: `
        <h2>Nouveau Téléchargement d'Installeur - E-School</h2>
        <p>Un utilisateur a renseigné ses coordonnées pour télécharger l'installeur.</p>
        <p><strong>Nom complet :</strong> ${name}</p>
        <p><strong>Adresse e-mail :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Établissement / Organisation :</strong> ${organization}</p>
      `,
    });

    if (error) {
      console.error("Resend download email error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Error sending download email:", error);
    return {
      success: false,
      error: error?.message || "Une erreur est survenue lors de l'envoi du mail de téléchargement.",
    };
  }
}
