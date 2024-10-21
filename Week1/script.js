function showTeacher(subject) {
    const teacher = {
        'MACHINE LEARNING': '<b>Anushka Shukla</b> - anushka_shukla@gla.ac.in<br><br>Room: AB1 201, Contact: 791558602',
        'AGILE SOFTWARE DEVELOPMENT': '<b>Vibhoo Sharma</b> - vibhoo_sharma_cs22@gla.ac.in<br><br>Room: AB3 301, Contact: 7617765062',
        'QUANT AND APTITUDE': '<b>Jay Prakash Dixit</b> - jay_prakash_cs22@gla.ac.in<br><br>Room: AB3 202, Contact: 81551123865',
        'GROUP DISCUSSION': '<b>Dr. Anjali Mehra</b><br><br>Room: AB1 403, Contact: 76589865211',
        'MACHINE LEARNING LAB': '<b>Anushka Shukla</b> - anushka_shukla_cs22@gla.ac.in<br><br>Room: AB1 202, Contact: 78156532895',
        'Data Analysis and Algorithm': '<b>Abhishek Kumar</b> - abhishek_kumar_cs22@gla.ac.in<br><br>Room: AB1 413, Contact: 87255665452',
        'FULL_STACK': '<b>Akash Kumar Chaudhary</b> - akash_kumar_cs22@gla.ac.in<br><br>Room: AB9 109, Contact: 8901234567'
    };

    
    document.getElementById('details').innerHTML = teacher[subject];
    document.getElementById('teacher').style.display = 'flex';
}

function closeModal() {
    document.getElementById('teacher').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('teacher');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
