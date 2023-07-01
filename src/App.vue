<template>
  <div class="app">
    <div class="titulo">
      <h3>Bienvenidos</h3>
    </div>

    <div class="info-yo">
      <p>
        Soy sebastian chamblas ingeniero informatico titulado en Duoc UC
        Desarrollador backend de preferencia.
        <br />
        <br />
        He trabajado con lenguajes como python, C#, java. bases de datos: SQL,
        MongoDB. Python es el lenguaje por preferencia ya que en el me he
        Desarrollado tanto como practicante y titulado. En mi practica
        profesional trabaje en machine learning lo cual me facino y es en lo que
        me hayo explorando.
      </p>

      <div class="btns">
        <router-link to="/contratar">Contratar</router-link>
        <br />
        <a class="descarga" href="#">Curriculum Vitae</a>
      </div>
    </div>

    <div class="img-profile">
      <img class="foto" src="" alt="" />
    </div>

    <div class="buscadores">
      <img src="" alt="" />
      <p class="info-b">
        Cree una pagina donde colecciono usuarios de distintas paginas para esto
        la API por ejemplo de Github es utilizada para buscar usuarios de la
        plaforma.
        <br />
        <br />
        con el fin de guardar este usuario como "favorito" la idea es invitar a
        los visitantes de la pagina buscar sus usuarios para que luego yo pueda
        ver la participacion que a tenido la pagina.
        <br />
        <br />
        Debo destacar la informacion que muestro ya que esta es: Nombre de
        usuario, Descripcción, foto de perfil, link vuestras paginas.
      </p>

      <div class="enlace">
        <a href="./components/view/buscadores.vue">Visitar pagina</a>
      </div>
    </div>

    <div class="detect-objet">
      <img src="" alt="" />
      <p>
        Esto es una de las cosas que mas me interesan ya que en esta pagina es
        una invencion propia donde detecto cartas de naipe ingles, autos de
        juguetes y tazas el objetivo de esto es demostrar mis capacidades
        ocupando estas tecnologia
        <br />
        <br />
        La deteccion de obtejos fue hecha con ayuda de roboflow.com esta pagina
        te proporciona funcionalidades como las de Makesense.ai incorporando
        guardar tus imagenes en un datasets, <br />
        entrenar un modelo para deteccion de objetos esta ultima tarea la e
        realizado yo con ayuda de documentacion que proporciona la misma pagina.
        Caracteristicas del Modelo:
      </p>
      <ul>
        <li>Yolov5x</li>
        <li>Imagenes hechas por mi</li>
        <li>Ambiente colab</li>
      </ul>

      <div class="enlace">
        <a href="./components/view/detect-object.vue">Visitar pagina</a>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
}

.espacio1,
.espacio2 {
  grid-column: span 2;
}

.app {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: repeat(5, auto);
  grid-template-areas:
    ' . tit tit tit tit . '
    ' . img img img img . '
    ' . ify ify ify ify . '
    ' . bus bus bus bus . '
    ' . do do do do . ';
  background-color: #332a3d;
}

.titulo {
  grid-area: tit;
  margin: 10px;
  background-color: #b3a7a2;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
}

.img-profile {
  grid-area: img;
  height: 200px;
}

.img-profile img {
  weight: ;
  height: ;
}

.info-yo {
  grid-area: ify;
  margin: 10px;
  background-color: #b3a7a2;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  word-wrap: break-word;
}

.info-yo p {
  margin: 0px;
  padding: 15px;
}

.btns {
  padding: 10px;
}

.detect-objet {
  grid-area: do;
}
.buscadores {
  grid-area: bus;
}

.buscadores,
.detect-objet {
  margin: 10px;
  border-radius: 50px;
  background-color: #b3a7a2;
  text-align: center;
  font-size: 20px;
}

.buscadores > p,
.detect-objet > p {
  margin: 0px;
  padding: 15px;
}

.buscadores > img,
.detect-objet > img {
  weight: 100px;
  height: 100px;
}

.enlace {
  padding: 15px;
}

.enlace a {
  margin-left: 40px;
}

@media screen and (min-width: 1024px) {
  .app {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-auto-rows: repeat(4, auto);
    grid-template-areas:
      ' . . . . tit tit . . . . '
      ' . ify ify ify ify ify img img img . '
      ' . bus bus bus bus bus bus bus bus . '
      ' . do do do do do do do do . ';
  }

  .titulo {
    margin: 15px;
    font-size: 28px;
  }

  .info-yo {
    margin: 20px;
  }


  .info-yo,
  .buscadores,
  .detect-object {
    font-size: 30px;
  }

  .img-profile {
  }

  .img-profile > img {
  }

  .btns {
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .btns a {
    margin-left: 60px;
  }
}
</style>
