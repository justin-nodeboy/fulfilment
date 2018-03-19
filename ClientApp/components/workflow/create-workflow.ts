import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Konva } from 'vue-konva';
import { Label, Text, Tag, Stage } from 'konva';
import HttpService from '../../services/HttpService';
import { EventBus } from '../../services/EventBus';
const _ = require('lodash');

import WorkflowNode from '../../models/WorkflowNode';
import Workflow from '../../models/Workflow';

@Component
export default class CreateWorkflowComponent extends Vue {

    $refs: {
        konva: Konva.Stage,
        layer: any
    }

    private configKonva: any = {
        container: this.$refs.konva,
        width: window.innerWidth,
        height: window.innerHeight
    }

    private configText: any = {
        x: 20,
        y: 60,
        text: "Blowback",
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 300,
        padding: 20,
        align: 'center'
    }

    private nodeTypes: Array<string> = [
        'API Node',
        'IF Node',
        'Email Node'
    ];

    private inputTypes: Array<string> = [
        'string',
        'number',
        'boolean'
    ];

    private createWorkflowItems: Array<any> = [
        { title: 'Add Node', icon: 'note_add', index: 0 },
        { title: 'Save Workflow', icon: 'save', index: 1 }
    ];

    private addNewDialog: boolean = false;
    private showInput: boolean = false;
    private showOutput: boolean = false;
    private input: any = {
        name: "",
        type: ""
    }
    private output: any = {
        name: "",
        type: ""
    }
    private inputsArray: Array<any> = [];
    private outputsArray: Array<any> = [];
    private node: WorkflowNode = new WorkflowNode();
    private workflowNodes: Array<WorkflowNode> = [];
    private workflow: Workflow = new Workflow();

    private addToInput(): void {
        this.inputsArray.push(this.input);
        this.input = {
            name: "",
            type: ""
        }
    }

    private addToOutput(): void {
        this.outputsArray.push(this.output);
        this.output = {
            name: "",
            type: ""
        }
    }

    private removeInput(index: number): void {
        this.inputsArray.splice(index, 1);
    }

    private removeOutput(index: number): void {
        this.outputsArray.splice(index, 1);
    }

    private processClick(item: any): void {
        if (item.index === 0)
            this.addNewDialog = true;
        if (item.index === 1)
            this.submitWorkflow();
    }

    private addNewNode(): void {

        let label = new Label({
            draggable: true
        });

        let tag = new Tag({
            fill: 'yellow',
            strokeWidth: 4,
            stroke: 'black'
        });

        let text = new Text({
            x: 20,
            y: 60,
            text: this.node.NodeType,
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#555',
            width: 300,
            padding: 20,
            align: 'center'
        });

        label.add(tag);
        label.add(text);

        let layer = this.$refs.konva.getStage().children[0];
        layer.add(label);
        layer.draw();

        this.node.InputJson = _.chain(this.inputsArray)
            .keyBy('name')
            .mapValues('type')
            .value();

        this.node.InputJson = JSON.stringify(this.node.InputJson);

        this.node.OutputJson = _.chain(this.outputsArray)
            .keyBy('name')
            .mapValues('type')
            .value();
        
        this.node.OutputJson = JSON.stringify(this.node.OutputJson);

        this.node.IsLoop = false;
        this.node.IsApiCall = false;
        this.node.NextNode = 0;
        this.node.PreviousNode = 0;
        this.node.UserId = 1;

        this.workflowNodes.push(this.node);
        this.addNewDialog = false;
    }

    private submitWorkflow(): void {
        this.workflow.Name = "Test";
        this.workflow.WorkflowNodes = this.workflowNodes;
        this.workflow.Stage = this.$refs.konva.getStage().toJSON();
        this.workflow.UserId = 1;
        console.log(this.workflow.Stage);
        console.log(this.workflow);
        
        HttpService.doPostRequest('workflows', this.workflow).then(() => {

        }).catch(err => {
            console.log(err);
        });
    }

}
