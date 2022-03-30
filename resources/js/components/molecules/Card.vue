<template>
     <div class="card1">
        <div class="card-header">
            <img class="card-img-top" :src="product.thumbnail">
            <h5 class="card-title">{{product.title}}</h5>
        </div>
        <div class="card-body">
            <div  class="card-text">
                <p v-for="attribut in product.attributes" :key="attribut.id">{{attribut.name}} {{attribut.value_name}}</p>
            </div>
            <button class="btn btn-primary" @click="addToCart(product)">Adicionar ao carrinho</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'


    export default {
        props:{
            product: Object,
        },
        mounted() {
        },
        conputed: {

        },
        methods: {
            ...mapActions(['addToShoppingCart']),
            addToCart(){                
                this.addToShoppingCart(this.product);    
            }
        }
    }
</script>

<style scoped>
.card1 {
    padding: 10px;
    border: 1px solid rgba(0,0,0,.125);
    background-color: #f3f3f3;
    max-height: 380px;

}
.card-header {
    display: grid;
    grid-template-columns: 90px 56%;
}
.card-title {
    margin: 7px 8px;
}
.card-text {   
    height: 117px;
    overflow-y: scroll;
    max-width: 100%;
    margin: 18px 0px;
}
</style>