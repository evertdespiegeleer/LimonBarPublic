<template>
  <div id="app" ref="app">
    <TopBar ref="topBar" :foldIn="foldInTopBar" v-on:foodVsDrinksSubMenuClicked="foodVsDrinksSubMenuClicked"/>
    <VictualsSwipeBox ref="victualsSwipeBox" v-on:swipedFoodVsDrinks="swipedFoodVsDrinks"/>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import VictualsSwipeBox from './components/VictualsSwipeBox.vue'
import mixpanel from 'mixpanel-browser'

const getJsonFromUrl = () => {
  let url = window.location.search
  if(!url) url = location.search;
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

if(!getJsonFromUrl()['cacheless']) {
  let url = window.location.href
  const rand = Math.floor(Math.random() * 1000000)
  if (url.indexOf('?') > -1){
    url += `&cacheless=${rand}`
  }
  else{
   url += `?cacheless=${rand}`
  }
  window.location.href = url
}
else {
mixpanel.init("2e6022fc214a93e01854d9ddd5d9a25d")
if (!localStorage.getItem("userId")) {
  localStorage.setItem("userId", String(Math.round(Math.random()*1000000)) + String((new Date).getTime()))
}
mixpanel.identify(localStorage.getItem("userId"))
localStorage.getItem("userId")
mixpanel.track("pageload", {"tablenumber": getJsonFromUrl()['t']})
}

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