import React from 'react';
import Chart from 'chart.js'

export default class BarChart extends React.Component {
    
    createChart(data, marked) {
        $('#barContainer').append('<canvas id="barContent" width="100%" height="55"></canvas>');
        
        let ctx = document.getElementById("barContent");
        
        let result = data.filter((m) => marked.indexOf(m.position) != -1);
        
        let dataChart = {
            labels: result.map((m) => `${m.position} - ${m.language}`),
            datasets: [
                {
                    data: result.map((m) => m.rating.toFixed(2)),
                    backgroundColor: [
                        "#6F1D1B", "#BB9457", "#432818", "#99582A", "#FFE6A7", "#2C1320",
                        "#5F4B66", "#A7ADC6", "#8797AF", "#56667A", "#6F1D1B", "#BB9457",
                        "#432818", "#99582A", "#FFE6A7", "#2C1320", "#5F4B66", "#A7ADC6",
                        "#8797AF", "#56667A"
                    ]
                }]
        };
        
        const options = {
            scales: {
              xAxes:[{ gridLines:{ color:"rgba(255,255,255,0.5)", zeroLineColor:"rgba(255,255,255,0.5)" } }],
              yAxes:[{ gridLines:{ color:"rgba(255,255,255,0.5)" } }] 
            }};
        
        Chart.defaults.global.legend.display = false;
        let bar = new Chart(ctx, { type: 'bar', data: dataChart, options: options });
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('BarChart - componentDidUpdate');
        
        let {data, marked} = this.props;
        
        $('#barContainer').html('');
        
        marked.length == 0
            ? $('#barContainer').append('<div id="barContent" width="100%" height="55">No programming language selected.</div>')
            : this.createChart(data, marked);
    }
    
    render() {
        let {marked} = this.props;
        return (<div className="col-md-6">
                    <div className="card card-graph">
                        <div className="title">
                            {marked.length} programming language(s) selected
                        </div>
                        <hr />
                        <div id="barContainer">
                            <canvas id="barContent" width="100%" height="55"></canvas>
                        </div>
                    </div>
                </div>);
    }
}