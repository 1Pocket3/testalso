<script lang="ts">
  import { mapGetters } from "vuex";
  import { CART } from "@/store/getters";

  import type { MenuItem } from "@/models";

  export default {
    props: {
      item: {
        type: Object as () => MenuItem,
        required: true,
      },
    },
    computed: {
      ...mapGetters([CART]),
    },
    methods: {
      addToCart(): void {
        const existingItem = this.CART.find(
          (item: MenuItem) => item.id === this.item.id
        );

        if (existingItem) {
          this.addQuantItem(existingItem);
        } else {
          const newItem = { ...this.item, quantity: 1 }; // Добавляем поле quantity
          this.$emit("addToCart", newItem);
        }
      },
      addQuantItem(item: MenuItem): void {
        item.quantity++;
      },
    },
  };
</script>

<template>
  <div class="card">
    <img :src="`./src/assets/${item.image}`" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ item.name }}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">{{ item.description }}</div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button
          @click="addToCart"
          class="button button-primary button-add-cart"
        >
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ item.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
</template>

<style></style>
