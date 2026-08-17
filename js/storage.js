// LocalStorage Wrapper (Demo Prototype Storage Only)
const Storage = {
    KEYS: {
        ASSESSMENT: 'halos_current_assessment',
        PATIENTS: 'halos_patients_db'
    },
    
    setCurrentAssessment(data) {
        let current = this.getCurrentAssessment() || {};
        localStorage.setItem(this.KEYS.ASSESSMENT, JSON.stringify({ ...current, ...data }));
    },
    
    getCurrentAssessment() {
        return JSON.parse(localStorage.getItem(this.KEYS.ASSESSMENT) || 'null');
    },

    savePatients(records) {
        localStorage.setItem(this.KEYS.PATIENTS, JSON.stringify(records));
    },

    getPatients() {
        return JSON.parse(localStorage.getItem(this.KEYS.PATIENTS) || '[]');
    }
};
