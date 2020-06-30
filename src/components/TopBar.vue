<template>
<div>
    <div class="topSection">
        <div class="logoBar" :class="{ 'foldIn' : foldIn}">
      <div class=" logo logoBig"></div>
      <div class=" logo logoSmall"></div>
    </div>
    <div class="foodDrinksMenu">
        <div class="selectorIndicator" :class="{ 'rightSelected' : subMenuRightSelected, 'leftSelected' : !subMenuRightSelected}"></div>
        <div class="menu">
            <div class="food menuItem" v-on:click="foodDrinksMenuBtnClicked(false)">Eten 🌮</div>
            <div class="drinks menuItem" v-on:click="foodDrinksMenuBtnClicked(true)">Drinken 🍸</div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        foldIn: Boolean
    },
    data: () => {
        return {
            subMenuRightSelected: false
        }
    },
    methods: {
        foodDrinksMenuBtnClicked(_subMenuRightSelectedBool) { //_subMenuRightSelectedBool = true --> drinks; _subMenuRightSelectedBool = false --> food
            this.subMenuRightSelected = _subMenuRightSelectedBool
            this.$emit('foodVsDrinksSubMenuClicked', _subMenuRightSelectedBool)
        },
        foodDrinksMenutToogleExternally(_food) { //false = drinks, true = food
            this.subMenuRightSelected = !_food;
        }
    }
}
</script>

<style lang="scss" scoped>
.topSection {
    z-index: 1;
    top: 0;
    position: fixed;
    width: 100%;
}

.logoBar {
    position: relative;
    background-color: #FFF;
    height: 80px;
    width: calc(100% + 2px);
    margin-left: -1px !important;
    transition: height 0.1s ease-in;
    .logo {
        height: 100%;
        width: 100%;
        background-size: auto 35px;
        background-repeat: no-repeat;
        background-position: center center;
        transition: opacity 100ms ease-in-out;
        position: absolute;
        &.logoBig {
            opacity: 1;
            background-image: url("./../assets/logo/long.svg");
        }
        &.logoSmall {
            opacity: 0;
            background-image: url("./../assets/logo/lemon_only.svg");
        }
    }
}
.foldIn {
    height: 60px;
    .logo{
        &.logoBig {
            opacity: 0;
        }
        &.logoSmall {
            opacity: 1;
        }
    }
}

$foodDrinksMenuHeight: 50px;
.foodDrinksMenu {
    position: relative;
    transform: translateY(0);
    height: $foodDrinksMenuHeight;
    width: 100%;
    background-color: #FFF;
    .menu {
        height: 100%;
        display:flex;
        flex-direction: row;
        justify-content:space-evenly;
        .menuItem {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .selectorIndicator {
        z-index: -1;
        position: absolute;
        height: 100%;
        width: calc(50% - 15px);
        background-color: rgb(186, 224, 227);
        transition: transform 100ms ease-in-out;
        &:after {
            content:"";
            position:absolute;
            height:0;
            width:0;
            top:0;
            border: calc(#{$foodDrinksMenuHeight} / 2) solid transparent;
        }
        &.leftSelected {
            &:after {
            left:100%;
            border-left: calc(#{$foodDrinksMenuHeight} / 2) solid rgb(186, 224, 227);
        }
        }
        &.rightSelected {
            transform: translateX(calc( 100% + 30px));
            &:after {
            right:100%;
            border-right: calc(#{$foodDrinksMenuHeight} / 2) solid rgb(186, 224, 227);
        }
        }
    }
}
</style>