const labels = [
  '2011',
  '2016',
  '2020',
  '2021'
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Millones de visitas',
    backgroundColor: 'rgb(79, 52, 75)',
    hoverBackgroundColor:'rgb(105, 76, 101)',
    borderColor: 'rgb(105, 76, 101)',
    data: [.225, 3, 5, 9],
  }]
};

const config = {
  type: 'bar',
  data,
options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14,
                        family: "'Maven Pro', sans-serif"
                    }
                }
            }
        }
    }
};
