<template>
     <div class="card1">
        <div class="card-header">
        </div>
        <div class="card-body">
            <div v-for="(product, index) in shoppingCartUniq" :key="index">
                <div class="content-product-image">
                    <img class="card-img-top" :src="product.thumbnail">
                    <p>{{product.title}}</p>
                </div>
                <div class="content-product-actions">
                    <button class="btn btn-warning" @click="removeToCart(product)">-</button>
                    <button  disabled class="btn btn-secondary btn-count">{{product.count}}</button>
                    <button class="btn btn-primary" @click="addToCart(product)">+</button>
                    <p>Valor unitário:{{product.price}}</p>
                </div>
                <hr v-if="shoppingCartUniq.length > 1">
            </div>
        </div>

        <div class="total">
            <p>Total: R$: {{total}}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    mounted() {
        console.log('Component mounted.')
    },
    methods: {
        ...mapActions(['removeShoppingCart', 'addToShoppingCart', ]),
        removeToCart(product) {
            this.removeShoppingCart(product)
        },
        addToCart(product) {
            this.addToShoppingCart(product);
        }
    },
    computed:{
        ...mapGetters(['shoppingCartUniq', 'shoppingCartList', 'total']),
    }
}
</script>

<style scoped>
.total {
    margin: 24px 0;
}
.content-product-actions {
    display: grid;
    grid-template-columns: 11% max-content 11% 65%;
    margin: 10px 0;
}

.btn-count{
    margin: 0px 4px;
}

.content-product-actions p{
    text-align: right;
    margin-top: 5px;
}

.btn-secondary {
    color: rgb(0 0 0);
    font-weight: 700;
    background-color: rgb(215 253 196);
    border-color: rgb(138 255 117)
}

.content-product-image {
    display: grid;
    grid-template-columns: 35% 65%;
}

.card-body {
    max-height: 550px;
    overflow: scroll;
}

.card1 {
    padding: 10px;
    border: 1px solid rgba(0,0,0,.125);
    background-color: #f3f3f3;
    max-height: 630px;
}

.card-header {
    display: grid;
    grid-template-columns: 26% 74%;
}

.card-title {
    margin: 7px 8px;
}

.card-text {   
    background-color: rgb(199, 199, 255); 
    height: 117px;
    overflow-y: scroll;
    max-width: 100%;
    margin: 18px 0px;
}
</style>