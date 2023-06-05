<script>
export default (await import('vue')).defineComponent({
    name: "SingleCard",
    props: {
        details: Object
    },
    data() {
        return {
            isVisible: false,
            observer: null
        }
    },
    mounted() {
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.isVisible = true;
                    this.observer.disconnect();
                }
            });
        });
        this.observer.observe(this.$el);
        // console.log(this.details);
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
});
</script>

<template>
    <div>
        <!-- Nome carta -->
        <h2>{{ details.name }}</h2>
        <!-- Immagine carta -->
        <img v-if="isVisible" :src="details.card_images[0].image_url">
    </div>
</template>

<style scoped>
#cards-container {
    height: calc(100vh - 150px);
    background-color: olive;
}

#card {
    height: 200px;
    width: 150px;
}

img {
    width: 200px;
    height: 400px;
}
</style>
  