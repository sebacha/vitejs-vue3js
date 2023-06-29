
<template>
  <div class="app" id="app">
    <!-- Content -->
    <article class="content">
      <!-- Favorites -->
      <div class="favorites">
        <transition-group name="list">
          <div
            class="favorite"
            v-for="favorites in allFavorite"
            key="favorite.id"
          >
            <a
              class="fav_avatar_info"
              @click.prevent="showFavorite(favorites), cleanerror()"
              href="#"
              target="_blank"
            >
              <img
                :src="favorites.avatar_url"
                alt="favorites.name"
                class="favorite__avatar"
              />
            </a>
          </div>
        </transition-group>
      </div>

      <h1 class="content__title">Search Github users</h1>

      <!-- v-on = @ , v-bind = : -->
      <!-- search -->
      <form class="search" method="post" @:submit.prevent="doSearch()">
        <input
          v-model="search"
          type="text"
          class="search__input"
          required
          placeholder="Search Github user"
        />
        <input type="submit" class="search__submit" value="Search" />
      </form>

      <!-- Result -->
      <Transition>
        <app-profile
          v-if="result"
          :result="result"
          :is-favorite="isFavorite"
          @add-favorite="addFavorite"
          @remove-Favorite="removeFavorite"
        />
      </Transition>

      <!-- Error -->
      <div class="result__error" v-if="error" v-bind="error">
        {{ error }}
      </div>
    </article>
  </div>
</template>

<style>
/* General */
* {
  box-sizing: border-box;
}

body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7%, 1fr));
  grid-auto-rows: minmax(auto 200px);
  gap: 2rem;

  font-family: sans-serif;
  align-items: center;
  background-color: darkslateblue;
  font-size: 1.3rem;
}

.app {
  grid-column: 2 / span 5;
  grid-row: 2 / 3;
}

/* github */
.content {
  grid-column: span 2;
  background-color: lightgrey;
  padding: 20px;
  box-shadow: 2px 2px 3px gray;
  border-radius: 1rem;
}

.content__title {
  margin: 1rem;
  text-align: center;
}

/* Search */
.search {
  display: grid;
  grid-auto-flow: column;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.search__input {
  padding: 1rem;
  font-size: 1rem;
}

/* Result */
.result {
  position: relative;
  background-color: purple;
  border-radius: 0.3rem;
  box-shadow: 2px 2px 3px gray;
  color: white;
  padding: 1rem;
  text-align: center;
}

.result__toggle-favorite {
  position: absolute;
  top: 0rem;
  right: 0.3rem;
  border: none;
  color: white;
  text-decoration: none;
  padding: 0.2rem;
}

.result__name {
  margin: 0.4rem;
}

.result__avatar {
  padding-top: 1rem;
  max-width: 4rem;
  border-radius: 1rem;
}

.result__bio {
  margin: 0;
}

.result__blog {
  word-wrap: break-word;
  color: goldenrod;
}

.result__error {
  padding: 0.3rem;
  background-color: tomato;
  color: white;
  text-align: center;
  border: 1px solid red;
}

/* Favorites */
.favorites {
  display: flex;

  top: 0;
  left: 0;
  width: 100%;
  background-color: darkgrey;
  border-radius: 1rem;
}

.favorite {
  transition: transform 0.3s ease-out;
}

.favorite__avatar {
  height: 2.5rem;
  margin-top: 0.4rem;
  margin-left: 0.6rem;
}

.favorite--selected {
  transform: scale(1.3);
}

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
     animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.algo {
  grid-column: span 2;
  padding: 20px;
  background-color: lightgrey;
  border-radius: 1rem;
}
</style>
