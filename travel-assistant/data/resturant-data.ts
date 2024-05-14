interface RestaurantData {
  id: string;
  name: string;
  averageRating: number;
  userReviewCount: number;
  priceTag: string;
  image: string;
}

export const restaurantData: RestaurantData[][] = [
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Ca Pelletti Firenze",
      averageRating: 4,
      userReviewCount: 28,
      priceTag: "$$ - $$$",
      image: "/restaurant-1.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Du Pizzeria",
      averageRating: 4.5,
      userReviewCount: 9,
      priceTag: "$",
      image: "/restaurant-2.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Verdoliva Trattoria Toscana",
      averageRating: 3,
      userReviewCount: 365,
      priceTag: "$$ - $$$",
      image: "/restaurant-3.jpg",
    },
  ],
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "The Kitchen & The Bar",
      averageRating: 3.5,
      userReviewCount: 6,
      priceTag: "$",
      image:
        "/restaurant-4.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Indian Palace",
      averageRating: 5,
      userReviewCount: 2045,
      priceTag: "$$ - $$$",
      image:
        "/restaurant-5.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Trattoria Giovanni",
      averageRating: 4.5,
      userReviewCount: 2018,
      priceTag: "$$ - $$$",
      image:
        "/restaurant-6.jpg",
    },
  ],
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Ristorante Taj Palace",
      averageRating: 5,
      userReviewCount: 753,
      priceTag: "$$ - $$$",
      image:
        "/restaurant-7.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Osteria Vecchio Cancello",
      averageRating: 5,
      userReviewCount: 3047,
      priceTag: "$$ - $$$",
      image:
        "/restaurant-8.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Djaria - American Bar",
      averageRating: 5,
      userReviewCount: 215,
      priceTag: "$$ - $$$",
      image:
        "/restaurant-9.jpg",
    },

    
  ],
];

