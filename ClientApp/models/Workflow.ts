import WorkflowNodes from './WorkflowNode';

export default class Workflow {
    public Name: string;
    public UserId: number;
    public Stage: string;

    public WorkflowNodes: Array<WorkflowNodes>;
}