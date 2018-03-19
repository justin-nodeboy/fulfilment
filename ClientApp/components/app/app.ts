import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class AppComponent extends Vue {

    private items: Array<any> = [
        { title: 'Orders', icon: 'receipt' },
        { title: 'Workflows', icon: 'format_list_numbered', to: 'workflows' },
        { title: 'Web Services', icon: 'http'},
        { title: 'Logs', icon: 'content_paste'},
        { title: 'Developer Docs', icon: 'developer_mode'},
        { title: 'Settings', icon: 'settings'}
    ];

    private drawer: boolean = false;

}
