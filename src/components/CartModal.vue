<script lang="ts">
  import { mapGetters, mapMutations } from "vuex";
  import { CART } from "@/store/getters";
  import {
    TOGGLE_CART_MODAL,
    CHANGE_CART_ITEM_QUANTITY,
    CLEAR_CART,
  } from "@/store/mutations";

  import type { MenuItem } from "@/models";

  export default {
    computed: {
      ...mapGetters([CART]),
    },
    methods: {
      ...mapMutations([
        TOGGLE_CART_MODAL,
        CHANGE_CART_ITEM_QUANTITY,
        CLEAR_CART,
      ]),
      closeModal(): void {
        this.TOGGLE_CART_MODAL(false);
      },
      incrementQuantity(index: number): void {
        const quantity = this.CART[index].quantity + 1;

        this.CHANGE_CART_ITEM_QUANTITY({
          index,
          quantity,
        });
      },
      decrementQuantity(index: number): void {
        if (this.CART[index].quantity > 1) {
          const quantity = this.CART[index].quantity - 1;

          this.CHANGE_CART_ITEM_QUANTITY({
            index,
            quantity,
          });
        }
      },
      calculateTotalPrice(): void {
        // Вычисляем общую стоимость заказа
        return this.CART.reduce((total: number, item: MenuItem) => {
          return total + item.price * item.quantity;
        }, 0);
      },
      cancelOrder(): void {
        if (confirm("Вы точно хотите отменить заказ? Корзина будет очищена.")) {
          // Очистка корзины
          this.TOGGLE_CART_MODAL(false);
          this.CLEAR_CART();
        }
      },
    },
  };
</script>

<template>
  <div class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button @click="closeModal" class="close">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <div v-for="(item, index) in CART" :key="index" class="food-row">
          <span class="food-name">{{ item.name }}</span>
          <strong class="food-price">{{ item.price }} ₽</strong>
          <div class="food-counter">
            <button @click="decrementQuantity(index)" class="counter-button">
              -
            </button>
            <span class="counter">{{ item.quantity }}</span>
            <button @click="incrementQuantity(index)" class="counter-button">
              +
            </button>
          </div>
        </div>
        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ calculateTotalPrice() }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button @click="cancelOrder" class="button clear-cart">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<style></style>
