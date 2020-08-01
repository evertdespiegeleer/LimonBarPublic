<template>
<div class="main">
    <div class="loadingList" v-if="Object.keys(listData).length === 0 && listData.constructor === Object || !listData">
        LOADING...
    </div>
    <div v-if="listData">
        <div class="listDescription">
            {{ listData.description }}
        </div>

        <div class="subclass" :class="{ 'firstSubclassInList': index === 0 }" v-bind:key="subclass.className" v-for="(subclass, index) in listData.subclasses">
            <div class="subclassTitle">
                - {{ subclass.className }} -
            </div>
            <div class="victual" v-bind:key="victual.id" :ref="victual.id" :class="{ 'extraInfoProvided': victual.extraInfoProvided || victual.availabilityRestrictionsByDay }" v-for="victual in subclass.victuals" >
                <div class="defaultLine" @click="toggleAdditionalInfo(victual)">
                    <p class="name" :class="{ 'unavailable': !victual.available }">{{ victual.victualName }}<img v-if="victual.happyHour && victual.available && happyHourWithinTimestamps(victual.happyHourStart, victual.happyHourStop)" class="happyHourNameIcon" src="./../assets/happyhour-01.svg"/></p>
                    <p class="price">&euro; {{ addZeroes(victual.price) }}</p>
                </div>
                <div class="additionalInfoProvidedIcon">
                    ...
                </div>
                <div class="additionalInfo">
                    <div class="unavailability" v-if="!victual.available">
                        {{ victual.victualName }} is momenteel niet beschikbaar.
                    </div>
                    <div v-if="victual.happyHour && victual.available && happyHourWithinTimestamps(victual.happyHourStart, victual.happyHourStop)" class="happyHourDescription">
                        🎉 {{ victual.victualName }} is onderdeel van ons huidige happy hour! 🎉 <a href="https://www.facebook.com/LimonBarHerzele/posts/128671195577240">(Meer info)</a>
                    </div>
                    <div class="content">
                        {{ victual.description }}
                        <div class="pictures" v-if="victual.pics.length !== 0">
                            <img :src="getImgUrlVue(picUrl, victual.id)" loading="lazy" v-bind:key="picUrl" v-for="picUrl in victual.pics">
                        </div>
                        <div class="restrictionDaysInfo" v-if="victual.availabilityRestrictionsByDay">
                        Opgelet!<b> {{ victual.victualName }} </b>is enkel beschikbaar op volgende dagen:
                        <ul>
                            <li v-if="victual.daysAvailable[0]">Maandag</li>
                            <li v-if="victual.daysAvailable[1]">Dinsdag</li>
                            <li v-if="victual.daysAvailable[2]">Woensdag</li>
                            <li v-if="victual.daysAvailable[3]">Donderdag</li>
                            <li v-if="victual.daysAvailable[4]">Vrijdag</li>
                            <li v-if="victual.daysAvailable[5]">Zaterdag</li>
                            <li v-if="victual.daysAvailable[6]">Zondag</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        listData: Object
    },
    methods: {
        addZeroes(num) {
            const val = String(num)
            const dec = val.split('.')[1]
            const len = dec && dec.length > 2 ? dec.length : 2
            return Number(val).toFixed(len)
        },
        toggleAdditionalInfo(_victual) {
            if (_victual.extraInfoProvided) {
                this.$refs[_victual.id][0].classList.toggle('infoShown')
            }
        },
        getImgUrlVue(picUrl, victualId) {
            return require('@/assets/victualsPics/' + victualId + '/' + picUrl)
        },
        happyHourWithinTimestamps(startTime, endTime) {
            const currentStamp = (new Date()).getTime()
            let answer = true
            if(currentStamp < startTime) answer = false
            if(currentStamp > endTime) answer = false
            return answer
        }
    }
}
</script>

<style lang="scss" scoped>
a, a:visited, a:hover, a:active {
  color:rgb(59, 147, 206);
}

.main {
    width: 100%;
    // background-color: red;
    height: 100%;
    word-wrap: break-word;
}

.loadingList {
    // min-height: 100vh;
    padding-top: 200px;
    text-align: center;
}

.listDescription {
    padding: 20px 20px 0 20px;
}

.subclass {
    padding-top: 50px;
    &.firstSubclassInList {
        padding-top: 30px !important;
    }
    .subclassTitle {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding-bottom: 15px;
    }
    .victual {
        position: relative;
        width: 100%;
        margin-top: 2px;
        background-color: #FFF;
        padding: 0 20px 0 20px;
        // display: block;
        .defaultLine {
            padding: 20px 0 20px 0;
            width: 100%;
            display: inline-block;
            .name {
                float: left;
                transition: font-weight 100ms ease-in-out, font-size 100ms ease-in-out;
                max-width: 75%;
                &.unavailable {
                    opacity: 0.4;
                }
            }
            .happyHourNameIcon {
                display: inline;
                height: 1em;
                vertical-align: middle;
                margin-left: 10px;
            }
            .price {
                float: right;
            }
        }
        .additionalInfoProvidedIcon {
            pointer-events: none;
            display: none;
            height: 0;
            font-size: 120%;
            color: rgb(180, 180, 180);
            transform: translateY(-42px);
        }
        &.extraInfoProvided {
            .additionalInfoProvidedIcon {
                display: block;
            }
        }
        .additionalInfo {
            display: block;
            clear: left;
            width: 100%;
            transform: scaleY(0);
            height: 0;
            transition: height 100ms ease-in-out;
            .unavailability {
                color: rgb(255, 0, 0);
                padding-bottom: 20px;
            }
            .happyHourDescription {
                color: rgb(122, 167, 40);
                padding-bottom: 20px;
            }
            .content {
                user-select: text;
                opacity: 0;
                transition: opacity 100ms ease-in-out;
                .pictures {
                    padding: 0;
                    width: 100%;
                    overflow-x: scroll;
                    padding: 40px 0 0 0;
                    white-space: nowrap;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                    img {
                        scroll-snap-align: center;
                        margin: 0;
                        width: 90%;
                        max-width: 500px;
                        height: auto;
                        margin-right: 10px;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
                .restrictionDaysInfo {
                    padding-top: 40px;
                    ul {
                        margin: 0;
                        padding-top: 10px;
                        padding-bottom: 20px;
                    }
                }
            }
        }
        &.infoShown {
            .defaultLine {
                .name {
                    font-weight: bold;
                    font-size: 120%;
                }
                .happyHourNameIcon {
                    display: none;
                }
            }
            .additionalInfoProvidedIcon {
                display: none;
            }
            .additionalInfo {
                transform: scaleY(1);
                height: auto;
                padding-bottom: 30px;
                .content {
                    opacity: 1;
                }
            }
        }
    }
}
</style>