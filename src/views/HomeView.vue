<template>
  <div class="container">
    <AppHeader/>
    <Promo/>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppHeader from '@/components/AppHeader.vue' // @ is an alias to /src
import Promo from '@/components/Promo.vue'
import AppFooter from '@/components/AppFooter.vue'

@Options({
  components: {
    AppHeader,
    Promo,
    AppFooter
  }
})
export default class HomeView extends Vue {}
</script>
