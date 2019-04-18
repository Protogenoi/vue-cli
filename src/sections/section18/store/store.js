import Vue from 'vue/types'
import Vuex from 'vuex/types'

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }

});
