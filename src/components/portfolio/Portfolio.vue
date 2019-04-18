<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.stockId"></app-stock>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import Stock from './Stock';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stocksPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>