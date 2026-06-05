import type { Metadata } from "next";
import DownloadButton from "./components/DownloadButton";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "e-school | La gestion scolaire, réinventée",
  description:
    "e-school simplifie la gestion scolaire avec les outils essentiels pour l'administration, la communication et les finances.",
};

const features = [
  {
    icon: "ph ph-buildings",
    title: "Gestion scolaire",
    description:
      "Inscriptions, dossiers élèves, classes et emplois du temps réunis dans un espace clair.",
  },
  {
    icon: "ph ph-chat-circle-dots",
    title: "Communication",
    description:
      "Messages, annonces et documents partagés entre l'administration, les parents et les enseignants.",
  },
  {
    icon: "ph ph-chart-line-up",
    title: "Finances",
    description:
      "Facturation, paiements et suivi financier accessibles sans multiplier les outils.",
  },
];

export default function Home() {
  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(240, 253, 249, 0.86)",
          borderColor: "var(--stroke-subtle)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl font-bold text-primary">
            e-school
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            <a className="premium-nav-item" href="#fonctionnalites">
              Fonctionnalités
            </a>
            <a className="premium-nav-item" href="#contact">
              Contact
            </a>
          </nav>
          <a className="premium-btn-secondary hidden sm:inline-flex" href="#contact">
            Demander une démo
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h1 className="font-display text-display">
                Toute votre école.{" "}
                <span className="text-accent">Un seul logiciel.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-secondary">
                Passez moins de temps à gérer, plus de temps à enseigner.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <DownloadButton className="w-full sm:w-auto" />
                <a className="premium-btn-secondary w-full sm:w-auto" href="#contact">
                  Demander une démo
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-xl border bg-surface-card p-2 shadow-sm"
              style={{ borderColor: "var(--stroke-subtle)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Aperçu du tableau de bord e-school"
                className="aspect-video h-full w-full rounded-lg object-cover"
                src="./bg.png"
              />
            </div>
          </div>
        </section>

        <section
          className="border-y bg-surface-card py-20"
          id="fonctionnalites"
          style={{ borderColor: "var(--stroke-subtle)" }}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-h1">3 fonctionnalités clés</h2>
              <p className="mt-4 text-lg text-secondary">
                L&apos;essentiel pour piloter une école au quotidien, sans
                disperser les équipes.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-lg border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-card"
                  style={{ borderColor: "var(--stroke-subtle)" }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-accent">
                    <i
                      className={`${feature.icon} block`}
                      style={{ fontSize: "1.6rem" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-h3">{feature.title}</h3>
                  <p className="mt-3 text-body text-secondary">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>

            <a
              className="mt-10 inline-flex items-center gap-2 font-medium text-accent transition-all duration-300 hover:gap-3"
              href="#contact"
            >
              Voir toutes les fonctionnalités
              <i className="ph ph-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="py-20 md:py-24" id="contact">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <h2 className="font-display text-h1">Parlons de votre école</h2>
              <p className="mt-4 text-lg text-secondary">
                Dites-nous ce que vous souhaitez simplifier. Nous vous
                recontactons pour une démonstration adaptée à votre
                établissement.
              </p>
              <div className="mt-8 flex items-center gap-3 text-body text-secondary">
                <i
                  className="ph ph-whatsapp-logo text-accent"
                  style={{ fontSize: "1.4rem" }}
                  aria-hidden="true"
                />
                <a
                  className="transition-all duration-300 hover:text-accent"
                  href="https://wa.me/33745982805?text=Bonjour%2C%20je%20souhaite%20obtenir%20plus%20d%27informations%20sur%20la%20solution%20e-school."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacter e-school sur WhatsApp
                </a>
              </div>
            </div>

            <div
              className="rounded-lg border bg-surface-card p-6 md:p-8"
              style={{ borderColor: "var(--stroke-subtle)" }}
            >
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer
        className="border-t"
        style={{ borderColor: "var(--stroke-subtle)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-body-sm text-secondary sm:flex-row sm:items-center sm:justify-between">
          <a className="font-display text-xl font-bold text-primary" href="#">
            e-school
          </a>
          <p>© 2026 e-school. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
