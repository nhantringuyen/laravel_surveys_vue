import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "TheCodeholic Youtube Channel content",
    slug: "thecodeholic-youtube-channel-content",
    status: "draft",
    image:"http://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description:
      "My name is Zura.</br>I am web developer with 9+ years of experience, free educational",
    created_at:"2021-12-20 18:00:00",
    updated_at:"2021-12-20 18:00:00",
    expire_date:"2021-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {},
      }
    ],
  }
]

const store = createStore({
  state: {
    // user: {
    //   // data: {name: 'Zura'},
    //   data: {
    //     name: 'Tom Cook',
    //     email: 'tom@example.com',
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //   },
    //   token: '123',
    // },
    user: {
      // data: {name: 'Zura'},
      data: {},
      token: sessionStorage.getItem("TOKEN"),
      surveys: [...tmpSurveys],
    },
    // dashboard: {
    //   loading: false,
    //   data: {}
    // },
    // surveys: {
    //   loading: false,
    //   links: [],
    //   data: []
    // },
    // currentSurvey: {
    //   data: {},
    //   loading: false,
    // },
    // questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
    // notification: {
    //   show: false,
    //   type: 'success',
    //   message: ''
    // }
  },
  getters: {},
  actions: {

    register({commit}, user) {
      // return fetch(`http://localhost:8000/api/register`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   },
      //   method: "POST",
      //   body: JSON.stringify(user),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     commit("setUser", res);
      //     return res;
      //   });
      return axiosClient.post('/register', user)
        .then(({data}) => {
          // commit('setUser', data.user);
          // commit('setToken', data.token)
          commit("setUser", data);
          return data;
        })
    },
    login({commit}, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          // commit('setUser', data.user);
          // commit('setToken', data.token)
          commit("setUser", data);
          return data;
        })
    },
    logout({commit}) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout')
          return response;
        })
    },
    // getUser({commit}) {
    //   return axiosClient.get('/user')
    //     .then(res => {
    //       console.log(res);
    //       commit('setUser', res.data)
    //     })
    // },
    // getDashboardData({commit}) {
    //   commit('dashboardLoading', true)
    //   return axiosClient.get(`/dashboard`)
    //     .then((res) => {
    //       commit('dashboardLoading', false)
    //       commit('setDashboardData', res.data)
    //       return res;
    //     })
    //     .catch(error => {
    //       commit('dashboardLoading', false)
    //       return error;
    //     })
    //
    // },
    // getSurveys({ commit }, {url = null} = {}) {
    //   commit('setSurveysLoading', true)
    //   url = url || "/survey";
    //   return axiosClient.get(url).then((res) => {
    //     commit('setSurveysLoading', false)
    //     commit("setSurveys", res.data);
    //     return res;
    //   });
    // },
    // getSurvey({ commit }, id) {
    //   commit("setCurrentSurveyLoading", true);
    //   return axiosClient
    //     .get(`/survey/${id}`)
    //     .then((res) => {
    //       commit("setCurrentSurvey", res.data);
    //       commit("setCurrentSurveyLoading", false);
    //       return res;
    //     })
    //     .catch((err) => {
    //       commit("setCurrentSurveyLoading", false);
    //       throw err;
    //     });
    // },
    // getSurveyBySlug({ commit }, slug) {
    //   commit("setCurrentSurveyLoading", true);
    //   return axiosClient
    //     .get(`/survey-by-slug/${slug}`)
    //     .then((res) => {
    //       commit("setCurrentSurvey", res.data);
    //       commit("setCurrentSurveyLoading", false);
    //       return res;
    //     })
    //     .catch((err) => {
    //       commit("setCurrentSurveyLoading", false);
    //       throw err;
    //     });
    // },
    // saveSurvey({ commit, dispatch }, survey) {
    //
    //   delete survey.image_url;
    //
    //   let response;
    //   if (survey.id) {
    //     response = axiosClient
    //       .put(`/survey/${survey.id}`, survey)
    //       .then((res) => {
    //         commit('setCurrentSurvey', res.data)
    //         return res;
    //       });
    //   } else {
    //     response = axiosClient.post("/survey", survey).then((res) => {
    //       commit('setCurrentSurvey', res.data)
    //       return res;
    //     });
    //   }
    //
    //   return response;
    // },
    // deleteSurvey({ dispatch }, id) {
    //   return axiosClient.delete(`/survey/${id}`).then((res) => {
    //     dispatch('getSurveys')
    //     return res;
    //   });
    // },
    // saveSurveyAnswer({commit}, {surveyId, answers}) {
    //   return axiosClient.post(`/survey/${surveyId}/answer`, {answers});
    // },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      // sessionStorage.removeItem("TOKEN");
    },

    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.use;
      sessionStorage.setItem('TOKEN',userData.token);
      // state.user.data = user;
    },
    // setToken: (state, token) => {
    //   state.user.token = token;
    //   sessionStorage.setItem('TOKEN', token);
    // },
    // dashboardLoading: (state, loading) => {
    //   state.dashboard.loading = loading;
    // },
    // setDashboardData: (state, data) => {
    //   state.dashboard.data = data
    // },
    // setSurveysLoading: (state, loading) => {
    //   state.surveys.loading = loading;
    // },
    // setSurveys: (state, surveys) => {
    //   state.surveys.links = surveys.meta.links;
    //   state.surveys.data = surveys.data;
    // },
    // setCurrentSurveyLoading: (state, loading) => {
    //   state.currentSurvey.loading = loading;
    // },
    // setCurrentSurvey: (state, survey) => {
    //   state.currentSurvey.data = survey.data;
    // },
    // notify: (state, {message, type}) => {
    //   state.notification.show = true;
    //   state.notification.type = type;
    //   state.notification.message = message;
    //   setTimeout(() => {
    //     state.notification.show = false;
    //   }, 3000)
    // },
  },
  modules: {}
});

export default store;
