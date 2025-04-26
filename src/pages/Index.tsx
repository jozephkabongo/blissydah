
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/Product/ProductGrid';
import { mockProducts } from '@/data/mock';

const Index = () => {
  const featuredProducts = mockProducts.slice(0, 8);
  const newArrivals = mockProducts.filter(p => p.category === 'cosmetics').slice(0, 4);
  
  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold leading-tight mb-4">
            Libérez votre beauté naturelle
          </h1>
          <p className="text-lg mb-8 text-white/90">
            Des produits cosmétiques de haute qualité, des services de coiffure professionnels et des perruques élégantes pour sublimer votre beauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary-foreground hover:bg-white/90">
              <Link to="/products">Explorer nos produits</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/services/book">Réserver un service</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center">Nos catégories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <CategoryCard 
            title="Cosmétiques" 
            image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            link="/products/cosmetics"
          />
          <CategoryCard 
            title="Perruques" 
            image="https://images.unsplash.com/photo-1595476108676-c7f5e2414def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            link="/products/wigs"
          />
          <CategoryCard 
            title="Soins" 
            image="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            link="/products/skincare"
          />
          <CategoryCard 
            title="Services" 
            image="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            link="/services"
          />
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold">Produits populaires</h2>
          <Button asChild variant="link">
            <Link to="/products">Voir tout</Link>
          </Button>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>
      
      {/* Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-4 text-primary-foreground">Services de coiffure professionnels</h2>
            <p className="text-primary-foreground/90 mb-8">
              Réservez un rendez-vous avec nos stylistes experts pour une transformation complète.
              Nous proposons une gamme de services allant des coupes de cheveux aux colorations et coiffures pour événements spéciaux.
            </p>
            <Button asChild size="lg" className="bg-white text-primary-foreground hover:bg-white/90">
              <Link to="/services/book">Réserver maintenant</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold">Nouveaux arrivages</h2>
          <Button asChild variant="link">
            <Link to="/products/new">Voir tout</Link>
          </Button>
        </div>
        <ProductGrid products={newArrivals} />
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-8 text-center">Ce que nos clients disent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <TestimonialCard 
              name="Marie L."
              quote="Les pro duits sont d'une qualité exceptionnelle et le service client est impeccable. Je recommande fortement!"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            />
            <TestimonialCard 
              name="Sophie D."
              quote="J'ai réservé un service de coiffure et je suis repartie complètement transformée. Je n'ai jamais été aussi satisfaite!"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            />
            <TestimonialCard 
              name="Camille F."
              quote="Les perruques sont non seulement magnifiques mais aussi confortables à porter. Je n'achèterai plus ailleurs!"
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Restez informé</h2>
          <p className="text-gray-600 mb-6">
            Abonnez-vous à notre newsletter pour recevoir nos offres exclusives et les dernières nouveautés.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow rounded-md border border-input px-4 py-2"
              required
            />
            <Button type="submit">S'abonner</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  return (
    <Link to={link} className="group block relative rounded-lg overflow-hidden aspect-square">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
        <h3 className="text-white font-medium">{title}</h3>
      </div>
    </Link>
  );
};

interface TestimonialCardProps {
  name: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, quote, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <h4 className="font-medium">{name}</h4>
      </div>
      <p className="text-gray-600 italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
};

export default Index;
