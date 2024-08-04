// Script.js
let CSV = document.getElementById('csv');
let button = document.getElementById('btn');
CSV.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split('\n')
        .map(row => row.split(','));

        const table = document.getElementById('table');
        table.innerHTML = '';

        for (let i = 0; i < rows.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < rows[i].length; j++) {
                let td = document.createElement('td');
                td.textContent = rows[i][j];
                tr.appendChild(td);}
                table.appendChild(tr);}
                CSV.style.display = 'none';
                button.style.display = 'block';};

                reader.readAsText(file);
});