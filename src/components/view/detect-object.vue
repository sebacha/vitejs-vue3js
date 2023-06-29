
<template>
  <div class="app" id="app">
        
            <!-- detection object -->
            <div class="camara">
                <div class="videocam">
                    <video class="video" id="video" autoplay>
                    </video>
                </div>
                
                <div class="permiso">
                    <p class="titulo-permiso">¿habilitar camara?</p>
                    <button @click="activateCam">Activar</button>
                    <button @click="DeactivateCam">Desactivar</button>
                </div>
            
            </div>
        
            <div class="acces_error" v-if="error">
                {{ error }}
            </div>

        </div>
</template>

<style>

body {
  display: grid;
  grid-auto-rows: minmax(auto 200px);
  gap: 2rem;
  
  font-family: sans-serif;
  align-items: center;
  background-color: darkslateblue;
  font-size: 1.3rem;
}

.app {
  grid-column: 2 / 9;
  grid-row: 2 / 3;

  display: grid;
  gap: 10px;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(17.3rem, 1fr));
}

/* head */
.header {
  grid-column: 1 / 10;
  grid-row: 1;
  background-color: lightgrey;
  border-radius: 2rem;
  border-radius: 1rem;
}

/* footer */
.footer {
  grid-column: 1 / 10;
  grid-row: 4;

  background-color: lightgrey;
  border-radius: 2rem;
  border-radius: 1rem;
}

/* Cam */
  .camara {
    grid-column: span 3;

    background-color: lightgrey;
    justify-content: center;
    text-align: center;
    border-radius: 1rem;

  }

  .titulo-permiso {
    margin: 0;
  }

  .permiso {
    padding: 10px;
  }

  .acces_error {
    grid-column: span 2;
    padding: 0.3rem;
    background-color: tomato;
    color: white;
    text-align: center;
    border: 1px solid red;
  }

</style>