<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    import Header from './components/Header'

    export default {
        components: {
            AppHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
