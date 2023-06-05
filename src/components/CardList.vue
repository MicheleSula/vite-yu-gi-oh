<script>
import { store } from '../store';
import SingleCard from './SingleCard.vue';

export default (await import('vue')).defineComponent({
    name: "CardList",
    components: {
        SingleCard
    },
    props: ['selectedArchetype'],
    data() {
        return {
            store,
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
