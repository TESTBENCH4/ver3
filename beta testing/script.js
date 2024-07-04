document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const referenceId = params.get('rid');

    if (referenceId) {
        fetch('users.csv')
            .then(response => response.text())
            .then(csvText => {
                const data = csvText.split('\n').map(row => row.split(','));
                const result = data.find(row => row[0] === referenceId);

                if (result) {
                    document.getElementById('certificate_number').textContent = result[1];
                    document.getElementById('name').textContent = result[2];
                    document.getElementById('designation').textContent = result[3];
                    document.getElementById('institute').textContent = result[4];
                    document.getElementById('workshop_organizer').textContent = result[5];
                    document.getElementById('workshop_name').textContent = result[6];
                    document.getElementById('workshop_date').textContent = result[7];
                    document.getElementById('avatar').src = result[8] || "https://i.stack.imgur.com/34AD2.jpg";
                } else {
                    document.getElementById('certificate-details').style.display = 'none';
                    document.getElementById('no-data').style.display = 'block';
                }
            });
    } else {
        document.getElementById('certificate-details').style.display = 'none';
        document.getElementById('no-data').style.display = 'block';
    }
});