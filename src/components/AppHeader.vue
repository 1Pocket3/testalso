<template>
    <header class="app-header">
      <a class="logo">
        <img :src="require('@/assets/img/icon/logo.svg')" alt="Logo" />
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
        <button class="button button-primary button-auth" @click="goToCart">
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-auth" @click="login">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
      </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  },
  data () {
    return {
      address: '',
      userName: '' // Предположим, что это свойство будет заполняться при успешном входе пользователя
    }
  },
  methods: {
    login () {
      this.$store.state.showAuthModal = true
    },
    logout () {
      return console.log('Loggeed out! :)')
    },
    goToCart () {
      this.$store.state.showCartModal = true
    }
  }
})
export default class AppHeader extends Vue {
  address = '' as string;
  userName = '' as string;
  login!: () => void;
  goToCart!: () => void;
}
</script>
