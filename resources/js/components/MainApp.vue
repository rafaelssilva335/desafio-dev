<template>
    <div class="content">
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div v-for="product in products" :key="product.id" class="col-md-4 card-content">
                        <card 
                            :product="product" 
                            />
                    </div>
                </div>

            </div>

            <div class="col-md-4">
                <div class="card-content">
                    <shopping-car/>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import Card from './molecules/Card.vue'
import ShoppingCar from "./molecules/ShoppingCar.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        Card,
        ShoppingCar
    },
    data() {
        return {showCart: false};
    },
    methods: {
        ...mapActions(['actionAddToShoppingCart']),
    },
    computed:{
        ...mapGetters({products:'products'}),
    }
}
</script>

<style scoped>
.card-content {
    padding: 9px;
}
.card1 {
    
}
</style>