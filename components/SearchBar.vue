<template>
  <div>
    <div class="card bg-2 mt-5 py-4 px-5">
      <form v-on:submit.prevent="main.sendUrl" class="text-white">
        <!-- Name input -->
        <div class="form-outline mb-4">
          <input
            @paste="main.onPaste"
            v-model="main.urlVideo"
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
          <div v-if="main.errorLinkMessage === true">
            <div class="alert alert-danger mt-2" role="alert">
              A donde vaaas? Pon un link de youtube valido antes de enviar ;D
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="main.errorVideoNoEncontrado === true">
            <div class="alert alert-danger mt-2" role="alert">
              Parece que hubo un error grave, revisa el link que usaste y sigue
              intentando :D
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="main.errorWaitingResponse === true">
            <div class="alert alert-danger mt-2" role="alert">
              Heeeey, tranqui, cuando termine envias otro :p
            </div>
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      main: this.$parent,
    };
  },
};
</script>
