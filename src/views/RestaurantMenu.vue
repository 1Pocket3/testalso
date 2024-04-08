<template>
    <div class="about">
      <div class="container">
        <section class="menu">
          <div class="section-heading">
            <h2 class="section-title restaurant-title">{{ title.name }}</h2>
            <div class="card-info">
              <div class="rating">{{title.stars}}</div>
              <div class="price">{{ title.price }}</div>
              <div class="category">{{title.kitchen}}</div>
            </div>
            <!-- /.card-info -->
            <div class="filters__btn">
              <button class="expensive"
              :class="{ active: expensiveActive }"
              @click="toggleExpensiveActive()">
                Самые дорогие
            </button>
            <button class="cheaper"
              :class="{ active: cheaperActive }"
              @click="(toggleCheaperActive())">
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

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MenuCard from '@/components/MenuCard.vue'
import { mapActions } from 'vuex'
import { MenuItem, Title, dbData } from '@/models'

@Options({
  components: {
    MenuCard
  },
  data () {
    return {
      menuItems: [] as MenuItem[],
      title: {} as Title,
      expensiveActive: false,
      cheaperActive: false
    }
  },
  mounted () {
    const currentName = this.$route.params.name
    this.menuItems = this.$store.state.dbData.db[currentName]
    // eslint-disable-next-line
    this.title = this.$store.state.dbData.db.partners.find((partner:any) => partner.products.indexOf(currentName) !== -1)
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    addToCart (data:object) {
      const mutatedData = { ...data, quantity: 1 }

      this.ADD_TO_CART(mutatedData)
    },
    toggleExpensiveActive () {
      this.expensiveActive = !this.expensiveActive
    },
    toggleCheaperActive () {
      this.cheaperActive = !this.cheaperActive
    }
  }
})
export default class RestaurantMenu extends Vue {
  menuItems: MenuItem[] = [];
  dbData: dbData[] = [];
  title: Title = {} as Title;
  addToCart!: () => void;
  expensiveActive = false;
  cheaperActive = false;
  toggleExpensiveActive!: () => void;
  toggleCheaperActive!: () => void;
}
</script>

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
  background-color: #4CAF50;
  color: white;
}
</style>
