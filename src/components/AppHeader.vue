<script lang="ts">
  import { mapGetters, mapMutations } from "vuex";
  import HeaderLogo from "@/assets/img/icon/logo.svg";
  import { CART } from "@/store/getters";
  import { TOGGLE_AUTH_MODAL, TOGGLE_CART_MODAL } from "@/store/mutations";

  export default {
    data() {
      return {
        address: "",
        userName: "", // Предположим, что это свойство будет заполняться при успешном входе пользователя
      };
    },
    computed: {
      ...mapGetters([CART]),
      logo(): string {
        return HeaderLogo;
      },
    },
    methods: {
      ...mapMutations([TOGGLE_AUTH_MODAL, TOGGLE_CART_MODAL]),
      login(): void {
        this.TOGGLE_AUTH_MODAL(true);
      },
      logout(): void {
        return console.log("Loggeed out! :)");
      },
      goToCart(): void {
        this.TOGGLE_CART_MODAL(true);
      },
      goToHome(): void {
        this.$router.push("/");
      },
    },
  };
</script>

<template>
  <header class="app-header">
    <a class="logo" @click="goToHome">
      <img :src="logo" alt="Logo" />
    </a>
    <label class="address">
      <input
        type="text"
        class="input input-address"
        placeholder="Адрес доставки"
        v-model="address"
      />
    </label>
    <div class="buttons">
      <span class="user-name">{{ userName }}</span>
      <button
        v-if="CART.length"
        class="button button-primary button-auth"
        @click="goToCart"
      >
        <!-- <span class="button-text">Корзина</span> -->
        <span class="button-cart-svg"></span>
        <span>{{ CART.length }}</span>
      </button>
      <button class="button button-primary button-auth" @click="login">
        <span class="button-auth-svg"></span>
        <span class="button-text">Войти</span>
      </button>
    </div>
  </header>
</template>
