<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type='text'
          class='input input-search'
          placeholder='Поиск блюд и ресторанов'
        />
      </label>
    </div>
    <div class='cards cards-restaurants'>
      <RestaurantCard
        v-for="partner in partners"
        :key="partner.id"
        :partner="partner as Partner"
      />
    </div>
  </section>
</template>

<script lang='ts'>
import RestaurantCard from '@/components/RestaurantCard.vue'
import { Options, Vue } from 'vue-class-component'

export interface Partner {
  id: number;
  name: string;
  timeOfDelivery: number;
  stars: number;
  price: number;
  kitchen: string;
  image: string;
  products: string;
  partner: object;
}

@Options({
  components: {
    RestaurantCard
  },
  methods: {},
  data () {
    return {
      partners: [] as Partner[]
    }
  },
  mounted () {
    this.partners = this.$store.state.dbData.db.partners
    console.log(this.partners, 'partners')
  }
})
export default class AppBody extends Vue {
  partners: Partner[] = [];
}
</script>
