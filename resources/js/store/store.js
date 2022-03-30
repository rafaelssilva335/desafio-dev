import Vue from 'vue';
import Vuex from 'vuex';
import dataMl from './data-ml.json';
import { uniqBy, uniq, filter, sumBy, groupBy, map, countBy, findIndex, concat, forEach, omit, omitBy } from 'lodash';

Vue.use(Vuex);

export default  new Vuex.Store({
    
    state: {
        products: dataMl.results,
        shoppingCartList:[],
        shoppingCartUniq:[],
        total:0
    },
    getters: {
        shoppingCartList(state) {
            return groupBy(state.shoppingCartList, ['id']);
        },
        countShoppingCart(state) {
            return state.shoppingCartList.length;
        },
        shoppingCartUniq(state) {
            return uniqBy(state.shoppingCartUniq, function(e){
                return e.id;
            });
        },
        products(state) {
            return state.products
        },
        total(state) {
            let total = {...state.shoppingCartUniq}; 
            let priceTotal = 0;
            map(total, e => {return priceTotal+= e.price});
            return priceTotal.toLocaleString('pt-br', {minimumFractionDigits: 2});
        }
    },
    mutations: {
        shoppingCartUniq(state, payload) {
            state.shoppingCartUniq = payload;
        },
        shoppingCartList(state, payload) {
            state.shoppingCartList = payload
        }
    },
    actions: {
        removeShoppingCart({state, commit}, payload) {
            omitBy(state.shoppingCartUniq, ({'id': payload.id}));
            
            let gouped = groupBy(state.shoppingCartUniq, e => {
                return (e.id);
            });

            const itensCart = [];

            forEach(gouped, function(w, index){
                if(index == payload.id){
                    w.pop(index);
                }
                w.map(e => {
                    e.count = w.length;
                    itensCart.push(e);
                })
                return {...w};
            });

            commit('shoppingCartUniq', itensCart)
        },
        addToShoppingCart({state, commit}, payload) {
            console.log(state.shoppingCartUniq.length);
            
            if(!state.shoppingCartUniq.length){
                payload.count = 1;
                state.shoppingCartUniq = [];
                state.shoppingCartUniq.push(payload);
                commit('shoppingCartUniq', state.shoppingCartUniq)
                return true;
            } else {
                    
                console.log('###', state.shoppingCartUniq);
                state.shoppingCartUniq.push(payload);
                commit('shoppingCartUniq', state.shoppingCartUniq)
                
                let gouped = groupBy(state.shoppingCartUniq, e => {
                    return (e.id);
                });
                console.log('grouped', gouped);
                const itensCart = [];
                forEach(gouped, function(w, index){
                    w.map(e => {
                        e.count = w.length;
                    })
                    return {...w};
                });
            }
        }
    }
});

