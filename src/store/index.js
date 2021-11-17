import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const goodImages = [
  "6123150777",
  "6126040354",
  "6134992334",
  "6136172483",
  "6142673815",
  "6142683276",
  "6126039472",
  "6128597660",
  "6136170572",
  "6140906765",
  "6142681673",
  "6148226736",
];

function getRandomImage() {
  const idx = Math.floor(Math.random() * goodImages.length);
  return goodImages[idx];
}

function getIdxGoodInCart(cart, uid) {
  return cart.findIndex((item) => item.uid === uid);
}

export default new Vuex.Store({
  state: {
    goods: [],
    cart: [],
  },

  getters: {
    cartWithGoods(state) {
      return state.cart.map((item) => {
        const idx = getIdxGoodInCart(state.goods, item.uid);
        return {
          ...state.goods[idx],
          count: item.count,
        };
      });
    },
    favoriteGoods(state) {
      return state.goods.filter((item) => item.favorite);
    },
  },

  mutations: {
    addGood(state, good) {
      state.goods.push({
        uid: good.uid,
        title: good.dish,
        desc: good.description,
        price: +(Math.random() * 1000).toFixed(2) + 1,
        image: getRandomImage(),
        favorite: false,
      });
    },

    addGoodToCart(state, payload) {
      const idx = getIdxGoodInCart(state.cart, payload.uid);
      if (~idx) {
        state.cart[idx].count += payload.count;
      } else {
        state.cart.push({
          uid: payload.uid,
          count: payload.count,
        });
      }
    },

    delGoodFromCart(state, uid) {
      const idx = getIdxGoodInCart(state.cart, uid);
      if (~idx) {
        state.cart.splice(idx, 1);
      }
    },

    setCountGoodInCart(state, payload) {
      const idx = getIdxGoodInCart(state.cart, payload.uid);
      if (~idx) {
        state.cart[idx].count = payload.count > 0 ? payload.count : null;
      }
    },

    setFavorite(state, payload) {
      const idx = getIdxGoodInCart(state.goods, payload.uid);
      if (~idx) {
        state.goods[idx].favorite = !!payload.favorite;
      }
    },
  },

  actions: {
    loadGoods({ commit }) {
      Vue.axios
        .get("https://random-data-api.com/api/food/random_food?size=30")
        .then((response) => {
          if (Array.isArray(response.data)) {
            response.data.forEach((item) => commit("addGood", item));
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Ошибка при загрузке списка товаров!");
        });
    },
  },
});
