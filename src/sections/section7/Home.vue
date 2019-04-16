<template>
    <div class="container">

        <app-header></app-header>
        <hr>
        <div class="row">

            <app-server-status></app-server-status>

            <app-server-details></app-server-details>

        </div>

        <hr>

        <app-footer></app-footer>

    </div>

</template>

<script>

    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue'
    import ServerStatus from './components/Server/ServerStatus.vue'
    import ServerDetails from './components/Server/ServerDetails';

    export default {

        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-server-status': ServerStatus,
            'app-server-details': ServerDetails
        }

    }

</script>