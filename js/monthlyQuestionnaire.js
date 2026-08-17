const questions = [
    { id: 'q1', text: 'How often do you eat processed meat (sausages, bacon)?', key: 'processed_meat_freq' },
    { id: 'q2', text: 'How often do you consume dried/salted fish?', key: 'dried_fish_freq' },
    { id: 'q3', text: 'How often do you add salt at the table?', key: 'added_salt_freq' },
    { id: 'q4', text: 'How often do you eat fast food/restaurant meals?', key: 'fast_food_freq' }
];

const options = [
    { label: 'Never', value: 0 },
    { label: '<1 / month', value: 1 },
    { label: '1-3 / month', value: 2 },
    { label: '1 / week', value: 3 },
    { label: '2-4 / week', value: 4 },
    { label: 'Daily', value: 6 }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ffq-questions-container');
    
    questions.forEach(q => {
        const qDiv = document.createElement('div');
        qDiv.className = 'form-group card mb-4';
        qDiv.innerHTML = `<label class="form-label" style="font-size:1rem;">${q.text}</label>
            <div class="radio-group mt-4">
                ${options.map(opt => `
                    <label class="radio-label">
                        <input type="radio" name="${q.key}" value="${opt.value}" required>
                        ${opt.label}
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(qDiv);
    });

    document.getElementById('ffq-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const features = {};
        for(let [key, value] of formData.entries()) {
            features[key] = parseInt(value, 10);
        }
        
        Storage.setCurrentAssessment({ ffqFeatures: features });
        window.location.href = 'results.html';
    });
});
