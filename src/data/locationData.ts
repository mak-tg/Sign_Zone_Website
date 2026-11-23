export interface CityProject {
  img: string
  alt: string
  eyebrow: string
  title: string
  desc: string
  link: string
}

export interface CityPageData {
  title: string
  metaDesc: string
  h1City: string
  intro: string
  heroImg: string | null
  heroAlt: string | null
  sec2Eye: string
  sec2H2: string
  sec2P: string
  projects: CityProject[]
  ctaEye: string
  ctaH2: string
  ctaP: string
}

export const CITY_PAGES_DATA: Record<string, CityPageData> = {
  "allen": {
    "title": "Allen Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Allen, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Allen.",
    "intro": "From storefront letters and building signs to monuments and dining destinations, we help Allen businesses create signs that capture attention and drive discovery.",
    "heroImg": "/images/project-omiya.webp",
    "heroAlt": "Omiya Sushi Ramen Hibachi signage in Allen",
    "sec2Eye": "Allen · Local work",
    "sec2H2": "Work in Allen.",
    "sec2P": "Explore signage suited to local storefronts, dining destinations and commercial properties.",
    "projects": [
      {
        "img": "/images/project-omiya.webp",
        "alt": "Omiya Sushi Ramen Hibachi signage in Allen",
        "eyebrow": "Allen · Front-lit channel letters + Japanese crest cabinet",
        "title": "Omiya Sushi Ramen Hibachi",
        "desc": "High-visibility front-lit LED channel letters paired with an illuminated red Japanese crest cabinet mounted above a stone-accented facade.",
        "link": "/projects#omiya"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Allen?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "arlington": {
    "title": "Arlington Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Arlington, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Arlington.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Arlington businesses create signs that work for their space.",
    "heroImg": "/images/project-arwa.webp",
    "heroAlt": "Arwa Coffee signage in Arlington",
    "sec2Eye": "Arlington · Local work",
    "sec2H2": "Work in Arlington.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/project-arwa.webp",
        "alt": "Arwa Coffee signage in Arlington",
        "eyebrow": "Arlington · Gold dimensional storefront letters and logo",
        "title": "Arwa Coffee",
        "desc": "Gold dimensional storefront letters and logo mark for a destination coffee house in Arlington.",
        "link": "/projects#arwa-coffee"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Arlington?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "carrollton": {
    "title": "Carrollton Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Carrollton, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Carrollton.",
    "intro": "From storefront letters and building signs to monuments and custom interiors, we help Carrollton businesses build signs that stand out.",
    "heroImg": "/images/project-graciebarra.webp",
    "heroAlt": "Gracie Barra Jiu-Jitsu signage in Carrollton",
    "sec2Eye": "Carrollton · Local work",
    "sec2H2": "Work in Carrollton.",
    "sec2P": "Explore signage suited to local storefronts, sports academies and commercial properties.",
    "projects": [
      {
        "img": "/images/project-graciebarra.webp",
        "alt": "Gracie Barra Jiu-Jitsu signage in Carrollton",
        "eyebrow": "Carrollton · Logo cabinet + channel letters + subtext backer",
        "title": "Gracie Barra Jiu-Jitsu",
        "desc": "High-output LED circular crest logo cabinet flanked by bold dual-tone channel letters and an integrated subtitle backer bar.",
        "link": "/projects#gracie-barra"
      },
      {
        "img": "/images/project-busybee.webp",
        "alt": "The Busy Bee Coffee House signage in Carrollton",
        "eyebrow": "Carrollton · Interior brushed metal dimensional sign",
        "title": "The Busy Bee Coffee House",
        "desc": "Custom waterjet-cut brushed aluminum dimensional bee logo and typography set on a honeycomb geometric backplate.",
        "link": "/projects#busy-bee"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Carrollton?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "dallas": {
    "title": "Dallas Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Dallas, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Dallas.",
    "intro": "From storefront letters and building signs to monuments and illuminated interiors, we help Dallas businesses create signs that work for their space.",
    "heroImg": "/images/project-sanjiva.webp",
    "heroAlt": "Sanjiva Medical Spa signage in Dallas",
    "sec2Eye": "Dallas · Local work",
    "sec2H2": "Work in Dallas.",
    "sec2P": "Explore signage suited to local storefronts, wellness centers, entertainment venues and retail centers.",
    "projects": [
      {
        "img": "/images/project-amart.webp",
        "alt": "A Mart Food Market signage in Dallas",
        "eyebrow": "Dallas · Channel letters and logo cabinet",
        "title": "A Mart Food Market",
        "desc": "Channel letters and logo cabinet for a bustling commercial grocery market in Dallas.",
        "link": "/projects#a-mart"
      },
      {
        "img": "/images/project-sanjiva.webp",
        "alt": "Sanjiva Medical Spa signage in Dallas",
        "eyebrow": "Dallas · Halo-lit dimensional letters and logo",
        "title": "Sanjiva Medical Spa",
        "desc": "Halo-lit dimensional letters and looping crest stand off a marble-look facade with evening backlighting.",
        "link": "/projects#sanjiva-spa"
      },
      {
        "img": "/images/project-theden.webp",
        "alt": "The Den Poker Lounge signage in Dallas",
        "eyebrow": "Dallas · Front-lit channel letters + crowned logo cabinet",
        "title": "The Den Poker Lounge",
        "desc": "Warm illuminated front-lit channel letters paired with a crowned poker club logo cabinet on a dark exterior facade.",
        "link": "/projects#the-den"
      },
      {
        "img": "/images/project-ouimassage.webp",
        "alt": "Oui Massage signage in Dallas",
        "eyebrow": "Dallas · Front-lit channel letters + cloud logo cabinet",
        "title": "Oui Massage",
        "desc": "Vibrant sky-blue acrylic cloud logo cabinet and bold storefront channel letters on an exterior red-brick entrance.",
        "link": "/projects#oui-massage"
      },
      {
        "img": "/images/project-lacuentista.webp",
        "alt": "La Cuentista Books & Coffee signage in Dallas",
        "eyebrow": "Dallas · Front-lit channel letters + bookstore identity",
        "title": "La Cuentista Books & Coffee",
        "desc": "Clean architectural channel letters with warm illumination mounted high above a commercial shopping center entry.",
        "link": "/projects#la-cuentista"
      },
      {
        "img": "/images/project-malani.webp",
        "alt": "Malani Jewelers Monument Sign in Dallas",
        "eyebrow": "Dallas · Multi-tenant pylon & monument sign retrofits",
        "title": "Malani Jewelers Monument Sign",
        "desc": "High-impact roadside illuminated acrylic panels and dimensional channel letters for heavy-traffic visibility.",
        "link": "/projects#malani-jewelers"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Dallas?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "fort-worth": {
    "title": "Fort Worth Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Fort Worth, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Fort Worth.",
    "intro": "From storefront letters and building signs to monuments and dining landmarks, we help Fort Worth businesses command attention.",
    "heroImg": "/images/project-rock.webp",
    "heroAlt": "Rock N Roll Sushi signage in Fort Worth",
    "sec2Eye": "Fort Worth · Local work",
    "sec2H2": "Work in Fort Worth.",
    "sec2P": "Explore signage suited to local storefronts, restaurants and commercial properties.",
    "projects": [
      {
        "img": "/images/project-rock.webp",
        "alt": "Rock N Roll Sushi signage in Fort Worth",
        "eyebrow": "Fort Worth · Custom channel letters + red acrylic logo box",
        "title": "Rock N Roll Sushi",
        "desc": "Custom lightning-bolt channel letters paired with an illuminated red contour cabinet mounted on a natural split-face limestone tower.",
        "link": "/projects#rock-n-roll-sushi"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Fort Worth?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "frisco": {
    "title": "Frisco Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Frisco, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Frisco.",
    "intro": "From storefront letters and building signs to monuments and premium salon spaces, we help Frisco businesses create signs that match their standards.",
    "heroImg": "/images/project-inso.webp",
    "heroAlt": "InSo Live Fire Kitchen signage in Frisco",
    "sec2Eye": "Frisco · Local work",
    "sec2H2": "Work in Frisco.",
    "sec2P": "Explore signage suited to local storefronts, dining venues, salons and commercial centers.",
    "projects": [
      {
        "img": "/images/project-coldstone.webp",
        "alt": "Blimpie & Cold Stone Creamery signage in Frisco",
        "eyebrow": "Frisco · Dual-brand illuminated channel letters",
        "title": "Blimpie & Cold Stone Creamery",
        "desc": "Stacked dual-tenant channel letters mounted on a central raceway, combining signature brand colors and logos.",
        "link": "/projects#blimpie-coldstone"
      },
      {
        "img": "/images/project-amazingnails.webp",
        "alt": "Amazing Nails Salon signage in Frisco",
        "eyebrow": "Frisco · Dimensional storefront channel letters",
        "title": "Amazing Nails Salon",
        "desc": "Sleek high-contrast dimensional channel letters installed along an architectural parapet with matching awnings.",
        "link": "/projects#amazing-nails"
      },
      {
        "img": "/images/project-inso.webp",
        "alt": "InSo Live Fire Kitchen signage in Frisco",
        "eyebrow": "Frisco · Front-lit channel letters + dual heraldic crests",
        "title": "InSo Live Fire Kitchen",
        "desc": "Bold white illuminated channel letters flanked by dual heraldic crowned lion crest cabinets on a modern stone facade.",
        "link": "/projects#inso-kitchen"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Frisco?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "mckinney": {
    "title": "McKinney Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in McKinney, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "McKinney.",
    "intro": "From storefront letters and building signs to monuments and office facades, we help McKinney businesses create signs that work for their space.",
    "heroImg": "/images/project-allintegrity.webp",
    "heroAlt": "All-Integrity Insurance signage in McKinney",
    "sec2Eye": "McKinney · Local work",
    "sec2H2": "Work in McKinney.",
    "sec2P": "Explore signage suited to local storefronts, professional offices and commercial properties.",
    "projects": [
      {
        "img": "/images/project-allintegrity.webp",
        "alt": "All-Integrity Insurance signage in McKinney",
        "eyebrow": "McKinney · Parapet channel letters + matching panel",
        "title": "All-Integrity Insurance",
        "desc": "High-contrast magenta and white channel letters mounted along the upper roofline parapet, with matching storefront entry signage.",
        "link": "/projects#all-integrity"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in McKinney?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "plano": {
    "title": "Plano Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Plano, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Plano.",
    "intro": "From storefront letters and building signs to monuments and halo-lit interiors, we help Plano businesses build signs that communicate quality.",
    "heroImg": "/images/project-apex.webp",
    "heroAlt": "Apex Specialty Care signage in Plano",
    "sec2Eye": "Plano · Local work",
    "sec2H2": "Work in Plano.",
    "sec2P": "Explore signage suited to local medical facilities, martial arts gyms, studios and specialty coffee houses.",
    "projects": [
      {
        "img": "/images/project-apex.webp",
        "alt": "Apex Specialty Care signage in Plano",
        "eyebrow": "Plano · Illuminated building letters and logo",
        "title": "Apex Specialty Care",
        "desc": "White illuminated letters and a peak-shaped mark span the hospital facade, with the sign mounted high above the windows.",
        "link": "/projects#apex-specialty-care"
      },
      {
        "img": "/images/project-kingsgambit.webp",
        "alt": "King's Gambit Jiu Jitsu signage in Plano",
        "eyebrow": "Plano · Contour logo cabinet + channel letters",
        "title": "King's Gambit Jiu Jitsu",
        "desc": "Circular chess-rook emblem logo cabinet paired with high-impact bold white channel letters across a retail center parapet.",
        "link": "/projects#kings-gambit"
      },
      {
        "img": "/images/project-modastudio.webp",
        "alt": "Moda Studio signage in Plano",
        "eyebrow": "Plano · Halo-lit channel letters",
        "title": "Moda Studio",
        "desc": "Sophisticated reverse halo-lit channel letters casting a warm glow against dark architectural wall panels.",
        "link": "/projects#moda-studio"
      },
      {
        "img": "/images/project-mokaco.webp",
        "alt": "Moka & Co Specialty Coffee signage in Plano",
        "eyebrow": "Plano · Halo-lit channel letters + custom typography",
        "title": "Moka & Co Specialty Coffee",
        "desc": "Warm halo-illuminated dimensional storefront letters with gold coffee cup monogram on a boutique storefront facade.",
        "link": "/projects#moka-co"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Plano?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "richardson": {
    "title": "Richardson Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Richardson, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Richardson.",
    "intro": "From storefront letters and building signs to monuments and medical reception lobbies, we help Richardson businesses make their mark.",
    "heroImg": "/images/project-fixdental.webp",
    "heroAlt": "Fix Dental and Implant Center signage in Richardson",
    "sec2Eye": "Richardson · Local work",
    "sec2H2": "Work in Richardson.",
    "sec2P": "Explore signage suited to local dental practices, dining destinations and commercial properties.",
    "projects": [
      {
        "img": "/images/project-fixdental.webp",
        "alt": "Fix Dental and Implant Center signage in Richardson",
        "eyebrow": "Richardson · Back-lit LED lobby sign + 3D contour logo",
        "title": "Fix Dental and Implant Center",
        "desc": "High-end backlit reception sign featuring a dimensional tooth and dental implant icon with perimeter LED halo lighting.",
        "link": "/projects#fix-dental"
      },
      {
        "img": "/images/project-milkcake.webp",
        "alt": "Milk Cake Bakery signage in Richardson",
        "eyebrow": "Richardson · Dual-tenant front-lit channel letters",
        "title": "Milk Cake Bakery",
        "desc": "Stacked dual-tenant illuminated channel letter package mounted on a central raceway for a destination restaurant and bakery.",
        "link": "/projects#milk-cake-karwan"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Richardson?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you find the right approach."
  },
  "southlake": {
    "title": "Southlake Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Southlake, Texas. Channel letters, monument, storefront and interior signs.",
    "h1City": "Southlake.",
    "intro": "From upscale retail letters and corporate building signs to monuments and wellness interiors, we help Southlake businesses make an impression.",
    "heroImg": "/images/project-handandstone.webp",
    "heroAlt": "Hand & Stone Massage and Facial Spa signage in Southlake",
    "sec2Eye": "Southlake · Local work",
    "sec2H2": "Work in Southlake.",
    "sec2P": "Explore signage suited to upscale retail centers, medical spas and dining destinations.",
    "projects": [
      {
        "img": "/images/project-handandstone.webp",
        "alt": "Hand & Stone Spa signage in Southlake",
        "eyebrow": "Southlake · Dimensional channel letters + subtext cabinet",
        "title": "Hand & Stone Spa",
        "desc": "Clean white architectural channel letters mounted on a multi-tone brick entrance with secondary service line typography.",
        "link": "/projects#hand-and-stone"
      },
      {
        "img": "/images/project-puregreen.webp",
        "alt": "Pure Green signage in Southlake",
        "eyebrow": "Southlake · Illuminated channel letters + branded icon",
        "title": "Pure Green",
        "desc": "Clean green-and-white illuminated storefront letters with an organic leaf logo accent on an upscale shopping center facade.",
        "link": "/projects#pure-green"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Southlake?",
    "ctaP": "Share a photo of your property and tell us what you need. We’ll help you navigate Southlake’s architectural guidelines and city sign codes."
  },
  "irving": {
    "title": "Irving Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Irving, Texas. Industrial, pylon, channel letters and office signage.",
    "h1City": "Irving.",
    "intro": "From corporate headquarters and distribution hubs to dining and retail centers, we build durable commercial signs across Irving and Las Colinas.",
    "heroImg": "/images/project-bclm.webp",
    "heroAlt": "bclm Industrial Facility signage in Irving",
    "sec2Eye": "Irving · Local work",
    "sec2H2": "Work in Irving.",
    "sec2P": "Explore signage suited to commercial centers, corporate parks, dining destinations and industrial facilities.",
    "projects": [
      {
        "img": "/images/project-gufospizza.webp",
        "alt": "Gufo's Pizza signage in Irving",
        "eyebrow": "Irving · Channel letters + illuminated owl mascot",
        "title": "Gufo's Pizza",
        "desc": "Custom crimson-red and white channel letters paired with an illuminated cartoon owl mascot cabinet over a stone storefront.",
        "link": "/projects#gufos-pizza"
      },
      {
        "img": "/images/project-bclm.webp",
        "alt": "bclm Industrial Facility signage in Irving",
        "eyebrow": "Irving · Industrial warehouse dimensional letters + building plaque",
        "title": "bclm Industrial Facility",
        "desc": "Bold black dimensional building letters and address marker mounted high on an industrial warehouse facility.",
        "link": "/projects#bclm"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Irving?",
    "ctaP": "From Las Colinas office parks to high-traffic retail strips, we handle local permits, fabrication and installation."
  },
  "grand-prairie": {
    "title": "Grand Prairie Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Grand Prairie, Texas. Channel letters, storefront, pylon and restaurant signs.",
    "h1City": "Grand Prairie.",
    "intro": "From busy retail thoroughfares to industrial corridors, we craft high-impact storefront letters, cabinets, and monument signs for Grand Prairie businesses.",
    "heroImg": "/images/project-scratch.webp",
    "heroAlt": "Scratch Wings signage in Grand Prairie",
    "sec2Eye": "Grand Prairie · Local work",
    "sec2H2": "Work in Grand Prairie.",
    "sec2P": "Explore signage designed for local dining, retail and commercial properties.",
    "projects": [
      {
        "img": "/images/project-scratch.webp",
        "alt": "Scratch Wings signage in Grand Prairie",
        "eyebrow": "Grand Prairie · Channel letters + logo + tagline cabinet",
        "title": "Scratch Wings",
        "desc": "Red dimensional lettering, a rooster logo and a tagline cabinet bring the restaurant identity together above the storefront.",
        "link": "/projects#scratch-wings"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Grand Prairie?",
    "ctaP": "Tell us about your property and sign requirements. We’ll provide a full site review, design mockups, and local permitting support."
  },
  "mansfield": {
    "title": "Mansfield Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Mansfield, Texas. Channel letters, fitness centers, storefronts and monument signs.",
    "h1City": "Mansfield.",
    "intro": "Helping businesses throughout Mansfield stand out with bold illuminated storefront letters, architectural monuments, and custom commercial signs.",
    "heroImg": "/images/project-burnbootcamp.webp",
    "heroAlt": "Burn Boot Camp signage in Mansfield",
    "sec2Eye": "Mansfield · Local work",
    "sec2H2": "Work in Mansfield.",
    "sec2P": "Explore signage suited to fitness facilities, medical offices and retail centers.",
    "projects": [
      {
        "img": "/images/project-burnbootcamp.webp",
        "alt": "Burn Boot Camp signage in Mansfield",
        "eyebrow": "Mansfield · Front-lit channel letters",
        "title": "Burn Boot Camp",
        "desc": "Vibrant electric-blue channel letters mounted high on a charcoal masonry facade, ensuring clear visibility across the commercial center.",
        "link": "/projects#burn-boot-camp"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Mansfield?",
    "ctaP": "Connect with our team to discuss your site, local Mansfield sign ordinances, and fabrication schedule."
  },
  "addison": {
    "title": "Addison Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Addison, Texas. Healthcare, retail, channel letters and corporate signs.",
    "h1City": "Addison.",
    "intro": "From Addison Circle dining spots to healthcare clinics along Belt Line Road, we engineer signs that capture high foot-traffic and drive customer discovery.",
    "heroImg": "/images/project-addisonpark.webp",
    "heroAlt": "Addison Park Smiles signage in Addison",
    "sec2Eye": "Addison · Local work",
    "sec2H2": "Work in Addison.",
    "sec2P": "Explore signage engineered for healthcare practices, retail corridors and dining venues.",
    "projects": [
      {
        "img": "/images/project-addisonpark.webp",
        "alt": "Addison Park Smiles signage in Addison",
        "eyebrow": "Addison · Front-lit channel letters + leaf dental mark",
        "title": "Addison Park Smiles",
        "desc": "Crisp dental clinic channel letter signage with an illuminated green organic leaf crest mounted on a natural stone parapet.",
        "link": "/projects#addison-park"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Addison?",
    "ctaP": "Get in touch for professional site surveying, landlord approval assistance, and turnkey installation in Addison."
  },
  "coppell": {
    "title": "Coppell Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Coppell, Texas. Studios, storefronts, channel letters and business signs.",
    "h1City": "Coppell.",
    "intro": "Custom storefront letters, creative studio signs, and commercial identity packages designed for Coppell businesses.",
    "heroImg": "/images/project-kathakrhythms.webp",
    "heroAlt": "Kathak Rhythms signage in Coppell",
    "sec2Eye": "Coppell · Local work",
    "sec2H2": "Work in Coppell.",
    "sec2P": "Explore signage crafted for creative academies, professional offices and storefronts.",
    "projects": [
      {
        "img": "/images/project-kathakrhythms.webp",
        "alt": "Kathak Rhythms signage in Coppell",
        "eyebrow": "Coppell · Illuminated logo cabinet + gold channel letters",
        "title": "Kathak Rhythms",
        "desc": "Ornate classical dancer silhouette contour cabinet paired with rich gold channel lettering above a retail center entrance.",
        "link": "/projects#kathak-rhythms"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Coppell?",
    "ctaP": "Talk with our design and permitting experts about your commercial signage project in Coppell."
  },
  "ennis": {
    "title": "Ennis Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Ennis, Texas. Channel letters, restaurants, sports bars and roadside signs.",
    "h1City": "Ennis.",
    "intro": "High-visibility channel letters, restaurant identity cabinets, and outdoor signs built for Ennis commercial centers and highway corridors.",
    "heroImg": "/images/project-wingsoverusa.webp",
    "heroAlt": "Wings Over USA signage in Ennis",
    "sec2Eye": "Ennis · Local work",
    "sec2H2": "Work in Ennis.",
    "sec2P": "Explore high-visibility signage built for restaurants, hospitality and highway frontage.",
    "projects": [
      {
        "img": "/images/project-wingsoverusa.webp",
        "alt": "Wings Over USA signage in Ennis",
        "eyebrow": "Ennis · Front-lit channel letters + contour mascot box",
        "title": "Wings Over USA",
        "desc": "Bold patriotic red and blue illuminated channel letters mounted alongside a custom pilot-eagle mascot contour cabinet.",
        "link": "/projects#wings-over-usa"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Ennis?",
    "ctaP": "Connect with our sign specialists for full-service commercial fabrication and crane installation in Ennis."
  }
};
