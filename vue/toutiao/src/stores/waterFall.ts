import {defineStore} from "pinia";
import { WaterFallCards } from "@/types/waterFallCards";

export const useWaterfallStore = defineStore('waterfall', {
    state: () => ({
      cards: [] as WaterFallCards[]
    }),
    actions: {
      setCards(cards: WaterFallCards[]) {
        this.cards = cards;
      }
    }
  });

  const initialCards: WaterFallCards[] = [
    { id: 1, title: 'Card 1', description: 'Description 1', img: 'https://via.placeholder.com/300x400', width: 300, height: 400 },
    { id: 2, title: 'Card 2', description: 'Description 2', img: 'https://via.placeholder.com/300x500', width: 300, height: 500 },
    { id: 3, title: 'Card 3', description: 'Description 3', img: 'https://via.placeholder.com/300x600', width: 300, height: 600 },
    { id: 4, title: 'Card 4', description: 'Description 4', img: 'https://via.placeholder.com/300x300', width: 300, height: 300 },
    { id: 5, title: 'Card 5', description: 'Description 5', img: 'https://via.placeholder.com/300x350', width: 300, height: 350 },
    { id: 6, title: 'Card 6', description: 'Description 6', img: 'https://via.placeholder.com/300x450', width: 300, height: 450 },
    { id: 7, title: 'Card 7', description: 'Description 7', img: 'https://via.placeholder.com/300x500', width: 300, height: 500 },
    { id: 8, title: 'Card 8', description: 'Description 8', img: 'https://via.placeholder.com/300x550', width: 300, height: 550 },
    { id: 9, title: 'Card 9', description: 'Description 9', img: 'https://via.placeholder.com/300x600', width: 300, height: 600 },
    { id: 10, title: 'Card 10', description: 'Description 10', img: 'https://via.placeholder.com/300x650', width: 300, height: 650 },
    { id: 11, title: 'Card 11', description: 'Description 11', img: 'https://via.placeholder.com/300x700', width: 300, height: 700 },
    { id: 12, title: 'Card 12', description: 'Description 12', img: 'https://via.placeholder.com/300x750', width: 300, height: 750 },
  ];
  
  const waterfallStore = useWaterfallStore();
  waterfallStore.setCards(initialCards);