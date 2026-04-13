document.addEventListener('DOMContentLoaded', () => {

    const ctx = document.getElementById('studyProgressChart').getContext('2d');

    const studyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['M1','M2','E1','E2','N1','N2','OFF','GENERAL'],
            datasets: [{
                label: 'Hours Completed',
                data: [0,0,0,0,0,0,0,0],
                backgroundColor: '#004085'
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 12 }
            }
        }
    });

    const checkboxes = document.querySelectorAll('.tracker');

    function updateView() {

        let data = {
            m1:0, m2:0,
            e1:0, e2:0,
            n1:0, n2:0,
            off:0, general:0
        };

        checkboxes.forEach((box, index) => {

            const shift = box.dataset.shift;

            if (box.checked) {
                data[shift] += parseFloat(box.dataset.hours || 0);
            }

            localStorage.setItem('task-' + index, box.checked);
        });

        studyChart.data.datasets[0].data = [
            data.m1,
            data.m2,
            data.e1,
            data.e2,
            data.n1,
            data.n2,
            data.off,
            data.general
        ];

        studyChart.update();
    }

    checkboxes.forEach((box, index) => {
        const saved = localStorage.getItem('task-' + index);
        if (saved === 'true') box.checked = true;

        box.addEventListener('change', updateView);
    });

    updateView();
});
