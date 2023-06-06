<script>
import { store } from '../store';
import SingleCard from './SingleCard.vue';

export default (await import('vue')).defineComponent({
    name: "CardList",
    components: {
        SingleCard
    },
    data() {
        return {
            store
        }
    }
})
</script>

<template>
    <section id="cards-container">
        <div v-for="card in store.filteredCards" :key="card.id">
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
