/* =========================================================
   YUM YUM KITCHEN — PRODUCT CATALOGUE
   Edit this file to update inventory, prices, and stock.
   ========================================================= */

const WHATSAPP_NUMBER = "923001234567"; // Replace with your business WhatsApp (digits only, no + or spaces)
const DELIVERY_FEE = 5.00;             // Flat delivery fee
const CURRENCY = "$";                  // Currency symbol
const FREE_DELIVERY_ABOVE = 50;        // Free delivery threshold

const categories = [
  { id: "fruits",    name: "Fresh Fruits",              slug: "fruits",    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=400&fit=crop", description: "Hand-picked seasonal fruits delivered fresh." },
  { id: "vegetables",name: "Fresh Vegetables",          slug: "vegetables",image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop", description: "Crisp, farm-fresh vegetables for every meal." },
  { id: "rawfoods",  name: "Raw Foods & Salad",         slug: "rawfoods",  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop", description: "Salad packs, herbs, and fresh ingredients." },
  { id: "bottled",   name: "Bottled Juices",            slug: "bottled",   image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop", description: "Pure fruit juices in premium bottles." },
  { id: "canned",    name: "Canned Juices",             slug: "canned",    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop", description: "Convenient canned juices for on-the-go." },
  { id: "beverages", name: "Other Beverages",           slug: "beverages", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop", description: "Refreshing drinks and specialty beverages." }
];

const products = [
  // ============ FRESH FRUITS ============
  { id: "F001", name: "Red Apples",         category: "fruits",    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&h=500&fit=crop", description: "Crisp, juicy red apples — perfect for snacking or baking.", price: 3.49, unit: "per kg",   stock: 40, available: true, salePrice: null,    rating: 4.6 },
  { id: "F002", name: "Bananas",            category: "fruits",    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&h=500&fit=crop", description: "Ripe yellow bananas, rich in potassium and natural sweetness.", price: 1.99, unit: "per bunch",stock: 60, available: true, salePrice: null,    rating: 4.7 },
  { id: "F003", name: "Oranges",            category: "fruits",    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&h=500&fit=crop", description: "Sweet, seedless oranges bursting with vitamin C.", price: 2.79, unit: "per kg",   stock: 35, available: true, salePrice: 2.29,    rating: 4.5 },
  { id: "F004", name: "Mangoes",            category: "fruits",    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&h=500&fit=crop", description: "Tropical mangoes with a rich, honey-sweet flavor.", price: 4.99, unit: "per kg",   stock: 20, available: true, salePrice: null,    rating: 4.8 },
  { id: "F005", name: "Green Grapes",       category: "fruits",    image: "https://images.unsplash.com/photo-1537640538966-79f369143f87?w=500&h=500&fit=crop", description: "Seedless green grapes — crunchy and refreshing.", price: 3.99, unit: "per kg",   stock: 25, available: true, salePrice: null,    rating: 4.4 },
  { id: "F006", name: "Pineapples",         category: "fruits",    image: "https://images.unsplash.com/photo-1553530666-ba11e7da2152?w=500&h=500&fit=crop", description: "Whole pineapples, tropical and tangy.", price: 3.29, unit: "each",     stock: 18, available: true, salePrice: null,    rating: 4.5 },
  { id: "F007", name: "Watermelons",        category: "fruits",    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=500&fit=crop", description: "Large, juicy watermelons — perfect for hot days.", price: 5.99, unit: "each",     stock: 12, available: true, salePrice: 4.99,    rating: 4.6 },

  // ============ FRESH VEGETABLES ============
  { id: "V001", name: "Carrots",            category: "vegetables",image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop", description: "Fresh orange carrots, great raw or cooked.", price: 1.49, unit: "per kg",   stock: 50, available: true, salePrice: null,    rating: 4.3 },
  { id: "V002", name: "Tomatoes",           category: "vegetables",image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&h=500&fit=crop", description: "Ripe red tomatoes, full of flavor.", price: 2.29, unit: "per kg",   stock: 45, available: true, salePrice: 1.79,    rating: 4.4 },
  { id: "V003", name: "Cucumbers",          category: "vegetables",image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&h=500&fit=crop", description: "Cool, crisp cucumbers — ideal for salads.", price: 1.79, unit: "per kg",   stock: 30, available: true, salePrice: null,    rating: 4.2 },
  { id: "V004", name: "Potatoes",           category: "vegetables",image: "https://images.unsplash.com/photo-1518977676601-b53f67206b37?w=500&h=500&fit=crop", description: "Versatile potatoes for any recipe.", price: 1.29, unit: "per kg",   stock: 80, available: true, salePrice: null,    rating: 4.5 },
  { id: "V005", name: "Onions",             category: "vegetables",image: "https://images.unsplash.com/photo-1618512496223-8a35f26a5a9a?w=500&h=500&fit=crop", description: "Fresh yellow onions, a kitchen staple.", price: 1.19, unit: "per kg",   stock: 70, available: true, salePrice: null,    rating: 4.3 },
  { id: "V006", name: "Lettuce",            category: "vegetables",image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&h=500&fit=crop", description: "Crisp green lettuce for salads and wraps.", price: 1.99, unit: "per head", stock: 25, available: true, salePrice: null,    rating: 4.1 },
  { id: "V007", name: "Spinach",            category: "vegetables",image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=500&fit=crop", description: "Tender baby spinach, packed with iron.", price: 2.49, unit: "per pack", stock: 30, available: true, salePrice: 1.99,    rating: 4.6 },

  // ============ RAW FOODS & SALAD ============
  { id: "R001", name: "Mixed Salad Pack",   category: "rawfoods",  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop", description: "Ready-to-eat mixed salad greens.", price: 3.99, unit: "per pack", stock: 20, available: true, salePrice: null,    rating: 4.4 },
  { id: "R002", name: "Fresh Herbs",        category: "rawfoods",  image: "https://images.unsplash.com/photo-1615484477778-ca3b73933da3?w=500&h=500&fit=crop", description: "Aromatic mixed herbs — parsley, cilantro, mint.", price: 2.29, unit: "per bunch",stock: 35, available: true, salePrice: null,    rating: 4.5 },
  { id: "R003", name: "Fresh Ginger",       category: "rawfoods",  image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&h=500&fit=crop", description: "Aromatic ginger root for cooking and teas.", price: 1.99, unit: "per 250g", stock: 40, available: true, salePrice: null,    rating: 4.3 },
  { id: "R004", name: "Fresh Garlic",       category: "rawfoods",  image: "https://images.unsplash.com/photo-1618512496223-8a35f26a5a9a?w=500&h=500&fit=crop", description: "Plump garlic bulbs for rich flavor.", price: 1.49, unit: "per 250g", stock: 50, available: true, salePrice: null,    rating: 4.4 },
  { id: "R005", name: "Lemons",             category: "rawfoods",  image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&h=500&fit=crop", description: "Zesty lemons for drinks and dressings.", price: 2.49, unit: "per kg",   stock: 30, available: true, salePrice: null,    rating: 4.5 },
  { id: "R006", name: "Salad Ingredients Pack", category: "rawfoods", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=500&fit=crop", description: "Complete salad kit with veggies and dressing.", price: 5.99, unit: "per pack", stock: 15, available: true, salePrice: 4.99,    rating: 4.6 },

  // ============ BOTTLED JUICES ============
  { id: "B001", name: "Orange Juice Bottle",    category: "bottled", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&h=500&fit=crop", description: "100% pure orange juice, no added sugar.", price: 4.49, unit: "1L bottle", stock: 40, available: true, salePrice: null,    rating: 4.7 },
  { id: "B002", name: "Mango Juice Bottle",     category: "bottled", image: "https://images.unsplash.com/photo-1546173157-5646c25d73f4?w=500&h=500&fit=crop", description: "Tropical mango nectar, thick and sweet.", price: 4.99, unit: "1L bottle", stock: 35, available: true, salePrice: 3.99,    rating: 4.8 },
  { id: "B003", name: "Apple Juice Bottle",     category: "bottled", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=500&h=500&fit=crop", description: "Crisp apple juice, naturally refreshing.", price: 3.99, unit: "1L bottle", stock: 45, available: true, salePrice: null,    rating: 4.5 },
  { id: "B004", name: "Pineapple Juice Bottle", category: "bottled", image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&h=500&fit=crop", description: "Tangy pineapple juice, chilled and ready.", price: 4.29, unit: "1L bottle", stock: 30, available: true, salePrice: null,    rating: 4.4 },
  { id: "B005", name: "Mixed Fruit Juice Bottle", category: "bottled", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&h=500&fit=crop", description: "A blend of tropical fruits in every sip.", price: 5.49, unit: "1L bottle", stock: 25, available: true, salePrice: null,    rating: 4.6 },

  // ============ CANNED JUICES ============
  { id: "C001", name: "Orange Juice Can",    category: "canned", image: "https://images.unsplash.com/photo-1625772299185-b3f233a1b0c3?w=500&h=500&fit=crop", description: "Refreshing orange juice in a convenient can.", price: 1.99, unit: "330ml can", stock: 80, available: true, salePrice: null,    rating: 4.3 },
  { id: "C002", name: "Apple Juice Can",     category: "canned", image: "https://images.unsplash.com/photo-1564419309990-c5e0b0d2b78d?w=500&h=500&fit=crop", description: "Crisp apple juice, chilled and ready.", price: 1.99, unit: "330ml can", stock: 75, available: true, salePrice: 1.49,    rating: 4.4 },
  { id: "C003", name: "Mango Juice Can",     category: "canned", image: "https://images.unsplash.com/photo-1623066792816-c8d03f1b1a7c?w=500&h=500&fit=crop", description: "Sweet mango nectar in a portable can.", price: 2.29, unit: "330ml can", stock: 60, available: true, salePrice: null,    rating: 4.5 },
  { id: "C004", name: "Tropical Fruit Juice Can", category: "canned", image: "https://images.unsplash.com/photo-1546173157-5646c25d73f4?w=500&h=500&fit=crop", description: "A tropical blend of exotic fruits.", price: 2.49, unit: "330ml can", stock: 55, available: true, salePrice: null,    rating: 4.6 },
  { id: "C005", name: "Pineapple Juice Can", category: "canned", image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&h=500&fit=crop", description: "Zesty pineapple juice, perfect on-the-go.", price: 2.19, unit: "330ml can", stock: 50, available: true, salePrice: null,    rating: 4.4 }
];

/* Helper: get product by ID */
function getProductById(id) {
  return products.find(p => p.id === id);
}

/* Helper: get category by slug */
function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug);
}

/* Helper: get effective price (sale price if present) */
function getEffectivePrice(product) {
  return product.salePrice !== null ? product.salePrice : product.price;
}

/* Helper: get discount percentage */
function getDiscountPercent(product) {
  if (product.salePrice === null) return 0;
  return Math.round(((product.price - product.salePrice) / product.price) * 100);
}