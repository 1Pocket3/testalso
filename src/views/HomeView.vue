<script lang="ts">
  import AppHeader from "@/components/AppHeader.vue"; // @ is an alias to /src
  import Promo from "@/components/Promo.vue";
  import AppFooter from "@/components/AppFooter.vue";
  import AppBody from "@/components/AppBody.vue";

  export default {
    components: {
      AppHeader,
      Promo,
      AppBody,
      AppFooter,
    },
  };
</script>

<template>
  <Promo />
  <AppBody />
</template>
