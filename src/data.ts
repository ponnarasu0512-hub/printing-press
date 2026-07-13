/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProductItem, PortfolioProject, BlogPost, JobOpening, TestimonialItem, FAQItem, TeamMember, PrintOrder } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 's-bizcard',
    name: 'Premium Business Cards',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=600&q=80',
    description: 'Leave a striking first impression with our custom-designed visiting cards. Available in premium 350 GSM paper with optional Velvet Lamination, Spot UV gloss, and Gold Foil stamping.',
    features: ['350 GSM Premium Board', 'Spot UV & Metallic Foiling options', 'Rounded corners or custom die-cut', 'Matte or Glossy laminate overlay'],
    pricingStartsAt: 199
  },
  {
    id: 's-letterhead',
    name: 'Corporate Letterheads',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    description: 'Ensure consistent brand identity with crisp, professional letterheads. Printed on executive bond paper, textured conqueror sheets, or standard Alabaster stock.',
    features: ['100-120 GSM Executive Bond', 'Texture options available', 'Laser & Inkjet printer compatible', 'Perfect alignment & clean borders'],
    pricingStartsAt: 499
  },
  {
    id: 's-flex',
    name: 'High-Definition Flex Printing',
    category: 'Large Format',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    description: 'Giant-format printing for outdoor hoardings, shop boards, and event backdrops. Weatherproof inks ensure colors stay vibrant even in direct sunlight and monsoon rains.',
    features: ['Heavy Star Flex or Regular Flex', 'Eco-Solvent and UV curation inks', 'Rust-proof eyelets & framing', 'Seamless joining for massive displays'],
    pricingStartsAt: 599
  },
  {
    id: 's-packaging',
    name: 'Custom Product Packaging',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Premium mono-cartons, rigid gift boxes, cosmetic cases, and heavy-duty corrugated shipping cartons custom-sized to protect and showcase your premium merchandise.',
    features: ['Duplex Board & SBS Cardboard', 'Auto-lock bottom & custom tuck-ins', 'Premium gloss, matte, or soft-touch finishes', 'Foil accentuation and clear viewing windows'],
    pricingStartsAt: 1499
  },
  {
    id: 's-paperbags',
    name: 'Eco-Friendly Paper Bags',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    description: 'Ditch plastic in style. Premium printed paper bags for boutiques, restaurants, events, and shopping outlets, made of sturdy white kraft or brown recycled sheets.',
    features: ['120-250 GSM Kraft or Bleached boards', 'Heavy-duty rope, ribbon, or twisted paper handles', 'Reinforced base cardboard for high load capacity', 'Full color side-gusset branding'],
    pricingStartsAt: 899
  },
  {
    id: 's-rollup',
    name: 'Roll-up Standees',
    category: 'Large Format',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    description: 'Highly portable, retractable standees featuring anodized aluminum frames and non-tearable visual prints. Perfect for conventions, showrooms, and retail entryways.',
    features: ['Premium non-tearable satin media', 'Sturdy lightweight aluminum base with double feet', 'Padded canvas carrying bag included', 'Quick 30-second toolless assembly'],
    pricingStartsAt: 1299
  },
  {
    id: 's-wedding',
    name: 'Bespoke Invitation Cards',
    category: 'Custom Gifts',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',
    description: 'Intricate Laser-cut wedding invites, premium birthday invites, and formal corporate ceremony invites with rich textured envelopes, wax seals, and laser embossing.',
    features: ['Imported Metallic & Velvet papers', 'Precision Laser CNC filigree cuts', 'Custom-stamped wax-seal designs', 'Multi-card matching inserts in boxes'],
    pricingStartsAt: 999
  },
  {
    id: 's-corporate',
    name: 'Corporate Gifts & Apparels',
    category: 'Custom Gifts',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80',
    description: 'Premium customized polo t-shirts, ceramic mugs, thermal water flasks, notebooks, and metallic pen sets printed or laser-engraved with your company logo.',
    features: ['100% Breathable Combed Cotton Tees', 'Laser engraving on steel & wood', 'Durable ceramic sublimation ink', 'Gift boxes and bulk combo hampers'],
    pricingStartsAt: 249
  },
  {
    id: 's-brochure',
    name: 'Brochures & Catalogues',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80',
    description: 'Bi-fold, tri-fold, and perfect-bound corporate multi-page product catalogues printed in high screen frequency to display realistic gradients and rich pictures.',
    features: ['130-300 GSM Art Paper', 'Perfect-binding or Saddle stitching', 'Spot-gloss features to draw eyes to items', 'Fold accuracy within 0.1mm tolerance'],
    pricingStartsAt: 399
  },
  {
    id: 's-labels',
    name: 'Die-cut Labels & Stickers',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1572375995501-4b0894dbe0d1?auto=format&fit=crop&w=600&q=80',
    description: 'Roll-fed or sheet-fed custom stickers. Waterproof vinyl options, holographic paper, clear transparent layers, and strong acrylic adhesives for bottle/cosmetic labeling.',
    features: ['Premium vinyl & chrome paper stock', 'Precise digital plot cutting', 'Chemical, oil, and moisture resistant', 'Easy peel backing with clean margins'],
    pricingStartsAt: 149
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'p-classic-card',
    name: 'Standard Visiting Cards',
    category: 'Stationery',
    description: 'Standard double-sided full-color visiting cards. Hard board 300 GSM paper with protective matte coating.',
    price: 199,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512418490979-917b561399ca?auto=format&fit=crop&w=600&q=80',
    features: ['300 GSM Paper', 'Double-sided Printing', 'Matte protective lamination', 'Qty: 100 Cards']
  },
  {
    id: 'p-luxe-card',
    name: 'Royal Spot-UV Visiting Cards',
    category: 'Stationery',
    description: 'Ultra-luxe visiting cards with soft velvet-touch lamination and raised spot gloss highlights that feel premium.',
    price: 549,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=600&q=80',
    features: ['350 GSM Premium Board', 'Soft Touch Velvet Lamination', 'Raised Spot UV highlights', 'Qty: 100 Cards']
  },
  {
    id: 'p-star-flex',
    name: 'Heavy Outdoor Star-Flex',
    category: 'Large Format',
    description: 'Heavy duty, tear-resistant flex fabric banner for massive outdoor advertisement hoardings.',
    price: 799,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=600&q=80',
    features: ['Star Flex Material', 'Solvent-proof HD printing', 'Grommets and reinforced stitching', 'Size: 6ft x 3ft']
  },
  {
    id: 'p-trifold-brochure',
    name: 'Tri-fold Product Brochure',
    category: 'Marketing Materials',
    description: 'Standard tri-fold brochure printed on high gloss 170 GSM paper to explain your product features beautifully.',
    price: 499,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    features: ['170 GSM Premium Gloss paper', 'Two-sided full print', 'Exact machine tri-fold folding', 'Qty: 100 Brochures']
  },
  {
    id: 'p-vinyl-sticker',
    name: 'Waterproof Vinyl Stickers',
    category: 'Labels & Stickers',
    description: 'Highly durable vinyl circular or square labels with adhesive backing. Ideal for food containers and jars.',
    price: 299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=600&q=80',
    features: ['Waterproof Polypropylene Vinyl', 'Tear-resistant adhesive base', 'Qty: 200 Round Stickers (2 inch)']
  },
  {
    id: 'p-kraft-bag',
    name: 'Boutique Kraft Paper Bags',
    category: 'Packaging',
    description: 'Elegant kraft paper bags with sturdy braided handles, custom-printed with your logo for fashion & lifestyle stores.',
    price: 1199,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
    features: ['150 GSM Kraft Paper', 'Durable braided paper handles', 'Load capacity up to 5kg', 'Qty: 50 Bags']
  },
  {
    id: 'p-letterhead-bond',
    name: 'Premium Alabaster Letterheads',
    category: 'Stationery',
    description: 'Sophisticated brand writing papers printed on imported high-whiteness 100 GSM Alabaster sheets.',
    price: 899,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&w=600&q=80',
    features: ['100 GSM Premium Bond', 'Ink-bleed resistance', 'Qty: 200 sheets']
  },
  {
    id: 'p-cosmetic-box',
    name: 'Foil-Stamped Cosmetic Box',
    category: 'Packaging',
    description: 'Beautiful retail folding cartons designed for cosmetic creams and fragrances, accented with rose-gold hot foil.',
    price: 2499,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
    features: ['350 GSM Bleached Board', 'Rose Gold Foil Stamp accents', 'Auto-locking base', 'Qty: 100 boxes']
  },
  {
    id: 'p-custom-mug',
    name: 'Premium Sublimation Mug',
    category: 'Customized Gifts',
    description: 'Grade-A ceramic mug customized with crisp sublimation prints that survive thousands of dishwasher runs.',
    price: 180,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    features: ['11 Oz Pure Ceramic', 'Grade-A high glossy coat', 'Dishwasher & Microwave safe', 'Qty: 1 Custom Printed Mug']
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Minimalist Restaurant Branding',
    category: 'Restaurant',
    imageBefore: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    client: 'Spice Bistro, Bangalore',
    description: 'Designed and printed complete brand identity including elegant textured gold-foil menu cards, custom printed paper carrier bags, table-tent promo sheets, and matching server aprons.'
  },
  {
    id: 'proj-2',
    title: 'Elite Corporate Stationery & Welcome Kit',
    category: 'Corporate',
    imageBefore: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
    client: 'TechGen Solutions, Hyderabad',
    description: 'Crafted premium onboarding welcome hampers consisting of custom matte black notebooks with UV varnishing, metal-body engraved pens, premium leatherette ID tags, and letterheads printed on 120 GSM bond.'
  },
  {
    id: 'proj-3',
    title: 'Cosmetic Organic Pack Range',
    category: 'Packaging',
    imageBefore: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
    client: 'Nirvana Organics, Chennai',
    description: 'Engineered eco-friendly packaging series utilizing 100% biodegradable unbleached kraft card stock with organic soy ink prints and customized shape windows for facial scrubs and organic bath soaps.'
  },
  {
    id: 'proj-4',
    title: 'Annual Tech Summit Flex and Signage',
    category: 'Signage',
    imageBefore: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    client: 'Decentralized Web Council',
    description: 'Printed and erected massive 40ft x 15ft heavy-duty Star Flex backdrops, over 50 custom-shaped aluminum standees, direction signage boards, and personalized high-security NFC plastic delegate ID badges.'
  },
  {
    id: 'proj-5',
    title: 'Premium Royal Heritage Invitations',
    category: 'Wedding',
    imageBefore: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    client: 'The Singhania Family, Jaipur',
    description: 'Constructed grand box-style wedding invitation portfolios with hand-wrapped royal maroon silk cover sheets, gold laser CNC acrylic names, internal drawers holding spice packages, and textured invite leaflets.'
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'b-1',
    title: 'How 350 GSM with Spot UV Transforms Your First Handshake',
    category: 'Branding',
    excerpt: 'Your visiting card is your physical handshake in the business arena. Let us dissect why paper weight, coating density, and layout balance trigger immediate psychological trust.',
    content: 'When meeting high-profile clients in Indian corporate circles, digital card shares lack the tactile weight of premium paper. A standard 220 GSM card feels flimsy and forgettable. However, handing over a 350 GSM silk-coated card creates immediate sub-conscious gravity. Combining this with Spot UV gloss highlights over your brand logo creates a sensory contrast of smooth, soft-touch matte with crisp, light-catching ridges. In this piece, we explore how investing in luxury stationery boosts response rates by over 40%...',
    date: 'July 10, 2026',
    author: 'Amit Sharma (Creative Director)',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e08562744ad?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b-2',
    title: 'The Essential Packaging Guide for D2C Startups in India',
    category: 'Packaging',
    excerpt: 'Packaging is no longer just protective wrapping—it is a physical canvas for storytelling. Discover how to plan mono-cartons, custom boxes, and biodegradable fillers safely.',
    content: 'As direct-to-consumer (D2C) brands multiply across India, the unboxing experience has become the new storefront. If a customer receives a premium serum in a standard brown box with a smudged thermal print label, their perceived value of the product collapses. We examine how to design structural carton layouts that secure fragile containers while presenting a high-gloss, pristine interior print, complete with customized thank-you note inserts and eco-friendly kraft bag elements...',
    date: 'June 28, 2026',
    author: 'Neha Patel (Packaging Lead)',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b-3',
    title: 'Understanding Outdoor Banners: Star Flex vs. Normal Flex',
    category: 'Marketing',
    excerpt: 'Planning major advertising hoardings or political banners? Understand the mechanical and aesthetic differences between regular flex cloth and Star Flex.',
    content: 'We often see banners that appear dull, wrinkled, or washed out under bright halogen spotlights. The culprit is poor raw flex selection. Normal Flex is highly translucent, making the backing framing visible and causing light-scatter that washes out image details. Star Flex, on the other hand, is a premium opaque media with a highly dense black-back layer and gloss-white face. It reflects light directly towards the viewer, ensuring black shades stay pitch black and custom graphics pop with absolute razor sharpness under neon spotlights...',
    date: 'May 15, 2026',
    author: 'Rajesh Verma (Production Manager)',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  }
];

export const CAREERS_DATA: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Graphic Designer (Print & Packaging)',
    department: 'Creative Studio',
    location: 'Chennai (On-site)',
    type: 'Full-time',
    experience: '3 - 5 Years',
    salaryRange: '₹6.0L - ₹8.5L per annum',
    requirements: [
      'Expertise in Adobe Illustrator, Photoshop, and InDesign.',
      'Comprehensive understanding of CMYK print file preparation, bleed settings, die-cut vectors, and spot varnish setups.',
      'Ability to design folding carton packaging layouts and construct precise flat 2D die-lines.',
      'Strong portfolio displaying corporate brand guides and luxury print stationery layouts.'
    ],
    description: 'We are seeking a creative printing designer to lead our premium branding accounts. You will design product package die-lines, premium wedding invite cards, and advise corporate clients on material choices.'
  },
  {
    id: 'job-2',
    title: 'Digital Offset Printing Machine Operator',
    department: 'Press Floor',
    location: 'Chennai (On-site)',
    type: 'Full-time',
    experience: '2+ Years',
    salaryRange: '₹3.5L - ₹5.0L per annum',
    requirements: [
      'Hands-on experience operating HP Indigo, Heidelberg, or Konica Minolta production print machines.',
      'Thorough knowledge of sheet-feeding calibration, color profiling (ICC profiles), and paper density settings.',
      'Ability to troubleshoot paper jams, adjust alignment variables, and maintain consistent ink density across high runs.',
      'Ability to work in rotating shifts.'
    ],
    description: 'Join our state-of-the-art production facility operating India\'s leading industrial press printers. You will be responsible for machine maintenance, checking color-proof proofs, and executing daily production quotas with extreme detail.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Vikram Sethi',
    role: 'Founder & CEO',
    companyName: 'Gourmet Organic Cafe, Mumbai',
    review: 'AxoPrint revolutionized our brand packaging. The custom-printed unbleached kraft carry bags and menu cards with subtle gold-embossed titles look so luxurious. Our customers keep complementing the packaging on Instagram! Fast delivery and extreme precision.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-2',
    name: 'Anjali Raghav',
    role: 'Director of Marketing',
    companyName: 'Veloce Healthcare, Gurgaon',
    review: 'For our annual multi-city clinics launch, we ordered 150 aluminum standees, 5,000 corporate catalog brochures, and premium bond letterheads. Every single item came out absolutely flawless. The colors match our exact corporate hex code #2563EB across all materials.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-3',
    name: 'Karthik Subramanian',
    role: 'Event Director',
    companyName: 'Grand Legacy Weddings, Jaipur',
    review: 'We designed heavy box invitations for a royal Jaipuri wedding. The laser intricate cutting from AxoPrint was so delicate, with absolutely no laser burn marks. Their wax seal stamp customization is unparalleled. Truly India\'s finest artisan printing house.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'f-1',
    question: 'What is the standard turnaround time for printing?',
    answer: 'Standard stationery and digital print items (Business Cards, Letterheads, Flyers) take 24-48 hours. Large-format prints (Flex, Vinyl, Standees) take 1-2 working days. Custom packaging, die-cut boxes, and special invitations with foiling or laser cutting take 5-7 working days depending on quantity and design complexity.',
    category: 'General'
  },
  {
    id: 'f-2',
    question: 'Do you provide shipping across India and what are the rates?',
    answer: 'Yes! We ship across India through top-tier courier services (Blue Dart, Delhivery, Professional Couriers). Shipping is free for corporate orders above ₹5,000. For orders below that, standard shipping rates apply, which are calculated on checkout or quoted by your account manager.',
    category: 'Shipping'
  },
  {
    id: 'f-3',
    question: 'Which file format is ideal to upload for high-fidelity printing?',
    answer: 'We strongly prefer print-ready Vector formats: Adobe Illustrator (.AI), Editable PDF (.PDF), CorelDRAW (.CDR), or EPS. These can scale infinitely without pixelation. Ensure all fonts are outlined/converted to curves, and images are embedded at a minimum of 300 DPI in CMYK color space.',
    category: 'File Prep'
  },
  {
    id: 'f-4',
    question: 'Can I request a physical print proof before approving bulk runs?',
    answer: 'Absolutely. For packaging boxes, wedding invitations, and corporate catalog brochures, we create an initial digital proof for visual layout verification. If requested, we can mail a physical printed mockup (unfolded or folded proof) for a minor proofing fee, which is fully refunded upon bulk order confirmation.',
    category: 'General'
  },
  {
    id: 'f-5',
    question: 'How do you guarantee color accuracy across different print media?',
    answer: 'We run high-precision Heidelberg offset and HP Indigo digital presses. We calibrate our screens and printers daily matching the international Pantone Matching System (PMS) and GRACoL standards. Please note that RGB screen profiles differ slightly from CMYK ink profiles, so we always recommend reviewing our color proof prior to printing.',
    category: 'File Prep'
  }
];

export const TEAM_DATA: TeamMember[] = [
  { name: 'Aditya Rajan', role: 'Managing Director & Founder', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' },
  { name: 'Amit Sharma', role: 'Creative Director & Brand Architect', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Neha Patel', role: 'Head of Packaging & Structure Design', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
  { name: 'Rajesh Verma', role: 'Director of Print Production Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' }
];

export const MOCK_ORDERS: PrintOrder[] = [
  {
    id: 'AXO-8472',
    customerName: 'Vikram Sethi',
    productName: 'Organic Kraft Carrier Bags',
    quantity: 1000,
    paperType: '150 GSM Unbleached Kraft',
    size: '10 x 14 x 4 Inches',
    finishing: 'Recycled Paper Twisted Handles',
    status: 'In Production',
    date: '2026-07-10',
    totalCost: 18000,
    estimatedDelivery: '2026-07-16',
    fileName: 'spice-bistro-bag-final.ai',
    specialInstructions: 'Ensure handle glue points are reinforced double-strength.'
  },
  {
    id: 'AXO-3392',
    customerName: 'Anjali Raghav',
    productName: 'TechGen Welcome Hamper Notebooks',
    quantity: 200,
    paperType: '300 GSM Hardback Cover / 80 GSM Bond Pages',
    size: 'A5 Notebook Size',
    finishing: 'Matte Laminated with Raised Spot UV logo',
    status: 'Proof Approved',
    date: '2026-07-11',
    totalCost: 28500,
    estimatedDelivery: '2026-07-18',
    fileName: 'tg-onboarding-notebook.pdf',
    specialInstructions: 'Cover must be deep charcoal black matching swatch #212121.'
  },
  {
    id: 'AXO-1102',
    customerName: 'Aishwarya Roy',
    productName: 'Bespoke Royal Jaipuri Invitation Box',
    quantity: 150,
    paperType: 'Imported Metallic Card & Silk Cover Wrap',
    size: '9 x 9 x 2 Inches Box Design',
    finishing: 'Gold CNC Acrylic plate, laser floral filigree, wax seals',
    status: 'Received',
    date: '2026-07-12',
    totalCost: 149900,
    estimatedDelivery: '2026-07-22',
    fileName: 'royals-wedding-invitation-draft-v3.ai',
    specialInstructions: 'Include 3 insert cards inside drawers. Enclosed wax seals should carry custom R & A crest.'
  },
  {
    id: 'AXO-9918',
    customerName: 'Kunal Kapoor',
    productName: 'Spot-UV Luxury Visiting Cards',
    quantity: 500,
    paperType: '350 GSM Premium Velvet Board',
    size: '3.5 x 2.0 Inches standard',
    finishing: 'Soft Touch Velvet Lamination & Spot UV Gloss Accent',
    status: 'Delivered',
    date: '2026-07-05',
    totalCost: 2750,
    estimatedDelivery: '2026-07-09',
    fileName: 'kunal-kapoor-vcard-print.pdf',
    specialInstructions: 'Rounded corner cutting is required.'
  }
];

export const CORPORATE_CLIENTS = [
  { email: 'vikram@spicebistro.in', name: 'Vikram Sethi', company: 'Spice Bistro', phone: '+91 98402 12345' },
  { email: 'anjali@velocehealth.co.in', name: 'Anjali Raghav', company: 'Veloce Healthcare', phone: '+91 99100 84723' },
  { email: 'karthik@grandweddings.com', name: 'Karthik Subramanian', company: 'Grand Legacy Weddings', phone: '+91 98840 55667' }
];
