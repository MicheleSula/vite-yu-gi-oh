<script>
import { store } from '../store';


export default (await import('vue')).defineComponent({
    name: "CardSelector",
    data() {
        return {
            store,
            selectedArchetype: null,
            spellCards: null,
        }
    },
    computed: {
        filteredCards() {
            let cards = this.store.CardList;
            if (this.selectedArchetype) {
                cards = cards.filter(card => card.archetype === this.selectedArchetype);
            }
            if (this.spellCards) {
                cards = cards.filter(card => card.type === 'Spell Card');
            }
            console.log("Le carte selezionate sono:" + cards);
            return cards;
        }
    }
})
</script>

<template>
    <select v-model="selectedArchetype" @change="$emit('archetype-selected', selectedArchetype)">
        <option value="">All archetypes</option>
        <option value="Alien">Alien</option>
        <option value="Myutant">Myutant</option>
        <option value="Noble Knight">Noble Knight</option>
        <option value="Melodious">Melodious</option>
        <option value="Elemental HERO">Elemental HERO</option>
        <option value="Umi">Umi</option>
    </select>
    <label>
        <input type="checkbox" v-model="spellCards" @change="$emit('spell-selected', spellCards)">Mostra solo carte
        magiche
    </label>
    <div>Carte trovate: {{ filteredCards.length }}</div>
</template>
