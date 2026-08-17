function initCharts(features) {
    const ctx = document.getElementById('contributorChart');
    if(!ctx) return;
    
    // Demonstration data based on engineered features
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Processed Meat', 'Dried Fish', 'Added Salt', 'Fast Food'],
            datasets: [{
                label: 'Relative Contribution Risk',
                data: [
                    features.processed_meat_freq || 0, 
                    features.dried_fish_freq || 0, 
                    features.added_salt_freq || 0, 
                    features.fast_food_freq || 0
                ],
                backgroundColor: 'rgba(0, 180, 216, 0.2)',
                borderColor: 'rgba(0, 180, 216, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: { r: { min: 0, max: 6 } }
        }
    });
}
