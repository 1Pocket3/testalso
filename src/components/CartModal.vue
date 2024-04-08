<template>
  <div class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button @click="closeModal" class="close">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <div v-for="(item, index) in cart" :key="index" class="food-row">
          <span class="food-name">{{ item.name }}</span>
          <strong class="food-price">{{ item.price }} ₽</strong>
          <div class="food-counter">
            <button @click="decrementQuantity(index)" class="counter-button">-</button>
            <span class="counter">{{ item.quantity }}</span>
            <button @click="incrementQuantity(index)" class="counter-button">+</button>
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

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'

@Options({
  components: {},
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    closeModal () {
      this.$store.state.showCartModal = false
    },
    incrementQuantity (index: number) {
      this.cart[index].quantity++
    },
    decrementQuantity (index: number) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--
      }
    },
    calculateTotalPrice () {
      // Вычисляем общую стоимость заказа
      return this.cart.reduce((total: number, item: { price: number; quantity: number }) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    cancelOrder () {
      if (confirm('Вы точно хотите отменить заказ? Корзина будет очищена.')) {
        // Очистка корзины
        this.$store.state.showCartModal = false
        this.$store.commit('CLEAR_CART')
      }
    }
  }
})

export default class CartModal extends Vue {
  closeModal!: () => void;
  decrementQuantity!: (index: number) => void;
  incrementQuantity!: (index: number) => void;
  calculateTotalPrice!: () => number;
  cancelOrder!: () => void;
  cart!: { name: string; price: number; quantity: number }[];
}
</script>

<style></style>
