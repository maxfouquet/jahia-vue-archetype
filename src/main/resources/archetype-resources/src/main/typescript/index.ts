import Vue from 'vue';
import AppComponent from './components/AppComponent';

Vue.component('app-component', AppComponent);

new Vue({
    el: '#app'
});