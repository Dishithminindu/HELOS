// Global validation hooks can be added here
// Forms natively use HTML5 validation, but this serves as the extension point for specific business logic.
const ValidationEngine = {
    validatePatientAge(age) {
        return age >= 18 && age <= 120;
    }
};
