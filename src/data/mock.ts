
import { Product } from "@/hooks/useCart";

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Rouge à lèvres hydratant",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "cosmetics",
    description: "Rouge à lèvres ultra-hydratant avec une formule enrichie en beurre de karité et vitamine E. Offre une couleur intense et une hydratation longue durée."
  },
  {
    id: "p2",
    name: "Palette de fards à paupières",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1583241475880-083f84369c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "cosmetics",
    description: "Palette de 12 couleurs hautement pigmentées pour créer une multitude de looks, du plus naturel au plus sophistiqué. Texture douce et facile à estomper."
  },
  {
    id: "p3",
    name: "Fond de teint couvrant",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbcec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "cosmetics",
    description: "Fond de teint longue tenue offrant une couvrance moyenne à élevée. Formule légère non-comédogène adaptée à tous les types de peau."
  },
  {
    id: "p4",
    name: "Mascara volumisant",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "cosmetics",
    description: "Mascara offrant volume et longueur pour des cils spectaculaires. Sa formule ne s'effrite pas et reste en place toute la journée."
  },
  {
    id: "p5",
    name: "Perruque lace front ondulée",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1605980625600-88c7114aa6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "wigs",
    description: "Perruque lace front en cheveux synthétiques de haute qualité avec des ondulations naturelles. Offre un look réaliste et peut être coiffée avec des outils chauffants jusqu'à 180°C."
  },
  {
    id: "p6",
    name: "Perruque cheveux lisses",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595476108676-c7f5e2414def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "wigs",
    description: "Perruque de cheveux lisses en fibre synthétique premium. Aspect naturel et confort optimal grâce à sa construction en capuchon respirant."
  },
  {
    id: "p7",
    name: "Sérum hydratant",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "skincare",
    description: "Sérum hautement hydratant enrichi en acide hyaluronique et vitamine B5. Redonne élasticité et éclat à la peau tout en luttant contre les signes de l'âge."
  },
  {
    id: "p8",
    name: "Crème de nuit régénérante",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1608248441409-b96a0a10261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "skincare",
    description: "Crème de nuit riche en actifs régénérants qui agit pendant le sommeil pour réparer et revitaliser la peau. Formulée avec des peptides et des huiles nourrissantes."
  },
  {
    id: "p9",
    name: "Shampooing réparateur",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1608247601490-710dc1c5c740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "haircare",
    description: "Shampooing formulé pour réparer les cheveux abîmés. Enrichi en kératine et protéines de soie pour renforcer la fibre capillaire et prévenir les fourches."
  },
  {
    id: "p10",
    name: "Masque capillaire intensif",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1608247699616-d95811c80e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "haircare",
    description: "Masque capillaire profond qui restaure l'hydratation et la vitalité des cheveux secs et endommagés. Application hebdomadaire pour des résultats optimaux."
  },
  {
    id: "p11",
    name: "Huile pour cuticules",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1610123598147-f632aa18b275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "nailcare",
    description: "Huile nourrissante pour cuticules à base d'huiles naturelles pour adoucir et hydrater les cuticules sèches. Renforce également les ongles fragiles."
  },
  {
    id: "p12",
    name: "Vernis à ongles longue durée",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1636097101662-12e92f81c7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "nailcare",
    description: "Vernis à ongles haute brillance qui reste impeccable jusqu'à 10 jours. Formule respirante enrichie en calcium pour des ongles plus forts."
  }
];

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // en minutes
  image: string;
  category: string;
};

export const mockServices: Service[] = [
  {
    id: "s1",
    name: "Coupe et brushing",
    description: "Une coupe professionnelle suivie d'un brushing pour mettre en valeur votre nouvelle coiffure.",
    price: 45,
    duration: 60,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "haircut"
  },
  {
    id: "s2",
    name: "Coloration complète",
    description: "Une coloration professionnelle pour changer de look ou couvrir les cheveux blancs.",
    price: 75,
    duration: 90,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "color"
  },
  {
    id: "s3",
    name: "Balayage",
    description: "Technique de coloration qui crée un effet naturel et ensoleillé en éclaircissant certaines mèches.",
    price: 95,
    duration: 120,
    image: "https://images.unsplash.com/photo-1595497807337-19d8c991d178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "color"
  },
  {
    id: "s4",
    name: "Soin capillaire profond",
    description: "Traitement intensif qui répare et hydrate les cheveux abîmés pour leur redonner force et brillance.",
    price: 60,
    duration: 60,
    image: "https://images.unsplash.com/photo-1607008829749-c0f284a49895?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "treatment"
  },
  {
    id: "s5",
    name: "Coiffure pour événement",
    description: "Coiffure élaborée parfaite pour les mariages, soirées et autres occasions spéciales.",
    price: 85,
    duration: 90,
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "styling"
  },
  {
    id: "s6",
    name: "Maquillage événementiel",
    description: "Un maquillage professionnel pour sublimer votre beauté lors d'un événement spécial.",
    price: 70,
    duration: 60,
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "makeup"
  }
];

export const mockBlogPosts = [
  {
    id: "b1",
    title: "Comment choisir le rouge à lèvres parfait pour votre teint",
    excerpt: "Découvrez nos conseils pour trouver la nuance idéale qui mettra en valeur votre carnation.",
    content: `
      <p>Choisir le rouge à lèvres parfait peut sembler intimidant avec toutes les options disponibles sur le marché. Mais en comprenant votre sous-ton de peau, vous pouvez facilement identifier les nuances qui vous mettront le plus en valeur.</p>
      
      <h3>Pour les peaux à sous-tons chauds</h3>
      <p>Si vos veines apparaissent verdâtres et que vous bronzez facilement, vous avez probablement un sous-ton chaud. Optez pour des rouges à lèvres dans les tons de pêche, corail, ou rouge orangé qui compléteront votre carnation dorée.</p>
      
      <h3>Pour les peaux à sous-tons froids</h3>
      <p>Si vos veines apparaissent bleuâtres et que vous avez tendance à rougir au soleil, vous avez probablement un sous-ton froid. Les rouges à lèvres dans les teintes framboise, fraise ou rouge bleuté seront particulièrement flatteurs sur vous.</p>
      
      <h3>Pour les peaux à sous-tons neutres</h3>
      <p>Si vous avez du mal à déterminer si vos veines sont plutôt bleues ou vertes, vous avez peut-être un sous-ton neutre. La bonne nouvelle ? La plupart des teintes vous iront, mais les rouges classiques et les roses moyens sont particulièrement universels.</p>
      
      <p>N'oubliez pas que ces conseils sont des points de départ. L'essentiel est de vous sentir confiante et belle avec la couleur que vous choisissez!</p>
    `,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Sophie Martin",
    date: "2023-04-15",
    likes: 42,
    comments: 8,
    tags: ["maquillage", "conseils beauté", "rouge à lèvres"]
  },
  {
    id: "b2",
    title: "Les soins capillaires essentiels pour des cheveux en pleine santé",
    excerpt: "Adoptez ces habitudes pour préserver la beauté et la vitalité de votre chevelure.",
    content: `
      <p>Des cheveux en bonne santé sont la base d'une belle coiffure. Voici les soins essentiels à intégrer dans votre routine pour garder votre chevelure éclatante de santé.</p>
      
      <h3>1. Shampooing adapté à votre type de cheveux</h3>
      <p>Choisissez un shampooing spécifiquement formulé pour vos besoins capillaires (cheveux secs, gras, colorés, etc.). Lavez vos cheveux en massant le cuir chevelu plutôt que les longueurs pour stimuler la circulation sanguine.</p>
      
      <h3>2. Après-shampooing et démêlage en douceur</h3>
      <p>Appliquez un après-shampooing adapté sur les longueurs et pointes, en évitant les racines. Démêlez toujours vos cheveux mouillés avec un peigne à large dents ou une brosse spéciale cheveux mouillés, en commençant par les pointes.</p>
      
      <h3>3. Soin profond hebdomadaire</h3>
      <p>Une à deux fois par semaine, offrez à vos cheveux un masque nourrissant pour les hydrater en profondeur. Pour un résultat optimal, enveloppez vos cheveux dans une serviette chaude pendant la pose du masque.</p>
      
      <h3>4. Protection thermique</h3>
      <p>N'oubliez jamais d'appliquer un produit protecteur avant d'utiliser des outils chauffants comme le sèche-cheveux, le fer à lisser ou le fer à boucler.</p>
      
      <p>En suivant ces conseils simples mais efficaces, vous constaterez rapidement une amélioration de la santé et de l'apparence de vos cheveux.</p>
    `,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Emma Dubois",
    date: "2023-03-28",
    likes: 37,
    comments: 12,
    tags: ["soins capillaires", "cheveux", "beauté naturelle"]
  },
  {
    id: "b3",
    title: "Guide complet pour bien choisir et entretenir sa perruque",
    excerpt: "Tout ce que vous devez savoir pour sélectionner et maintenir une perruque qui vous ressemble.",
    content: `
      <p>Que ce soit pour un changement de look temporaire ou pour pallier une perte de cheveux, choisir la bonne perruque peut transformer votre apparence et booster votre confiance.</p>
      
      <h3>Choisir sa perruque</h3>
      <p>Commencez par déterminer si vous préférez une perruque en cheveux naturels ou synthétiques. Les perruques en cheveux naturels offrent un aspect plus réaliste et peuvent être coiffées comme vos propres cheveux, mais elles sont plus coûteuses. Les perruques synthétiques de haute qualité peuvent également avoir un aspect naturel tout en étant plus abordables et faciles à entretenir.</p>
      
      <h3>Types de bonnets</h3>
      <p>Le bonnet est la base de la perruque qui maintient les cheveux ensemble. Les bonnets à monofilament offrent l'apparence la plus naturelle car ils permettent aux cheveux de sembler sortir directement du cuir chevelu. Les bonnets en dentelle, particulièrement les "lace front", créent une ligne capillaire frontale très naturelle.</p>
      
      <h3>Entretien quotidien</h3>
      <p>Pour les perruques synthétiques, utilisez des produits spécifiques pour perruques et évitez la chaleur. Pour les perruques en cheveux naturels, traitez-les comme vous le feriez avec vos propres cheveux, en utilisant des produits doux et en les protégeant de la chaleur excessive.</p>
      
      <h3>Rangement</h3>
      <p>Lorsque vous ne portez pas votre perruque, rangez-la sur un support à perruque pour maintenir sa forme. Évitez de la ranger mouillée pour prévenir les moisissures.</p>
      
      <p>Avec les bons soins, votre perruque peut rester belle et naturelle pendant de nombreux mois, voire des années pour les modèles de haute qualité.</p>
    `,
    image: "https://images.unsplash.com/photo-1595476108676-c7f5e2414def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Camille Legrand",
    date: "2023-02-10",
    likes: 29,
    comments: 6,
    tags: ["perruques", "conseils d'entretien", "changement de look"]
  }
];

export type Admin = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'super-admin';
  lastLogin: string;
  dateAdded: string;
};

export const mockAdmins: Admin[] = [
  {
    id: "a1",
    name: "Admin Principal",
    email: "admin@blushbeauty.com",
    role: "super-admin",
    lastLogin: "2023-04-25T10:30:00",
    dateAdded: "2022-01-15T08:00:00"
  },
  {
    id: "a2",
    name: "Sophie Gestionnaire",
    email: "sophie@blushbeauty.com",
    role: "admin",
    lastLogin: "2023-04-24T14:45:00",
    dateAdded: "2022-06-10T09:15:00"
  }
];

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  registeredDate: string;
  lastOrder?: string;
  ordersCount: number;
  totalSpent: number;
};

export const mockCustomers: Customer[] = [
  {
    id: "c1",
    name: "Marie Laurent",
    email: "marie@example.com",
    phone: "06 12 34 56 78",
    registeredDate: "2023-01-12T09:30:00",
    lastOrder: "2023-04-05T14:20:00",
    ordersCount: 4,
    totalSpent: 237.95
  },
  {
    id: "c2",
    name: "Julie Dupont",
    email: "julie@example.com",
    phone: "07 65 43 21 09",
    registeredDate: "2023-02-03T16:45:00",
    lastOrder: "2023-04-18T11:10:00",
    ordersCount: 2,
    totalSpent: 189.50
  },
  {
    id: "c3",
    name: "Sophie Martin",
    email: "sophie@example.com",
    registeredDate: "2023-03-21T10:15:00",
    ordersCount: 1,
    totalSpent: 59.99
  },
  {
    id: "c4",
    name: "Émilie Rousseau",
    email: "emilie@example.com",
    phone: "06 98 76 54 32",
    registeredDate: "2023-02-15T13:20:00",
    lastOrder: "2023-04-10T09:05:00",
    ordersCount: 3,
    totalSpent: 214.75
  }
];

export type Order = {
  id: string;
  customer: Customer;
  products: {
    product: Product;
    quantity: number;
  }[];
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
  total: number;
  paymentMethod: string;
};

export const mockOrders: Order[] = [
  {
    id: "o1",
    customer: mockCustomers[0], 
    products: [
      { product: mockProducts[0], quantity: 1 },
      { product: mockProducts[6], quantity: 1 }
    ],
    status: "completed",
    date: "2023-04-05T14:20:00",
    total: 74.98,
    paymentMethod: "Carte bancaire"
  },
  {
    id: "o2",
    customer: mockCustomers[1],
    products: [
      { product: mockProducts[5], quantity: 1 }
    ],
    status: "completed",
    date: "2023-04-18T11:10:00",
    total: 129.99,
    paymentMethod: "PayPal"
  },
  {
    id: "o3",
    customer: mockCustomers[3],
    products: [
      { product: mockProducts[2], quantity: 1 },
      { product: mockProducts[3], quantity: 1 },
      { product: mockProducts[7], quantity: 1 }
    ],
    status: "pending",
    date: "2023-04-10T09:05:00",
    total: 109.97,
    paymentMethod: "Carte bancaire"
  },
  {
    id: "o4",
    customer: mockCustomers[0],
    products: [
      { product: mockProducts[9], quantity: 2 }
    ],
    status: "cancelled",
    date: "2023-03-28T15:40:00",
    total: 59.98,
    paymentMethod: "Carte bancaire"
  }
];
