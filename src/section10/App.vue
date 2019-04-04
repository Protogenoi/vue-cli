<template>
    <div class="container">
        <app-header :quote-count="quotes.length" :max-quotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on quote to delete it.</div>
            </div>
        </div>
    </div>
</template>

<script>

    import QuoteGrid from './components/QuotesGrid'
    import NewQuote from './components/NewQuote'
    import Header from './components/Header'

    export default {
        data: function () {
            return {
                quotes: [
                    'Just a quote to see something'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete quotes first!');
                }
                this.quotes.push(quote)
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
