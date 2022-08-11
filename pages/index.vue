<template>
  <div class="home">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <div class="container">
      <SearchBar />

      <div class="text-white text-center mt-5">
        <div class="d-flex justify-content-center mb-5">
          <CardLoading />
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
                    <!-- <div v-if="this.AnimationDownloading">Hi</div> -->
                    <div
                      v-if="this.statusProcess == false"
                      class="spinner-grow text-danger mt-5"
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
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
                      :href="this.downloadLink"
                      download=""
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
        <h1 class="mb-5">Descarga mp3 de youtube en alta calidad</h1>

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

    <!-- Footer -->
    <Footer />
    <!-- Footer -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CardLoading from "../components/CardLoading";
var format = require("format-duration");
// import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      idUrl: "",
      urlVideo: "",
      // videoInfo: "",
      // videoDuration: 0,
      // downloadLink: "",
      statusProcess: false,
      AnimationDownloading: false,
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
  components: {
    Navbar,
    SearchBar,
    CardLoading,
    Footer,
  },

  async mounted() {
    this.scrollBehavior();

    this.socket = this.$nuxtSocket({
      name: "main", // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    });

    this.socket.on("VideoNoEncontrado", () => {
      this.errorVideoNoEncontrado = true;
      setTimeout(() => {
        this.errorVideoNoEncontrado = false;
      }, 5000);
    });

    this.socket.on("infoVideo", (videoInfo) => {
    console.log("🚀 ~ file: index.vue ~ line 319 ~ this.socket.on ~ videoInfo", videoInfo)

      
      // this.videoInfo = videoInfo.videoInfo;
      this.$store.commit("setVideoInfo", videoInfo.videoInfo);
      // this.videoDuration = format(Number(videoInfo.videoInfo.duration) * 1000);

      // this.downloadLink = videoInfo.link;
      this.statusProcess = false;
    });
  },
  methods: {
    
    // StartAnimationDownloading() {
    //   this.AnimationDownloading = true;
    //   setTimeout(() => {
    //     this.AnimationDownloading = false;
    //   }, 5000);
    // },

    scrollBehavior() {
      return { x: 0, y: 0 };
    },

    CountDownTimer() {
      this.countdown = 0;
      var myInterval = setInterval(() => {
        this.countdown = this.countdown + 1;

        if (this.statusProcess === false) {
          clearInterval(myInterval);
        }
      }, 1000);
    },
    ShowDonwloadURL(url) {
      this.downloadLink = url;
      this.statusProcess = false;
      // console.log(url + "se muestra");
    },

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

    async sendUrl() {
      if (this.statusProcess === false) {
        this.getJustID();
      } else {
        this.errorWaitingResponse();
      }
    },

    getJustID(){
      var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (this.urlVideo.match(p)) {
          var idUrl = this.urlVideo.slice(-11);
          this.idUrl = idUrl;

          this.socket.emit("sendUrl", idUrl);
          this.statusProcess = true;

          this.CountDownTimer();
        } else {
          this.errorMessage();
        }
    },

    
    errorWaitingResponse(){
        this.errorWaitingResponse = true;
        setTimeout(() => {
          this.errorLinkMessage = false;
        }, 4000);
    },

    errorMessage(){
      this.errorLinkMessage = true;
      setTimeout(() => {
        this.errorLinkMessage = false;
      }, 4000);
    }
  },
  computed: {
    ...mapState({
      videoInfo: state => state.videoInfo,
    }),

    ...mapGetters({
      thumbnails : 'getThumbnails',
      title   : 'getTitleVideo',
      duration   : 'getVideoDuration',
      downloadLink   : 'getDownloadLink',
    }),
  }
};
</script>

<style>
.media-type-mp3-320 {
  background: rgb(255, 6, 6) !important;
  color: rgb(255, 6, 6) !important;
}
.d-opacity {
  /* filter: drop-shadow(4px 4px red); */
  filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-1500deg)
    saturate(600%) contrast(0.8);
  /* filter: grayscale(2); */
  /* width: 100%; */
  /* height: 10px; */
}
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
  startanimation: bounce-in 0.5s;
}
.bounce-leave-active {
  startanimation: bounce-in 0s reverse;
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

/* Enter and leave StartAnimations can use different */
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
