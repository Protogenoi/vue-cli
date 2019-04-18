<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <button v-myOn:click="greet">Touch me</button>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <hr>
                <div
                        style="width: 100px; height: 100px; background-color: lightgreen"
                        v-customOn:mouseenter="mouseEnter"
                        v-customOn:mouseleave="mouseLeave">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myOn': {
                bind(el, binding, vnode) {

                    el.addEventListener(binding.arg, binding.value);

                }

            }
        },
        methods: {
            greet() {
                alert('Hey!')
            },
            mouseEnter() {
                console.log('Mouse Entered!');
            },
            mouseLeave() {
                console.log('Mouse Leave');
            }
        }
    }
</script>

<style>
</style>
