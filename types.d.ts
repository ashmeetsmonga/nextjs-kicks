interface Shoe {
  id: string;
  asins: string;
  brand: string;
  categories: string;
  colors: string;
  count: string;
  dateAdded: string;
  dateUpdated: string;
  descriptions: string;
  dimension: string;
  ean: number | null;
  features: string;
  flavors: string;
  imageURLs: string;
  isbn: string;
  keys: string;
  manufacturer: string;
  manufacturerNumber: string;
  merchants: string;
  name: string;
  pricesMin: string;
  pricesMax: string;
  quantities: string;
  reviews: string;
  sizes: string;
  skus: string;
  sourceURLs: string;
  upc: string;
  vin: string;
  websiteIDs: string;
  weight: string;
  FIELD49: string;
  FIELD50: string;
  FIELD51: string;
  FIELD52: string;
}

interface Description {
  dateSeen: string;
  sourceURLs: string[];
  value: string;
}

interface CartItem {
  productId: string;
  size: number;
  quantity: number;
}
