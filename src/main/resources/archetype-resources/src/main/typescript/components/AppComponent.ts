import { Vue, Component, Prop } from 'vue-property-decorator';
import Render from './AppComponent.html';

@Render
@Component
export default class AppComponent extends Vue {

    @Prop() title!: string;

    created = () => {
        console.log("AppComponent is created");
    };

    mounted = () => {
        console.log("AppComponent is mounted");
    };

}