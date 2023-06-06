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
    <div id="card">
        <div>
            <!-- Nome carta -->
            <h2>{{ details.name }}</h2>
            <!-- Immagine carta -->
            <img v-if="isVisible" :src="details.card_images[0].image_url">
        </div>
    </div>
</template>

<style scoped lang="scss">
#cards-container {
    height: calc(100vh - 150px);
    background-color: olive;
}

#card {
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: antiquewhite;

    h2 {
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
    }

    img {
        width: 300px;
        height: 500px;
    }
}
</style>
  