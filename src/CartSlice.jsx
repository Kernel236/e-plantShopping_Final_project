import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Stato iniziale per gli articoli nel carrello
  },
  reducers: {
    // Aggiunge un articolo al carrello
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Dati dell'articolo
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1; // Incrementa la quantità se l'articolo esiste già
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Aggiunge un nuovo articolo
      }
    },
    // Rimuove un articolo dal carrello
    removeItem: (state, action) => {
      const name = action.payload; // Nome dell'articolo da rimuovere
      state.items = state.items.filter(item => item.name !== name);
    },
    // Aggiorna la quantità di un articolo
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Dati dell'articolo da aggiornare
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Aggiorna la quantità
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
