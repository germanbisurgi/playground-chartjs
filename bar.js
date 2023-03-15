window.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('canvas-bar').getContext("2d")

  var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(1, 'rgba(226, 47, 39, 0.6)')
  gradient.addColorStop(0, 'rgba(226, 47, 39, 0.8)')

  new Chart(ctx, {
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
          backgroundColor: gradient,
          borderWidth: 1,
          maxBarThickness: 25
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          title: {
            align: 'Mio CHF',
            display: true,
            text: 'test'
          },
          max: 18,
          ticks: {
            stepSize: 4
          }
        }
      },
      plugins: {
        legend: false
      }
    }
  })
})
