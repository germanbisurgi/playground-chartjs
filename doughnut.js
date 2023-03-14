window.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('canvas-doughnut').getContext("2d")

  new Chart(ctx, {
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
          borderWidth: 0
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: false
      }
    }
  })
})
