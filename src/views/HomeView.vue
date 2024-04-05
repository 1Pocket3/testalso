<template>
  <div class="container">
    <AppHeader/>
    <Promo/>
    <AppBody/>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppHeader from '@/components/AppHeader.vue' // @ is an alias to /src
import Promo from '@/components/Promo.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppBody from '@/components/AppBody.vue'

@Options({
  components: {
    AppHeader,
    Promo,
    AppBody,
    AppFooter
  }
})
export default class HomeView extends Vue {}
</script>
