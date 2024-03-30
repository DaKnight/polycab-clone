function generateData(startTime, endTime) {
    var data = [];
    var timestamp = startTime.getTime();
    var endTimeStamp = endTime.getTime();
    var firstPoint = true;
    while (timestamp <= endTimeStamp) {
        var timeDifferenceHours = (timestamp - startTime.getTime()) / 3600000;
        var powerConsumption;
        if (firstPoint) {
            powerConsumption = 0;
            firstPoint = false;
        } else {
            powerConsumption = Math.random() * 4;  
        }
        data.push([timestamp, powerConsumption]);
        timestamp += 3600000;
    }
    return data;
}

var sixAM = new Date();
sixAM.setHours(7, 0, 0, 0);

var options = {
    series: [{
        data: [],
    }],
    stroke: {
        width: 1.5,
    },
    chart: {
        id: 'area-datetime',
        type: 'area',
        height: 400,
        toolbar: false,
        zoom: {
            autoScaleYaxis: true
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
        style: 'hollow',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            rotate: -45,
            formatter: function(val) {
                return new Date(val).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/\s\d{1,2}:\d{2}\s/, ' ');
            },
        }
    },
    yaxis: {
        title: {
            text: 'Power ',
            style: {
                fontSize: '14px',
                fontWeight: 600,
                color: '#333',
                
            },
            offsetX: 35, 
            offsetY: -185,
           
            rotate:0
        },
        min: 0,
        max: 4,
        labels: {
            formatter: function(value) {
                return value.toFixed(0) + " kW"; 
            }
        }
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy HH:mm'
        },
        y: {
            formatter: function(value) {
                return value.toFixed(1);  
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 0.9,
            stops: [0, 100],
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

function updateChartData(endTime) {
    var newData = generateData(sixAM, endTime);
    chart.updateSeries([{
        data: newData
    }]);
}

var currentTime = new Date();
updateChartData(currentTime);
