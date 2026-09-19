import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  X,
  Smile,
  BadgeCheck,
  Gem,
  Users,
} from "lucide-react";

export default function App() {
  /* =========================================================
     STATE
  ========================================================= */

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [patientName, setPatientName] = useState("");

  /* =========================================================
     DATA
  ========================================================= */

  const services = [
    {
      icon: Sparkles,
      title: "Teeth Cleaning",
      description:
        "Fresh breath, healthy gums aur ek naturally clean smile ke liye professional cleaning.",
    },
    {
      icon: Gem,
      title: "Dental Implants",
      description:
        "Natural-looking tooth replacement designed for comfort, function aur confidence.",
    },
    {
      icon: Smile,
      title: "Teeth Whitening",
      description:
        "Safe professional whitening for a brighter and more confident smile.",
    },
    {
      icon: Stethoscope,
      title: "Clear Aligners",
      description:
        "Discreet smile correction with modern clear aligner treatment plans.",
    },
    {
      icon: HeartPulse,
      title: "Kids Dentistry",
      description:
        "Little smiles ke liye friendly, patient-first aur stress-free dental care.",
    },
    {
      icon: ShieldCheck,
      title: "Root Canal",
      description:
        "Comfort-focused treatment to save damaged teeth and restore your smile.",
    },
  ];

  const testimonials = [
    {
      name: "Riya Sharma",
      treatment: "Teeth Whitening",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=85",
      text: "Honestly, first dental visit jahan mujhe bilkul nervous feel nahi hua. Doctor ne everything so clearly explain kiya.",
    },
    {
      name: "Arjun Kapoor",
      treatment: "Clear Aligners",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=85",
      text: "Clinic is beautiful, staff super sweet and treatment was very smooth. Highly professional experience.",
    },
    {
      name: "Neha Verma",
      treatment: "Kids Dentistry",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=85",
      text: "My son actually enjoyed his dental appointment! The team really knows how to make kids comfortable.",
    },
  ];

  const faqs = [
    {
      question: "First appointment mein kya hota hai?",
      answer:
        "First visit mein hum aapki concerns samajhte hain, dental examination karte hain aur suitable treatment options clearly explain karte hain.",
    },
    {
      question: "Kya dental treatment painful hota hai?",
      answer:
        "Modern dentistry mein patient comfort ko priority di jaati hai. Procedure ke according appropriate comfort aur anesthesia options available hote hain.",
    },
    {
      question: "Appointment kitne time ka hota hai?",
      answer:
        "Routine consultation usually 30–45 minutes ki hoti hai. Treatment duration procedure ke according change ho sakta hai.",
    },
    {
      question: "Emergency dental issue ho toh?",
      answer:
        "Clinic ko directly call karein. Hamari team earliest suitable appointment aur immediate next steps ke liye guide karegi.",
    },
  ];

  /* =========================================================
     FORM
  ========================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7fbf9] text-[#102a2e]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#dce9e5]/70 bg-[#f7fbf9]/85 backdrop-blur-xl">

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0c7771] text-xl font-bold text-white shadow-lg shadow-[#0c7771]/20">
              ✦
            </span>

            <span className="font-display text-xl font-extrabold tracking-tight">
              Smile<span className="text-[#0c7771]">Craft</span>
            </span>
          </a>


          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#607477] lg:flex">

            <a
              href="#home"
              className="transition hover:text-[#0c7771]"
            >
              Home
            </a>

            <a
              href="#services"
              className="transition hover:text-[#0c7771]"
            >
              Services
            </a>

            <a
              href="#about"
              className="transition hover:text-[#0c7771]"
            >
              About
            </a>

            <a
              href="#results"
              className="transition hover:text-[#0c7771]"
            >
              Results
            </a>

            <a
              href="#reviews"
              className="transition hover:text-[#0c7771]"
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="transition hover:text-[#0c7771]"
            >
              FAQ
            </a>

          </nav>


          {/* Desktop CTA */}

          <a
            href="#booking"
            className="hidden items-center rounded-full bg-[#0c7771] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0c7771]/20 transition hover:-translate-y-0.5 hover:bg-[#096762] lg:inline-flex"
          >
            Book Appointment
            <ArrowRight
              size={16}
              className="ml-2"
            />
          </a>


          {/* Mobile Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="grid h-11 w-11 place-items-center rounded-xl bg-white lg:hidden"
          >
            {mobileMenu ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>


        {/* Mobile Menu */}

        {mobileMenu && (
          <div className="border-t border-[#dce9e5] bg-[#f7fbf9] px-5 py-6 lg:hidden">

            <nav className="flex flex-col gap-5 font-semibold text-[#52686b]">

              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["About", "#about"],
                ["Results", "#results"],
                ["Reviews", "#reviews"],
                ["FAQ", "#faq"],
              ].map(([name, link]) => (

                <a
                  key={name}
                  href={link}
                  onClick={() => setMobileMenu(false)}
                >
                  {name}
                </a>

              ))}


              <a
                href="#booking"
                onClick={() => setMobileMenu(false)}
                className="rounded-full bg-[#0c7771] px-5 py-3 text-center text-white"
              >
                Book Appointment
              </a>

            </nav>

          </div>
        )}

      </header>


      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          id="home"
          className="px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">

            {/* Hero Left */}

            <div className="animate-[fadeUp_.8s_ease-out]">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e9f8f4] px-4 py-2 text-xs font-extrabold text-[#0c7771]">

                <span className="h-2 w-2 rounded-full bg-[#25a99c]" />

                Trusted dental care

                <span>•</span>

                10+ years experience

              </div>


              <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[.96] tracking-[-3px] sm:text-6xl lg:text-[76px]">

                Your smile

                <br />

                deserves

                <span className="text-[#0c7771]">
                  better care.
                </span>

              </h1>


              <p className="mt-7 max-w-xl text-lg leading-8 text-[#65777a]">

                Modern dentistry with a warm human touch.

                Yahan milega expert care, transparent treatment aur

                <strong className="text-[#102a2e]">
                  {" "}
                  zero awkward vibes.
                </strong>

              </p>


              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#booking"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0c7771] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#0c7771]/20 transition hover:-translate-y-1 hover:bg-[#096762]"
                >

                  Book your appointment

                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />

                </a>


                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dce9e5] bg-white px-6 py-4 text-sm font-bold text-[#0c7771] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore services
                </a>

              </div>


              {/* Hero Stats */}

              <div className="mt-9 flex flex-wrap gap-8">

                <div>
                  <strong className="font-display text-2xl font-extrabold">
                    12k+
                  </strong>

                  <p className="text-xs text-[#718184]">
                    Smiles cared for
                  </p>
                </div>


                <div>
                  <strong className="font-display text-2xl font-extrabold">
                    4.9/5
                  </strong>

                  <p className="text-xs text-[#718184]">
                    Patient rating
                  </p>
                </div>


                <div>
                  <strong className="font-display text-2xl font-extrabold">
                    10+
                  </strong>

                  <p className="text-xs text-[#718184]">
                    Years experience
                  </p>
                </div>

              </div>

            </div>


            {/* Hero Image */}

            <div className="relative animate-[fadeUp_1s_ease-out]">

              <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full bg-[#cdeee5] blur-sm lg:block" />

              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1400&q=90"
                alt="Dentist treating patient"
                className="relative h-[440px] w-full rounded-[32px] object-cover shadow-2xl shadow-[#102a2e]/10 sm:h-[570px]"
              />


              {/* Rating Card */}

              <div className="absolute right-4 top-5 rounded-2xl bg-white p-4 shadow-2xl sm:right-[-20px]">

                <div className="flex items-center gap-1 text-[#d49328]">

                  <Star
                    size={14}
                    fill="currentColor"
                  />

                  <Star
                    size={14}
                    fill="currentColor"
                  />

                  <Star
                    size={14}
                    fill="currentColor"
                  />

                  <Star
                    size={14}
                    fill="currentColor"
                  />

                  <Star
                    size={14}
                    fill="currentColor"
                  />

                </div>

                <p className="mt-1 text-sm font-bold">
                  4.9/5
                </p>

                <p className="text-[11px] text-[#718184]">
                  1,200+ reviews
                </p>

              </div>


              {/* Floating Card */}

              <div className="absolute bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-[#dce9e5] bg-white p-4 shadow-2xl sm:-left-6">

                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e9f8f4] text-[#0c7771]">
                  <Check size={21} />
                </span>

                <div>

                  <b className="block text-sm">
                    Gentle care
                  </b>

                  <span className="text-xs text-[#718184]">
                    Comfort-first treatment
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST BAR
        ===================================================== */}

        <section className="border-y border-[#dce9e5] bg-white">

          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

            {[
              [
                ShieldCheck,
                "Experienced Dentists",
              ],
              [
                Stethoscope,
                "Modern Equipment",
              ],
              [
                HeartPulse,
                "Comfortable Treatment",
              ],
              [
                BadgeCheck,
                "Transparent Pricing",
              ],
            ].map(([Icon, text]) => (

              <div
                key={text}
                className="flex items-center justify-center gap-3 border-[#dce9e5] px-5 py-6 text-center even:border-l lg:border-l"
              >

                <Icon
                  size={20}
                  className="text-[#0c7771]"
                />

                <span className="text-xs font-bold text-[#53696b] sm:text-sm">
                  {text}
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="px-5 py-24 lg:px-8 lg:py-32"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">

              <div>

                <p className="mb-3 text-xs font-extrabold uppercase tracking-[2px] text-[#0c7771]">
                  Our treatments
                </p>

                <h2 className="font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl lg:text-6xl">
                  Everything your
                  <br />
                  smile needs.
                </h2>

              </div>


              <p className="max-w-lg text-base leading-7 text-[#65777a] lg:justify-self-end">

                Everyday cleaning se lekar complete smile makeover tak —
                expert treatment, simple explanations aur aapke comfort par
                complete focus.

              </p>

            </div>


            {/* Cards */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => {

                const Icon = service.icon;

                return (

                  <div
                    key={service.title}
                    className="group relative overflow-hidden rounded-[26px] border border-[#dce9e5] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#bcdad3] hover:shadow-2xl hover:shadow-[#102a2e]/10"
                  >

                    <span className="absolute right-5 top-5 text-xs font-bold text-[#d5e5e1]">
                      0{index + 1}
                    </span>


                    <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#e9f8f4] text-[#0c7771] transition duration-300 group-hover:scale-110 group-hover:bg-[#0c7771] group-hover:text-white">
                      <Icon size={23} />
                    </div>


                    <h3 className="font-display text-xl font-bold">
                      {service.title}
                    </h3>


                    <p className="mt-3 text-sm leading-7 text-[#65777a]">
                      {service.description}
                    </p>


                    <div className="mt-7 flex items-center gap-2 text-xs font-bold text-[#0c7771]">
                      Learn more
                      <ArrowRight size={14} />
                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURED SERVICE
        ===================================================== */}

        <section className="px-5 py-12 lg:px-8 lg:py-16">

          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[36px] bg-[#e8f6f2] lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[420px]">

              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=90"
                alt="Dental treatment"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wider text-[#0c7771]">
                  Popular treatment
                </p>

                <p className="mt-1 font-display font-bold">
                  Smile Makeover
                </p>

              </div>

            </div>


            {/* Content */}

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#0c7771]">
                Designed around you
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
                Dentistry that feels different.
              </h2>

              <p className="mt-5 leading-7 text-[#52706e]">

                Hum sirf treatment nahi karte. We take time to understand your
                smile goals, explain every step and create a plan that feels
                right for you.

              </p>


              <div className="mt-7 space-y-4">

                {[
                  "Personalized treatment plans",
                  "Modern digital dentistry",
                  "Comfort-first approach",
                  "Clear and transparent communication",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold"
                  >

                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0c7771]">
                      <Check size={15} />
                    </span>

                    {item}

                  </div>

                ))}

              </div>


              <a
                href="#booking"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0c7771] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
              >
                Explore treatment
                <ArrowRight size={16} />
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            DOCTOR
        ===================================================== */}

        <section
          id="about"
          className="px-5 py-24 lg:px-8 lg:py-32"
        >

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">

              {/* Doctor Photo */}

              <div className="relative">

                <div className="absolute -bottom-5 -right-5 hidden h-40 w-40 rounded-full bg-[#cdeee5] lg:block" />

                <img
                  src="https://images.unsplash.com/photo-1550831107-1553da8c8464?w=1000&q=90"
                  alt="Dr. Aarav Mehta"
                  className="relative h-[500px] w-full rounded-[32px] object-cover object-top shadow-xl"
                />


                <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-5 shadow-2xl">

                  <div className="flex items-center gap-3">

                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e9f8f4] text-[#0c7771]">
                      <BadgeCheck size={21} />
                    </span>

                    <div>

                      <b className="block text-sm">
                        Dr. Aarav Mehta
                      </b>

                      <span className="text-xs text-[#718184]">
                        BDS, MDS • 10+ Years
                      </span>

                    </div>

                  </div>

                </div>

              </div>


              {/* Content */}

              <div>

                <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#0c7771]">
                  Meet your dentist
                </p>


                <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
                  “Dentistry should
                  <br />
                  feel human.”
                </h2>


                <p className="mt-6 max-w-xl text-base leading-8 text-[#65777a]">

                  Dr. Aarav Mehta believes dental care should be simple,
                  comfortable and personal. Every patient deserves to understand
                  their treatment — without complicated medical jargon.

                </p>


                <p className="mt-4 max-w-xl text-base leading-8 text-[#65777a]">

                  Isliye SmileCraft mein every treatment starts with listening,
                  explaining and creating a plan around you.

                </p>


                {/* Doctor Stats */}

                <div className="mt-9 grid grid-cols-3 gap-4">

                  <div className="border-t border-[#dce9e5] pt-4">

                    <strong className="font-display text-3xl font-extrabold">
                      10+
                    </strong>

                    <p className="mt-1 text-xs text-[#718184]">
                      Years experience
                    </p>

                  </div>


                  <div className="border-t border-[#dce9e5] pt-4">

                    <strong className="font-display text-3xl font-extrabold">
                      12k+
                    </strong>

                    <p className="mt-1 text-xs text-[#718184]">
                      Patients treated
                    </p>

                  </div>


                  <div className="border-t border-[#dce9e5] pt-4">

                    <strong className="font-display text-3xl font-extrabold">
                      4.9
                    </strong>

                    <p className="mt-1 text-xs text-[#718184]">
                      Patient rating
                    </p>

                  </div>

                </div>


                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full bg-[#e9f8f4] px-4 py-2 text-xs font-bold text-[#0c7771]">
                    ✓ Certified Dentist
                  </span>

                  <span className="rounded-full bg-[#e9f8f4] px-4 py-2 text-xs font-bold text-[#0c7771]">
                    ✓ Modern Dentistry
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            RESULTS / BEFORE AFTER
        ===================================================== */}

        <section
          id="results"
          className="bg-[#123e3d] px-5 py-24 text-white lg:px-8 lg:py-32"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#8fe0d4]">
                Smile stories
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl lg:text-6xl">
                Real smiles.
                <br />
                Real confidence.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-[#b9d1ce]">
                Small changes can create a big difference in how you feel about
                your smile.
              </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              {/* Before */}

              <div className="relative overflow-hidden rounded-[28px]">

                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000&q=90"
                  alt="Before dental treatment"
                  className="h-[430px] w-full object-cover"
                />

                <span className="absolute left-5 top-5 rounded-full bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                  BEFORE
                </span>

              </div>


              {/* After */}

              <div className="relative overflow-hidden rounded-[28px]">

                <img
                  src="https://images.unsplash.com/photo-1606265752439-1f18756aa8d4?w=1000&q=90"
                  alt="After dental treatment"
                  className="h-[430px] w-full object-cover"
                />

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0c7771]">
                  AFTER
                </span>

              </div>

            </div>


            <div className="mt-10 text-center">

              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#0c7771] transition hover:-translate-y-1"
              >
                Start your smile journey
                <ArrowRight size={16} />
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            TESTIMONIALS
        ===================================================== */}

        <section
          id="reviews"
          className="px-5 py-24 lg:px-8 lg:py-32"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

              <div>

                <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#0c7771]">
                  Patient love
                </p>

                <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
                  People leave smiling.
                </h2>

              </div>


              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">

                <div className="flex text-[#d49328]">

                  {[1, 2, 3, 4, 5].map((x) => (
                    <Star
                      key={x}
                      size={15}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <div>

                  <b className="text-sm">
                    4.9 / 5
                  </b>

                  <p className="text-xs text-[#718184]">
                    1,200+ reviews
                  </p>

                </div>

              </div>

            </div>


            <div className="grid gap-5 lg:grid-cols-3">

              {testimonials.map((review) => (

                <div
                  key={review.name}
                  className="rounded-[26px] border border-[#dce9e5] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#102a2e]/10"
                >

                  <div className="flex gap-1 text-[#d49328]">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <Star
                        key={star}
                        size={14}
                        fill="currentColor"
                      />

                    ))}

                  </div>


                  <p className="my-7 text-[15px] leading-7 text-[#40585b]">

                    “{review.text}”

                  </p>


                  <div className="flex items-center gap-3">

                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />

                    <div>

                      <p className="text-sm font-bold">
                        {review.name}
                      </p>

                      <p className="text-xs text-[#718184]">
                        {review.treatment}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY US
        ===================================================== */}

        <section className="px-5 pb-24 lg:px-8 lg:pb-32">

          <div className="mx-auto max-w-7xl rounded-[35px] bg-[#e9f8f4] p-8 sm:p-12 lg:p-16">

            <div className="text-center">

              <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#0c7771]">
                Why SmileCraft
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
                A better dental experience.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-[#52706e]">
                Because good dentistry isn't just about teeth. It's about how
                you feel throughout the journey.
              </p>

            </div>


            <div className="mt-12 grid gap-5 md:grid-cols-3">

              {[
                {
                  icon: Users,
                  title: "Personal Attention",
                  text: "No rushed appointments. Hum actually listen karte hain.",
                },
                {
                  icon: ShieldCheck,
                  title: "Comfort First",
                  text: "Every treatment is designed around your comfort.",
                },
                {
                  icon: BadgeCheck,
                  title: "Clear & Honest",
                  text: "Treatment, options aur costs clearly explain kiye jaate hain.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="rounded-[24px] bg-white p-7 text-center shadow-sm"
                  >

                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#e9f8f4] text-[#0c7771]">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#65777a]">
                      {item.text}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            BOOKING
        ===================================================== */}

        <section
          id="booking"
          className="px-5 py-24 lg:px-8 lg:py-32"
        >

          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[.78fr_1.22fr]">

            {/* Booking Info */}

            <div className="rounded-[32px] bg-[#cdeee5] p-8 sm:p-10">

              <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#0c7771]">
                Book your visit
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-2px]">
                Your next smile starts here.
              </h2>

              <p className="mt-5 leading-7 text-[#52706e]">
                Form fill karo, preferred date choose karo — our team will
                confirm your appointment shortly.
              </p>


              <div className="mt-8 space-y-4">

                <ContactInfo
                  icon={<MapPin size={18} />}
                  title="Clinic"
                  text="Gomti Nagar, Lucknow"
                />

                <ContactInfo
                  icon={<Clock3 size={18} />}
                  title="Opening hours"
                  text="Mon–Sat · 9 AM–7 PM"
                />

                <ContactInfo
                  icon={<Phone size={18} />}
                  title="Call us"
                  text="+91 98765 43210"
                />

              </div>


              <div className="mt-8 rounded-2xl bg-white/70 p-5">

                <div className="flex gap-3">

                  <ShieldCheck
                    size={21}
                    className="shrink-0 text-[#0c7771]"
                  />

                  <div>

                    <p className="text-sm font-bold">
                      Your privacy matters
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#52706e]">
                      Your details are used only for appointment coordination.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="rounded-[32px] border border-[#dce9e5] bg-white p-7 shadow-xl shadow-[#102a2e]/5 sm:p-10"
            >

              <div className="mb-8">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8f4] text-[#0c7771]">
                  <CalendarDays size={21} />
                </div>

                <h3 className="mt-5 font-display text-2xl font-extrabold">
                  Request an appointment
                </h3>

                <p className="mt-2 text-sm text-[#718184]">
                  Tell us a little about your visit.
                </p>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                <FormField label="Full name">

                  <input
                    required
                    value={patientName}
                    onChange={(event) =>
                      setPatientName(event.target.value)
                    }
                    placeholder="Aapka naam"
                  />

                </FormField>


                <FormField label="Phone number">

                  <input
                    required
                    type="tel"
                    placeholder="+91 98xxx xxxxx"
                  />

                </FormField>


                <FormField label="Preferred date">

                  <input
                    required
                    type="date"
                  />

                </FormField>


                <FormField label="Preferred service">

                  <select
                    required
                    defaultValue=""
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select treatment
                    </option>

                    {services.map((service) => (
                      <option key={service.title}>
                        {service.title}
                      </option>
                    ))}

                  </select>

                </FormField>


                <FormField
                  label="Message"
                  full
                >

                  <textarea
                    placeholder="Optional — tell us what's bothering you..."
                  />

                </FormField>

              </div>


              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#0c7771] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#0c7771]/20 transition hover:-translate-y-0.5 hover:bg-[#096762]"
              >

                Request appointment

                <ArrowRight size={17} />

              </button>

              <p className="mt-4 text-center text-[11px] text-[#8a999b]">
                Demo form — no real appointment is created.
              </p>

            </form>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          id="faq"
          className="px-5 py-24 lg:px-8 lg:py-32"
        >

          <div className="mx-auto max-w-3xl">

            <div className="mb-12 text-center">

              <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#0c7771]">
                Good to know
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
                Questions, answered.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-[#65777a]">
                Kuch common questions jo patients appointment se pehle ask
                karte hain.
              </p>

            </div>


            <div>

              {faqs.map((faq, index) => {

                const open = activeFaq === index;

                return (

                  <div
                    key={faq.question}
                    className="border-b border-[#dce9e5]"
                  >

                    <button
                      onClick={() =>
                        setActiveFaq(open ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-sm font-bold sm:text-base"
                    >

                      {faq.question}

                      <ChevronDown
                        size={21}
                        className={`shrink-0 text-[#0c7771] transition ${
                          open ? "rotate-180" : ""
                        }`}
                      />

                    </button>


                    <div
                      className={`grid transition-all duration-300 ${
                        open
                          ? "grid-rows-[1fr] pb-6"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden text-sm leading-7 text-[#65777a]">
                        {faq.answer}
                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="px-5 pb-24 lg:px-8 lg:pb-32">

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-[#0c7771] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold">
                  <Sparkles size={14} />
                  Your smile journey starts here
                </div>

                <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
                  Ready for your best smile?
                </h2>

                <p className="mt-3 text-[#c4e7e1]">
                  Ek simple appointment se start karte hain.
                </p>

              </div>


              <a
                href="#booking"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#0c7771] transition hover:-translate-y-1 hover:shadow-xl"
              >
                Book Appointment
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#dce9e5] bg-white px-5 py-12 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}

            <div>

              <a
                href="#home"
                className="flex items-center gap-3"
              >

                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0c7771] text-xl text-white">
                  ✦
                </span>

                <span className="font-display text-xl font-extrabold">
                  Smile<span className="text-[#0c7771]">Craft</span>
                </span>

              </a>


              <p className="mt-4 max-w-xs text-sm leading-6 text-[#718184]">
                Premium dental care with a human touch. Healthy smiles,
                confident people.
              </p>

            </div>


            {/* Navigation */}

            <div>

              <h4 className="text-sm font-bold">
                Explore
              </h4>

              <div className="mt-4 space-y-3 text-sm text-[#718184]">

                <a
                  href="#services"
                  className="block hover:text-[#0c7771]"
                >
                  Services
                </a>

                <a
                  href="#about"
                  className="block hover:text-[#0c7771]"
                >
                  About
                </a>

                <a
                  href="#results"
                  className="block hover:text-[#0c7771]"
                >
                  Results
                </a>

                <a
                  href="#reviews"
                  className="block hover:text-[#0c7771]"
                >
                  Reviews
                </a>

              </div>

            </div>


            {/* Services */}

            <div>

              <h4 className="text-sm font-bold">
                Treatments
              </h4>

              <div className="mt-4 space-y-3 text-sm text-[#718184]">

                <p>Teeth Cleaning</p>
                <p>Dental Implants</p>
                <p>Teeth Whitening</p>
                <p>Clear Aligners</p>

              </div>

            </div>


            {/* Contact */}

            <div>

              <h4 className="text-sm font-bold">
                Visit us
              </h4>

              <div className="mt-4 space-y-3 text-sm text-[#718184]">

                <p>
                  Gomti Nagar,
                  <br />
                  Lucknow, India
                </p>

                <p>
                  +91 98765 43210
                </p>

                <p>
                  Mon–Sat · 9 AM–7 PM
                </p>

              </div>

            </div>

          </div>


          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#dce9e5] pt-6 text-xs text-[#879496] sm:flex-row">

            <span>
              © 2026 SmileCraft Dental Studio
            </span>

            <span>
              Made for healthier, happier smiles.
            </span>

          </div>

        </div>

      </footer>


      {/* =====================================================
          APPOINTMENT MODAL
      ===================================================== */}

      {showModal && (

        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#092323]/65 p-5 backdrop-blur-md"
          onClick={() => setShowModal(false)}
        >

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md rounded-[30px] bg-white p-8 text-center shadow-2xl sm:p-10"
          >

            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-[#f3f8f6] text-[#607477]"
            >
              <X size={17} />
            </button>


            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#e9f8f4] text-[#0c7771]">
              <Check size={30} />
            </div>


            <h2 className="mt-6 font-display text-3xl font-extrabold">
              Request received!
            </h2>


            <p className="mt-3 text-sm leading-7 text-[#65777a]">

              Thanks,{" "}

              <strong className="text-[#102a2e]">
                {patientName || "there"}
              </strong>

              . Demo mein appointment request successfully submit ho gayi.
              Our team will confirm your preferred slot.

            </p>


            <div className="mt-6 rounded-2xl bg-[#e9f8f4] p-4 text-left">

              <div className="flex gap-3">

                <CalendarDays
                  size={19}
                  className="shrink-0 text-[#0c7771]"
                />

                <div>

                  <p className="text-sm font-bold">
                    Appointment request
                  </p>

                  <p className="mt-1 text-xs text-[#52706e]">
                    Our team will contact you shortly.
                  </p>

                </div>

              </div>

            </div>


            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full rounded-full bg-[#0c7771] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#096762]"
            >
              Perfect, thanks!
            </button>

          </div>

        </div>

      )}

    </div>
  );
}


/* ===========================================================
   FORM FIELD
=========================================================== */

function FormField({
  label,
  children,
  full = false,
}) {
  return (
    <label
      className={full ? "sm:col-span-2" : ""}
    >

      <span className="mb-2 block text-xs font-bold text-[#456062]">
        {label}
      </span>

      {children}

    </label>
  );
}


/* ===========================================================
   CONTACT INFO
=========================================================== */

function ContactInfo({
  icon,
  title,
  text,
}) {
  return (
    <div className="flex items-center gap-3">

      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0c7771]">
        {icon}
      </span>

      <div>

        <p className="text-xs font-bold text-[#52706e]">
          {title}
        </p>

        <p className="mt-0.5 text-sm text-[#40585b]">
          {text}
        </p>

      </div>

    </div>
  );
}