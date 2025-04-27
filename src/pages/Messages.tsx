
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const Messages = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = React.useState<number | null>(0);
  
  // Conversations fictives pour démonstration
  const conversations = [
    { 
      id: 0, 
      name: 'Support Client', 
      avatar: '/avatar-support.jpg',
      lastMessage: 'Comment pouvons-nous vous aider ?',
      messages: [
        { id: 1, from: 'them', content: 'Bonjour, comment puis-je vous aider aujourd\'hui ?', time: '10:00' },
        { id: 2, from: 'me', content: 'Bonjour ! J\'ai une question concernant ma commande récente.', time: '10:05' },
        { id: 3, from: 'them', content: 'Bien sûr, pourriez-vous me donner le numéro de votre commande ?', time: '10:07' },
      ]
    },
    { 
      id: 1, 
      name: 'Service après-vente', 
      avatar: '/avatar-sales.jpg',
      lastMessage: 'Merci pour votre question...',
      messages: [
        { id: 1, from: 'them', content: 'Merci de nous contacter. Comment pouvons-nous vous aider ?', time: '09:30' },
        { id: 2, from: 'me', content: 'Je voudrais savoir si vous proposez des échantillons gratuits ?', time: '09:32' },
      ]
    },
  ];

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Accès non autorisé</h1>
        <p className="mb-6">Veuillez vous connecter pour accéder à votre messagerie.</p>
        <Button asChild>
          <Link to="/auth/login">Se connecter</Link>
        </Button>
      </div>
    );
  }

  const selectedChat = conversations.find(conv => conv.id === selectedConversation);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 flex items-center">
        <MessageCircle className="mr-2" size={24} />
        Messagerie
      </h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3 h-[80vh]">
        {/* Liste des conversations */}
        <div className="border-r">
          <div className="p-4 border-b">
            <Input placeholder="Rechercher une conversation..." />
          </div>
          <div className="overflow-y-auto h-[calc(80vh-73px)]">
            {conversations.map(conversation => (
              <div 
                key={conversation.id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedConversation === conversation.id ? 'bg-gray-50' : ''
                }`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <div className="flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{conversation.name}</p>
                      <p className="text-xs text-gray-500">10:30</p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Zone de conversation */}
        {selectedChat ? (
          <div className="col-span-2 flex flex-col h-full">
            <div className="p-4 border-b flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium">{selectedChat.name}</p>
                <p className="text-xs text-gray-500">En ligne</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {selectedChat.messages.map(message => (
                <div 
                  key={message.id}
                  className={`flex mb-4 ${message.from === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[70%] rounded-lg px-4 py-2 ${
                      message.from === 'me' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-gray-100'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className={`text-xs ${message.from === 'me' ? 'text-primary-foreground/70' : 'text-gray-500'} text-right`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex">
                <Textarea 
                  placeholder="Tapez votre message..." 
                  className="flex-1 mr-2 resize-none"
                  rows={2}
                />
                <Button className="h-full aspect-square">
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-span-2 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h2 className="text-xl font-medium mb-2">Sélectionnez une conversation</h2>
              <p className="text-gray-500">
                Choisissez une conversation pour commencer à discuter.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
