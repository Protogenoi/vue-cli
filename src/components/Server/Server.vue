<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="selectedServer"
    >
        Server #{{ server.id }}
    </li>
</template>

<script>
    import {serverBus} from "../../main";

    export default {
        props: ['server'],
        methods: {
            selectedServer() {
                serverBus.$emit('selectedServer', this.server);
            }
        }
    }
</script>

<style>

</style>
