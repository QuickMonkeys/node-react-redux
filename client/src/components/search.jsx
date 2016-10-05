import React from 'react';

export default class Search extends React.Component {

    componentDidUpdate(prevProps, prevState){
        console.log('Search - componentDidUpdate');
    }

    render() {
        let {data, filter, marked, actions} = this.props;
        
        const filtered = filter == undefined
                        ? data.length
                        : data.filter((f) => f.language.toUpperCase().indexOf(filter) != -1).length;
        return (
            <div style={{margin: '4px'}}>
                <input 
                    type="text" 
                    placeholder="Search for a programming language..."
                    onChange={(e) => actions.filter(e.target.value)}
                    className="form-control"
                />
                <div>
                    <span>
                        Total: {filtered} of {data.length} - {marked.length} selected.&nbsp;
                        <a href="javascript:void(0)" 
                            style={{display: marked.length == 0 ? 'none' : 'inline'}}
                            onClick={() => actions.clearMarked()}>
                            Clear all selected
                        </a>
                    </span>
                </div>
            </div>);
    }
}