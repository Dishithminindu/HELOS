document.addEventListener('DOMContentLoaded', async () => {
    let foodDb = [];
    let currentLog = [];

    // Fetch JSON strictly for static compat
    try {
        const res = await fetch('data/food-database.json');
        foodDb = await res.json();
        populateFoodSelect(foodDb);
    } catch (e) {
        console.error("Failed to load demo food database", e);
    }

    const modal = document.getElementById('food-modal');
    const tbody = document.getElementById('recall-body');
    const totalUi = document.getElementById('total-sodium-ui');

    document.getElementById('add-food-btn').addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    document.getElementById('close-modal-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    document.getElementById('add-food-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const meal = document.getElementById('meal-time').value;
        const foodId = document.getElementById('food-select').value;
        const qty = parseFloat(document.getElementById('food-qty').value);
        
        const foodItem = foodDb.find(f => f.id === foodId);
        const sodium = NutritionEngine.calculateSodium(foodItem, qty);
        
        currentLog.push({ meal, food: foodItem.name, qty, sodium });
        renderTable();
        modal.classList.add('hidden');
        e.target.reset();
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        const totalSodium = currentLog.reduce((acc, curr) => acc + curr.sodium, 0);
        Storage.setCurrentAssessment({ recallTotalSodium: totalSodium });
        window.location.href = 'monthly-questionnaire.html';
    });

    function populateFoodSelect(data) {
        const select = document.getElementById('food-select');
        select.innerHTML = data.map(f => `<option value="${f.id}">${f.name} (${f.servingSize}${f.servingUnit})</option>`).join('');
    }

    function renderTable() {
        tbody.innerHTML = currentLog.map((log, index) => `
            <tr>
                <td>${log.meal}</td>
                <td>${log.food}</td>
                <td>${log.qty}g</td>
                <td>${log.sodium.toFixed(1)}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeFood(${index})">X</button></td>
            </tr>
        `).join('');
        const total = currentLog.reduce((acc, curr) => acc + curr.sodium, 0);
        totalUi.innerText = total.toFixed(1);
    }

    window.removeFood = function(index) {
        currentLog.splice(index, 1);
        renderTable();
    }
});
