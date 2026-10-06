/* =========================================================================
   WEDDING INVITATION - CONTENT CONFIG
   -------------------------------------------------------------------------
   Edit everything in this ONE file to change what the site shows.
   No HTML/CSS knowledge needed for basic edits - just replace the text
   between the quotes. Save the file and refresh the browser to see changes.

   NOTES:
   - This is placeholder/sample content (same style as the reference video)
     so you can see the whole site working first.
   - Dates use the format "YYYY-MM-DDTHH:MM:SS" (24-hour clock) for
     `weddingDate` because the countdown timer needs to parse it. Everything
     else is just plain display text and can be written however you like.
   - Set an image path (e.g. "assets/images/venue.jpg") on any `img` field
     once you have a real photo. Leave it as null to keep the elegant
     decorative placeholder.
   ========================================================================= */

window.WEDDING_CONFIG = {

  // ---- Couple -------------------------------------------------------
  couple: {
    groom: "Shyam",
    bride: "Saloni",
    groomFull: "Er. Shyam",
    brideFull: "Ms. Saloni",
    monogram: "S & S"
  },

  // ---- Families -------------------------------------------------------
  families: {
    groomFamilyName: "Varshney",
    brideFamilyName: "Varshney",
    groomParents: "Mrs. Rekha Rani & Er. Sanjeev Kumar Varshney",
    groomGrandparents: "Late Smt. Laxmi Devi & Late Shri Ram Krishna Varshney (BDO)",
    brideParents: "Mrs. Ritu Gupta & Mr. Shri Mohan Varshney",
    brideGrandparents: "Late Smt. Anara Devi & Late Shri Jagdish Prasad Gupta"
  },

  // ---- Cover / intro text --------------------------------------------
  coverInviteLine: "The Varshney family invite you to celebrate the auspicious wedding of Saloni and Shyam.",
  coverHashtag: "#ShyamKiSaloni",

  // ---- Logo used on the cover seal (transparent PNG) --------------------
  logo: {
    src: "assets/images/logo.png"
  },

  // ---- Dates ------------------------------------------------------------
  // weddingDate MUST stay in this exact format - it drives the countdown.
  weddingDate: "2026-11-26T19:00:00",
  weddingDateDisplay: "Thursday · 26th November 2026",
  weddingDateShort: "26th November, 2026",
  tagline: "The start of a beautiful journey, shared with the ones we love most.",

  // ---- Film reel ("Our Beautiful Moments") --------------------------------
  // The photos scroll past on a film strip, in this order. galleryCaption is
  // the one line shown under the strip. portrait:true shows the whole upright
  // photo (face and body) instead of cropping it into the landscape frame.
  galleryCaption: "Forever Begins Here",
  gallery: [
    { img: "assets/images/reel/reel-1.jpg" },
    { img: "assets/images/reel/reel-2.jpg" },
    { img: "assets/images/reel/reel-3.jpg", portrait: true },
    { img: "assets/images/reel/reel-4.jpg" },
    { img: "assets/images/reel/reel-5.jpg" },
    { img: "assets/images/reel/reel-6.jpg" },
    { img: "assets/images/reel/reel-7.jpg" },
    { img: "assets/images/reel/reel-8.jpg", portrait: true }
  ],

  // ---- Venue -------------------------------------------------------------
  // mapQuery: precise "lat,lng" used to pin the embedded map (falls back to
  // `address` if left empty). directionsUrl: the exact Google Maps place
  // link, used by "Get Directions" (falls back to a search on `address`).
  venue: {
    name: "Madhogarh, Jaipur",
    address: "Grand Sikar Road, Before Rajawas Pulia, Jaipur, Rajasthan – 302048",
    mapQuery: "27.0540141,75.754726",
    directionsUrl: "https://www.google.com/maps/place/Madhogarh/@27.0540141,75.7521511,17z/data=!4m9!3m8!1s0x396dad4860958c3d:0xf1d95c6356ddb17d!5m2!4m1!1i2!8m2!3d27.0540141!4d75.754726!16s%2Fg%2F11rhsvg8yj!5m1!1e1",
    img: null
  },

  // ---- Ceremonies ("Sacred Ceremonies") ---------------------------------
  // icon must be one of: haldiCarnival, sangeetDark, pheras, baratReception
  // theme must be one of: lavender, dark, fire, royal, blush (only affects
  // the theme badge's color if you add a themeLabel; the photo IS the card)
  //
  // bgImage: the real photo used as this card's full background.
  // darkText: set true when the photo's open space is LIGHT (so the text
  //   needs dark ink) - leave it off for a dark/night photo like Sangeet's,
  //   which shows white text instead.
  // boldText: extra-bold schedule text (used for Musical Pheras & Barat on
  //   Wheels/Reception, whose photos need stronger contrast).
  // textTop: where the text block starts, as a % down the card - tune this
  //   per photo so the text lands in its open/empty space.
  // venue: a short venue label shown on the card (plain text, no map).
  // venueMap: instead of a plain venue label, show the venue name PLUS an
  //   embedded map + "Get Directions" button (like the main venue section)
  //   in a panel below the photo. { mapQuery: "lat,lng", directionsUrl }
  // schedule: optional list of {label, time} sub-events under a single
  //   date, shown instead of one time line (Musical Pheras, Barat/Reception).
  // scheduleGroups: optional list of {date, items: [{label,time}]} for a
  //   ceremony that spans several dates (Manglik Programme) - rendered in
  //   a panel below the photo, alongside the venue/map.
  ceremonies: [
    {
      icon: "manglik",
      theme: "blush",
      name: "Manglik Programme",
      bgImage: "assets/images/ceremonies/manglik-bg.jpg",
      darkText: true,
      textTop: "24%",
      venue: "Naya Mill Compound (Near Bank of Baroda), Mursan Gate, Hathras, U.P.- 204101",
      venueMap: {
        mapQuery: "27.5948633,78.0428031",
        directionsUrl: "https://www.google.com/maps?q=27.5948633,78.0428031&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821555,47071704,100809208,94218641,94282134,100835699,94286869,100820247,100822504&g_ep=CAISEjI2LjM4LjEuOTgwODE1NDQ1MBgAINeCAypxLDk0Mjk3Njk5LDk0MjMxMTg4LDk0MjgwNTY4LDEwMDgyMTU1NSw0NzA3MTcwNCwxMDA4MDkyMDgsOTQyMTg2NDEsOTQyODIxMzQsMTAwODM1Njk5LDk0Mjg2ODY5LDEwMDgyMDI0NywxMDA4MjI1MDRCAklO&skid=fcf9aff7-a5ca-4a68-a12b-47b7e1e8dc46&g_st=iw"
      },
      scheduleGroups: [
        {
          date: "22 November 2026",
          items: [
            { label: "Lagun", time: "2:00 PM" },
            { label: "Peedi Bandhna", time: "4:00 PM" },
            { label: "Ratjaga", time: "9:00 PM" }
          ]
        },
        {
          date: "23 November 2026",
          items: [
            { label: "Devi Poojan", time: "6:00 AM" },
            { label: "Ghar Ki Haldi", time: "11:00 AM" },
            { label: "Mehndi", time: "4:00 PM" }
          ]
        }
      ]
    },
    {
      icon: "haldiCarnival",
      theme: "lavender",
      name: "Haldi Carnival",
      subtitle: "Colorful Fiesta",
      date: "25th November 2026",
      time: "1:30 PM onwards",
      themeLabelHeading: "Dress Code",
      themeLabel: "Shades Of Lavender",
      venue: "Madhogarh",
      bgImage: "assets/images/ceremonies/haldi-carnival-bg.jpg",
      darkText: true,
      textTop: "8%"
    },
    {
      icon: "sangeetDark",
      theme: "dark",
      name: "Engagement & Sangeet with Celebration & Dinner",
      subtitle: "Sip, Sparkle & Say ‘Yes’",
      date: "25th November 2026",
      time: "5:30 PM onwards",
      themeLabelHeading: "Dress Code",
      themeLabel: "Glam and Glitter",
      venue: "Madhogarh",
      bgImage: "assets/images/ceremonies/sangeet-bg.jpg",
      textTop: "23%"
    },
    {
      icon: "pheras",
      theme: "fire",
      name: "Musical Pheras",
      subtitle: "Sacred Vows Of Forever",
      date: "26th November 2026",
      themeLabel: "",
      venue: "Madhogarh",
      bgImage: "assets/images/ceremonies/pheras-bg.jpg",
      darkText: true,
      boldText: true,
      textTop: "10%",
      schedule: [
        { label: "Bhaat", time: "10:00 AM" },
        { label: "Musical Pheras", time: "3:30 PM" }
      ]
    },
    {
      icon: "baratReception",
      theme: "royal",
      name: "Barat On Wheels<br>&<br>Reception",
      subtitle: "Happily Ever After Party",
      date: "26th November 2026",
      themeLabel: "",
      venue: "Madhogarh",
      bgImage: "assets/images/ceremonies/barat-reception-bg.jpg",
      darkText: true,
      boldText: true,
      textTop: "24%",
      schedule: [
        { label: "Barat", time: "7:30 PM" },
        { label: "Dinner", time: "8:00 PM onwards" },
        { label: "Varmala", time: "9:30 PM" }
      ]
    },
    {
      icon: "baratReception",
      theme: "blush",
      name: "Vidai",
      subtitle: "From celebration to farewell, wrapped in love and tears",
      subtitleMaxWidth: "72%",
      date: "November 27, 2026",
      time: "Early Morning",
      venue: "Madhogarh",
      bgImage: "assets/images/ceremonies/bheegi-palkein-bg.jpg",
      darkText: true,
      textTop: "28%"
    }
  ],

  // ---- Background music -----------------------------------------------
  // Drop a royalty-free mp3 at assets/audio/music.mp3 (see the README in
  // that folder for free/legal sources). The toggle button works fine even
  // before the file exists - it just won't produce sound yet.
  audio: {
    src: "assets/audio/music.mp3"
  },

  // ---- Footer ---------------------------------------------------------
  footer: {
    // shown as its own block at the very start of the footer, above R.S.V.P.
    childRequest: {
      title: "Child Request",
      message: "Bua ki shadi ka aaya hai tyohaar, Khushiyon se saj gaya hai poora parivaar. Dulhan bani Bua lagengi sabse pyaari, Aaiyega zarror, lekar Khushiyan saari! ❤️",
      names: "Kunj, Nikunj, Garvit, Pavitram, Gauransh & Vrinda"
    },
    rsvp: {
      title: "R.S.V.P.",
      names: [
        "Mr. Ram Kishan Varshney & Mrs. Amita Varshney",
        "Mr. Radhey Shyam Varshney & Mrs. Kusum Lata",
        "Mr. Sitaram Varshney & Mrs. Alka Varshney",
        "Mr. Harimohan Varshney & Mrs. Mamta Varshney",
        "Mr. Vishnu Mohan Varshney & Mrs. Deva Varshney"
      ],
      mobiles: ["9368911700", "9319711463"]
    },
    awaitingEyes: {
      title: "Awaiting Eyes",
      names: [
        "Mr. Gopal Varshney & Mrs. Shagun Varshney",
        "Er. Rahul Gupta & Mrs. Deepika Varshney",
        "Mr. Vishal Varshney & Mrs. Pallavi Varshney",
        "Mr. Anmol Varshney"
      ]
    },
    compliments: {
      title: "With Best Compliments From",
      lines: [
        "Mr. Dinesh Chandra Gupta & Mrs. Hemlata Gupta (Nana-Nani)",
        "Mr. Gaurav Gupta & Mrs. Ruchi Gupta (Mama-Mami)",
        "All Varshney Family"
      ]
    },
    invitation: {
      title: "A Cordial Invitation From",
      name: "Mr. Shri Mohan Varshney & Mrs. Ritu Gupta",
      address: [
        "Naya Mill Compound (Near Bank of Baroda), Mursan Gate,",
        "Hathras, U.P.- 204101"
      ],
      mobiles: ["9897801433", "9045767578"]
    }
  }
};
