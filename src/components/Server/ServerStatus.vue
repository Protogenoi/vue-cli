<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>

</template>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>

<script>

    /*    export default {
            data: function () {
                return {
                    status: 'Critical'
                }
            },
            methods: {
                changeStatus() {
                    this.status = 'Normal';
                }
            }
        }*/

</script>