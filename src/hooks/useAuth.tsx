
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin' | 'super-admin';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, name: string) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('blush-beauty-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('blush-beauty-user');
      }
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Dans une implémentation réelle, ceci serait un appel API
      // Pour le moment, nous allons simuler un login avec des utilisateurs mockés
      if (email === 'admin@blushbeauty.com' && password === 'admin123') {
        const adminUser: User = {
          id: '1',
          email,
          name: 'Admin User',
          role: 'admin',
          createdAt: new Date().toISOString(),
        };
        setUser(adminUser);
        localStorage.setItem('blush-beauty-user', JSON.stringify(adminUser));
        toast({
          title: 'Connexion réussie',
          description: 'Bienvenue dans l\'interface d\'administration.',
        });
        return true;
      } else if (email === 'user@example.com' && password === 'password123') {
        const customerUser: User = {
          id: '2',
          email,
          name: 'Client Example',
          role: 'customer',
          createdAt: new Date().toISOString(),
        };
        setUser(customerUser);
        localStorage.setItem('blush-beauty-user', JSON.stringify(customerUser));
        toast({
          title: 'Connexion réussie',
          description: 'Bienvenue dans votre compte client.',
        });
        return true;
      } else {
        toast({
          variant: 'destructive',
          title: 'Erreur de connexion',
          description: 'Email ou mot de passe incorrect.',
        });
        return false;
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur de connexion',
        description: 'Une erreur est survenue. Veuillez réessayer.',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Dans une implémentation réelle, ceci serait un appel API
      // Pour le moment, nous allons simuler une inscription réussie
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        email,
        name,
        role: 'customer',
        createdAt: new Date().toISOString(),
      };
      
      setUser(newUser);
      localStorage.setItem('blush-beauty-user', JSON.stringify(newUser));
      
      toast({
        title: 'Compte créé avec succès',
        description: 'Bienvenue sur Blush Beauty!',
      });
      
      return true;
    } catch (error) {
      console.error('Sign up error:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur d\'inscription',
        description: 'Une erreur est survenue. Veuillez réessayer.',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('blush-beauty-user');
    toast({
      description: 'Vous êtes maintenant déconnecté.',
    });
  };

  const isAdmin = user?.role === 'admin' || user?.role === 'super-admin';

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAdmin,
      signIn,
      signUp,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
