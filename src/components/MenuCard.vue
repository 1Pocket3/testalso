<template>
<div class="card">
              <img
                :src="require(`@/assets/${item.image}`)"
                alt="image"
                class="card-image"
              />
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
                  <button @click="addToCart" class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                  </button>
                  <strong class="card-price-bold">{{ item.price }} ₽</strong>
                </div>
              </div>
              <!-- /.card-text -->
            </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { MenuItem } from '@/models'

@Options({
  components: {},
  methods: {
    addToCart () {
      const existingItem = this.$store.state.cart.find((item: MenuItem) => item.id === this.item.id)

      if (existingItem) {
        this.addQuantItem(existingItem)
      } else {
        const newItem = { ...this.item, quantity: 1 } // Добавляем поле quantity
        this.$emit('addToCart', newItem)
      }
    },
    addQuantItem (item: MenuItem) {
      item.quantity++
    }
  },
  props: {
    item: {
      type: Object as () => MenuItem,
      required: true
    }
  },
  data () {
    return {}
  }
})

export default class MenuCard extends Vue {
    item!: MenuItem;
    addToCart!:() => void;
}
</script>

<style>

</style>
