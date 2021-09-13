<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
  </div>
</template>

<script>
export default {
  props: ["statusProcess"],
  data() {
    return {
      //   statusProcess: this.statusProcess,
      main: this.$parent,
    };
  },
  methods: {
    mensaje() {
      this.$parent.$refs.inputLink.focus();
    },
  },
};
</script>

<style>
.m-navbar {
  margin-bottom: 100px !important;
}
</style>
