
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      id: 'products',
      name: 'Produits et services',
      questions: [
        {
          id: 'q1',
          question: "Comment choisir les bons produits pour mon type de peau ?",
          answer: "Pour choisir les produits adaptés à votre type de peau, commencez par identifier si votre peau est sèche, grasse, mixte ou sensible. Nous proposons des guides détaillés pour chaque type de peau dans notre section blog. De plus, vous pouvez contacter nos experts beauté pour des conseils personnalisés."
        },
        {
          id: 'q2',
          question: "Les produits sont-ils testés sur les animaux ?",
          answer: "Non, tous nos produits sont cruelty-free. Nous travaillons uniquement avec des marques qui ne pratiquent pas de tests sur les animaux."
        },
        {
          id: 'q3',
          question: "Comment entretenir ma perruque ?",
          answer: "L'entretien de votre perruque dépend du type de cheveux (naturels ou synthétiques). En général, il est recommandé de la laver délicatement avec un shampooing spécial perruque, de ne pas utiliser d'eau trop chaude, de la sécher à l'air libre sur un support adapté et de la coiffer avec des brosses spécifiques."
        }
      ]
    },
    {
      id: 'orders',
      name: 'Commandes et livraisons',
      questions: [
        {
          id: 'q4',
          question: "Quels sont les délais de livraison ?",
          answer: "Les délais de livraison varient selon votre localisation. En France métropolitaine, la livraison standard prend généralement 2 à 3 jours ouvrés. Pour les livraisons internationales, comptez 5 à 10 jours ouvrés. Vous pouvez suivre votre commande en temps réel depuis votre compte client."
        },
        {
          id: 'q5',
          question: "Comment puis-je suivre ma commande ?",
          answer: "Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pouvez également suivre votre commande depuis votre compte client dans la section 'Mes commandes'."
        },
        {
          id: 'q6',
          question: "Quelle est votre politique de retour ?",
          answer: "Vous disposez de 14 jours à compter de la réception de votre commande pour nous retourner un produit qui ne vous conviendrait pas. Les produits doivent être non ouverts et dans leur emballage d'origine. Les frais de retour sont à votre charge sauf en cas de produit défectueux ou d'erreur de notre part."
        }
      ]
    },
    {
      id: 'services',
      name: 'Services et rendez-vous',
      questions: [
        {
          id: 'q7',
          question: "Comment annuler ou modifier un rendez-vous ?",
          answer: "Vous pouvez annuler ou modifier votre rendez-vous jusqu'à 24h avant l'heure prévue sans frais. Pour cela, connectez-vous à votre compte et accédez à la section 'Mes rendez-vous', ou contactez-nous par téléphone."
        },
        {
          id: 'q8',
          question: "Proposez-vous des services à domicile ?",
          answer: "Oui, nous proposons certains services à domicile comme le maquillage pour événements spéciaux et certains soins capillaires. Les disponibilités varient selon votre zone géographique. Consultez notre page 'Services à domicile' pour plus d'informations."
        }
      ]
    },
    {
      id: 'account',
      name: 'Compte et paiement',
      questions: [
        {
          id: 'q9',
          question: "Comment créer un compte ?",
          answer: "Pour créer un compte, cliquez sur 'S'inscrire' dans le menu principal et remplissez le formulaire avec vos informations personnelles. Vous recevrez ensuite un email de confirmation pour activer votre compte."
        },
        {
          id: 'q10',
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, ainsi que les virements bancaires pour les commandes importantes."
        }
      ]
    }
  ];
  
  // Filtrer les questions en fonction de la recherche
  const filteredFAQs = searchQuery 
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Foire Aux Questions</h1>
      <p className="text-gray-600 mb-6">
        Trouvez des réponses aux questions les plus fréquemment posées.
      </p>
      
      {/* Recherche */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="text" 
            placeholder="Rechercher dans les questions..." 
            className="w-full pl-10 pr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* FAQ contenu */}
      {filteredFAQs.length > 0 ? (
        <div className="space-y-8">
          {filteredFAQs.map(category => (
            category.questions.length > 0 && (
              <div key={category.id}>
                <h2 className="text-xl font-medium mb-4">{category.name}</h2>
                <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                  {category.questions.map(item => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pt-0 pb-3">
                        <p className="text-gray-700">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-2">Aucun résultat trouvé</h2>
          <p className="text-gray-500 mb-6">
            Nous n'avons trouvé aucune réponse correspondant à votre recherche.
          </p>
          <Button onClick={() => setSearchQuery('')}>Voir toutes les FAQ</Button>
        </div>
      )}
      
      {/* Contact section */}
      <div className="mt-12 bg-white rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-medium mb-2">Vous n'avez pas trouvé votre réponse ?</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          N'hésitez pas à nous contacter directement. Notre équipe est là pour vous aider.
        </p>
        <Button asChild>
          <Link to="/contact">Nous contacter</Link>
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
