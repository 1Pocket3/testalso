<script lang="ts">
  import { defineAsyncComponent } from "vue";
  import { mapGetters } from "vuex";
  import AppHeader from "@/components/AppHeader.vue";
  import AppFooter from "@/components/AppFooter.vue";
  import {
    IS_AUTH_MODAL_VISIBLE,
    IS_CART_MODAL_VISIBLE,
  } from "@/store/getters";

  export default {
    components: {
      AppHeader,
      AppFooter,
      LoginModal: defineAsyncComponent(
        () => import("@/components/LoginModal.vue")
      ),
      CartModal: defineAsyncComponent(
        () => import("@/components/CartModal.vue")
      ),
    },
    computed: {
      ...mapGetters([IS_AUTH_MODAL_VISIBLE, IS_CART_MODAL_VISIBLE]),
    },
  };
</script>

<template>
  <div class="container">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
  <LoginModal v-if="IS_AUTH_MODAL_VISIBLE" />
  <CartModal v-if="IS_CART_MODAL_VISIBLE" />
</template>

<style scoped></style>
