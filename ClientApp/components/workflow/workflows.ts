import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class WorkflowsComponent extends Vue {

    private workflowItems: Array<any> = [
        { title: 'Create Workflow', icon: 'note_add', to: 'workflows/create' }
    ];

}
