<template>
<div class="mainContainer" ref="mainContainerRef">
    <div class="leftPane pane">
        <VictualsList :listData="data.food" />
    </div>
    <div class="rightPane pane" ref="rightPane">
        <VictualsList :listData="data.drinks" />
    </div>
</div>
</template>

<script>
import VictualsList from './VictualsList'
import victualsDataObject from './../menu/menu.exemple.json'

export default {
    components: {
        VictualsList
    },
    methods: {
        switchToFood () {
            this.$refs["mainContainerRef"].scrollLeft = 0
        },
        switchToDrinks () {
            this.$refs["mainContainerRef"].scrollLeft = this.$refs["mainContainerRef"].scrollWidth
        },
        handleScrollToggle () {
            if (this.$refs["mainContainerRef"].scrollLeft >= this.$refs["rightPane"].getBoundingClientRect().left - 10) { //Drinks
                this.$emit('swipedFoodVsDrinks', false)
            }
            else { //food
                this.$emit('swipedFoodVsDrinks', true)
            }
        }
    },
  mounted () {
    this.$refs["mainContainerRef"].addEventListener('scroll', this.handleScrollToggle);
  },
  destroyed () {
    this.$refs["mainContainerRef"].removeEventListener('scroll', this.handleScrollToggle);
  },
  data () {
        return {
            data: victualsDataObject
        }
    }
}
</script>

<style lang="scss" scoped>
.mainContainer {
    position: absolute;
    // top: 130px;
    min-height: 101%;
    background-color: #F0F0F8;
    padding-top: 130px;
    width: 100%;
    // min-height: 200px;
    float: left;
    display: flex;
	-webkit-overflow-scrolling: touch;
	overflow-x: scroll;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
        display: none;
    }
    .pane {
        // border: solid 1px #000;
        position: relative;
        height: 100%;
        min-width: 100%;
        display: inline-block;
        scroll-snap-align: start;
    }
}
</style>