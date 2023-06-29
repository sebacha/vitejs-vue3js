import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';

const API = 'https://api.github.com/users/';

const requestmaxtime = 3000;

createApp(App, {
  data() {
    return {
      search: null,
      result: null,
      error: null,
      favorites: new Map(),
      videosW: null,
      videoH: null,
    };
  },
  created() {
    const saveFavorites = JSON.parse(window.localStorage.getItem('favorites'));
    if (saveFavorites?.length) {
      const favorites = new Map(
        saveFavorites.map((favorite) => [favorite.login, favorite])
      );
      this.favorites = favorites;
    }
  },
  computed: {
    isFavorite() {
      return this.favorites.has(this.result.login);
    },
    allFavorite() {
      return Array.from(this.favorites.values());
    },
  },
  methods: {
    async doSearch() {
      this.result = this.error = null;

      const foundinfavorites = this.favorites.get(this.search);

      const shouldrequestagain = (() => {
        if (!!foundinfavorites) {
          const lastrequestime = foundinfavorites;

          const now = Date.now();

          return now - lastrequestime < requestmaxtime;
        }

        return false;
      })(); //iife

      if (!!foundinfavorites && !shouldrequestagain) {
        return (this.result = foundinfavorites);
      }

      try {
        const response = await fetch(API + this.search);
        // si se genera un error con la busqueda lo capturamos para
        // que nuestro catch funcione y se muestre en pantalla
        if (!response.ok) throw new Error('User not found');

        const data = await response.json();

        this.result = data;

        foundinfavorites.lastrequestime = Date.now();
      } catch (error) {
        this.error = error;
      } finally {
        // si lo que estoy buscando si funciona o no. el input se limpiara
        this.search = null;
      }
    },

    addFavorite() {
      this.result.lasrequestime = Date.now();
      this.favorites.set(this.result.login, this.result);
      this.updateStorage();
    },
    removeFavorite() {
      this.favorites.delete(this.result.login);
      this.updateStorage();
    },
    showFavorite(favorite) {
      this.result = favorite;
    },
    updateStorage() {
      window.localStorage.setItem(
        'favorites',
        JSON.stringify(this.allFavorite)
      );
      // aqui almaceranermos los favortitos en almacenamiento local para que el refresh de la pagina no los borre
      // por ende debemos convertir los datos del objeto 'map' en string
      // ahora debo poner la actulizacion en los puntos donde necesito que se actulice el storage
    },
    cleanerror() {
      if (this.error) {
        this.error = null;
      }
    },
    activateCam() {
      // Comprueba si la API de MediaDevices es compatible con el navegador
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.cleanerror();
        // Pide acceso a la cámara
        navigator.mediaDevices
          .getUserMedia({
            video: true,
            width: 600,
            height: 600,
          })
          .then((stream) => {
            // Obtén una referencia al elemento de video en tu HTML
            const video = document.getElementById('video');
            this.videosW = video.videoWidth;
            this.videoH = video.videoHeight;

            // Asigna el flujo de la cámara al elemento de video
            video.srcObject = stream;
            console.log(stream);
          })
          .catch((error) => {
            error = this.error = new Error('acceso a la camara denegado');
          });
      } else {
        new Error(
          'La API de MediaDevices no es compatible con este navegador.'
        );
      }
    },
    deactivateCam() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.cleanerror();
        navigator.mediaDevices.getUserMedia({ video: false });
      } else {
        this.error = new Error(
          'La API de MediaDevices no es compatible con este navegador.'
        );
      }
    },
  },
}).mount('#app');

app.use(routes);
