<script>
import { store } from '../store';
import SingleCard from './SingleCard.vue';

export default (await import('vue')).defineComponent({
    name: "CardList",
    components: {
        SingleCard
    },
    props: ['selectedArchetype',
        'spellCards'],
    data() {
        return {
            store,
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
            return cards;
        }
    }
})
</script>

<template>
    <section id="cards-container">
        <div v-for="card in filteredCards" :key="card.id">
            <SingleCard :details="card"></SingleCard>
        </div>
    </section>
</template>

<style scoped>
#cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
