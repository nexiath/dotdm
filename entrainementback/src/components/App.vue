<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="loading && !error">Welcome</div>
    <div v-if="!loading && error">Something went wrong</div>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "App",

  data(){
    return {
      loading: true,
      error : false
    }
  },

  methods: {
    ...mapActions(["initiaload"])
  },

  mounted() {
    try {
      this.initiaload();
      this.loading = false;
    } catch(err) {
      this.loading = false;
      this.error = true;
    }
  }
};
</script>