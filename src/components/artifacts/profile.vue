
app.component('app-profile', {

        props: ['result', 'isFavorite'],

        methods: {
            addFavorite() {
                this.$emit('addFavorite')
            },
            removeFavorite() {
                this.$emit('removeFavorite')
            }
        },
        template: `
            <div class="result">
                <a v-if="isFavorite" href="#" class="result__toggle-favorite" @click="removeFavorite"> Remove</a>
                <a v-else href="#" class="result__toggle-favorite" @click="addFavorite">Add Favorite </a>
                <img v-bind:src="result.avatar_url" :alt="result.name" class="result__avatar">
                <br>
                <h2 class="result__name">{{ result.name }}</h2> 
                <p class="result_bio">
                    {{ result.bio }}
                    <br>
                    <a v-bind:href="result.blog" target="_blank" class="result__blog">{{ result.blog }}</a>
                </p>
            </div>
        `

    } )
    