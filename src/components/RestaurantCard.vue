<template>
    <a
        :href="partnerProductsHref"
        class='card card-restaurant'
      >
        <img
          :src="require(`@/assets/${partner.image}`)"
          :alt="partner.name + ' preview'"
          class="card-image"
        />
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title">{{ partner.name }}</h3>
            <span class="card-tag tag">{{ partner.timeOfDelivery }} мин</span>
          </div>
          <!-- /.card-heading -->
          <div class="card-info">
            <div class="rating">{{ partner.stars }}</div>
            <div class="price">От {{ partner.price }} ₽</div>
            <div class="category">{{ partner.kitchen }}</div>
          </div>
          <!-- /.card-info -->
        </div>
        <!-- /.card-text -->
      </a>
      <!-- /.card -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Partner } from './AppBody.vue'

@Options({
  components: {},
  methods: {},
  props: {
    partner: {
      type: Object as () => Partner,
      required: true
    }
  },
  data () {
    return {}
  }
})

export default class RestaurantCard extends Vue {
  partner!: Partner;

  get partnerProductsHref (): string {
    const productPath = this.partner.products.replace('.json', '')
    return `/${productPath}`
  }
}

</script>
