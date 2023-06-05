<script>
import { store } from '../store';


export default (await import('vue')).defineComponent({
    name: "CardSelector",
    data() {
        return {
            store,
            selectedArchetype: null,
        }
    },
    computed: {
        filteredCards() {
            if (this.selectedArchetype) {
                return this.store.CardList.filter(card => card.archetype === this.selectedArchetype);
            } else {
                return this.store.CardList;
            }
        }
    }
})
</script>

<template>
    <select v-model="selectedArchetype" @change="$emit('archetype-selected', selectedArchetype)">
        <option value="">All archetypes</option>
        <option value="Alien">Alien</option>
        <option value="Myutant">Myutant</option>
    </select>
</template>
