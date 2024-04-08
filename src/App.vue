<template>
    <div class="container">
        <AppHeader/>
        <router-view/>
        <AppFooter/>
    </div>
    <LoginModal v-if="$store.state.showAuthModal"/>
    <CartModal v-if="$store.state.showCartModal"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import { defineAsyncComponent } from 'vue'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

// import { mapGetters } from 'vuex'

@Options({
  components: {
    AppFooter,
    AppHeader,
    LoginModal: defineAsyncComponent(() => import('@/components/LoginModal.vue')),
    CartModal: defineAsyncComponent(() => import('@/components/CartModal.vue'))
  }
  // computed: {
  //   ...mapGetters([
  //     'CART'
  //   ])
  // }
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
