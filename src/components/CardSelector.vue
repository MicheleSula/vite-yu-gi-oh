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
    <section id="selection-menu">
        <select v-model="store.selectedArchetype" @change="$emit('archetype-selected', selectedArchetype)">
            <option value="">All archetypes</option>
            <option v-for="archetype in store.archetypes" :value="archetype">{{ archetype }}</option>
        </select>
        <div class="d-flex">
            <input type="checkbox" v-model="store.spellCards" @change="$emit('spell-selected', spellCards)">
            <h2>Carte magia</h2>
        </div>
        <div class="d-flex">
            <input type="checkbox" v-model="store.trapCards" @change="$emit('trap-selected', trapCards)">
            <h2>Carte trappola</h2>
        </div>
        <div>Carte trovate: {{ store.filteredCards.length }}</div>
    </section>
</template>

<style scoped lang="scss">
#selection-menu {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 3px black solid;
}

.d-flex {
    display: flex;
}
</style>