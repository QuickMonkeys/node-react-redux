import React from 'react';

export default class List extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('List - componentDidUpdate');
        
        console.log(this.props.filter);

        let {mark} = this.props.actions;
        $('[data-position]').off('click').on('click', function() {
            console.log(($(this)).data('position'));
            mark({value: ($(this)).data('position')});
        });
    }

    componentDidMount() {
        console.log('List - componentDidMount');

        // An ajax can be used here to access the data, by a rest API service
        const languages = require("json!../data/languages.json");
        this.props.actions.populate({ type: "POPULATE", value: languages });
    }
    
    render() {
        let {data, filter, marked} = this.props;

        var rowClass = (p) => marked.indexOf(p) == -1 ? "table-row" :  "table-row marked";

        let filtered = filter == undefined ? data : data.filter((f) => f.language.toUpperCase().indexOf(filter) != -1);
        const result = filtered.map((item) => <tr className={rowClass(item.position)} data-position={item.position} key={item.position}>
                                                <td>{item.position}</td><td>{item.language}</td><td>{item.rating}</td>
                                              </tr>);
        
        const table = <div style={{height: '186px', overflowY: 'scroll' }}>
                        <table className="table">
                            <thead>
                              <tr>
                                <th>Position</th>
                                <th>Language</th>
                                <th>Rating (%)</th>
                              </tr>
                            </thead>
                            <tbody>
                                {result}
                            </tbody>
                        </table>
                      </div>;
        
        return (<div className="card card-list">
                        <div className="title">
                            Programming languages
                        </div>        
                        <hr />                        
                        {table}
                    </div>);
    }
}