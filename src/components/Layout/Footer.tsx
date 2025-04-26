
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t hidden sm:block">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Blush Beauty</h3>
            <p className="text-sm text-gray-600">
              Votre destination beauté pour des produits cosmétiques de qualité, 
              des services de coiffure et des perruques élégantes.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Produits</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/cosmetics" className="text-gray-600 hover:text-primary-foreground">Cosmétiques</Link></li>
              <li><Link to="/products/wigs" className="text-gray-600 hover:text-primary-foreground">Perruques</Link></li>
              <li><Link to="/products/skincare" className="text-gray-600 hover:text-primary-foreground">Soins de la peau</Link></li>
              <li><Link to="/products/haircare" className="text-gray-600 hover:text-primary-foreground">Soins capillaires</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/hairstyling" className="text-gray-600 hover:text-primary-foreground">Coiffure</Link></li>
              <li><Link to="/services/makeup" className="text-gray-600 hover:text-primary-foreground">Maquillage</Link></li>
              <li><Link to="/services/consultation" className="text-gray-600 hover:text-primary-foreground">Consultation beauté</Link></li>
              <li><Link to="/services/book" className="text-gray-600 hover:text-primary-foreground">Réserver un service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-foreground">Nous contacter</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary-foreground">À propos</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary-foreground">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary-foreground">Conditions d'utilisation</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Blush Beauty. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
