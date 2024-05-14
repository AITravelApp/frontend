interface ActivityData {
  id: string;
  name: string;
  priceTag: string;
  image: string;
}

export const activityData: ActivityData[][] = [
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Walking tours",
      priceTag: "$",
      image: "/activity-1.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Group biking",
      priceTag: "$",
      image: "/activity-2.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Scuba diving",
      priceTag: "$ - $$",
      image: "/activity-3.jpg",
    },
  ],
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Uffizi Gallery",
      priceTag: "$ - $$",
      image: "/activity-4.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Bargello",
      priceTag: "$ - $$",
      image: "/activity-5.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Palazzo Pitti",
      priceTag: "$ - $$",
      image: "/activity-6.jpg",
    },
  ],
  [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Rinascente Firenze",
      priceTag: "$$ - $$$",
      image: "/activity-7.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "High End Stores",
      priceTag: "$$ - $$$",
      image: "/activity-8.jpg",
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Boutique Nadine",
      priceTag: "$$ - $$$",
      image: "/activity-9.jpg",
    },
  ],
];
