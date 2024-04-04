<template>
    <div class="container">
      <div class="footer-block">
        <img :src="require('@/assets/img/icon/logo.svg')" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <a href="#" class="footer-link">Ресторанам </a>
          <a href="#" class="footer-link">Курьерам</a>
          <a href="#" class="footer-link">Пресс-центр</a>
          <a href="#" class="footer-link">Контакты</a>
        </nav>
        <div class="social-links">
          <a href="#" class="social-link"
            ><img :src="require('@/assets/img/social/instagram.svg')" alt="instagram"
          /></a>
          <a href="#" class="social-link"
            ><img :src="require('@/assets/img/social/fb.svg')" alt="facebook"
          /></a>
          <a href="#" class="social-link"
            ><img :src="require('@/assets/img/social/vk.svg')" alt="vk"
          /></a>
        </div>
        <!-- /.social-links -->
      </div>
      <!-- /.footer-block -->
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    // TestComponent
  }
})

export default class Footer extends Vue {}
</script>
