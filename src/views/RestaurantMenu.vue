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
        title: {} as Title,
        sortDirection: null as null | 'asc' | 'desc',
      };
    },
    computed: {
      ...mapGetters([DB, PARTNERS]),
      menuItems(): MenuItem[] {
        const currentName = this.$route.params.name;
        const menuItems = this.DB[currentName];
        if (this.sortDirection === 'asc') {
          return menuItems.slice().sort((a, b) => a.price - b.price);
        } else if (this.sortDirection === 'desc') {
          return menuItems.slice().sort((a, b) => b.price - a.price);
        } else {
          return menuItems;
        }
      },
      sortedMenuItems(): MenuItem[] {
        const currentName = this.$route.params.name;
        const menuItems = this.DB[currentName];
        if (this.sortDirection === 'asc') {
          return menuItems.slice().sort((a: MenuItem, b: MenuItem) => a.price - b.price);
        } else if (this.sortDirection === 'desc') {
          return menuItems.slice().sort((a: MenuItem, b: MenuItem) => b.price - a.price);
        } else {
          return menuItems;
        }
      },
    },
    mounted(): void {
      const currentName = this.$route.params.name;
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
        this.sortDirection = this.sortDirection === 'desc' ? null : 'desc';
      },
      toggleCheaperActive(): void {
        this.sortDirection = this.sortDirection === 'asc' ? null : 'asc';
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
              :class="{ active: sortDirection === 'desc' }"
              @click="toggleExpensiveActive()"
            >
              Самые дорогие
            </button>
            <button
              class="cheaper"
              :class="{ active: sortDirection === 'asc' }"
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
