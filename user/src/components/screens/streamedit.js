import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {showStream, editStream} from '../../actions';
import StreamForm from './streamForm';

class streamedit extends React.Component{
    componentDidMount(){
       
        this.props.showStream(this.props.match.params.id);
    }
    onSubmit=(values)=>{
       this.props.editStream(this.props.match.params.id, values)
    console.log(values)
    }
   render(){

      
       if(!this.props.stream){
           return <div>loading...</div>
       }
       return(
           <div>
            <h3>Edit a stream</h3> 
            <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
          </div>
       )}
}
const mapStateToProps=(state, ownProps)=>{
   
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {showStream, editStream})(streamedit)