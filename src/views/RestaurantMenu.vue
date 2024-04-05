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
          </div>
          <div class="cards cards-menu">
            <div class="card" v-for="(item, index) in menuItems" :key="index">
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
                  <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                  </button>
                  <strong class="card-price-bold">{{ item.price }}</strong>
                </div>
              </div>
              <!-- /.card-text -->
            </div>
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

interface MenuItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface dbData {
  db: object
}

interface Title {
  name: string;
  stars: string;
  price: number;
  kitchen: string;
}

@Options({
  components: {},
  // computed: {
  //   ...mapState(['dbData'])
  // },
  data () {
    return {
      menuItems: [] as MenuItem[],
      title: {} as Title,
      showAuthModal: true as boolean
    }
  },
  mounted () {
    const currentName = this.$route.params.name
    this.menuItems = this.$store.state.dbData.db[currentName]
    // eslint-disable-next-line
    this.title = this.$store.state.dbData.db.partners.find((partner:any) => partner.products.indexOf(currentName) !== -1)
  }
})
export default class RestaurantMenu extends Vue {
  menuItems: MenuItem[] = [];
  dbData: dbData[] = [];
  title: Title = {} as Title;
}
</script>
