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
      selectedArchetype: null,
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
  <header>
    <h1 id="page-title">Yu-GI-OH Deck Builder</h1>
  </header>

  <main>
    <CardSelector @archetype-selected="selectedArchetype = $event"></CardSelector>
    <div id="cards-container" class="container">
      <Loader v-if="isLoading" />
      <CardList v-else :selectedArchetype="selectedArchetype" />
    </div>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7d3e12 !important;

  #page-title {
    color: white;
  }
}

main {
  height: calc(100vh - 100px);
  background-color: beige;

  #cards-container {
    overflow: auto;
    background-color: white;
    margin: auto;
  }
}
</style>
