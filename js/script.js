var nilaiRandom = document.querySelector(".nilaiRandom");
        var newNumber = document.querySelector(".newNumber");
        var check = document.querySelector(".check");
        var showMe = document.querySelector(".show-me");

        newNumber.addEventListener('click', function() {
            var nilai = Math.random() * 255 + 0;
            var result = Math.floor(nilai);
            // console.log(result);
            nilaiRandom.innerHTML = result;
            formReset();

            // create check result
            check.addEventListener('click', function() {
                var bit1 = document.getElementById("input_form1").value;
                var bit2 = document.getElementById("input_form2").value;
                var bit3 = document.getElementById("input_form3").value;
                var bit4 = document.getElementById("input_form4").value;
                var bit5 = document.getElementById("input_form5").value;
                var bit6 = document.getElementById("input_form6").value;
                var bit7 = document.getElementById("input_form7").value;
                var bit8 = document.getElementById("input_form8").value;


                if (parseInt(bit1) == 1) {
                    var b1 = 128;
                } else if (parseInt(bit1) != 1) {
                    var b1 = 0;
                }

                if (parseInt(bit2) == 1) {
                    var b2 = 64;
                } else if (parseInt(bit2) != 1) {
                    var b2 = 0;
                }

                if (parseInt(bit3) == 1) {
                    var b3 = 32;
                } else if (parseInt(bit3) != 1) {
                    var b3 = 0;
                }

                if (parseInt(bit4) == 1) {
                    var b4 = 16;
                } else if (parseInt(bit4) != 1) {
                    var b4 = 0;
                }

                if (parseInt(bit5) == 1) {
                    var b5 = 8;
                } else if (parseInt(bit5) != 1) {
                    var b5 = 0;
                }

                if (parseInt(bit6) == 1) {
                    var b6 = 4;
                } else if (parseInt(bit6) != 1) {
                    var b6 = 0;
                }

                if (parseInt(bit7) == 1) {
                    var b7 = 2;
                } else if (parseInt(bit7) != 1) {
                    var b7 = 0;
                }

                if (parseInt(bit8) == 1) {
                    var b8 = 1;
                } else if (parseInt(bit8) != 1) {
                    var b8 = 0;
                }

                var angka = document.getElementById("nilaiRandom").innerHTML;

                var total = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8;
                // console.log(total);
                // console.log(result);
                // console.log(angka);
                if (total === parseInt(angka)) {
                    var notifTrue = document.querySelector(".notify-true");
                    var tutup1 = document.querySelector(".close1");

                    notifTrue.classList.remove("hidden");

                    tutup1.addEventListener('click', function() {
                        notifTrue.classList.add('hidden');
                    });
                } else {
                    // alert(".");
                    var notifFalse = document.querySelector(".notify-false");
                    var tutup2 = document.querySelector(".close2");

                    notifFalse.classList.remove("hidden");

                    tutup2.addEventListener('click', function() {
                        notifFalse.classList.add('hidden');
                    });
                }
            });


            // create show me
            showMe.addEventListener('click', function() {
                let position1 = 128;
                let position2 = 64;
                let position3 = 32;
                let position4 = 16;
                let position5 = 8;
                let position6 = 4;
                let position7 = 2;
                let position8 = 1;

                // cekk kondisi diposition 1
                if (result >= position1) {
                    document.getElementById("input_form1").value = 1;
                    let min1 = result - position1;

                    // cek jika kondisi true
                    if (min1 >= position2) {
                        document.getElementById("input_form2").value = 1;
                        let min2 = min1 - position2;

                        // cek jika kondisi true
                        if (min2 >= position3) {
                            document.getElementById("input_form3").value = 1;
                            let min3 = min2 - position3;

                            // cek jika kondisi true
                            if (min3 >= position4) {
                                document.getElementById("input_form4").value = 1;
                                let min4 = min3 - position4;

                                // cek jika kondisi true
                                if (min4 >= position5) {
                                    document.getElementById("input_form5").value = 1;
                                    let min5 = min4 - position5;

                                    // cek jika kondisi true
                                    if (min5 >= position6) {
                                        document.getElementById("input_form6").value = 1;
                                        let min6 = min5 - position6;

                                        // cek jika kondisi true
                                        if (min6 >= position7) {
                                            document.getElementById("input_form7").value = 1;
                                            let min7 = min6 - position7;

                                            // cek jika kondisi true
                                            if (min7 >= position8) {
                                                document.getElementById("input_form8").value = 1;
                                                let min8 = min7 - position8;
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            document.getElementById("input_form3").value = 0;
                            let min3 = min2 - position3;
                        }
                    } else {
                        document.getElementById("input_form2").value = 0;
                        let min2 = min1 - position2;
                    }

                    // jika kondisi false
                } else {
                    document.getElementById("input_form1").value = 0;

                    // cek diposition 2 dikondisi false
                    if (result >= position2) {
                        document.getElementById("input_form2").value = 1;
                    } else {
                        document.getElementById("input_form2").value = 0;

                        // cek diposition 3 dikondisi false
                        if (result >= position3) {
                            document.getElementById("input_form3").value = 1;
                        } else {
                            document.getElementById("input_form3").value = 0;

                            // cek diposition 4 dikondisi false
                            if (result >= position4) {
                                document.getElementById("input_form4").value = 1;
                            } else {
                                document.getElementById("input_form4").value = 0;

                                // cek diposition 5 dikondisi false
                                if (result >= position5) {
                                    document.getElementById("input_form5").value = 1;

                                } else {
                                    document.getElementById("input_form5").value = 0;

                                    // cek diposition 6 dikondisi false
                                    if (result >= position6) {
                                        document.getElementById("input_form6").value = 1;
                                    } else {
                                        document.getElementById("input_form6").value = 0;

                                        // cek diposition 7 dikondisi false
                                        if (result >= position7) {
                                            document.getElementById("input_form7").value = 1;
                                        } else {
                                            document.getElementById("input_form7").value = 0;

                                            // cek diposition 8 dikondisi false
                                            if (result >= position8) {
                                                document.getElementById("input_form8").value = 1;
                                            } else {
                                                document.getElementById("input_form8").value = 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            });

        });


        // create reset
        function formReset() {
            document.getElementById("formBiner").reset();
        }


    