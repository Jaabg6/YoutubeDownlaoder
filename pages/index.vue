<template>
  <div>
    <!-- As a heading -->
    <nav class="navbar navbar-light fixed-top bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Template</span>
      </div>
    </nav>

    <div class="vh-100 d-flex align-items-center justify-content-center">
      <div class="card mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Frontend</h5>
          <p class="card-text">
            Status <span class="text-success">{{ statusFrontend }}</span>
          </p>
        </div>
      </div>

      <!-- segundo card -->
      <div class="card mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Backend</h5>

          <p class="card-text">
            Status: <span class="text-success"> {{ statusBackend }} </span>
          </p>
        </div>
      </div>
    </div>
    <!-- primera card -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusFrontend: "Desconectado",
      statusBackend: "Desconectado",
    };
  },
  async mounted() {
    this.socket = this.$nuxtSocket({
      name: "main", // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    });

    this.socket.on("connect", () => {
      this.statusFrontend = "Conectado y funcionando";

      this.socket.on("event-frontend", () => {
        this.statusBackend = "Conectado y funcionando";
      });
    });
  },
};
</script>

<style>
body {
  background: rgb(34, 34, 34);
}
.vh-100 {
  height: 100vh !important;
}
</style>
