window.addEventListener('DOMContentLoaded', function () {
  new Chart(document.getElementById('canvas-bar'), {
    type: 'bar',
    data: {
      labels: [
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ],
      datasets: [
        {
          data: [8.4, 6.9, -0.6, -5.4, 11.1],
          backgroundColor: '#EE848B',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Net Income per year'
        }
      }
    }
  })
})
