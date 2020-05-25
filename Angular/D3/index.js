const chart = document.getElementById("lineChart");
console.log(chart.defaults);
var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        fill:false,
        lineTension:0,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: [
            'rgba(255, 99, 132, 1)',
        ],
        borderCapSatyle:'butt',
        borderDash:[],
        borderDashOffset:0.0,
        borderJoinStyle:'miter',
        borderWidth: 1,
        pointBorderColor: ['rgba(75,192,192,0.2)'],
        pointBackgroundColor:['rgba(78,98,67,0.7'],
        pointBorderWidth:1,
        pointHoverRadius:5,
        pointRadius:1,
        pointHitRadius:10
    }]
}

options= {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

let lineChart = new Chart(chart, {
    type:'pie',
    data : data,
    options: options

})