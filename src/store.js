import { reactive, computed } from "vue";
import axios from 'axios';

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    archetypes: [],
    spellCards: null,
    trapCards: null,

    filteredCards: computed(() => {
        let cards = store.CardList;
        if (store.selectedArchetype && store.archetypes.includes(store.selectedArchetype)) {
            cards = cards.filter(card => card.archetype === store.selectedArchetype);
        }
        if (store.spellCards && store.trapCards) {
            cards = cards.filter(card => card.type === 'Spell Card' || card.type === 'Trap Card');
        }
        else if (store.spellCards) {
            cards = cards.filter(card => card.type === 'Spell Card');
        }
        else if (store.trapCards) {
            cards = cards.filter(card => card.type === 'Trap Card');
        }
        return cards;
    }),
});

async function fetchArchetypes() {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php');
        store.archetypes = response.data.map(archetype => archetype.archetype_name);
    } catch (error) {
        console.error(error);
    }
}

fetchArchetypes();