// Demo products. Prices in ₹. Images are free Unsplash photos; SmartImage
// falls back to a branded placeholder if any image fails to load.
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

const products = [
  {
    id: "premium-dust-tea",
    name: "Premium Dust Tea",
    short: "Fine, quick-brewing dust with a bold colour and rich aroma.",
    description:
      "Carefully graded fine dust tea that brews fast and strong. Perfect for everyday tea shops and households that love a deep, rich cup with a bright colour.",
    image: img("photo-1564890369478-c89ca6d9cde9"),
    badge: "Bestseller",
    weights: [
      { label: "250g", price: 85 },
      { label: "500g", price: 160 },
      { label: "1kg", price: 305 },
    ],
  },
  {
    id: "strong-ctc-tea",
    name: "Strong CTC Tea",
    short: "Granular CTC leaf for a robust, malty, full-bodied cup.",
    description:
      "Crush-Tear-Curl processed Assam leaf with a strong, malty character. Ideal for milk tea with a thick liquor and lasting flavour.",
    image: img("photo-1544787219-7f47ccb76574"),
    badge: "Strong",
    weights: [
      { label: "250g", price: 110 },
      { label: "500g", price: 210 },
      { label: "1kg", price: 400 },
    ],
  },
  {
    id: "premium-leaf-tea",
    name: "Premium Leaf Tea",
    short: "Long, whole-leaf tea with a smooth, aromatic finish.",
    description:
      "Hand-selected long leaf tea from high-altitude estates. Smooth, fragrant and delicate – best enjoyed without milk to appreciate its natural character.",
    image: img("photo-1576092768241-dec231879fc3"),
    badge: "Premium",
    weights: [
      { label: "100g", price: 95 },
      { label: "250g", price: 225 },
      { label: "500g", price: 435 },
    ],
  },
  {
    id: "cardamom-tea",
    name: "Cardamom Tea",
    short: "Black tea blended with fresh, fragrant green cardamom.",
    description:
      "Strong black tea powder infused with freshly ground green cardamom for a sweet, floral aroma in every sip.",
    image: img("photo-1571934811356-5cc061b6821f"),
    weights: [
      { label: "100g", price: 70 },
      { label: "250g", price: 165 },
      { label: "500g", price: 320 },
    ],
  },
  {
    id: "masala-tea",
    name: "Masala Tea",
    short: "Traditional chai masala blend with warming spices.",
    description:
      "A time-honoured blend of tea with cinnamon, clove, black pepper and cardamom. Brings the true taste of roadside masala chai to your kitchen.",
    image: img("photo-1594631252845-29fc4cc8cde9"),
    badge: "Popular",
    weights: [
      { label: "100g", price: 75 },
      { label: "250g", price: 175 },
      { label: "500g", price: 340 },
    ],
  },
  {
    id: "ginger-tea",
    name: "Ginger Tea",
    short: "Zesty ginger-infused tea, soothing and refreshing.",
    description:
      "Premium tea powder blended with sun-dried ginger. Warm, zesty and comforting – a favourite for cool mornings and rainy evenings.",
    image: img("photo-1582793988951-9aed5509eb97"),
    weights: [
      { label: "100g", price: 70 },
      { label: "250g", price: 165 },
      { label: "500g", price: 320 },
    ],
  },
  {
    id: "elaichi-special-tea",
    name: "Elaichi Special Tea",
    short: "Our signature blend with extra elaichi for a royal aroma.",
    description:
      "Our signature special blend with a generous cardamom infusion over select CTC leaf. Rich, aromatic and made for guests and celebrations.",
    image: img("photo-1597481499750-3e6b22637e12"),
    badge: "Signature",
    weights: [
      { label: "100g", price: 90 },
      { label: "250g", price: 210 },
      { label: "500g", price: 410 },
    ],
  },
  {
    id: "family-pack-tea",
    name: "Family Pack Tea",
    short: "Value pack of our everyday blend for the whole family.",
    description:
      "A smooth, balanced everyday blend packed in a large value pack. Great taste, great price – made for busy households that love their chai.",
    image: img("photo-1556679343-c7306c1976bc"),
    badge: "Best Value",
    weights: [
      { label: "500g", price: 195 },
      { label: "1kg", price: 375 },
    ],
  },
];

export default products;
