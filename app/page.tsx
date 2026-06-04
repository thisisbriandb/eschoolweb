import type { Metadata } from "next";
import DownloadButton from "./components/DownloadButton";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "e-school | La gestion scolaire, réinventée",
  description:
    "e-school est la plateforme tout-en-un qui simplifie l'administration, la planification, la communication et les finances de votre établissement scolaire.",
};

const features = [
  {
    icon: "ph ph-user-plus",
    title: "Gestion des inscriptions",
    description:
      "Simplifiez le processus d'admission, de la candidature en ligne au dossier de l'élève.",
    color: "accent" as const,
  },
  {
    icon: "ph ph-calendar-dots",
    title: "Emplois du temps",
    description:
      "Créez et gérez des horaires complexes pour les classes, les enseignants et les salles en quelques clics.",
    color: "secondary" as const,
  },
  {
    icon: "ph ph-chart-line-up",
    title: "Suivi financier",
    description:
      "Automatisez la facturation des frais de scolarité, suivez les paiements et générez des rapports financiers.",
    color: "tertiary" as const,
  },
  {
    icon: "ph ph-chat-circle-dots",
    title: "Communication centralisée",
    description:
      "Un portail unique pour les annonces, les messages directs entre parents et professeurs, et le partage de documents.",
    color: "secondary" as const,
  },
  {
    icon: "ph ph-exam",
    title: "Notes et bulletins",
    description:
      "Saisie facile des notes, calcul automatique des moyennes et génération de bulletins personnalisés.",
    color: "tertiary" as const,
  },
  {
    icon: "ph ph-chart-bar",
    title: "Rapports et analyses",
    description:
      "Accédez à des tableaux de bord clairs pour prendre des décisions éclairées sur la performance de votre établissement.",
    color: "accent" as const,
  },
];

const testimonials = [
  {
    quote:
      "e-school a transformé notre administration. Nous avons gagné un temps précieux sur les tâches répétitives, ce qui nous permet de nous concentrer davantage sur nos élèves.",
    name: "Marc Dubois",
    role: "Directeur, Lycée Victor Hugo",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "La plateforme est incroyablement intuitive. L'intégration s'est faite sans heurts et le support client est exceptionnel. La communication avec les parents n'a jamais été aussi simple.",
    name: "Sophie Lemoine",
    role: "Responsable Pédagogique, École Les Colibris",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "Le module financier est un véritable atout. Le suivi des paiements est clair, et la génération de rapports nous a permis d'avoir une vision précise de notre budget.",
    name: "David Martin",
    role: "Gestionnaire Financier, Groupe Scolaire Pasteur",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&q=80",
  },
];



function getColorClasses(color: "accent" | "secondary" | "tertiary") {
  const map = {
    accent: {
      bg: "bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]",
      text: "text-[var(--accent)]",
    },
    secondary: {
      bg: "bg-[color-mix(in_srgb,var(--secondary)_10%,transparent)]",
      text: "text-[var(--secondary)]",
    },
    tertiary: {
      bg: "bg-[color-mix(in_srgb,var(--tertiary)_10%,transparent)]",
      text: "text-[var(--tertiary)]",
    },
  };
  return map[color];
}

export default function Home() {
  return (
    <>
      {/* ====== HEADER ====== */}
      <header
        className="sticky top-0 z-50 w-full backdrop-blur-sm border-b"
        style={{
          backgroundColor: "rgba(240, 253, 249, 0.8)",
          borderColor: "var(--stroke-subtle)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold text-primary">
            e-school
          </a>
          <nav className="hidden md:flex items-center gap-2">
            <a className="premium-nav-item" href="#fonctionnalites">
              Fonctionnalités
            </a>
            <a className="premium-nav-item" href="#temoignages">
              Témoignages
            </a>
            <a className="premium-nav-item" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="premium-btn-primary" href="#cta_finale">
              Nous contacter
            </a>
          </div>
        </div>
      </header>

      {/* ====== MAIN ====== */}
      <main className="flex-1">
        {/* ---- Hero ---- */}
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-display text-display animate-fade-in-up">
                La gestion scolaire,{" "}
                <span className="text-accent">réinventée</span>.
              </h1>
              <p className="text-lg text-secondary mt-6 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
                e-school est la plateforme tout-en-un qui simplifie
                l&apos;administration, la planification, la communication et les
                finances de votre établissement. Libérez du temps pour ce qui
                compte vraiment&nbsp;: l&apos;éducation.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
                <DownloadButton className="w-full sm:w-auto" />
                <a
                  className="premium-btn-secondary w-full sm:w-auto"
                  href="#fonctionnalites"
                >
                  Découvrir les fonctionnalités
                </a>
              </div>
            </div>
            <div className="mt-16 animate-scale-in animation-delay-300">
              <div
                className="aspect-video w-full premium-card"
                style={{ padding: "0.5rem" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Aperçu du tableau de bord de e-school avec des graphiques et des statistiques"
                  className="w-full h-full object-cover rounded-xl"
                  src="./bg.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---- Features ---- */}
        <section className="py-24 bg-surface-muted" id="fonctionnalites">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-h1">
                Une plateforme, tout pour gérer.
              </h2>
              <p className="text-lg text-secondary mt-4">
                Centralisez toutes vos opérations scolaires avec nos modules
                intuitifs, conçus pour les administrateurs, les enseignants, les
                élèves et les parents.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {features.map((feature, i) => {
                const colors = getColorClasses(feature.color);
                return (
                  <div
                    key={feature.title}
                    className={`premium-card p-8 flex flex-col items-start animate-fade-in-up animation-delay-${(i + 1) * 100}`}
                  >
                    <div
                      className={`p-3 ${colors.bg} rounded-xl ${colors.text} mb-4`}
                    >
                      <i
                        className={`${feature.icon} block`}
                        style={{ fontSize: "2rem" }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-h3">{feature.title}</h3>
                    <p className="text-body text-secondary mt-2">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---- Testimonials ---- */}
        <section className="py-24" id="temoignages">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-h1">
                Ils nous font confiance.
              </h2>
              <p className="text-lg text-secondary mt-4">
                Découvrez pourquoi des centaines d&apos;établissements, des
                écoles primaires aux universités, ont choisi e-school pour
                optimiser leur gestion.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="premium-card p-8">
                  <blockquote className="text-body text-secondary">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center mt-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={`Portrait de ${testimonial.name}`}
                      className="w-12 h-12 rounded-full object-cover"
                      src={testimonial.image}
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-body-sm text-secondary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact Form ---- */}
        <section className="py-24 bg-surface-muted" id="contact">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <h2 className="font-display text-h1">
                  Demandez plus d&apos;informations
                </h2>
                <p className="text-lg text-secondary mt-4">
                  Vous souhaitez en savoir plus sur e-school ? Remplissez ce
                  formulaire et notre équipe vous recontactera rapidement.
                </p>
              </div>
              <div className="premium-card p-8 md:p-10 mt-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section className="py-24" id="cta_finale">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="premium-card p-12 md:p-16 rounded-2xl text-center"
              style={{
                background:
                  "linear-gradient(to bottom right, color-mix(in srgb, var(--accent) 20%, transparent), color-mix(in srgb, var(--secondary) 20%, transparent))",
              }}
            >
              <div className="max-w-2xl mx-auto">
                <h2 className="font-display text-h1 text-primary">
                  Prêt à transformer votre gestion scolaire&nbsp;?
                </h2>
                <p className="text-lg mt-4 text-secondary">
                  Planifiez une démonstration personnalisée avec notre équipe
                  pour découvrir comment e-school peut s&apos;adapter aux
                  besoins spécifiques de votre établissement.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a className="premium-btn-primary w-full sm:w-auto" href="#contact">
                    Nous contacter
                  </a>
                  <DownloadButton className="w-full sm:w-auto" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====== FOOTER ====== */}
      <footer
        className="border-t bg-surface-muted"
        style={{ borderColor: "var(--stroke-subtle)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <a
                className="font-display text-2xl font-bold text-primary"
                href="#"
              >
                e-school
              </a>
              <p className="text-body-sm text-secondary mt-2">
                Simplifier la gestion pour une meilleure éducation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
              <a className="premium-nav-item text-sm" href="#">
                Politique de confidentialité
              </a>
              <a className="premium-nav-item text-sm" href="#">
                Conditions d&apos;utilisation
              </a>
              <a className="premium-nav-item text-sm" href="#">
                FAQ
              </a>
            </div>
          </div>
          <div
            className="mt-8 pt-8 border-t text-center text-secondary text-sm"
            style={{ borderColor: "var(--stroke-subtle)" }}
          >
            <p>© 2024 e-school. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
