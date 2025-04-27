
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, MessageCircle, Share2, ArrowLeft, Calendar } from 'lucide-react';

// Données fictives pour les posts de blog
const blogPosts = [
  {
    id: '1',
    title: "Les tendances maquillage de l'été 2023",
    slug: "tendances-maquillage-ete-2023",
    excerpt: "Découvrez les couleurs et techniques qui feront sensation cet été.",
    content: `
    <p>L'été 2023 s'annonce coloré et lumineux dans le monde du maquillage. Les tendances qui émergent mettent l'accent sur une peau naturelle et éclatante, avec des touches de couleurs vibrantes stratégiquement placées.</p>

    <h2>1. Le "Glazed Skin"</h2>
    <p>Adieu le mat, bonjour l'éclat ! La peau "glazed" (glacée) est LA tendance phare de la saison. Le principe ? Une peau ultra-hydratée qui reflète subtilement la lumière, comme si elle était recouverte d'une fine couche de rosée. Pour obtenir cet effet :</p>
    <ul>
      <li>Misez sur une routine skincare complète avant le maquillage</li>
      <li>Utilisez des bases illuminatrices et des fondations légères</li>
      <li>Appliquez un highlighter crème sur les points hauts du visage</li>
      <li>Fixez avec une brume hydratante</li>
    </ul>

    <h2>2. Le blush "sunburnt"</h2>
    <p>Cette saison, le blush s'applique généreusement pour imiter l'effet d'un léger coup de soleil. Il se place sur le haut des pommettes et s'étire jusqu'au nez, dans des tons corail ou pêche qui réchauffent instantanément le teint.</p>

    <h2>3. Les fards à paupières pastel</h2>
    <p>Les couleurs douces mais pigmentées sont à l'honneur : lavande, bleu ciel, vert menthe ou jaune pâle. Pour un look encore plus tendance, appliquez-les en monochrome sur toute la paupière, ou optez pour un dégradé subtil.</p>

    <h2>4. Les lèvres juteuses</h2>
    <p>Les gloss font leur grand retour, mais en version améliorée : hydratants, non-collants et légèrement teintés. L'objectif est d'obtenir des lèvres qui semblent naturellement pulpeuses et hydratées.</p>

    <h2>5. Les sourcils "feathered"</h2>
    <p>Finis les sourcils ultra-définis ! Cette saison, on les veut naturels, légèrement ébouriffés et fixés vers le haut pour un effet "plume" très frais.</p>

    <p>Quelle que soit la tendance que vous choisirez d'adopter, rappelez-vous que le maquillage doit avant tout vous faire sentir bien dans votre peau et exprimer votre personnalité. Alors amusez-vous, expérimentez, et surtout, restez fidèle à vous-même !</p>
    `,
    image: 'https://images.unsplash.com/photo-1599947388192-a168d6b47fe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    date: '2023-06-15',
    author: {
      name: 'Sophie Martin',
      avatar: '/avatar-sophie.jpg',
      role: 'Maquilleuse Professionnelle'
    },
    likes: 124,
    comments: 32
  },
  {
    id: '2',
    title: "Comment prendre soin de vos cheveux bouclés",
    slug: "soin-cheveux-boucles",
    excerpt: "Conseils d'experts pour sublimer vos boucles naturellement.",
    content: `
    <p>Les cheveux bouclés sont magnifiques mais peuvent parfois être capricieux. Voici nos conseils pour en prendre soin et sublimer vos boucles.</p>

    <h2>1. Adoptez le co-washing</h2>
    <p>Lavez vos cheveux principalement avec un après-shampooing adapté aux cheveux bouclés. Cette méthode permet de nettoyer les cheveux sans les assécher, ce qui est idéal pour définir les boucles.</p>

    <h2>2. Dites adieu aux brosses</h2>
    <p>Utilisez uniquement un peigne à larges dents ou vos doigts pour démêler vos cheveux lorsqu'ils sont humides et enduits d'après-shampooing.</p>

    <h2>3. Séchage à l'air libre</h2>
    <p>Évitez autant que possible les sèche-cheveux qui peuvent créer des frisottis. Si vous devez utiliser un sèche-cheveux, optez pour un diffuseur et utilisez-le à basse température.</p>

    <h2>4. Hydratation intensive</h2>
    <p>Les cheveux bouclés ont tendance à être secs. Faites régulièrement des masques hydratants et utilisez des huiles capillaires légères pour nourrir vos boucles.</p>

    <h2>5. La méthode du "plopping"</h2>
    <p>Après la douche, appliquez vos produits coiffants puis enroulez vos cheveux dans un t-shirt en coton pendant 10-20 minutes. Cette technique permet de définir les boucles tout en éliminant l'excès d'eau.</p>

    <p>Avec ces conseils, vos boucles seront définies, rebondies et pleines de vie !</p>
    `,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    date: '2023-07-03',
    author: {
      name: 'Laura Dubois',
      avatar: '/avatar-laura.jpg',
      role: 'Styliste Capillaire'
    },
    likes: 98,
    comments: 45
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Trouver le post correspondant au slug
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Article introuvable</h1>
        <p className="mb-6">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <Button asChild>
          <Link to="/blog">Retour au blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header avec bouton retour */}
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0 mb-2">
          <Link to="/blog" className="flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Retour au blog
          </Link>
        </Button>
      </div>
      
      {/* Image principale */}
      <div className="rounded-xl overflow-hidden h-64 md:h-96 mb-8">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* En-tête article */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-1" />
            {post.date}
          </div>
        </div>
        
        {/* Contenu de l'article */}
        <div 
          className="prose max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <Separator className="my-8" />
        
        {/* Actions et statistiques */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <Heart size={18} /> 
              <span>{post.likes}</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <MessageCircle size={18} /> 
              <span>{post.comments}</span>
            </Button>
          </div>
          
          <Button variant="ghost" className="flex items-center gap-2">
            <Share2 size={18} /> 
            Partager
          </Button>
        </div>
        
        {/* Section commentaires - version simplifiée */}
        <div>
          <h2 className="text-xl font-medium mb-4">Commentaires ({post.comments})</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-medium mb-2">Laissez un commentaire</h3>
            <textarea 
              className="w-full border rounded-md p-3 mb-3" 
              rows={4}
              placeholder="Partagez votre opinion..."
            ></textarea>
            <Button>Publier</Button>
          </div>
          
          {/* Exemple de commentaire */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/avatar-user.jpg" alt="Utilisateur" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium">Utilisateur</p>
                  <span className="text-xs text-gray-500">il y a 2 jours</span>
                </div>
                <p className="text-gray-700">
                  Super article ! J'ai appris beaucoup de choses sur les tendances à venir.
                </p>
                <div className="mt-2 text-sm">
                  <button className="text-gray-500 mr-4 hover:text-primary-foreground">Répondre</button>
                  <button className="text-gray-500 hover:text-primary-foreground flex items-center">
                    <Heart size={14} className="mr-1" /> 
                    12
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
