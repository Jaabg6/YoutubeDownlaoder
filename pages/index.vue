<template>
  <div class="home">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top m-navbar"
    >
      <!-- Container wrapper -->
      <div class="container">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="d-flex align-items-center d-md-none">
          <button
            type="button"
            class="btn btn-primary me-3 bg-3"
            @click="mensaje()"
          >
            Start to convert
          </button>
        </div>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#"
                >You-Downloader mp3</a
              >
            </li>
          </ul>
          <!-- Left links -->

          <div class="d-flex align-items-center">
            <button
              type="button"
              class="btn btn-primary me-3 bg-3"
              @click="mensaje()"
            >
              Start to convert
            </button>
          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <div class="m-navbar"></div>
    <!-- Navbar -->

    <div class="container">
      <div class="card bg-2 mt-5 py-4 px-5">
        <form v-on:submit.prevent="sendUrl" class="text-white">
          <!-- Name input -->
          <div class="form-outline mb-4">
            <input
              @paste="onPaste"
              v-model="urlVideo"
              type="text"
              ref="inputLink"
              id="inputLink"
              class="form-control bg-white"
            />
            <label class="form-label text-dark" for="inputLink">Link</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn bg-3 btn-block text-white">
            Enviar
          </button>

          <transition name="fade">
            <div v-if="this.errorLinkMessage === true">
              <div class="alert alert-danger mt-2" role="alert">
                A donde vaaas? Pon un link de youtube valido antes de enviar ;D
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="this.errorVideoNoEncontrado === true">
              <div class="alert alert-danger mt-2" role="alert">
                Parece que hubo un error grave, revisa el link que usaste y
                sigue intentando :D
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="this.errorWaitingResponse === true">
              <div class="alert alert-danger mt-2" role="alert">
                Heeeey, tranqui, cuando termine envias otro :p
              </div>
            </div>
          </transition>
        </form>
      </div>

      <div class="text-white text-center mt-5">
        <div class="d-flex justify-content-center mb-5">
          <transition name="bounce">
            <div class="card w-50 bg-2" v-if="this.statusProcess === true">
              <div class="card-body my-3">
                <p class="h1">{{ countdown }}</p>
                <!-- <button type="button" class="btn btn-primary">Button</button> -->
                <div class="spinner-border text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div
              class="card w-md-50 bg-2"
              v-if="this.videoInfo != '' && this.statusProcess === false"
            >
              <div class="container">
                <div class="row">
                  <div class="col-md-5 col-12 my-3">
                    <img
                      :src="
                        this.videoInfo.thumbnails[
                          this.videoInfo.thumbnails.length - 1
                        ].url
                      "
                      v-bind:alt="
                        'Descargar ' + this.videoInfo.title + ' mp3 gratis'
                      "
                      class="img-fluid"
                    />
                  </div>
                  <div class="card-body col-7">
                    <!-- <p class="h1">{{ this.videoInfo }}</p> -->
                    <p
                      class="font-weight-bold d-flex justify-content-left text-left"
                    >
                      {{ this.videoInfo.title }}
                    </p>

                    <p class="h6 d-flex justify-content-left mb-3">
                      Duracion: {{ this.videoDuration }}
                    </p>

                    <a
                      v-bind:href="this.downloadlink"
                      target="_blank"
                      class="btn bg-3 btn-block text-white mb-1 d-flex align-items-end"
                    >
                      Descargar Ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <h1 class="mb-5">
          Descarga mp3 de youtube en alta calidad
        </h1>

        <div class="d-flex justify-content-center">
          <h4>Pasos para descargar desde:</h4>
          <a class="btn bg-3 text-white mx-3" @click="ChangePreferencesPC"
            >PC</a
          >
          <a class="btn bg-3 text-white" @click="ChangePreferencesMobile"
            >Mobile</a
          >
        </div>
      </div>
      <div class="mt-3">
        <div class="card bg-2 py-4 text-white">
          <div class="d-flex justify-content-center mt-2">
            <nav aria-label="...">
              <ul class="pagination pagination-lg">
                <li
                  class="page-item mx-2"
                  v-bind:class="{ active: passN1 }"
                  @click="ActivePass1"
                >
                  <a class="bg-3 page-link btn">1</a>
                </li>
                <li
                  class="page-item mx-2"
                  v-bind:class="{ active: passN2 }"
                  @click="ActivePass2"
                >
                  <a class="bg-3 page-link btn">2</a>
                </li>
                <li
                  class="page-item mx-2"
                  v-bind:class="{ active: passN3 }"
                  @click="ActivePass3"
                >
                  <a class="bg-3 page-link btn">3</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="container">
            <div class="row py-5">
              <div class="col-12 col-md-7 py-4">
                <!-- Pass PC -->
                <transition name="bounce">
                  <div v-if="DownloadPreferences === 'PC'">
                    <transition name="bounce">
                      <div v-if="passN1 === true">
                        <p class="h5">
                          1) Copia el link del video de youtube que quieras
                          descargar.
                        </p>
                      </div>
                    </transition>

                    <transition name="bounce">
                      <div v-if="passN2 === true">
                        <p class="h5">
                          2) Haz click en ENVIAR y espera unos segundos.
                        </p>
                      </div>
                    </transition>

                    <transition name="bounce">
                      <div v-if="passN3 === true">
                        <p class="h5">
                          3) Haz click en DESCARGAR AHORA y automaticamente
                          comenzara a descargar.
                        </p>
                      </div>
                    </transition>
                  </div>

                  <!-- Pass mobile -->
                </transition>
                <div v-if="DownloadPreferences === 'Mobile'">
                  <transition name="bounce">
                    <div v-if="passN1 === true">
                      <p class="h5">
                        1) Copia el link del video de youtube que quieras
                        descargar (Sigue el ejemplo).
                      </p>
                    </div>
                  </transition>

                  <transition name="bounce">
                    <div v-if="passN2 === true">
                      <p class="h5">
                        2) Haz click en ENVIAR y espera unos segundos.
                      </p>
                    </div>
                  </transition>

                  <transition name="bounce">
                    <div v-if="passN3 === true">
                      <p class="h5">
                        3) Haz click en DESCARGAR AHORA y automaticamente
                        comenzara a descargar.
                      </p>
                    </div>
                  </transition>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <transition name="bounce">
                  <div v-if="DownloadPreferences === 'Mobile'">
                    <transition name="bounce">
                      <div v-if="passN1 === true">
                        <div class="mx-2">
                          <img
                            src="https://i.imgur.com/cQOM5np.jpg"
                            class="img-fluid"
                            alt="Copiar link de y youtube"
                          />
                        </div>
                      </div>
                    </transition>
                    <transition name="bounce">
                      <div v-if="passN2 === true">
                        <div class="mx-2">
                          <img
                            src="https://i.imgur.com/iKaFj6t.png"
                            class="img-fluid"
                            alt="Boton de enviar link para descargar"
                          />
                        </div>
                      </div>
                    </transition>
                    <transition name="bounce">
                      <div v-if="passN3 === true">
                        <div class="mx-2">
                          <img
                            src="https://i.imgur.com/lXu2oiP.png"
                            class="img-fluid"
                            alt="Boton de descargar mp3 youtube"
                          />
                        </div>
                      </div>
                    </transition>
                  </div>
                  <div v-if="DownloadPreferences === 'PC'">
                    <transition name="bounce">
                      <div v-if="passN1 === true">
                        <div class="mx-2">
                          <img
                            src="https://i.imgur.com/H8VnBy4.png"
                            class="img-fluid"
                            alt="Copiar link de y youtube"
                          />
                        </div>
                      </div>
                    </transition>
                    <transition name="bounce">
                      <div v-if="passN2 === true">
                        <div class="mx-2">
                          <img
                            src="https://i.imgur.com/6zr0lCK.png"
                            class="img-fluid"
                            alt="Boton de enviar link para descargar"
                          />
                        </div>
                      </div>
                    </transition>
                    <transition name="bounce">
                      <div v-if="passN3 === true">
                        <div class="mx-2">
                          <img
                            src="https://i.imgur.com/PRSVZld.png"
                            class="img-fluid"
                            alt="Boton de descargar mp3 youtube"
                          />
                        </div>
                      </div>
                    </transition>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <bt></bt>
    <bt></bt>
    <bt></bt>
    <bt></bt>
    <bt></bt>
    <bt></bt>
    <bt></bt>
    <bt></bt>
    <bt></bt>
    <bt></bt>
    <!-- Footer -->
    <footer class="bg-dark text-center text-white mt-5">
      <!-- Grid container -->
      <div class="container p-4">
        <!-- Section: Text -->
        <section class="mb-4">
          <p>
            Descarga facilmente musica de youtube de manera ilimitada, facil de
            usar y resposive para todas las plataformas, puedes instalarla en tu
            PC o Android para acceder con mayor facilidad
          </p>
        </section>
        <!-- Section: Text -->
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>

          <!-- Twitter -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-twitter"></i
          ></a>

          <!-- Google -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-google"></i
          ></a>

          <!-- Instagram -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-instagram"></i
          ></a>

          <!-- Linkedin -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-linkedin-in"></i
          ></a>

          <!-- Github -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2021 Creado por Jabibi
        <a class="text-danger" href="https://javierarcila.web.app/">
          <span class="text-white">-</span> Ir al Portafolio</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
var format = require("format-duration");
export default {
  name: "Home",
  data() {
    return {
      urlVideo: "",
      videoInfo: "",
      videoDuration: 0,
      downloadlink: "",
      statusProcess: false,
      DownloadPreferences: "PC",
      passN1: true,
      passN2: false,
      passN3: false,
      rules: "",
      countdown: 0,
      errorLinkMessage: false,
      errorVideoNoEncontrado: false,
      errorWaitingResponse: false,
    };
  },
  components: {},

  async mounted() {
    this.socket = this.$nuxtSocket({
      name: "main", // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    });

    // Get a reference to the storage service, which is used to create references in your storage bucket

    this.socket.on("connect", () => {
      console.log("socket-io-client conected");
    });

    this.socket.on("event-frontend", () => {
      console.log("Backend Working");
    });

    this.socket.on("urlDownload", (urlForDownload) => {
      this.downloadlink = urlForDownload;
      this.statusProcess = false;

      // console.log("url: " + urlForDownload);
    });
    // io.emit("sendInfoMp3", DireccionVideo);

    this.socket.on("infoVideo", (videoInfo) => {
      this.videoInfo = videoInfo;
      this.videoDuration = format(videoInfo.duration * 1000);
      // console.log(
      //   "info: " + videoInfo.title,
      //   videoInfo.duration,
      //   videoInfo.thumbnails
      // );
    });
  },
  methods: {
    // startAgain() {
    //   // this.urlVideo = "";
    //   // this.downloadlink = "";
    //   console.log("hi start again");
    // },
    CountDownTimer() {
      var myInterval = setInterval(() => {
        this.countdown = this.countdown + 1;

        if (this.statusProcess === false) {
          clearInterval(myInterval);
        }
      }, 1000);
    },
    ShowDonwloadURL(url) {
      this.downloadlink = url;
      this.statusProcess = false;
      // console.log(url + "se muestra");
    },
    // obtenerLink(RefFile){
    //   RefFile.getDownloadURL().then(function(url) {
    //                   // `url` is the download URL for 'mp3videos/stars.jpg'
    //                     console.log(url);
    //                     this.downloadlink = url;
    //                 }).catch(function(error) {
    //                   // Handle any errors
    //                 });
    // },
    onPaste(evt) {
      console.log("on paste", evt);
    },

    // pasos pc
    ActivePass1() {
      (this.passN1 = true), (this.passN2 = false), (this.passN3 = false);
    },
    ActivePass2() {
      (this.passN1 = false), (this.passN2 = true), (this.passN3 = false);
    },
    ActivePass3() {
      (this.passN1 = false), (this.passN2 = false), (this.passN3 = true);
    },

    ChangePreferencesPC() {
      this.DownloadPreferences = "PC";
    },
    ChangePreferencesMobile() {
      this.DownloadPreferences = "Mobile";
    },
    mensaje() {
      this.$refs.inputLink.focus();
    },
    async sendUrl() {
      if (this.statusProcess === false) {
        var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (this.urlVideo.match(p)) {
          console.log("hi you want download" + this.urlVideo);
          this.videoInfo = "";
          this.videoDuration = 0;
          this.downloadlink = "";
          var idUrl = this.urlVideo.slice(-11);
          // console.log("la id es: " + this.urlVideo.slice(-11));
          this.socket.emit("sendUrl", idUrl);
          this.statusProcess = true;
          this.countdown = 0;
          this.CountDownTimer();
        } else {
          // console.log("no funciona esta shit");
          console.log("Link invalido");
          this.errorLinkMessage = true;
          setTimeout(() => {
            this.errorLinkMessage = false;
          }, 4000);
        }
      } else {
        this.errorWaitingResponse = true;
        setTimeout(() => {
          this.errorLinkMessage = false;
        }, 4000);
      }

      // if (
      //   this.urlVideo.includes(
      //     "https://www.youtube.com/watch?v=" || "https://youtu.be/"
      //   )
      // ) {
      // } else {

      // }
    },
  },
};
</script>

<style>
@media (min-width: 768px) {
  .w-md-50 {
    width: 50vw !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.m-navbar {
  margin-bottom: 100px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.bounce-enter-active {
  transition: all 0.8s ease;
}
.bounce-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.bounce-enter, .bounce-leave-to
/* .bounce-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bg-1 {
  background: #171717 !important;
}
.bg-2 {
  background: #444444 !important;
}
.bg-3 {
  background: #da0037 !important;
}

body {
  background-color: #171717 !important;
}
</style>
