const Utils = {
    downloadCSV(dataArray, filename) {
        if (!dataArray || !dataArray.length) {
            alert("No data available to export.");
            return;
        }
        const headers = Object.keys(dataArray[0]).join(',');
        const rows = dataArray.map(obj => Object.values(obj).join(',')).join('\n');
        const csvContent = "data:text/csv;charset=utf-8," + headers + "\n" + rows;
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
