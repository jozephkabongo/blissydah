
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      itemCount: 0,
      totalPrice: 0,
      
      addItem: (product: Product, quantity: number = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.product.id === product.id);
        
        let newItems: CartItem[];
        
        if (existingItem) {
          newItems = currentItems.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          newItems = [...currentItems, { product, quantity }];
        }
        
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        
        set({ items: newItems, itemCount, totalPrice });
      },
      
      removeItem: (productId: string) => {
        const newItems = get().items.filter(item => item.product.id !== productId);
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        
        set({ items: newItems, itemCount, totalPrice });
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity < 1) return;
        
        const newItems = get().items.map(item => 
          item.product.id === productId ? { ...item, quantity } : item
        );
        
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        
        set({ items: newItems, itemCount, totalPrice });
      },
      
      clearCart: () => {
        set({ items: [], itemCount: 0, totalPrice: 0 });
      },
    }),
    {
      name: 'blush-beauty-cart',
    }
  )
);
