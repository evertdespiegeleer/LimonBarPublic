(function(e){function a(a){for(var s,r,n=a[0],f=a[1],o=a[2],d=0,u=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&u.push(t[r][0]),t[r]=0;for(s in f)Object.prototype.hasOwnProperty.call(f,s)&&(e[s]=f[s]);c&&c(a);while(u.length)u.shift()();return l.push.apply(l,o||[]),i()}function i(){for(var e,a=0;a<l.length;a++){for(var i=l[a],s=!0,n=1;n<i.length;n++){var f=i[n];0!==t[f]&&(s=!1)}s&&(l.splice(a--,1),e=r(r.s=i[0]))}return e}var s={},t={app:0},l=[];function r(a){if(s[a])return s[a].exports;var i=s[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,a,i){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)r.d(i,s,function(a){return e[a]}.bind(null,s));return i},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],f=n.push.bind(n);n.push=a,n=n.slice();for(var o=0;o<n.length;o++)a(n[o]);var c=f;l.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"0ea8":function(e,a,i){"use strict";var s=i("aac4"),t=i.n(s);t.a},"0f81":function(e,a,i){e.exports=i.p+"img/2.bc31e2d0.jpg"},1415:function(e,a,i){e.exports=i.p+"img/1.13c00ba9.jpg"},"1b13":function(e,a,i){e.exports=i.p+"img/1 copy.ca80f308.jpg"},"28cd":function(e,a,i){e.exports=i.p+"img/image00004.30f20b15.jpeg"},"331c":function(e,a,i){e.exports=i.p+"img/image00001.94bec995.jpeg"},"341c":function(e,a,i){"use strict";var s=i("e1ba"),t=i.n(s);t.a},"3d1f":function(e,a,i){e.exports=i.p+"img/image00002.7191f35d.jpeg"},"4c12":function(e,a,i){e.exports=i.p+"img/2 copy.8aafff6e.jpg"},"4d1d":function(e,a,i){e.exports=i.p+"img/image00001 copy.ca994753.jpeg"},"56d7":function(e,a,i){"use strict";i.r(a);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),t=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{ref:"app",attrs:{id:"app"}},[i("TopBar",{ref:"topBar",attrs:{foldIn:e.foldInTopBar},on:{foodVsDrinksSubMenuClicked:e.foodVsDrinksSubMenuClicked}}),i("VictualsSwipeBox",{ref:"victualsSwipeBox",on:{swipedFoodVsDrinks:e.swipedFoodVsDrinks}})],1)},l=[],r=(i("28a5"),i("ac6a"),i("386d"),function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("div",{staticClass:"topSection"},[i("div",{staticClass:"logoBar",class:{foldIn:e.foldIn}},[i("div",{staticClass:" logo logoBig"}),i("div",{staticClass:" logo logoSmall"})]),i("div",{staticClass:"foodDrinksMenu"},[i("div",{staticClass:"selectorIndicator",class:{rightSelected:e.subMenuRightSelected,leftSelected:!e.subMenuRightSelected}}),i("div",{staticClass:"menu"},[i("div",{staticClass:"food menuItem",on:{click:function(a){return e.foodDrinksMenuBtnClicked(!1)}}},[e._v(e._s(e.data.food.menuName))]),i("div",{staticClass:"drinks menuItem",on:{click:function(a){return e.foodDrinksMenuBtnClicked(!0)}}},[e._v(e._s(e.data.drinks.menuName))])])])])])}),n=[],f=i("906b"),o={props:{foldIn:Boolean},data:function(){return{subMenuRightSelected:!1,data:f}},methods:{foodDrinksMenuBtnClicked:function(e){this.subMenuRightSelected=e,this.$emit("foodVsDrinksSubMenuClicked",e)},foodDrinksMenutToogleExternally:function(e){this.subMenuRightSelected=!e}}},c=o,d=(i("db9c"),i("2877")),u=Object(d["a"])(c,r,n,!1,null,"5ce5a3ed",null),p=u.exports,b=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{ref:"mainContainerRef",staticClass:"mainContainer"},[i("div",{staticClass:"leftPane pane"},[i("VictualsList",{attrs:{listData:e.data.food}})],1),i("div",{ref:"rightPane",staticClass:"rightPane pane"},[i("VictualsList",{attrs:{listData:e.data.drinks}})],1)])},g=[],m=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"main"},[0===Object.keys(e.listData).length&&e.listData.constructor===Object||!e.listData?s("div",{staticClass:"loadingList"},[e._v("\n        LOADING...\n    ")]):e._e(),e.listData?s("div",[s("div",{staticClass:"listDescription"},[e._v("\n            "+e._s(e.listData.description)+"\n        ")]),e._l(e.listData.subclasses,(function(a,t){return s("div",{key:a.className,staticClass:"subclass",class:{firstSubclassInList:0===t}},[s("div",{staticClass:"subclassTitle"},[e._v("\n                - "+e._s(a.className)+" -\n            ")]),e._l(a.victuals,(function(a){return s("div",{key:a.id,ref:a.id,refInFor:!0,staticClass:"victual",class:{extraInfoProvided:a.extraInfoProvided||a.availabilityRestrictionsByDay}},[s("div",{staticClass:"defaultLine",on:{click:function(i){return e.toggleAdditionalInfo(a)}}},[s("p",{staticClass:"name",class:{unavailable:!a.available}},[e._v(e._s(a.victualName)),a.happyHour&&a.available?s("img",{staticClass:"happyHourNameIcon",attrs:{src:i("72ee")}}):e._e()]),s("p",{staticClass:"price"},[e._v("€ "+e._s(e.addZeroes(a.price)))])]),s("div",{staticClass:"additionalInfoProvidedIcon"},[e._v("\n                    ...\n                ")]),s("div",{staticClass:"additionalInfo"},[a.available?e._e():s("div",{staticClass:"unavailability"},[e._v("\n                        "+e._s(a.victualName)+" is momenteel niet beschikbaar.\n                    ")]),a.happyHour&&a.available?s("div",{staticClass:"happyHourDescription"},[e._v("\n                        🎉 "+e._s(a.victualName)+" is onderdeel van ons huidige happy hour! 🎉 "),s("a",{attrs:{href:"https://google.com"}},[e._v("(Meer info)")])]):e._e(),s("div",{staticClass:"content"},[e._v("\n                        "+e._s(a.description)+"\n                        "),0!==a.pics.length?s("div",{staticClass:"pictures"},e._l(a.pics,(function(i){return s("img",{key:i,attrs:{src:e.getImgUrlVue(i,a.id),loading:"lazy"}})})),0):e._e(),a.availabilityRestrictionsByDay?s("div",{staticClass:"restrictionDaysInfo"},[e._v("\n                        Opgelet!"),s("b",[e._v(" "+e._s(a.victualName)+" ")]),e._v("is enkel beschikbaar op volgende dagen:\n                        "),s("ul",[a.daysAvailable[0]?s("li",[e._v("Maandag")]):e._e(),a.daysAvailable[1]?s("li",[e._v("Dinsdag")]):e._e(),a.daysAvailable[2]?s("li",[e._v("Woensdag")]):e._e(),a.daysAvailable[3]?s("li",[e._v("Donderdag")]):e._e(),a.daysAvailable[4]?s("li",[e._v("Vrijdag")]):e._e(),a.daysAvailable[5]?s("li",[e._v("Zaterdag")]):e._e(),a.daysAvailable[6]?s("li",[e._v("Zondag")]):e._e()])]):e._e()])])])}))],2)}))],2):e._e()])},v=[],y=(i("c5f6"),{props:{listData:Object},methods:{addZeroes:function(e){var a=String(e),i=a.split(".")[1],s=i&&i.length>2?i.length:2;return Number(a).toFixed(s)},toggleAdditionalInfo:function(e){e.extraInfoProvided&&this.$refs[e.id][0].classList.toggle("infoShown")},getImgUrlVue:function(e,a){return i("a189")("./"+a+"/"+e)}}}),h=y,k=(i("341c"),Object(d["a"])(h,m,v,!1,null,"79ae98fe",null)),j=k.exports,x={components:{VictualsList:j},methods:{switchToFood:function(){this.$refs["mainContainerRef"].scrollLeft=0,window.scrollTo(0,1)},switchToDrinks:function(){this.$refs["mainContainerRef"].scrollLeft=this.$refs["mainContainerRef"].scrollWidth,window.scrollTo(0,1)},handleScrollToggle:function(){this.$refs["mainContainerRef"].scrollLeft>=this.$refs["rightPane"].getBoundingClientRect().left-10?this.$emit("swipedFoodVsDrinks",!1):this.$emit("swipedFoodVsDrinks",!0)}},mounted:function(){this.$refs["mainContainerRef"].addEventListener("scroll",this.handleScrollToggle)},destroyed:function(){this.$refs["mainContainerRef"].removeEventListener("scroll",this.handleScrollToggle)},data:function(){return{data:f}}},D=x,w=(i("0ea8"),Object(d["a"])(D,b,g,!1,null,"a379d4e8",null)),B=w.exports,I=i("94ba"),R=i.n(I),N=function(){var e=window.location.search;e||(e=location.search);var a=e.substr(1),i={};return a.split("&").forEach((function(e){var a=e.split("=");i[a[0]]=decodeURIComponent(a[1])})),i};R.a.init("2e6022fc214a93e01854d9ddd5d9a25d"),R.a.track("pageload",{tablenumber:N()["t"]});var _={name:"app",components:{TopBar:p,VictualsSwipeBox:B},created:function(){this.$win.addEventListener("scroll",this.handleScroll),this.$win.addEventListener("touchmove",this.handleScroll)},destroyed:function(){this.$win.removeEventListener("scroll",this.handleScroll),this.$win.removeEventListener("touchmove",this.handleScroll)},methods:{handleScroll:function(){this.foldInTopBar=!!Math.max(0,window.scrollY)},foodVsDrinksSubMenuClicked:function(e){e?this.$refs.victualsSwipeBox.switchToDrinks():this.$refs.victualsSwipeBox.switchToFood()},swipedFoodVsDrinks:function(e){this.$refs.topBar.foodDrinksMenutToogleExternally(e)}},data:function(){return{foldInTopBar:!1}}},P=_,H=(i("5c0b"),Object(d["a"])(P,t,l,!1,null,null,null)),C=H.exports;s["a"].prototype.$win=window,s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(C)}}).$mount("#app"),document.title="Limón Bar"},5791:function(e,a,i){e.exports=i.p+"img/2 copy.2e548fb7.jpg"},"5c0b":function(e,a,i){"use strict";var s=i("e332"),t=i.n(s);t.a},"5cf2":function(e,a,i){e.exports=i.p+"img/1.6776c79a.jpeg"},"61af":function(e,a,i){e.exports=i.p+"img/1.74cd6ef0.jpg"},6485:function(e,a,i){e.exports=i.p+"img/image00001.657e4140.jpeg"},"66e3":function(e,a,i){e.exports=i.p+"img/1 copy.49340259.jpg"},"6b7f":function(e,a,i){e.exports=i.p+"img/image00002 copy.5d6a9001.jpeg"},"6d6b":function(e,a,i){e.exports=i.p+"img/image00002.7191f35d.jpeg"},7243:function(e,a,i){e.exports=i.p+"img/2.d975a8a0.jpg"},"72ee":function(e,a,i){e.exports=i.p+"img/happyhour-01.30487fda.svg"},"745e":function(e,a,i){e.exports=i.p+"img/2.0595a15b.jpg"},"79a5":function(e,a,i){e.exports=i.p+"img/2.0daea939.jpg"},8104:function(e,a,i){e.exports=i.p+"img/2.caa38172.jpg"},"822a":function(e,a,i){e.exports=i.p+"img/1.29250ca9.jpg"},8955:function(e,a,i){e.exports=i.p+"img/image00001.94bec995.jpeg"},"8cea":function(e,a,i){e.exports=i.p+"img/1.6776c79a.jpeg"},"8cf5":function(e,a,i){e.exports=i.p+"img/2 copy.001a239e.jpg"},"906b":function(e){e.exports=JSON.parse('{"food":{"menuName":"Alcoholisch 🍻","description":"","subclasses":[{"className":"Bier","victuals":[{"victualName":"Clément (De Ryck)","id":"6cdd69dd0f142510fd079941feea201840162195b37cfe502288fa0820d4b99e","extraInfoProvided":true,"description":"Clément is een heerlijk, pittig, lichtblonde doordrinker met 5% alcohol. Clément is een blond bier van Brouwerij de Ryck uit Herzele. Het bier werd in 2019 gelanceerd als ode aan Clément de Ryck en om de realisatie van de nieuwe productiesite van de brouwerij te vieren.","price":3,"pics":[],"allergens":{"soy":false,"egg":true,"milk":false,"sesame":true,"nuts":true,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Steenuilke (De Ryck)","id":"1fe3ccc90319ddfde8a726ed95760139dd4822d25750ba9cc5ed2d23f3f36acc","extraInfoProvided":true,"description":"Steenuilke is een uniek en pittig blond bier met een lichte moutsmaak, een subtiele fruitigheid en een fijne kruidige toets. Het heeft een hoppige en droge afdronk. Het bier heeft een alcoholgehalte van 6%. Het werd in samenwerking met het Regionaal Landschap Vlaamse Ardennen gecreëerd ter ondersteuning van het steenuilproject in de regio.","price":3.5,"pics":[],"allergens":{"soy":true,"egg":false,"milk":true,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Lamoral (Van den Bossche)","id":"7e9e1947ba6026d4a072b9b914a477c803a75ccb14df40459d42c0f3cf1cad5a","extraInfoProvided":true,"description":"Lamoral is een licht goudblond bier met een subtiele pareling. De geur wordt hoofdzakelijk bepaald door mout, gember en mandarijntjes. De smaak is een geheel van pompelmoesbitter, peperachtige kruidigheid en lichte zoetigheid. Lamoral heeft een alcoholgehalte van 8%. Een volmondig en karaktervol bier.","price":3.5,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Buffalo bitter (Van den Bossche)","id":"418e82f49ef732c6b9d0e64ee923279d29210eb616299a9bc958a8755ae76ed4","extraInfoProvided":true,"description":"Buffalo bitter is goudblond en gekroond met een witte, fijne schuimlaag. Het heeft een bittere, en volmondige smaak. Het degustatiebier bevat 8% alcohol.","price":3.5,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Saison d’Erpe Mere (De Glazen Toren)","id":"b54bb8ecb27dfe7a7838c010fea6ee4c3f4bd007ebb80aa994f275b46d920b38","extraInfoProvided":true,"description":"Saison d\'Erpe-Mere is het paradepaardje van Brouwerij de Glazen Toren in Erpe Mere. De saison bierstijl is afkomstig uit de provincie Henegouwen. Saison werd door boeren in de winter gebrouwen, en in de zomer gedronken tijdens de werkzaamheden op het land. Saison d’Erpe-Mere heeft een hoppig (citrus) aroma en een fijne bitterheid. Het is strogeel, en heeft een witte stabiele schuimkraag. Het bier heeft een alcoholgehalte van 6%.","price":3.5,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Ondineke (De Glazen Toren)","id":"3a06746a242b3647672c81b6d58e949731f2d76aa9b0e984be74c1aaf1a6a03e","extraInfoProvided":true,"description":"Ondineke is een ongefilterd goudblond bier, met een alcoholpercentage van 8.5%, zonder toevoeging van kruiden. Brouwerij De Glazen Toren maakt gebruik van de enige hopvarëiteit die nu nog in Aalst verbouwd wordt. Het bier is genoemd naar Ondine, het hoofdpersonage van De Kapellekensbaan, een boek van Louis Paul Boon. Het is het officiële stadsbier van Aalst.","price":3.5,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Desperados Original","id":"9e9907ad98373bb2e48f4bc210fdbce6c6bb6c5d76939ea30d57076604a17b08","extraInfoProvided":true,"description":"Desperados Original is een iconische combinatie van bier gearomatiseerd met tequila, beroemd om zijn intense, verfrissende smaak met subtiele toetsen van citroen en een licht kruidige afdronk. Dit bier heeft een alcoholgehalte van 6%.","price":4,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]}]},{"className":"Wijn","victuals":[{"victualName":"Glas rosé (Rocca Maura Effet Mer)","id":"345de2bb8727056c09756c9b9a164392735df41345d24359b013d9b603fae966","extraInfoProvided":true,"description":"Rocca Maura Effet Mer is een Franse wijn uit de regio Languedoc Roussillon. Het is een zeer bleke, intense en verfrissende Rosé. Waan je op een zonnig terras. Effet Mer is de wijn van de zomer bij uitstek.","price":4,"pics":["image00001.jpeg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Fles rosé (Rocca Maura Effet Mer)","id":"b40af3226bbe65982ab182c88576e18bdd84fa23408fb908245201e85e157da8","extraInfoProvided":true,"description":"Rocca Maura Effet Mer is een Franse wijn uit de regio Languedoc Roussillon. Het is een zeer bleke, intense en verfrissende Rosé. Waan je op een zonnig terras. Effet Mer is de wijn van de zomer bij uitstek.","price":20,"pics":["image00001.jpeg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Glas witte wijn (Rocca Maura Blanc)","id":"ca7c29f75aaabe65f4a1d62fe463a2f4699c3fe2eb51cd8360420294fe10822d","extraInfoProvided":true,"description":"Met zijn bleke kleur tovert deze wijn wat pareltjes op je tong. Je ruikt de aroma\'s van o.a. pompelmoes en citroen. In de mond verkrijg je een mooie parelende frisheid.","price":4,"pics":["image00002.jpeg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Fles witte wijn (Rocca Maura Blanc)","id":"7e8d051afe50f6f2d57ffa1d917ff58e5aa1e901c9a64902f2ed08119933fbd9","extraInfoProvided":true,"description":"Met zijn bleke kleur tovert deze wijn wat pareltjes op je tong. Je ruikt de aroma\'s van o.a. pompelmoes en citroen. In de mond verkrijg je een mooie parelende frisheid.","price":20,"pics":["image00002.jpeg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Glas mousserende wijn","id":"b7dc1e27c8158c92bfd2a361c62e64deb9306f94625c1c449196c3ae9712e5c5","extraInfoProvided":true,"description":"Een lekkere schuimwijn van Wijngoed \'t Varent uit Horebeke.","price":5,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Fles mousserende wijn","id":"0013be4ea3137195c2a728cbdb3f21529e9337b5b3777b9de0d96441f15f73a4","extraInfoProvided":true,"description":"Een lekkere schuimwijn van Wijngoed \'t Varent uit Horebeke.","price":26,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]}]},{"className":"Cocktails","victuals":[{"victualName":"Jungle Bird","id":"4a42fb53b898f15876f1d064e6e6e1a1be3590a36e6137f6b0837573affa8c5b","extraInfoProvided":true,"description":"Jungle Bird is een tropische cocktail met ananas en limoen. Het is een perfecte mix van zoet en bitter, lekker op een zonnige dag. #EvertsFavorite","price":8.5,"pics":["1.jpg","2.jpg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Wave 560","originalName":"Bee\'s Knees","id":"873a86d83e18b21cadc7fc16995f9c47ec0f4a56060416498146197e3ec63a77","extraInfoProvided":true,"description":"Wave 560 is een heel frisse, foamy cocktail. De lichtgele kleur wordt gevormd door de overvloed aan citroen. #RenéesFavorite","price":8.5,"pics":["1.jpg","2.jpg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Negroni","id":"47c472a7d7f48e5defa15d0130e5ac6cf985ceeac3e7f9e01241e73ff4d17c8b","extraInfoProvided":true,"description":"Negroni is een typische Italiaanse, robijnrode cocktail met een bitterzoete smaak. Negroni is afkomstig uit de stad Firenze.","price":9.5,"pics":["1.jpg","2.jpg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Lemon Drop","id":"f0b2ef420a150836860401267b736ee494b10d3e5255667351cd6a705e31e6d3","extraInfoProvided":true,"description":"Lemon Drop is een cocktail met een frisse citrussmaak. Deze eenvoudige maar heerlijke cocktail is verrijkt met vergeperst citroensap. #Clarissesfavorite","price":8.5,"pics":["1.jpg","2.jpg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Pink Pomelo","originalName":"PRETTY PINK GIN AND CRANBERRY MARTINI","id":"a81d7efe95d2ee0e3c6ad01615d8632f2e3fe757270213e0962a6ecaa687e7e2","extraInfoProvided":true,"description":"Pink Pomelo is een zoete cocktail, met een lichte bitterheid, eigen aan de pompelmoes. De roze kleur wordt mede bepaalde door de likeur \'Oude Mandarin\' van Stokerij Mertens uit Zottegem.","price":8.5,"pics":["1.jpg","2.jpg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Gin Tonic Butcher","id":"c568e1356ba2d2195d7c7ebe0129a9c37babc823752d90238ad0dc7e4bb468b2","extraInfoProvided":true,"description":"Gin Tonic Butcher bevat de premiun gin \'Butcher\' uit Vlierzele. De gin werd samengesteld door de uitbaters van kwaliteitsslagerij Robby & Nathalie.","price":9.5,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]},{"victualName":"Sangria","id":"25858f087d50004dbb294e89ccd0878b550b4bd4c85472f219bbfe4cfff04f74","extraInfoProvided":false,"description":"","price":6,"pics":[],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]}]},{"className":"Digestieven","victuals":[{"victualName":"Limoncello","id":"6dc896cae279fea01f2cd21de4892f2b556ae6c3d0e6f0a32fdb70ce775da3e7","extraInfoProvided":true,"description":"Onze limoncello is afkomstig van een lokaal, gepassioneerd koppel uit Brakel: Yolanda & Tom. Hun zaak, Litomcello, waar alles artisanaal gemaakt wordt, schenkt een deel van de opbrengst aan een weeshuis in Chili.","price":2.5,"pics":["image00003.jpeg"],"allergens":{"soy":true,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":true},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[false,false,true,false,false,false,false]}]}]},"drinks":{"menuName":"Non-alcoholisch ☕️","description":"","subclasses":[{"className":"Frisdranken","victuals":[{"victualName":"Ritchie Orange","id":"b90fc2b6a423f4dfa7f3f00ff66959754543d396c06d295e5efe554a48ed4910","extraInfoProvided":true,"description":"Een heerlijke, Belgische limonade met sinaasappel.","price":2.5,"pics":["1.jpeg"],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Ritchie Lemon","id":"e551975afa44aa3dbcad205b55a6f9f0cd83250e01775ab93ba8d9816ced205a","extraInfoProvided":true,"description":"Een heerlijke, Belgische limonade met citroen.","price":2.5,"pics":["1.jpeg"],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Ritchie Pompelmoes","id":"1a887513e033c701c8fba96fad14c1146fed43515c938e39262610f449c3dfa9","extraInfoProvided":true,"description":"Een heerlijke, Belgische limonade met pompelmoes.","price":2.5,"pics":["1.jpeg"],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Coca Cola","id":"85761d5136413d7df4e43fc073cad4e04d90437bc5e9c5827dc08c89765e8c8a","extraInfoProvided":false,"description":"","price":2.5,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Coca Cola Zero","id":"88e32e0cd678f738e6ddb763f1bf84b58acdffc8bb71dc17051d0ab100172e8d","extraInfoProvided":false,"description":"","price":2.5,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Lipton Ice Tea","id":"14bbe64387aa8ec2d095651ac76fffc32dbf9df823e74db63162c6f66943d7ae","extraInfoProvided":false,"description":"","price":2.5,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Water","id":"7ca7dea906800f87091b819132ecf2aa2b7ea14c9841fa18b9db121d3bbe82dc","extraInfoProvided":false,"description":"","price":2,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Spuitwater","id":"ec083457d5f1344c89969c9caa6706eb54a9715018e4e72512bf69e4f2d18845","extraInfoProvided":false,"description":"","price":2,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]}]},{"className":"Mocktails","victuals":[{"victualName":"Virgin Mojito","id":"fcf9ffecb80ef80aa63dbadbf9fb3274dac5c46787f07213bad1f92b17b074e6","extraInfoProvided":true,"description":"Een heerlijke, alcoholvrije variant van de klassieke Cubaanse mojito.","price":6,"pics":["1.jpg"],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Rose Addiction","id":"ff193ef4e3d5ed4d40dba44ad28881256a804f567526d87dcdaaba77b6082a42","extraInfoProvided":true,"description":"Een zoete mocktail met de smaak van roosjes.","price":6,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]}]},{"className":"Koffie","victuals":[{"victualName":"Kleine koffie","id":"61c9b8a2cdefbbf151f019bca2584cd0fe5406b423758c6dd59036355e4f5cce","extraInfoProvided":true,"description":"De koffie is afkomstig van koffiebranderij Hoorens uit Sint-Maria-Oudenhove. De koffie die wij gebruiken, Panamajumbo, is een eerbetoon aan kunstenaar Panamarenco.","price":2.5,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Grote koffie","id":"22111d30c9859588b973ff0d8f7b569f56d4788853590799868a24aca4bf22c2","extraInfoProvided":true,"description":"De koffie is afkomstig van koffiebranderij Hoorens uit Sint-Maria-Oudenhove. De koffie die wij gebruiken, Panamajumbo, is een eerbetoon aan kunstenaar Panamarenco.","price":3.5,"pics":[],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Dalgona Iced Coffee","id":"fbd8b20249f21aa8d15525235b2736d7db615f6e2ce8ef6a58f8423ad66394f3","extraInfoProvided":true,"description":"Dalgona Iced Coffee is een romige ijskoffie, en bestaat voornamelijk uit koude melk, gemengd met een opgeklopte, luchtige koffieroom. De koffie wordt afgewerkt met een heerlijke chocolade koffieboon van lokale koffiebranderij Hoorens.","price":4,"pics":["image00004.jpeg"],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]}]},{"className":"Thee","victuals":[{"victualName":"Iced Tea Amour Provence","id":"90c821f899d7b4a64f2df6690898437017b8e4821a2d995d19bb56d697a97d17","extraInfoProvided":true,"description":"Deze thee is afkomstig uit de Herzeelse concept store Sōshun. Amour Provence is de rechtse iced tea op de foto.","price":2.5,"pics":["1.jpg"],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]},{"victualName":"Iced Tea Fresh Peach","id":"7e4db2c87b995c7de311612df11776099a0608711dd2725d7e4d554035332880","extraInfoProvided":true,"description":"Deze thee is afkomstig uit de Herzeelse concept store Sōshun. Fresh Peach is de linkse iced tea op de foto.","price":2.5,"pics":["1.jpg"],"allergens":{"soy":false,"egg":false,"milk":false,"sesame":false,"nuts":false,"gluten":false},"happyHour":false,"available":true,"availabilityRestrictionsByDay":false,"daysAvailable":[true,true,true,true,true,true,true]}]}]}}')},9250:function(e,a,i){e.exports=i.p+"img/1.ccdfd3e9.jpg"},"94f5":function(e,a,i){e.exports=i.p+"img/1.74cd6ef0.jpg"},9697:function(e,a,i){e.exports=i.p+"img/image00003.b9e32dc2.jpeg"},"985c":function(e,a,i){e.exports=i.p+"img/1 copy.d335cd69.jpg"},"9ef4":function(e,a,i){e.exports=i.p+"img/2 copy.bbce40fe.jpg"},"9fc8":function(e,a,i){e.exports=i.p+"img/IMG_0356.7c4a1a51.jpg"},a0dd:function(e,a,i){e.exports=i.p+"img/image00002 copy.5d6a9001.jpeg"},a189:function(e,a,i){var s={"./1a887513e033c701c8fba96fad14c1146fed43515c938e39262610f449c3dfa9/1.jpeg":"5cf2","./345de2bb8727056c09756c9b9a164392735df41345d24359b013d9b603fae966/image00001 copy.jpeg":"a975","./345de2bb8727056c09756c9b9a164392735df41345d24359b013d9b603fae966/image00001.jpeg":"8955","./47c472a7d7f48e5defa15d0130e5ac6cf985ceeac3e7f9e01241e73ff4d17c8b/1 copy.jpg":"b829","./47c472a7d7f48e5defa15d0130e5ac6cf985ceeac3e7f9e01241e73ff4d17c8b/1.jpg":"a8d7","./47c472a7d7f48e5defa15d0130e5ac6cf985ceeac3e7f9e01241e73ff4d17c8b/2 copy.jpg":"5791","./47c472a7d7f48e5defa15d0130e5ac6cf985ceeac3e7f9e01241e73ff4d17c8b/2.jpg":"7243","./4a42fb53b898f15876f1d064e6e6e1a1be3590a36e6137f6b0837573affa8c5b/1 copy.jpg":"66e3","./4a42fb53b898f15876f1d064e6e6e1a1be3590a36e6137f6b0837573affa8c5b/1.jpg":"822a","./4a42fb53b898f15876f1d064e6e6e1a1be3590a36e6137f6b0837573affa8c5b/2 copy.jpg":"ce2f","./4a42fb53b898f15876f1d064e6e6e1a1be3590a36e6137f6b0837573affa8c5b/2.jpg":"79a5","./6dc896cae279fea01f2cd21de4892f2b556ae6c3d0e6f0a32fdb70ce775da3e7/image00003 copy.jpeg":"f0d0","./6dc896cae279fea01f2cd21de4892f2b556ae6c3d0e6f0a32fdb70ce775da3e7/image00003.jpeg":"9697","./7e4db2c87b995c7de311612df11776099a0608711dd2725d7e4d554035332880/1.jpg":"94f5","./7e4db2c87b995c7de311612df11776099a0608711dd2725d7e4d554035332880/IMG_0356.jpg":"9fc8","./7e8d051afe50f6f2d57ffa1d917ff58e5aa1e901c9a64902f2ed08119933fbd9/image00002 copy.jpeg":"a0dd","./7e8d051afe50f6f2d57ffa1d917ff58e5aa1e901c9a64902f2ed08119933fbd9/image00002.jpeg":"3d1f","./873a86d83e18b21cadc7fc16995f9c47ec0f4a56060416498146197e3ec63a77/1 copy.jpg":"985c","./873a86d83e18b21cadc7fc16995f9c47ec0f4a56060416498146197e3ec63a77/1.jpg":"1415","./873a86d83e18b21cadc7fc16995f9c47ec0f4a56060416498146197e3ec63a77/2 copy.jpg":"8cf5","./873a86d83e18b21cadc7fc16995f9c47ec0f4a56060416498146197e3ec63a77/2.jpg":"745e","./90c821f899d7b4a64f2df6690898437017b8e4821a2d995d19bb56d697a97d17/1.jpg":"61af","./90c821f899d7b4a64f2df6690898437017b8e4821a2d995d19bb56d697a97d17/IMG_0356.jpg":"db2f","./a81d7efe95d2ee0e3c6ad01615d8632f2e3fe757270213e0962a6ecaa687e7e2/1 copy.jpg":"1b13","./a81d7efe95d2ee0e3c6ad01615d8632f2e3fe757270213e0962a6ecaa687e7e2/1.jpg":"a1c5","./a81d7efe95d2ee0e3c6ad01615d8632f2e3fe757270213e0962a6ecaa687e7e2/2 copy.jpg":"4c12","./a81d7efe95d2ee0e3c6ad01615d8632f2e3fe757270213e0962a6ecaa687e7e2/2.jpg":"8104","./b40af3226bbe65982ab182c88576e18bdd84fa23408fb908245201e85e157da8/image00001 copy.jpeg":"4d1d","./b40af3226bbe65982ab182c88576e18bdd84fa23408fb908245201e85e157da8/image00001.jpeg":"331c","./b90fc2b6a423f4dfa7f3f00ff66959754543d396c06d295e5efe554a48ed4910/1.jpeg":"8cea","./b90fc2b6a423f4dfa7f3f00ff66959754543d396c06d295e5efe554a48ed4910/image00001.jpeg":"6485","./ca7c29f75aaabe65f4a1d62fe463a2f4699c3fe2eb51cd8360420294fe10822d/image00002 copy.jpeg":"6b7f","./ca7c29f75aaabe65f4a1d62fe463a2f4699c3fe2eb51cd8360420294fe10822d/image00002.jpeg":"6d6b","./e551975afa44aa3dbcad205b55a6f9f0cd83250e01775ab93ba8d9816ced205a/1.jpeg":"e32d","./f0b2ef420a150836860401267b736ee494b10d3e5255667351cd6a705e31e6d3/1 copy.jpg":"fd29","./f0b2ef420a150836860401267b736ee494b10d3e5255667351cd6a705e31e6d3/1.jpg":"fec5","./f0b2ef420a150836860401267b736ee494b10d3e5255667351cd6a705e31e6d3/2 copy.jpg":"9ef4","./f0b2ef420a150836860401267b736ee494b10d3e5255667351cd6a705e31e6d3/2.jpg":"0f81","./fbd8b20249f21aa8d15525235b2736d7db615f6e2ce8ef6a58f8423ad66394f3/image00004 copy.jpeg":"b2ce","./fbd8b20249f21aa8d15525235b2736d7db615f6e2ce8ef6a58f8423ad66394f3/image00004.jpeg":"28cd","./fcf9ffecb80ef80aa63dbadbf9fb3274dac5c46787f07213bad1f92b17b074e6/1.jpg":"9250","./fcf9ffecb80ef80aa63dbadbf9fb3274dac5c46787f07213bad1f92b17b074e6/IMG_0367.jpg":"f776"};function t(e){var a=l(e);return i(a)}function l(e){if(!i.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}t.keys=function(){return Object.keys(s)},t.resolve=l,e.exports=t,t.id="a189"},a1c5:function(e,a,i){e.exports=i.p+"img/1.737b5941.jpg"},a8d7:function(e,a,i){e.exports=i.p+"img/1.e234aee8.jpg"},a975:function(e,a,i){e.exports=i.p+"img/image00001 copy.ca994753.jpeg"},aac4:function(e,a,i){},b2ce:function(e,a,i){e.exports=i.p+"img/image00004 copy.d111b137.jpeg"},b829:function(e,a,i){e.exports=i.p+"img/1 copy.df345e94.jpg"},b928:function(e,a,i){},ce2f:function(e,a,i){e.exports=i.p+"img/2 copy.fd9b2ea9.jpg"},db2f:function(e,a,i){e.exports=i.p+"img/IMG_0356.7c4a1a51.jpg"},db9c:function(e,a,i){"use strict";var s=i("b928"),t=i.n(s);t.a},e1ba:function(e,a,i){},e32d:function(e,a,i){e.exports=i.p+"img/1.6776c79a.jpeg"},e332:function(e,a,i){},f0d0:function(e,a,i){e.exports=i.p+"img/image00003 copy.8187935b.jpeg"},f776:function(e,a,i){e.exports=i.p+"img/IMG_0367.d3c82eb3.jpg"},fd29:function(e,a,i){e.exports=i.p+"img/1 copy.823c7967.jpg"},fec5:function(e,a,i){e.exports=i.p+"img/1.af24edad.jpg"}});
//# sourceMappingURL=app.a99df0c2.js.map