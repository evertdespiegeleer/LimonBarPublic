<template>
  <div id="app" ref="app">
    <TopBar ref="topBar" :foldIn="foldInTopBar" v-on:foodVsDrinksSubMenuClicked="foodVsDrinksSubMenuClicked"/>
    <VictualsSwipeBox ref="victualsSwipeBox" v-on:swipedFoodVsDrinks="swipedFoodVsDrinks"/>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import VictualsSwipeBox from './components/VictualsSwipeBox.vue'

const mixpanel = require('mixpanel-browser')
mixpanel.init("2e6022fc214a93e01854d9ddd5d9a25d")

export default {
  name: 'app',
  components: {
    TopBar,
    VictualsSwipeBox
  },
  created () {
    this.$win.addEventListener('scroll', this.handleScroll);
    this.$win.addEventListener('touchmove', this.handleScroll);
  },
  destroyed () {
    this.$win.removeEventListener('scroll', this.handleScroll);
    this.$win.removeEventListener('touchmove', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.foldInTopBar = !!(Math.max(0,window.scrollY))
    },
    foodVsDrinksSubMenuClicked (_drinksVsFoodBool) { //_drinksVsFoodBool = true --> drinks; _drinksVsFoodBool = false --> food
      if (_drinksVsFoodBool) { //Drinks
        this.$refs.victualsSwipeBox.switchToDrinks();
      }
      else { //food
        this.$refs.victualsSwipeBox.switchToFood();
      }
    },
    swipedFoodVsDrinks (_foodVsDrinksBool) {
      this.$refs.topBar.foodDrinksMenutToogleExternally(_foodVsDrinksBool)
  }
  },
  data: () => {
    return {
      foldInTopBar: false
    }
  }
}
</script>

<style lang="scss">
* { box-sizing: border-box; user-select: none; }

body {
  margin: 0 !important
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F0F0F8;
  height: 100%;
}
</style>