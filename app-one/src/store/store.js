import Vue from 'vue';
import Vuex from 'vuex';
// import {
//   getAllRequests,
//   getCustomers,
//   getClientTables,
//   getRequest,
//   sendNewRequest,
// } from '@/store/store.api'

import {
  buildExceptionTableData,
  consumeAllRequests,
  getGridData,
} from '@/store/store.module'

Vue.use(Vuex);
const testHeaderColumns =  ["_VasionCheckBox_","_documentID_","_wFID_","_stepID_","_Priority_","Workflow","Type","Primary ID","Assigned To","Status","Step Name","Due Date"]
const testRows =  [{"Values":[{"show":true,"value":false},"163355","213","513","","One Step User Select","Workflow","","Me","Select User","Select User",""],"ValueType":"String","priority":{"value":2,"name":"Normal"}},{"Values":[{"show":true,"value":false},"163346","169","396","High","_PCMR Workflow Test1","Workflow","","Me","Started","Step 1","02/23/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163341","213","513","","One Step User Select","Workflow","","Me","Select User","Select User",""],"ValueType":"String","priority":{"value":2,"name":"Normal"}},{"Values":[{"show":true,"value":false},"163338","212","510","Normal","VP_WORKFLOW_FORM4","Workflow","","Me","","STEP1","02/18/2021"],"ValueType":"String","priority":{"value":2,"name":"Normal"}},{"Values":[{"show":true,"value":false},"163333","169","396","High","_PCMR Workflow Test1","Workflow","","Me","Started","Step 1","02/23/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163332","169","396","High","_PCMR Workflow Test1","Workflow","","Me","Started","Step 1","02/23/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163323","169","396","High","_PCMR Workflow Test1","Workflow","","Me","Started","Step 1","02/22/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163316","111","213","High","_New_12","Workflow","","Me","Vasion Docss","approve",""],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163313","168","398","High","_Logic Workflow","Workflow","","Me","Started","Sub Step 1","02/22/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163295","111","213","High","_New_12","Workflow","","Me","Vasion Docss","approve",""],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163285","168","393","High","_Logic Workflow","Workflow","","bob","Started","Step 1","02/22/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163285","168","398","High","_Logic Workflow","Workflow","","Me","Started","Sub Step 1","02/22/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163282","168","393","High","_Logic Workflow","Workflow","","bob","Started","Step 1","02/22/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163282","168","398","High","_Logic Workflow","Workflow","","Me","Started","Sub Step 1","02/22/2021"],"ValueType":"String","priority":{"value":1,"name":"High"}},{"Values":[{"show":true,"value":false},"163234","210","506","Low","Parallel Steps","Workflow","","Me","Started","Step 1","02/12/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163194","8","90","","PO Approval","Workflow","","Me","","CEO Approval",""],"ValueType":"String","priority":{"value":2,"name":"Normal"}},{"Values":[{"show":true,"value":false},"163174","139","389","Low","_VasionSummit","Workflow","","a new user is here forever","","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163174","139","390","Low","_VasionSummit","Workflow","","bob","","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163174","139","391","Low","_VasionSummit","Workflow","","chef","","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163174","139","285","Low","_VasionSummit","Workflow","","MarbleUserSB","","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163174","139","491","Low","_VasionSummit","Workflow","","Me","","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163173","139","389","Low","_VasionSummit","Workflow","","a new user is here forever","Fill the fields","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163173","139","390","Low","_VasionSummit","Workflow","","bob","Fill the fields","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163173","139","391","Low","_VasionSummit","Workflow","","chef","Fill the fields","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}},{"Values":[{"show":true,"value":false},"163173","139","285","Low","_VasionSummit","Workflow","","MarbleUserSB","Fill the fields","Step 1","02/19/2021"],"ValueType":"String","priority":{"value":3,"name":"Low"}}]
export default new Vuex.Store({
  state: {
    activeSideNav: '',
    clientTables: [],
    customers: [],
    currentListTitle: 'Pending Requests',
    isDarkMode: true,
    isSignedIn: true,
    allRequests: [],
    selectedRequest: {},
    sendRequestToggle: 1,
    token: '',
    mainNav: 'home',
    newRequestResponseData: {},
  },
  mutations: {
    // sendRequestToggle(state) {
    //   state.sendRequestToggle += 1
    // },
    // setActiveSideNav(state, value) {
    //   state.activeSideNav = value
    // },
    // setAllRequests(state, value) {
    //   state.allRequests = consumeAllRequests(value)
    // },
    setClientTables(state, value) {
      state.clientTables = buildExceptionTableData(value)
    },
    // setCustomers(state, value) {
    //   state.customers = value
    // },
    // setDarkMode(state, value) {
    //   state.isDarkMode = value
    // },
    // setNewRequestResponseData(state, value) {
    //   state.newRequestResponseData = value
    // },
    // setSelectedRequest(state, value) {
    //   console.log('value in mutation: ', value)
    //   const jsonData = JSON.parse(value.json_data)
    //   // eslint-disable-next-line dot-notation
    //   value['name'] = jsonData.target_name
    //   // eslint-disable-next-line dot-notation
    //   value['json'] = jsonData
    //   state.selectedRequest = value
    // },
    // setToken(state, value) {
    //   state.token = value
    // },
  },
  actions: {
    // async checkIsAuthenticated({ rootState, commit }) {
    //     if (rootState.token) {
    //       return false
    //     }
    //     if (localStorage.getItem('UserToken')) {
    //       commit('setToken', localStorage.getItem('UserToken'))
    //       return false
    //     }
    //     return ''
    // },
    // async login({ commit }, payload) {
    //   try {
    //     const response = await axios.post(`https://anonymizer-api.herokuapp.com/login?username=${payload.username}&password=${payload.password}`, {}, {
    //       headers: {
    //         'Content-Type': 'x-www-form-ulencoded',
    //       },
    //     });

    //     if (response) {
    //       commit('setToken', response.data.token);
    //       localStorage.setItem('UserToken', response.data.token)
    //     }
    //   } catch (error) {
    //     console.warn(error);
    //   }
    // },
    // async getCustomers({ rootState, commit }) {
    //   const data = await getCustomers(rootState.token)
    //   commit('setCustomers', data)
    // },
    // async getClientTables({ commit, rootState }, id) {
    //   const data = await getClientTables(rootState.token, id)
    //   commit('setClientTables', data)
    // },
    async getTableData({ commit, rootState }) {
      const data = testRows
      commit('setClientTables', data)
      return data
    },
    // setActiveSideNav({ commit }, value) {
    //   commit('setActiveSideNav', value)
    // },
    // setDarkMode({ commit }, value) {
    //   commit('setDarkMode', value)
    // },
    // async getSelectedRequest({ commit, rootState }, value) {
    //   console.log('value in action:', value)
    //   // commit('setSelectedRequest', {})
    //   // eslint-disable-next-line
    //   const localSelection = rootState.allRequests.filter(r => parseInt(r.id) === parseInt(value))
    //   console.log('localSelection: ', localSelection)
    //   commit('setSelectedRequest', localSelection[0])
    //   // eslint-disable-next-line
    //   const selectedRequest = await getRequest(rootState.token, value)
    //   if (selectedRequest.id) {
    //     console.log('called here too')
    //     commit('setSelectedRequest', selectedRequest)
    //   }
    // },
    // async getAllRequests({ commit, rootState }) {
    //   // eslint-disable-next-line
    //   const allRequests = await getAllRequests(rootState.token) 
    //   commit('setAllRequests', allRequests)
    // },
    // // eslint-disable-next-line
    // async sendNewRequest({ commit, rootState }, payload) {
    //   const data = await sendNewRequest(rootState.token, payload)
    //   commit('setNewRequestResponseData', data)
    //   return data
    // },
    // sendRequestToggle({ commit }) {
    //   commit('sendRequestToggle')
    // },
  },
  modules: {
  },
});
