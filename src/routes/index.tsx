import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Truck,
  Wrench,
  Package,
  ShieldCheck,
  HeadphonesIcon,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ChevronRight,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TORALVA Trailers | Fabricación, Refacciones y Reparación" },
      {
        name: "description",
        content:
          "TORALVA Trailers: fabricación de trailas, venta de refacciones y servicio de reparación. Cotiza tu remolque con especialistas confiables.",
      },
      { property: "og:title", content: "TORALVA Trailers" },
      {
        property: "og:description",
        content:
          "Trailas fabricadas para trabajar contigo. Fabricación, refacciones y reparación.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Inicio", to: "#inicio" },
  { label: "Servicios", to: "#servicios" },
  { label: "Nosotros", to: "#nosotros" },
  { label: "Contacto", to: "#contacto" },
];

const services = [
  {
    icon: Truck,
    title: "Fabricación de trailas",
    description:
      "Diseñamos y construimos remolques a la medida de tu trabajo: carga, utilitarios, plataforma y especializados.",
  },
  {
    icon: Package,
    title: "Refacciones para trailas",
    description:
      "Venta de partes de calidad: ejes, suspensiones, luces, conectores, frenos y todo lo que tu tráila necesita.",
    },
  {
    icon: Wrench,
    title: "Reparación y mantenimiento",
    description:
      "Servicio confiable para mantener tu remolque en movimiento: soldadura, frenos, sistema eléctrico y más.",
  },
];

const benefits = [
  { icon: ShieldCheck, title: "Calidad garantizada", description: "Materiales resistentes y acabados pensados para el uso rudo." },
  { icon: HeadphonesIcon, title: "Atención personalizada", description: "Te escuchamos para ofrecerte la solución que realmente necesitas." },
  { icon: Award, title: "Experiencia comprobada", description: "Años fabricando y reparando trailas nos respaldan." },
  { icon: Clock, title: "Soluciones a tiempo", description: "Cumplimos con tus tiempos para que tu negocio no se detenga." },
];

const gallery = [
  { src: "/images/gallery-fabrication.jpg", alt: "Fabricación de traila en taller" },
  { src: "/images/gallery-parts.jpg", alt: "Refacciones y accesorios para trailas" },
  { src: "/images/gallery-repair.jpg", alt: "Reparación de tráila con soldadura" },
  { src: "/images/gallery-fleet.jpg", alt: "Flota de trailas listas para entrega" },
  { src: "/images/gallery-axles.jpg", alt: "Ensamble de ejes y suspensión" },
  { src: "/images/gallery-showroom.jpg", alt: "Tráila terminada en exhibición" },
];

const contactFields = [
  { icon: Phone, label: "Teléfono", value: "Agregar teléfono", href: "tel:" },
  { icon: MessageCircle, label: "WhatsApp", value: "Agregar WhatsApp", href: "https://wa.me/" },
  { icon: Mail, label: "Correo electrónico", value: "Agregar correo", href: "mailto:" },
  { icon: MapPin, label: "Ubicación", value: "Agregar ubicación", href: "#" },
  { icon: Clock3, label: "Horario", value: "Agregar horario", href: "#" },
];

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-cream"
          >
            <Truck className="h-6 w-6 shrink-0 text-rust" />
            <span className="truncate">TORALVA Trailers</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-rust-light"
            >
              Cotizar
            </a>
          </nav>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menú"
                className="text-cream hover:bg-cream/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full border-border/40 bg-charcoal sm:max-w-sm"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-cream">
                  <Truck className="h-6 w-6 text-rust" />
                  TORALVA Trailers
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <a
                      href={link.to}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-cream/10 hover:text-cream"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href="#contacto"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-rust-light"
                  >
                    Solicitar cotización
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-charcoal pt-16"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-trailer.jpg"
            alt="Tráila industrial en taller TORALVA"
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-sm font-medium text-cream backdrop-blur">
              <Wrench className="h-4 w-4 text-rust" />
              Fabricación · Refacciones · Reparación
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Trailas fabricadas para trabajar contigo
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/80 sm:text-xl">
              En TORALVA Trailers hacemos remolques que resisten el uso diario,
              vendemos refacciones de confianza y reparamos para que sigas
              rodando.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-rust/20 transition-transform hover:scale-[1.02] hover:bg-rust-light"
              >
                Solicitar cotización
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md border border-cream/30 bg-cream/5 px-6 py-3 text-base font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/10"
              >
                Contactarnos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="bg-section-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Nuestros servicios
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Todo lo que tu tráila necesita, en un solo lugar.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-border bg-card transition-shadow hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-rust-light">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="nosotros" className="bg-section-rust py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
                ¿Por qué confiar en TORALVA?
              </h2>
              <p className="mt-4 text-lg text-cream/80">
                Trabajamos con honestidad, experiencia y atención directa. Tu
                remolque es nuestra prioridad.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Materiales de alta resistencia",
                  "Asesoría en cada etapa",
                  "Entregas puntuales",
                  "Garantía de servicio",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream/90">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cream text-rust">
                      <Check className="h-3 w-3 stroke-[4]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-cream/20 bg-cream/10 p-6 backdrop-blur transition-transform hover:-translate-y-1"
                >
                  <benefit.icon className="h-8 w-8 text-cream" />
                  <h3 className="mt-4 text-lg font-semibold text-cream">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-section-charcoal py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Galería de trabajos
            </h2>
            <p className="mt-4 text-lg text-cream/70">
              Algunos ejemplos de lo que fabricamos, reparamos y vendemos.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-cream/10 bg-cream/5"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="bg-section-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Contáctanos
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Cuéntanos qué necesitas y te enviamos una cotización a la medida.
              </p>

              <div className="mt-10 space-y-5">
                {contactFields.map((field) => {
                  const isEditable =
                    field.label === "Horario" || field.label === "Ubicación";
                  return (
                    <div key={field.label} className="flex items-start gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                        <field.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {field.label}
                        </p>
                        {isEditable ? (
                          <p className="mt-0.5 text-base font-semibold text-charcoal">
                            {field.value}
                          </p>
                        ) : (
                          <a
                            href={field.href}
                            className="mt-0.5 inline-block text-base font-semibold text-charcoal transition-colors hover:text-rust"
                          >
                            {field.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="border-border bg-card shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  Solicitar cotización
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Llena el formulario y nos pondremos en contacto contigo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-card-foreground">
                        Nombre
                      </Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="border-input bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-card-foreground">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu teléfono"
                        className="border-input bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@correo.com"
                      className="border-input bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-card-foreground">
                      Servicio de interés
                    </Label>
                    <Input
                      id="service"
                      placeholder="Ej. Fabricación de tráila de carga"
                      className="border-input bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Cuéntanos los detalles de tu proyecto..."
                      className="border-input bg-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-rust-light"
                  >
                    Enviar cotización
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-charcoal py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <a
              href="#inicio"
              className="flex items-center gap-2 text-lg font-bold text-cream"
            >
              <Truck className="h-6 w-6 text-rust" />
              TORALVA Trailers
            </a>
            <p className="text-center text-sm text-cream/60">
              © {new Date().getFullYear()} TORALVA Trailers. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-4">
              {["Inicio", "Servicios", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 fill-current" />
      </a>
    </div>
  );
}
