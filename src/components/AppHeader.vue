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
        <button class="button button-primary button-auth" @click="login">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button class="button button-cart" id="cart-button" @click="goToCart">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
      </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    // TestComponent
  },
  data () {
    return {
      address: '',
      userName: '' // Предположим, что это свойство будет заполняться при успешном входе пользователя
    }
  },
  methods: {
    login () {
      // Реализация логики входа пользователя
    },
    logout () {
      return console.log('Loggined! :)')
      // Реализация логики выхода пользователя
    },
    goToCart () {
      // Реализация перехода к корзине
    }
  }
})
export default class AppHeader extends Vue {
  address = '' as string;
  userName = '' as string;

  login ():void {
    this.$emit('login')
  }

  goToCart ():void {
    this.$emit('goToCart')
  }
}
</script>
