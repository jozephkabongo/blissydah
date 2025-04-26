
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await signIn(email, password);
      if (success) {
        navigate('/account');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-playfair font-semibold mb-2 text-center">Connexion</h1>
        <p className="text-gray-600 mb-8 text-center">
          Connectez-vous pour accéder à votre compte
        </p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <Link to="/auth/reset-password" className="text-xs text-primary-foreground hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Connexion en cours...' : 'Se connecter'}
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">ou</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                Continuer avec Google
              </Button>
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm">
            Vous n'avez pas de compte ?{' '}
            <Link to="/auth/register" className="font-medium text-primary-foreground hover:underline">
              Créer un compte
            </Link>
          </p>
          
          <div className="mt-6 pt-6 border-t text-center text-xs text-gray-500">
            <p>
              Pour faciliter le test de notre plateforme, vous pouvez utiliser :
            </p>
            <p className="mt-2">
              <strong>Client :</strong> user@example.com / password123<br />
              <strong>Admin :</strong> admin@blushbeauty.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
