window.addEventListener('DOMContentLoaded', function () {
  new Chart(document.getElementById('canvas-doughnut'), {
    type: 'doughnut',
    data: {
      labels: [
        'Europe',
        'America',
        'Asia'
      ],
      datasets: [
        {
          data: [72, 17, 11],
          backgroundColor: [
            '#E0231F',
            '#ED7470',
            '#EE848B'
          ],
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
          text: 'Order intake by region'
        }
      }
    }
  })
})
