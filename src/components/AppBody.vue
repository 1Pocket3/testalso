<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type='text'
          class='input input-search'
          placeholder='Поиск блюд и ресторанов'
          @input="filterItems"
        />
      </label>
    </div>
    <div class='cards cards-restaurants'>
      <RestaurantCard
        v-for="partner in filteredPartners"
        :key="partner.id"
        :partner="partner as Partner"
      />
    </div>
  </section>
</template>

<script lang='ts'>
import RestaurantCard from '@/components/RestaurantCard.vue'
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'
import { Partner } from '@/models'

@Options({
  components: {
    RestaurantCard
  },
  computed: {
    ...mapGetters([
      'PARTNERS',
      'DB'
    ])
  },
  methods: {
    filterItems (event:Event) {
      const target = event.target as HTMLInputElement
      const value = target.value.toLowerCase()
      this.filteredPartners = this.PARTNERS.filter((partner:Partner) => {
        const partnerName = partner.products.split('.')[0]
        const filteredMenu = this.DB[partnerName].filter((menu:Partner) => {
          return menu.name.toLowerCase().indexOf(value) > -1 || menu.description.toLowerCase().indexOf(value) > -1
        })
        return filteredMenu.length || partner.name.toLowerCase().indexOf(value) > -1
      })
    }
  },
  mounted () {
    this.filteredPartners = this.PARTNERS
  },
  data () {
    return {
      filteredPartners: [] as Partner[]
    }
  }
})
export default class AppBody extends Vue {
  filteredPartners: Partner[] = [];
  filterItems!: () => void;
}
</script>
