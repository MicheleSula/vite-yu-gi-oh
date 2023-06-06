<script>
import { store } from '../store.js';


export default (await import('vue')).defineComponent({
    name: "CardSelector",
    data() {
        return {
            store,
        }
    }
})
</script>

<template>
    <select v-model="store.selectedArchetype" @change="$emit('archetype-selected', selectedArchetype)">
        <option value="">All archetypes</option>
        <option value="Alien">Alien</option>
        <option value="Myutant">Myutant</option>
        <option value="Noble Knight">Noble Knight</option>
        <option value="Melodious">Melodious</option>
        <option value="Elemental HERO">Elemental HERO</option>
        <option value="Umi">Umi</option>
    </select>
    <label>
        <input type="checkbox" v-model="store.spellCards" @change="$emit('spell-selected', spellCards)">Mostra solo carte
        magiche
    </label>
    <div>Carte trovate: {{ store.filteredCards.length }}</div>
</template>
