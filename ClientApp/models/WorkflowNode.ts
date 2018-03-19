export default class WorkflowNode {
    public UserId: number;
    public WorkflowId: number;
    public NodeType: string;
    public InputJson: string;
    public OutputJson: string;
    public PreviousNode: number;
    public NextNode: number;
    public IsLoop: boolean;
    public IsApiCall: boolean;
    public ApiId: number;
}