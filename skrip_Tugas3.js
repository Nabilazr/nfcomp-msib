function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobi = forms.hobi.value;
    let input = "Nama: " + nama + "<br> Pekerjaan: " + pekerjaan + "<br> Hobby: " + hobi; 
    let no_input = 'Maaf Nama atau pekerjaan atau hobi anda belum terisi';
    let hasil = (nama && pekerjaan && hobi !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}