import React from 'react';


export default class APP extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }

    render(){
        let count = parseInt(this.props.count);
        return(
            <div>
                <div className="count">the count is {count}</div>
                <button className="button" onClick={()=>this.props.AddCount(++count)}>Add Count</button>
            </div>
        )

    }
};