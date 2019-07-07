<template>
    <div>
        <!-- {{ $route.params.species }}
        {{ $route.params.id }} -->
        <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
        <p>{{ animal.age }}</p>
        <p>{{ animal.breed }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            animal: {}
        }
    },
    computed: {
        // cats() {
        //     return this.$store.state.cats
        // }
        ...mapState([
            'cats',
            'dogs'
        ])
    },
    mounted() {
        const animal = this[this.$route.params.species][this.$route.params.id]
        this.animal = animal
    }
}
</script>
