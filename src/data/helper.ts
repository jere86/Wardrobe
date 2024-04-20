export const typeOptions = [
  { group: "Shirts", items: ["Shirt", "T-Shirt", "Blouse"] },
  { group: "Pants", items: ["Pants", "Jeans", "Shorts"] },
  { group: "Dresses", items: ["Dress", "Skirt"] },
  {
    group: "Outerwear",
    items: ["Coat", "Jacket", "Hoodie", "Sweater", "Cardigan"],
  },
  { group: "Suits", items: ["Suit", "Vest"] },
  { group: "Undergarments", items: ["Underwear", "Socks"] },
  { group: "Shoes", items: ["Sneakers", "Boots", "Sandals", "Flats", "Heels"] },
];

export const sizeOptions = [
  { group: "Standard sizes", items: ["XXS", "XS", "S", "M", "L", "XL", "XXL"] },
  {
    group: "Euro sizes",
    items: [
      "28",
      "30",
      "32",
      "34",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
    ],
  },
];

export const colorOptions = [
  {
    group: "Red",
    items: ["red", "crimson", "maroon", "firebrick", "darkred"],
  },
  {
    group: "Orange",
    items: ["orange", "darkorange", "coral", "tomato"],
  },
  {
    group: "Yellow",
    items: ["yellow", "gold", "khaki", "moccasin"],
  },
  {
    group: "Green",
    items: ["green", "darkgreen", "limegreen", "forestgreen"],
  },
  {
    group: "Blue",
    items: ["blue", "navy", "royalblue", "cornflowerblue"],
  },
  {
    group: "Purple",
    items: ["purple", "indigo", "rebeccapurple", "mediumorchid"],
  },
  {
    group: "Brown",
    items: ["brown", "saddlebrown", "sienna", "chocolate"],
  },
  {
    group: "Gray",
    items: ["gray", "darkgray", "dimgray", "lightgray"],
  },
  { group: "Black & White", items: ["black", "white"] },
  { group: "Metallics", items: ["gold", "silver", "darkgoldenrod"] },
];

export const filterOptions = [
  {
    filterby: "type",
    data: typeOptions,
  },
  {
    filterby: "size",
    data: sizeOptions,
  },
  {
    filterby: "color",
    data: colorOptions,
  },
];
