<template>
  <div v-if="loading">
    Loading
  </div>
  <div v-else-if="filmCounts">
    Список фільмів пустий
  </div>
  <div v-else>
    <div>
      <button @click="takeFilm" ref="butFilm">Вибрати фільм серед списку</button>
    </div>
    <div v-if="winner">
      <h2>{{films[winner - 1]['name']}}</h2>
      <button @click="showFilms">Показати фільми</button>
      <ul v-if="getFilms">
        <li v-for="film in films" :key="film.id">
          Назва - {{film.name}} Хто вписав - {{film.author}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      getFilms: false,
      films: [],
      winner: '',
      filmCounts: false
    }
  },
  mounted() {
    fetch('https://films-94fd4.firebaseio.com/films.json')
        .then(response => response.json())
        .then(data => {
          if (data) {
            for(const film in data) {
              this.films.push({id: film, name: data[film].name, author: data[film].author})
              this.loading = false
            }
          } else {
            this.loading = false
            this.filmCounts = true
          }
        })
  },
  methods: {
    takeFilm() {
      if (this.loading === false) {
        this.winner = Math.floor(Math.random() * (this.films.length) + 1)
        console.log(this.winner)
        this.$refs.butFilm.disabled = true
      }
    },
    showFilms() {
      this.getFilms = true
    }
  }
}
</script>
<style>
ul {
  list-style: none;
}
</style>