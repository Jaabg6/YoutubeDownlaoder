<template>
  <transition name="bounce" v-if="main.statusProcess === true">
    <div class="card w-50 bg-2">
      <div class="card-body my-3">
        <p class="h1">{{ main.countdown }}</p>
        <!-- <button type="button" class="btn btn-primary">Button</button> -->
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </transition>
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
