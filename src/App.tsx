import React from 'react';
import './App.css';
import GraphView,{IEdge,INode} from "./GraphView";

interface Props{

}
interface State{

  nodes:INode[],
  edges:IEdge[]
}
class App extends React.Component<Props,State> {
  constructor(props:any){

    super(props);
    this.state = {

      nodes: [{id:"GLOBAL",title:"Global",x:0,y:0}],
      edges:[]
    }

  }
  onNodeClick = (viewNode:INode)=>{
    console.log({message:"Node clicked",viewNode});
  }
  onNodeDragEnd = (viewNode:INode)=>{
    console.log({message:"Node dragged",viewNode});
  }
  onCreateNode = (viewNode:INode)=>{
    console.log({message:"Node created",viewNode});
  }
  onDeleteNode = (viewNode:INode)=>{
    console.log({message:"Node deleted",viewNode});
  }
  onCreateEdge = (viewEdge:IEdge)=>{
    console.log({message:"Edge created",viewEdge});
  }
  onDeleteEdge = (viewEdge:IEdge)=>{
    console.log({message:"Edge deleted",viewEdge});
  }
  onEdgeClick = (viewEdge:IEdge)=>{
    console.log({message:"Edge clicked",viewEdge});
  }

  render(){

    return (
      <div  className="App">
        <div  style={{"overflow":"hidden"}} className="graph-view">

        <GraphView height={window.innerHeight} width={window.innerWidth} onEdgeClick={this.onEdgeClick} onDeleteEdge={this.onDeleteEdge} onCreateEdge={this.onCreateEdge} onDeleteNode={this.onDeleteNode} onCreateNode={this.onCreateNode} onNodeDragEnd={this.onNodeDragEnd} onNodeClick={this.onNodeClick}  filterIds={[]}   nodes={this.state.nodes} edges={this.state.edges}/>
        </div>
      </div>
    );
  }

}

export default App;
