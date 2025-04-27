
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">À Propos de Nous</h1>
      
      {/* Hero section */}
      <div className="relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-96 mb-12">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
          alt="Notre équipe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-6 md:p-12 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-3">Notre Histoire</h2>
            <p className="mb-4">
              Depuis 2015, Blush Beauty s'engage à offrir des produits de beauté de qualité et des services exceptionnels.
            </p>
          </div>
        </div>
      </div>
      
      {/* Notre mission */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-playfair font-semibold mb-4">Notre Mission</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-700 mb-4">
            Chez Blush Beauty, nous croyons que chaque personne mérite de se sentir belle et confiante. Notre mission est de fournir des produits cosmétiques et des services de beauté de haute qualité qui mettent en valeur la beauté naturelle de chacun.
          </p>
          <p className="text-gray-700 mb-4">
            Nous nous engageons à sélectionner des produits respectueux de l'environnement et de votre peau. La durabilité et l'éthique sont au cœur de nos valeurs.
          </p>
          <p className="text-gray-700">
            Notre équipe d'experts beauté est passionnée et formée pour vous offrir les meilleurs conseils et services personnalisés, adaptés à vos besoins spécifiques.
          </p>
        </div>
      </div>
      
      {/* Nos valeurs */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-playfair font-semibold mb-4">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
              <span className="text-xl font-semibold">1</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Qualité</h3>
            <p className="text-gray-600">
              Nous sélectionnons rigoureusement chaque produit et formons constamment notre équipe pour offrir des services d'excellence.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
              <span className="text-xl font-semibold">2</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Inclusion</h3>
            <p className="text-gray-600">
              La beauté n'a pas de définition unique. Nous célébrons toutes les beautés et proposons des produits adaptés à toutes les carnations et types de peau.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
              <span className="text-xl font-semibold">3</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Durabilité</h3>
            <p className="text-gray-600">
              Nous privilégions les produits éco-responsables et les fournisseurs qui partagent notre engagement envers la planète.
            </p>
          </div>
        </div>
      </div>
      
      {/* Notre équipe */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-playfair font-semibold mb-4">Notre Équipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-15651234${i}9203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80`}
                  alt={`Membre d'équipe ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">Emma Martin</h3>
                <p className="text-primary-foreground text-sm mb-2">Maquilleuse professionnelle</p>
                <p className="text-gray-600 text-sm">
                  Passionnée par l'art du maquillage depuis plus de 10 ans.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bannière de contact */}
      <div className="bg-primary text-primary-foreground rounded-lg shadow-sm p-8 text-center">
        <h2 className="text-xl font-medium mb-3">Vous avez des questions ?</h2>
        <p className="mb-6 max-w-lg mx-auto">
          Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question ou préoccupation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/contact">Nous contacter</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            <Link to="/faq">Consulter la FAQ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
