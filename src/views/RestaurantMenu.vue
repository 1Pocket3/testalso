<script lang="ts">
  import MenuCard from "@/components/MenuCard.vue";
  import { mapActions, mapGetters } from "vuex";
  import { ADD_TO_CART } from "@/store/actions";
  import { DB, PARTNERS } from "@/store/getters";

  import type { MenuItem, Title, Partner } from "@/models";

  export default {
    components: {
      MenuCard,
    },
    data() {
      return {
        menuItems: [] as MenuItem[],
        title: {} as Title,
        expensiveActive: false,
        cheaperActive: false,
      };
    },
    computed: {
      ...mapGetters([DB, PARTNERS]),
    },
    mounted(): void {
      const currentName = this.$route.params.name;
      this.menuItems = this.DB[currentName];
      this.title = this.PARTNERS.find(
        (partner: Partner) => partner.products.indexOf(currentName) !== -1
      );
    },
    methods: {
      ...mapActions([ADD_TO_CART]),
      addToCart(item: MenuItem): void {
        const mutatedData = { ...item, quantity: 1 };

        this.ADD_TO_CART(mutatedData);
      },
      toggleExpensiveActive(): void {
        this.expensiveActive = !this.expensiveActive;
      },
      toggleCheaperActive(): void {
        this.cheaperActive = !this.cheaperActive;
      },
    },
  };
</script>

<template>
  <div class="about">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">{{ title.name }}</h2>
          <div class="card-info">
            <div class="rating">{{ title.stars }}</div>
            <div class="price">{{ title.price }}</div>
            <div class="category">{{ title.kitchen }}</div>
          </div>
          <!-- /.card-info -->
          <div class="filters__btn">
            <button
              class="expensive"
              :class="{ active: expensiveActive }"
              @click="toggleExpensiveActive()"
            >
              Самые дорогие
            </button>
            <button
              class="cheaper"
              :class="{ active: cheaperActive }"
              @click="toggleCheaperActive()"
            >
              Самые дешёвые
            </button>
          </div>
        </div>
        <div class="cards cards-menu">
          <MenuCard
            v-for="item in menuItems"
            :key="item.id"
            :item="item as MenuItem"
            @addToCart="addToCart"
          />
          <!-- /.card -->
        </div>
        <!-- /.cards -->
      </section>
    </div>
    <!-- /.container -->
  </div>
</template>

<style>
  .filters__btn {
    margin-left: auto;
  }

  .filters__btn button {
    margin-right: 10px;
  }

  .filters__btn button.active {
    /* Стили для активной кнопки */
    /* Например, изменение цвета фона или текста */
    background-color: #4caf50;
    color: white;
  }
</style>
