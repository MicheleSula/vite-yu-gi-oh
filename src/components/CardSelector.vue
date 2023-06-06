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
        <option v-for="archetype in store.archetypes" :value="archetype">{{ archetype }}</option>
    </select>
    <div>
        <input type="checkbox" v-model="store.spellCards" @change="$emit('spell-selected', spellCards)">
        <h2>Mostra solo carte magia</h2>
    </div>
    <div>
        <input type="checkbox" v-model="store.trapCards" @change="$emit('trap-selected', trapCards)">
        <h2>Mostra solo carte trappola</h2>
    </div>
    <div>Carte trovate: {{ store.filteredCards.length }}</div>
</template>
