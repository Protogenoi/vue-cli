export const stringMixin = {
    computed: {
        countStr() {
            return this.countThis + ' (' + this.countThis.length + ')';
        },
        reverseStr() {
            return this.text.split('').reverse().join('');
        }
    }
};