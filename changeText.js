const changeText = (button, textHeader) => {
    let teksPilihan = [
        "Hallo gaes selamat datang!",
        "kembali bersama saya ASHABUL QAHFI",
        "Mari bergabung dengan saya kembali",
        "Tour akan segera dimulai",
        "Persiapkan diri Anda",
        "Dalam hitungan mundur",
        "sepuluh",
        "sembilan",
        "delapan",
        "tujuh",
        "enam",
        "lima",
        "empat",
        "tiga",
        "Dua",
        "Satu, mulai!",
        "gasskan terus ya gaes ya!"
    ];

    let indeksSaatIni = 0;
    button.click(() => {
        indeksSaatIni = (indeksSaatIni + 1)%teksPilihan.length
        textHeader.text(teksPilihan[indeksSaatIni])
        console.log('button ditekan')
    })
}

export {changeText}