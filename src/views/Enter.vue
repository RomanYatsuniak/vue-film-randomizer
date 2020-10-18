<template>
  <div v-if="loading">
    Loading
  </div>
  <div v-else-if="empty">
    9 films chosen
  </div>
  <div v-else>
    <form @submit.prevent="sendFilm()">
      <label for="filmInput">Enter film</label>
      <input name="film" id="filmInput" type="text" placeholder="Enter your film" v-model="film"/> <br/>
      <label for="author">Enter tour name</label>
      <input id="author" type="text" placeholder="Enter your name" v-model="author"/><br>
      <button ref="btn">Send film</button>
    </form>
  </div>

</template>
<script>
export default {
  mounted() {
    fetch('https://films-94fd4.firebaseio.com/films.json')
      .then(response => response.json())
      .then(data => {if(data){if(Object.keys(data).length >=9) {this.empty = true}}})
  },
  data() {
    return {
      film: '',
      author: '',
      loading: false,
      empty: false
    }
  },
  methods: {
    sendFilm() {
      if (this.film === '' || this.author === '') {
        alert('Enter film and your name')
      } else {

        this.loading = true
        fetch('https://films-94fd4.firebaseio.com/films.json', {
          method: 'POST',
          body: JSON.stringify({name: this.film, author: this.author}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(
            response => {
              if (response.status === 200) {
                alert('Thank you for your choice')
                this.film = ''
                this.author = ''
                this.loading = true
                fetch('https://films-94fd4.firebaseio.com/films.json')
                    .then(response => response.json())
                    .then(data => {
                      this.loading = false
                      if (Object.keys(data).length >= 9) {
                        this.empty = true
                      }
                    })

              } else {
                alert('Error')
                this.loading = false
              }
            })
      }

    }
  }
}
</script>
<style scoped>
div {
  margin: 0 auto;
  width: 300px;
}
input {
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
}
</style>