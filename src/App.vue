<template>
    <div class="container">
        <AppHeader/>
        <router-view/>
        <AppFooter/>
    </div>
    <LoginModal v-if="$store.state.showAuthModal"/>
    <CartItem v-if="$store.state.showCartModal"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import { defineAsyncComponent } from 'vue'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

@Options({
  components: {
    AppFooter,
    AppHeader,
    LoginModal: defineAsyncComponent(() => import('@/components/LoginModal.vue')),
    CartItem: defineAsyncComponent(() => import('@/components/CartItem.vue'))
  }
})

export default class App extends Vue {
  // eslint-disable-next-line
  $store: any;
}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/style.css";
</style>
