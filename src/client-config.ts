
// <------ CLIENT VALUES ------->

export const clientConfig = {

  // Themes / Colors
  daisy_theme: "corporate",
  logo_color: "#196C50",
  // Set primary / secondary colors in index.css

  // Other styling
  borders: "rounded-none",


  // General
  short_name: "Chuck's Service Center",
  long_name: "Chuck's Service Center LLC",
  phone: "(801) 467-4922",
  phoneLink: "8014674922",
  email: "Chucks_Service@gmail.com",
  address: "1955 E 2700 S,",
  addressSecondary: "Salt Lake City, UT 84106",
  addressFull: "1955 E 2700 S, Salt Lake City, UT 84106",

  // Header
  logo: "/brand_imgs/logo.png",
  browser_logo: "/brand_imgs/browser_logo.png"

};

// <------ COMPONENT SELECTION ------->

export const componentSelection = {
  // default, contact
  header: "contact",
  
  // centeredPhoto,
  // leftPhoto
  landing: "centeredPhoto",

  // default, 
  // primary
  services: "default",

  // singleImage,
  // ownerTeam,
  // ownerTeamFlex,
  // ownerTeamFlexAngle
  about: "ownerTeamFlexAngle",

  // default
  reviews: "default",

  // default
  contact: "default"
}

// <------ LANDING VALUES ------->

export const landingConfig = {
  landing_img: "/brand_imgs/hero.png",
  landing_title: "Quality Service For 40 Years",
  landing_subtext: "Honest, skilled mechanics serving Salt Lake City and beyond. We keep you running smoothly.",
  landing_cta: "GIVE US A CALL",
  landing_type: 0,
}


// <------- SERVICE VALUES ------->

export const serviceConfig = {
  // bg-base-300 for solid, url for photo
  bg: "url(/services_imgs/tire_background.jpg)"
}

export const serviceCardConfig = [
  {
    title: "Tire Services",
    description: "We handle all your tire needs with expert care.",
    image: "/services_imgs/tireBalance.jpg",
    items: [
      "Tire repair",
      "Tire balancing",
      "Tire swapping"
    ]
  },
  {
    title: "Engine Repair",
    description: "Keep your engine running like new.",
    image: "/services_imgs/engineRepair.jpg",
    items: [
      "Diagnostics",
      "Timing belt replacement",
      "Engine rebuild"
    ]
  },
  {
    title: "Scheduled Maintenance",
    description: "Regular service to keep your vehicle in top shape.",
    image: "/services_imgs/oilChange.jpeg",
    items: [
      "Oil change",
      "Battery testing",
      "Fluid change"
    ]
  },
  {
    title: "Brakes",
    description: "Stay safe with professional brake service.",
    image: "/services_imgs/brakeJob.jpg",
    items: [
      "Brake pad replacement",
      "Rotor resurfacing",
      "Fluid bleed"
    ]
  }
];

// <--------- ABOUT US -------->

export const aboutUsConfig = {
  description: "Founded with a mission to redefine trust in auto repair, we’ve built our reputation on honesty, hard work, and community values. Whether it’s a quick tune-up or a major rebuild, you can count on us to get the job done right.",
  team_image: "/about_imgs/team.jpg",
  team_description: "Exceptional team members ready to get you back on the road with precision and care. Each technician brings years of experience, honesty, and a commitment to getting the job done right the first time.",
  owner_image: "/about_imgs/owner.png",
  owner_name: "Chuck",
  owner_description: "Founded with a mission to redefine trust in auto repair, we’ve built our reputation on honesty, hard work, and community values. Whether it’s a quick tune-up or a major rebuild, you can count on us to get the job done right."
}

export const aboutUsCardConfig = [
  {
    fullName: "John Martinez",
    yearsOfExperience: 18,
    image: "/about_imgs/owner.png",
    description: "ASE-certified master technician with nearly two decades of experience in engine diagnostics and repair."
  },
  {
    fullName: "Alex Brooks",
    yearsOfExperience: 12,
    image: "/about_imgs/owner.png",
    description: "Brake system specialist with a strong focus on clear communication. "
  },
  {
    fullName: "Leo Nguyen",
    yearsOfExperience: 9,
    image: "/about_imgs/owner.png",
    description: "Expert in electrical diagnostics and hybrid systems. "
  },
  {
    fullName: "Emily Chavez",
    yearsOfExperience: 6,
    image: "/about_imgs/owner.png",
    description: "Skilled in oil systems, tire work, and general maintenance."
  }
];


// <------- REVIEWS ------->

export const reviewsConfig = [
  {
    fullName: "Jessica Taylor",
    reviewValue: 5,
    timePosted: "06/01/2025",
    reviewText:
      "Absolutely incredible service. They diagnosed and fixed my car faster than I expected, and the staff was super friendly and professional. Highly recommended!",
  },
  {
    fullName: "Marcus Bennett",
    reviewValue: 4,
    timePosted: "05/28/2025",
    reviewText:
      "Great work on my brakes. Fair pricing and clear communication. The only reason I'm not giving 5 stars is the slightly long wait time, but the quality was excellent.",
  },
  {
    fullName: "Elena Rodriguez",
    reviewValue: 5,
    timePosted: "05/20/2025",
    reviewText:
      "This shop has exceeded my expectations every single time. Friendly staff, clean facility, and flawless service. I won’t take my car anywhere else.",
  },
  {
    fullName: "David Chen",
    reviewValue: 5,
    timePosted: "05/15/2025",
    reviewText:
      "Everything from the check-in process to the final result was smooth and professional. My car runs perfectly now. Definitely a 5-star experience.",
  },
  {
    fullName: "Amanda Greene",
    reviewValue: 5,
    timePosted: "05/10/2025",
    reviewText:
      "They went above and beyond. Explained every step, finished ahead of schedule, and even offered a courtesy ride. Easily one of the best shops I’ve worked with.",
  },
];



// <------- CONTACT INFO -------->

export const contactConfig = {
  phone: "(801) 467-4922",
  phoneLink: "8014674922",
  email: "Chucks_Service@gmail.com",
  location: {
    address: "1955 E 2700 S,",
    addressSecondary: "Salt Lake City, UT 84106",
    googleMapEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2138.456175618875!2d-111.83592518672454!3d40.712870998143586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752603651ddb353%3A0x6cd99915d6b36f12!2sChuck&#39;s%20Service%20Center!5e0!3m2!1sen!2sus!4v1749596291135!5m2!1sen!2sus",
    googleMapLink: "https://www.google.com/maps/place/Chuck's+Service+Center/@40.7129319,-111.8362067,18z/data=!4m14!1m7!3m6!1s0x8752603651ddb353:0x6cd99915d6b36f12!2sChuck's+Service+Center!8m2!3d40.7129655!4d-111.8352689!16s%2Fg%2F11b7khhqq2!3m5!1s0x8752603651ddb353:0x6cd99915d6b36f12!8m2!3d40.7129655!4d-111.8352689!16s%2Fg%2F11b7khhqq2?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
    appleMapLink: "https://maps.apple.com/?ll=40.7129655,-111.8352689&q=Chuck%27s%20Service%20Center"
  },
  hours: [
    { day: "Monday", time: "8 AM - 5 PM" },
    { day: "Tuesday", time: "8 AM - 5 PM" },
    { day: "Wednesday", time: "8 AM - 5 PM" },
    { day: "Thursday", time: "8 AM - 5 PM" },
    { day: "Friday", time: "8 AM - 5 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ]
}