import Vue from 'vue';
import Vuex from 'vuex';
import {getStoreBuilder} from 'vuex-typex';

export interface RootState {};

Vue.use(Vuex);
export const buildStore = () => getStoreBuilder<RootState>().vuexStore();