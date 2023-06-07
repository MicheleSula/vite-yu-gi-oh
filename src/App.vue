<script>
import { store } from '../src/store.js';
import axios from 'axios';
import CardList from './components/CardList.vue'
import Loader from './components/Loader.vue';
import CardSelector from './components/CardSelector.vue';

export default (await import('vue')).defineComponent({
  components: {
    CardList,
    Loader,
    CardSelector,
  },
  data() {
    return {
      store,
      isLoading: false,
    }
  },
  methods: {
    getCard() {
      this.isLoading = true;
      axios.get(store.apiURL)
        .then(result => {
          store.CardList = result.data.data;
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
        })
    }
  },
  created() {
    this.getCard();
  }
});
</script>

<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <header>
      <h1 id="page-title">Yu-GI-OH Deck Builder</h1>
    </header>

    <CardSelector @archetype-selected="selectedArchetype = $event" @spell-selected="spellCards = $event"
      @trap-selected="trapCards = $event">
    </CardSelector>

    <main>
      <div id="cards-container" class="container">
        <CardList :selectedArchetype="selectedArchetype" :spell-cards="spellCards" :trap-cards="trapCards" />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7d3e12 !important;
  border-bottom: #b4642a 4px solid;

  #page-title {
    color: white;
    font-size: 50px;
    font-weight: bold;
  }
}

main {
  height: calc(100vh - 180px);

  #cards-container {
    overflow: auto;
    background-color: rgb(165, 76, 76);
    margin: auto;
    border: #7d3e12 2px ridge;
  }
}
</style>
