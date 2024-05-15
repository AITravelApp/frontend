export interface Data {
  id: string;
  name: string;
  averageRating: number;
  userReviewCount: number;
  priceTag: string;
  image: string;
  banner: string
  location: string
  tags: string
  amount: string
  phone: string
  website: string
  maps: string
}

export const restaurantData: Data[][] = [
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Ca Pelletti Firenze",
      averageRating: 4,
      userReviewCount: 28,
      priceTag: "ЄЄ - ЄЄЄ",
      image: "/restaurant-1.jpg",
      banner: '/restaurant-banner-1.jpg',
      location: 'Via dei Benci, 41r, 50122 Firenze FI, Italië',
      maps: "https://www.google.nl/maps/place/Ca'+Pelletti+Firenze/@43.7684438,11.2591813,18.17z/data=!3m1!5s0x132a540712f4f6bb:0x8512d3bc4ba5386d!4m6!3m5!1s0x132a5518941fff71:0xcfcb0bc37ae34ec6!8m2!3d43.76854!4d11.260108!16s%2Fg%2F11tnypc5xz?hl=nl/Via%20dei%20Benci,%2041r,%2050122%20Firenze%20FI,%20Itali%C3%AB&entry=ttu",
      tags: 'Italian, Pizza, Emilian',
      amount: 'Є11 - Є28',
      phone: '+39 055 709 231',
      website: 'https://www.capellettilocandadiromagna.it/?lang=en'
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Du Pizzeria",
      averageRating: 4.5,
      userReviewCount: 9,
      banner: '/restaurant-banner-2.jpg',
      priceTag: "Є - ЄЄ ",
      image: "/restaurant-2.jpg",
      maps: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x132a57e34afe21e9:0xf45dbb0d1bfd54c3?sa=X&ved=1t:8290&ictx=111",
      location: "Via Faenza, 53/R, 50123 Firenze FI, Italië",
      website: "https://www.dupizzeria.it/",
      phone: "+390550249026",
      tags: "Italian, Pizza",
      amount: "",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Verdoliva Trattoria Toscana",
      averageRating: 3,
      userReviewCount: 365,
      banner: '/restaurant-banner-3.jpg',
      priceTag: "ЄЄ - ЄЄЄ",
      image: "/restaurant-3.jpg",
      location: "P.za di Santa Maria Novella, 25 Rosso, 50123 Firenze FI, Italië",
      maps: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x132a57fb8294dc39:0xfd4f35db482b0900?sa=X&ved=1t:8290&ictx=111",
      phone: "+390552381286",
      tags: "Italian, Mediterranean, Toscan",
      amount: "Є10 - Є31",
      website: ""
    },
  ],
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "The Kitchen & The Bar",
      averageRating: 3.5,
      userReviewCount: 6,
      banner: '/restaurant-banner-4.jpg',
      priceTag: "ЄЄ - ЄЄЄ",
      image:
        "/restaurant-4.jpg",
      maps: "https://www.google.com/maps/place/The+Kitchen+and+The+Bar/@43.7730936,11.2498249,17z/data=!3m1!4b1!4m6!3m5!1s0x132a57fd7fc9b9eb:0xd2a615a1855e01be!8m2!3d43.7730936!4d11.2498249!16s%2Fg%2F11pd34ghhx?entry=ttu",
      location: "P.za di Santa Maria Novella, 5, 50123 Firenze FI, Italië",
      website: "https://www.theplacefirenze.com/it/ristorante-e-bar-firenze-centro",
      tags: "Italian, Mediterranean, International",
      phone: "+39 055 264 5181",
      amount: ""
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Indian Palace",
      averageRating: 5,
      userReviewCount: 2045,
      banner: '/restaurant-banner-5.jpg',
      priceTag: "ЄЄ - ЄЄЄ",
      image:
        "/restaurant-5.jpg",
      maps: "https://www.google.com/maps/place/Indian+Palace/@43.7780155,11.2541367,17z/data=!3m1!4b1!4m6!3m5!1s0x132a55f2df5d7ecd:0x981e16591339ba3c!8m2!3d43.7780155!4d11.2541367!16s%2Fg%2F11g0j6mfxd?entry=ttu",
      location: "Via Guelfa, 96R, 50129 Firenze FI, Italië",
      website: "https://www.indianpalace.it/",
      phone: "+390555272498",
      tags: " Indian, Asian, Healthy",
      amount: "Є13 - Є24"

    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Trattoria Giovanni",
      averageRating: 4.5,
      banner: '/restaurant-banner-6.jpg',
      userReviewCount: 2018,
      priceTag: "ЄЄ - ЄЄЄ",
      image:
        "/restaurant-6.jpg",
      maps: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x132a51534338621d:0x1e853d96de0c4f7b?sa=X&ved=1t:8290&ictx=111",
      location: "Via Sant'Agostino, 38 Rosso, 50124 Firenze FI, Italië",
      website: "https://trattoriagiovanni.it/",
      phone: "+390550880671",
      tags: "Italian, Mediterranean, Healthy",
      amount: "Є6 - Є30"
    },
  ],
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Ristorante Taj Palace",
      averageRating: 5,
      userReviewCount: 753,
      banner: '/restaurant-banner-7.jpg',
      priceTag: "ЄЄ - ЄЄЄ",
      image:
        "/restaurant-7.jpg",
      maps: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x132a56ae6a9d05e1:0x7f3acbad052b9cce?sa=X&ved=1t:8290&ictx=111",
      location: "Via Il Prato, 9/r, 50123 Firenze FI, Italië",
      website: "https://www.ristorantetajpalace.com/",
      phone: "+390559362997",
      tags: "Indian, Asian, Vegetarian Friendly",
      amount: "Є9 - Є19"

    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Osteria Vecchio Cancello",
      averageRating: 5,
      userReviewCount: 3047,
      banner: '/restaurant-banner-8.jpg',
      priceTag: "ЄЄ - ЄЄЄ",
      image:
        "/restaurant-8.jpg",
      maps: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x132a56a7bb7def11:0x1ff8aa3e2cba1621?sa=X&ved=1t:8290&ictx=111",
      location: "Via Guelfa, 138/R, 50129 Firenze FI, Italië",
      phone: "+39055494234",
      website: "https://www.facebook.com/vecchiocancellofirenze",
      tags: "Toscan",
      amount: "Є10 - Є39"

    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Djaria - American Bar",
      averageRating: 5,
      userReviewCount: 215,
      banner: '/restaurant-banner-9.jpg',
      priceTag: "ЄЄ - ЄЄЄ",
      image:
        "/restaurant-9.jpg",
      maps: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x132a51fa8d19d9e9:0xb2bbbb34e60b9324?sa=X&ved=1t:8290&ictx=111",
      location: "Via dei Serragli, 100r, 50124 Firenze FI, Italië",
      website: "http://www.djaria.it/",
      phone: "+390554937061",
      tags: "American, Bar, Barbecue",
      amount: ""
    },

    
  ],
];

