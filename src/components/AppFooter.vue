<script lang="ts">
  import FooterLogo from "@/assets/img/icon/logo.svg";
  import InstagramLogo from "@/assets/img/social/instagram.svg";
  import FacebookLogo from "@/assets/img/social/fb.svg";
  import VKLogo from "@/assets/img/social/vk.svg";

  interface SocialLink {
    url: string;
    imgSrc: string;
    imgAlt: string;
  }

  export default {
    computed: {
      logo(): string {
        return FooterLogo;
      },
      socialLinks(): SocialLink[] {
        return [
          {
            url: "#",
            imgSrc: InstagramLogo,
            imgAlt: "Instagram",
          },
          {
            url: "#",
            imgSrc: FacebookLogo,
            imgAlt: "Facebook",
          },
          {
            url: "#",
            imgSrc: VKLogo,
            imgAlt: "VKontakte",
          },
        ];
      },
    },
  };
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer-block">
        <img :src="logo" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <a href="#" class="footer-link">Ресторанам </a>
          <a href="#" class="footer-link">Курьерам</a>
          <a href="#" class="footer-link">Пресс-центр</a>
          <a href="#" class="footer-link">Контакты</a>
        </nav>
        <div class="social-links">
          <a
            v-for="link in socialLinks"
            :key="link.imgSrc"
            :href="link.url"
            class="social-link"
          >
            <img :src="link.imgSrc" :alt="link.imgAlt" />
          </a>
        </div>
        <!-- /.social-links -->
      </div>
      <!-- /.footer-block -->
    </div>
  </div>
</template>
