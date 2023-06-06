import { reactive, computed } from "vue";

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    CardList: [],
    selectedArchetype: null,
    spellCards: null,
    trapCards: null,
    filteredCards: computed(() => {
        let cards = store.CardList;
        if (store.selectedArchetype) {
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