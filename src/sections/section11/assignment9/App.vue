<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <app-full-name v-model="userData.fullName"></app-full-name>


                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                    </div>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->


                    <div class="form-group">
                        <label>
                            <input type="radio" value="Yes" v-model="storeData"> Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="storeData"> No
                        </label>


                    </div>

                    <hr>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary"
                                    @click.prevent="submitted">Submit!
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import FullName from './FullName';

    export default {
        data() {
            return {
                userData: {
                    fullName: 'Michael Owen',
                    password: '',
                    email: ''
                },
                storeData: 'Yes',
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>

</style>
