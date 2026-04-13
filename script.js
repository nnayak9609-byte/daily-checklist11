document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Initialize Chart
    const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Morning', 'Evening', 'Night 1', 'Night 2', 'Off Day'],
            datasets: [{
                label: 'Study Hours Completed',
                data: [0, 0, 0, 0, 0],
                backgroundColor: '#0056b3',
                borderColor: '#003d7a',
                borderWidth: 1
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, max: 10 } }
        }
    });

    const checkboxes = document.querySelectorAll('.task-check');

    // Function to calculate and update graph
    function updateProgress() {
        let shiftData = [0, 0, 0, 0, 0]; // Corresponds to the 5 shifts in the graph
        
        checkboxes.forEach((box, index) => {
            if (box.checked && box.dataset.hours) {
                // Determine which shift this box belongs to
                const shiftIndex = getShiftIndex(box);
                shiftData[shiftIndex] += parseFloat(box.dataset.hours);
            }
            // Save state to LocalStorage
            localStorage.setItem(`task-${index}`, box.checked);
        });

        progressChart.data.datasets[0].data = shiftData;
        progressChart.update();
    }

    // Helper to find which section the checkbox is in
    function getShiftIndex(box) {
        const section = box.closest('.shift-section');
        const h2 = section.querySelector('h2').innerText;
        if (h2.includes('Morning')) return 0;
        if (h2.includes('Evening')) return 1;
        if (h2.includes('Night Shift (1st)')) return 2;
        if (h2.includes('Night Shift (2nd)')) return 3;
        if (h2.includes('Off Day')) return 4;
        return 0;
    }

    // Load saved data and attach events
    checkboxes.forEach((box, index) => {
        const savedState = localStorage.getItem(`task-${index}`);
        if (savedState === 'true') box.checked = true;
        
        box.addEventListener('change', updateProgress);
    });

    // Initial graph update
    updateProgress();
});