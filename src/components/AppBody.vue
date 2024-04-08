<script lang="ts">
  import RestaurantCard from "@/components/RestaurantCard.vue";
  import { mapGetters } from "vuex";
  import { PARTNERS, DB } from "@/store/getters";

  import type { Partner, MenuItem } from "@/models";

  export default {
    components: {
      RestaurantCard,
    },
    data() {
      return {
        filteredPartners: [] as Partner[],
      };
    },
    computed: {
      ...mapGetters([PARTNERS, DB]),
    },
    mounted(): void {
      this.filteredPartners = this.PARTNERS;
    },
    methods: {
      filterItems(event: Event): void {
        const target = event.target as HTMLInputElement;
        const value = target.value.toLowerCase();

        this.filteredPartners = this.PARTNERS.filter((partner: Partner) => {
          const partnerName = partner.products.split(".")[0];
          const filteredMenu = this.DB[partnerName].filter((menu: MenuItem) => {
            return (
              menu.name.toLowerCase().indexOf(value) > -1 ||
              menu.description.toLowerCase().indexOf(value) > -1
            );
          });

          return (
            filteredMenu.length ||
            partner.name.toLowerCase().indexOf(value) > -1
          );
        });
      },
    },
  };
</script>

<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
          @input="filterItems"
        />
      </label>
    </div>
    <div class="cards cards-restaurants">
      <template v-if="filteredPartners.length">
        <RestaurantCard
          v-for="partner in filteredPartners"
          :key="partner.name"
          :partner="partner"
        />
      </template>
      <template v-else>
        <p>Ничего не найдено по вашему запросу</p>
      </template>
    </div>
  </section>
</template>
