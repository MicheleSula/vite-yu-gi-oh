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
        <option value="ABC">ABC</option>
        <option value="A.I.">A.I.</option>
        <option value="@Ignister">Ignister</option>
        <option value="Unchained">Unchained</option>
        <option value="Gem-">Gem</option>
        <option value="Rokket">Rokket</option>
        <option value="Abyss Actor">Abyss Actor</option>
        <option value="Mermail">Mermail</option>
        <option value="Stardust">Stardust</option>
    </select>
    <div>
        <input type="checkbox" v-model="store.spellCards" @change="$emit('spell-selected', spellCards)">
        <h2>Mostra solo carte
            magia</h2>
    </div>
    <div>
        <input type="checkbox" v-model="store.trapCards" @change="$emit('trap-selected', trapCards)">
        <h2>Mostra solo carte
            trappola</h2>
    </div>
    <div>Carte trovate: {{ store.filteredCards.length }}</div>
</template>
