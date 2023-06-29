<template>
  <div class="app">
    <div class="img-profile">
      <img class="foto" src="img/icono-circulo-usuario.webp" alt="" />
    </div>

    <div class="titulo">
      <h3>Bienvenidos</h3>
    </div>

    <div class="info-yo">
      <p>
        Soy sebastian chamblas ingeniero informatico titulado en Duoc UC
        Desarrollador backend de preferencia. He trabajado con lenguajes como
        python, C#, java. bases de datos: SQL, MongoDB. Python es el lenguaje
        por preferencia ya que en el me he Desarrollado tanto como practicante y
        titulado. En mi practica profesional trabaje en machine learning lo cual
        me facino y es en lo que me hayo explorando.
      </p>

      <div class="btns">
        <router-link to="/contratar">Contratar</router-link>

        <a class="descarga" href="#">Curriculum Vitae</a>
      </div>
    </div>

    <div class="proyectos">
      <div class="buscadores">
        <img class="img-bus" src="img/images.jpg" alt="" />
        <p class="info-b">
          Cree una pagina donde colecciono usuarios de distintas paginas para
          esto la API por ejemplo de Github es utilizada para buscar usuarios de
          la plaforma <br />
          con el fin de guardar este usuario como "favorito" la idea es invitar
          a los visitantes de la pagina buscar sus usuarios para que luego yo
          pueda ver la participacion <br />
          que a tenido pi pagina debo destacar la informacion que muestro ya que
          esta es: Nombre de usuario, Descripcción, foto de perfil, link
          vuestras paginas.
        </p>
        <a href="./components/view/buscadores.vue">Visitar pagina</a>
      </div>
      <div class="detect-objet">
        <img class="img-object" src="img/Captura.png" alt="" />
        <p>
          Esto es una de las cosas que mas me interesan ya que en esta pagina es
          una invencion propia donde detecto cartas de naipe ingles, autos de
          juguetes y tazas el objetivo de esto <br />
          no es nada en concreto mas que demostrar mis capacidades ocupando
          estas tecnologia <br />
          <br />
          La deteccion de obtejos fue hecha con ayuda de roboflow.com esta
          pagina te proporciona funcionalidades como Makesense.ai incorporando
          guardar tus imagenes en un datasets, <br />
          entrenar un modelo para deteccion de objetos esta ultima tarea la e
          realizado yo con ayuda de documentacion que proporciona la misma
          pagina basicamente e ocupado <br />
          <li>Yolov5x</li>
          <li>Imagenes hechas por mi</li>
          <li>Ambiente colab</li>
        </p>
        <a href="./components/view/detect-object.vue">Visitar pagina</a>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
}

.app {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  grid-auto-flow: row;
  grid-auto-rows: auto;

  background-color: #332a3d;
}

.titulo {
  grid-column: 3 / span 2;

  margin: 30px;
  background-color: #b3a7a2;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
}

.img-profile {
  grid-column: 5 / span 2;
}

.foto {
  width: 200px;
  height: 200px;
}

.info-yo {
  grid-column: 1 / span 4;

  margin: 80px;
  background-color: #b3a7a2;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  word-wrap: break-word;
}

.info-yo p {
  margin-top: 30px;
  padding: 30px;
}

.btn-contrato {
  margin-right: 100px;
  font-size: 30px;
}

.descarga {
  margin-left: 100px;
  font-size: 30px;
}

.img-profile > img {
  height: 500px;
  width: 450px;
  border-radius: 20rem;
}

.img-profile > img {
  margin-left: 25%;
}

.proyectos {
  grid-column: 1 / span 6;

  margin: 80px;
  border-radius: 50px;
  background-color: #b3a7a2;
  text-align: center;
  font-size: 30px;
  list-style-position: inside;
}

.detect-objet,
.buscadores {
  border-radius: 80px;
  margin: 40px;
}

.img-bus,
.img-object {
  width: minmax(150px, 300px);
  height: minmax(150px, 300px);
}
</style>
