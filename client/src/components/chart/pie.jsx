import React from 'react';
import Chart from 'chart.js'

export default class PieChart extends React.Component {
    
    componentDidUpdate(prevProps, prevState){
        console.log('PieChart - componentDidUpdate');
        
        let {data} = this.props;
        
        let ctx = document.getElementById("pieContent");
        
        let dataD = {
            labels: data.map((m) => `${m.position} - ${m.language}`),
            datasets: [
                {
                    data: data.map((m) => m.rating.toFixed(2)),
                    backgroundColor: ["#6F1D1B", "#BB9457", "#432818", "#99582A", "#FFE6A7"]
                }]
        };
        
        Chart.defaults.global.legend.display = false;
        let myChart = new Chart(ctx, { type: 'pie', data: dataD, options: { borderColor: '#55C9A6' } });
    }

    render() {
        return (<div className="col-md-6">
                    <div className="card card-graph">
                        <div className="title">
                            Top 5 programming languages
                        </div>        
                        <hr />
                        <canvas id="pieContent" width="100%" height="55"></canvas>
                    </div>
                </div>);
    }
}