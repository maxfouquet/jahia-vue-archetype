import { Vue } from 'vue-property-decorator';
export default class AppComponent extends Vue {
    title: string;
    created: () => void;
    mounted: () => void;
}