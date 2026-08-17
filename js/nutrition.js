// Core nutrition math logic
const NutritionEngine = {
    calculateSodium(foodItem, quantityConsumed) {
        // formula: (sodiumMg / servingSize) * quantityConsumed
        return (foodItem.sodiumMg / foodItem.servingSize) * quantityConsumed;
    },
    
    calculateSaltEquivalent(sodiumMg) {
        // 1g sodium = 2.5g salt
        return (sodiumMg * 2.5) / 1000;
    }
};
