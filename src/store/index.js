import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {postList: [
      {id: 1, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "04:20, 25/09/21", caption: "You can’t live a full life on an empty stomach", content: "https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png"},
      {id: 2, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "05:27, 25/09/21", caption: "Confidence Level: Selfie with no Filter", content: "https://splicetoday.imgix.net/uploads/posts/photos/26341/rsz_screen_shot_2020-04-01_at_81155_pm.png"},
      {id: 3, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "12:33, 02/10/21", caption: "only a fool for you", content: "https://en.meming.world/images/en/thumb/b/b9/Cursed_Cat.jpg/300px-Cursed_Cat.jpg"},
      {id: 4, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "23:12, 04/10/21", caption: "You don’t cross my mind. You live there", content: "https://i.redd.it/h61v0fk18g351.jpg"},
      {id: 5, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "00:01, 17/10/21", caption: "We sure know how to run things", content: "https://i.redd.it/cmcbikod6om41.jpg"},
      {id: 6, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "13:37, 22/10/21", caption: "sunshine on my mind", content: "https://i.redd.it/5prsrwl6are41.jpg"},
      {id: 7, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "14:58, 03/11/21", caption: "Friends are the family we choose for us", content: "https://i.redd.it/hballeuuan641.jpg"},
      {id: 8, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "10:20, 11/11/21", caption: "Clever as a devil, twice as pretty", content: "https://i.redd.it/otdzarzwtrc41.jpg"},
      {id: 9, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "22:22, 25/11/21", caption: "Chocolate is cheaper than thie", content: "https://i.redd.it/ctfu0q2tyht41.jpg"},
      {id: 10, likes: 0, proficon: require("../assets/zolk.jpg"), timestamp: "13:25, 03/12/21", caption: "put ya feelings to the side, lil' baby", content: "https://i.redd.it/w4faahg5ey441.jpg"},
    ]},
  mutations: {
    increment (state, idNr) {
      console.log(idNr)
      //const item = state.postList.find(item => postList.id == idNr);
      const item = state.postList.find(postList => postList.id == idNr); 
      item.likes++;
      console.log("Increment done");
    },
    reset (state, idNr) {
      const item = state.postList.find(postList => postList.id == idNr); 
      item.likes = 0;
      console.log("Reset likes");
    }
  },
  actions: {},
  modules: {},

});
