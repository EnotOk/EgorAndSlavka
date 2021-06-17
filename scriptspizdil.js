var adminquestcapthcha;
var onloadCallback = function () {
    recapchakey = '6Lec00cUAAAAAGf03927h4R5n37yOZAJZhNXrUZx';
    if ($('#recaptcha2').length)
    {
        adminquestcapthcha = grecaptcha.render('recaptcha2', {
            'sitekey': recapchakey
        });
    }
};

$(document).ready(function () {

    let inputCalc = document.querySelectorAll(".desc_radio-input");

    let descRadio = document.querySelector(".desc_radio");

    let formSkinali = document.querySelector(".select__form");

    let img = document.querySelector(".img-block_img");
    if (descRadio) {
        descRadio.addEventListener("click", function (e) {
            if (e.target.tagName === "LABEL") {
                let name = e.target.getAttribute("for");
//console.log(e.target.parentElement.querySelector("#" + name + ""));
                let value = e.target.parentElement.querySelector("#" + name + "").value;
                console.log(value);
                img.setAttribute("src", "/local/templates/full_template/images/" + value + "-skinali" + ".svg");
            }
        });
    }


    let selectCalc = document.querySelector(".calc-block_main-addSelect_select");
    if (selectCalc) {
        selectCalc.addEventListener("change", function (e) {
            let value = e.target.value;
            img.setAttribute("src", "/local/templates/full_template/images/" + value + "-skinali" + ".svg");
        });
    }

});

$(document).ready(function () {
    function calculate() {
        var width = parseInt($('#width').val()) / 1000;
        var height = parseInt($('#height').val()) / 1000;
        var thickness = $('[name="glassThikness"] option:selected').val();
        var int_thick = parseInt($('[name="glassThikness"] option:selected').val());
        if (int_thick === 3) {
            $('.form-addOptions__label').removeAttr('disabled');
            
            $('[name="treatment"]').removeAttr('checked', true);
            $('[value="Полировка"]').attr('disabled', true);
            $('[value="фацет"]').attr('disabled', true);
            $('[value="Шлифовка"]').attr('checked', true);
        } else if(int_thick > 7){
            $('.form-addOptions__label').removeAttr('disabled');
            $('[name="treatment"]').removeAttr('disabled');
            $('[name="treatment"]').removeAttr('checked', true);
            $('[value="Полировка"]').attr('checked', true);
            $('[value="Шлифовка"]').attr('disabled', true);
        } else {
            $('.form-addOptions__label').removeAttr('disabled');
            $('[name="treatment"]').removeAttr('disabled');
        }
		
        var S = width * height;
        var P = (width + height) * 2;
		
        console.log('Площадь:' + S);
        console.log('Периметр:' + P);





        var base_price = parseInt($('[name="viewGlass"] option:checked').data(thickness) + parseInt($('[name="pack"]').val())) * S;

		//Считаем триплекс
		var triplex = 0;
		if($('[name = "triplex"]').is(':checked')) {
			base_price = base_price*2;	
			triplex = $('[name = "triplex"]').val()*S;
			console.log('Триплекс: '+triplex);
		}

        console.log('Стоимость материала:' + base_price);

        var treatment = 0;
        if ($('[name="treatment"]:checked').val() === 'фацет') {
            $('.select_facet').show();
			if (int_thick < 7) {
				treatment = parseInt($('[name="Фацет"] option:checked').val());
			} else {
				treatment = parseInt($('[name="Фацет"] option:checked').val()) * 2;
			}
        } else {
            $('.select_facet').hide();
            treatment = parseInt($('[name="treatment"]:checked').data(thickness));
        }
		
		//Считаем закалку
		var quenching = 0;
		if($('[name = "quenching"]').is(':checked')) {
			quenching = $('[name = "quenching"]').attr('data-'+int_thick)*S;
			console.log('Закалка: '+quenching);
		}
					
        var matherial_price = base_price + P * (treatment + parseInt($('[name="cut"]').data(thickness)));
        matherial_price = matherial_price * parseFloat($('[name="formGlass"] option:selected').val());
		matherial_price = matherial_price + quenching;
		matherial_price = matherial_price + triplex;
		
        $('[name="Форма"]').val($('[name="formGlass"] option:selected').text());
        // matherial_price = matherial_price + ;
        console.log('промежуточный итог:' + matherial_price);
        console.log('Упаковка:' + parseInt($('[name="pack"]').val()) * S);
        console.log('Резка: ' + P * (parseInt($('[name="cut"]').data(thickness))));
        console.log('Обработка: ' + (P * treatment));

        if (int_thick < 7) {
            var cut_cost = parseInt($('#numHoles').val()) * parseInt($('#diameter option:selected').val()) + parseInt($('#numCutouts').val()) * 660;// 76 - стоимость крепежа
        } else {
            var cut_cost = parseInt($('#numHoles').val()) * (parseInt($('#diameter option:selected').val())*2) + parseInt($('#numCutouts').val()) * 1320;// 76 - стоимость крепежа

        }
        //var cut_cost = 0;

        // $('.glass-contact__total-price').html(matherial_price);
        console.log($('[name="formGlass"] option:selected').val());
        var result = parseInt((matherial_price + cut_cost));
        if(result < 1000) { result = 1000; };
        $('.glass-contact__total-price').html(result);
        $('[name="total_summ"]').val(result);
        $('#res_total').html(result);
        $('#res_price_dop').html(parseInt((parseInt($('#numCutouts').val()) * 1.25 * 1350 * 1.25)));
        $('#res_price_furn').html(parseInt(parseInt((parseInt($('#numHoles').val()) * 76 + parseInt($('#numHoles').val()) * 260)) * 1.25));
        $('#res_price_glass').html(parseInt(matherial_price * 1.25));


        $('#res_width').html($('#width').val());
        $('#res_height').html($('#height').val());
        $('#res_type').html($('.main-type_select option:checked').text());
        $('#res_think').html($('[name="glassThikness"]:checked').val());
        $('#res_holes').html($('#numHoles').val());
        $('#res_cuts').html($('#numCutouts').val());
    }
    $('[name="viewGlass"]').change(function () {
//        $(document).on('change', '[name="viewGlass"]', function() {
             var active_array = $('[name="viewGlass"] option:selected').data();
        console.log(Object.keys(active_array));
        $('[name="glassThikness"] option').hide();
        $('[name="glassThikness"] option').removeAttr('selected');
        $('[name="glassThikness"] option').removeAttr('checked', true);
        Object.keys(active_array).forEach(function (element, index) {
            $('[name="glassThikness"] option[value="' + element + '"]').show();
            if (index == 0) {
//                $('[name="glassThikness"] option[value="' + element + '"]').attr('selected', true);
//                $('[name="glassThikness"] option[value="' + element + '"]').attr('checked', true);
                                $('[name="glassThikness"] option[value="' + element + '"]').prop('selected', 'true');

//                $('[name="glassThikness"] option[value="' + element + '"]').trigger("click");
//                $('[name="glassThikness"] option[value="' + element + '"]').trigger("change");
//                $('[name="glassThikness"] option[value="' + element + '"]').trigger("focus");
            }
        });
        calculate();
        });
        
       
        
        
//    });


    $('[type="radio"]').change(function () {
        calculate();
    });
    $('.glass-calc__form').change(function () {
        calculate();
    });
    $('.form-range__range').on('input', (function () {
        calculate();
    })
            );
    calculate();
    $('.glass-calc__thumbnail-item').click(function () {
        var active_array = $('[name="viewGlass"] option:selected').data();
        console.log(Object.keys(active_array));
        $('[name="glassThikness"] option').hide();
        $('[name="glassThikness"] option').removeAttr('selected');
        $('[name="glassThikness"] option').removeAttr('checked', true);
        Object.keys(active_array).forEach(function (element, index) {
            $('[name="glassThikness"] option[value="' + element + '"]').show();
            if (index == 0) {
                $('[name="glassThikness"] option[value="' + element + '"]').attr('selected', true);
                $('[name="glassThikness"] option[value="' + element + '"]').attr('checked', true);
            }
        });
        calculate();
    });





});

$(document).ready(function () {
    $('.glass-calc__form').submit(function (e) {
        e.preventDefault();
        //   $('.main-form input[type=submit]').prop('disabled', true);
        var $form = $(this);
        var datas = new FormData($('.glass-calc__form')[0]);
        var url = $(this).attr('action');
        $form.css('filter', 'grayscale(100%)');
        console.log(datas);
        $.ajax({type: "POST", url: url, data: datas, processData: false, contentType: false,
            success: function (data) {
                $form.css('filter', 'grayscale(0%)');
                if (data == 1) {
                    $form.html("<p class='message_txt'>Спасибо! Ваше обращение будет рассмотрено в ближайшее время.<p>");
                } else {
                    alert(data);
                }

            }});

        return false;
    });

});

let glassFormContacts = document.querySelector(".glass-contact");
let btnContactNext = document.querySelector(".glass-contact__btn-submit--next");
let glassContactOverlay = document.querySelector(".glass-contact__overlay");
let closeContact = document.querySelector(".glass-contact__close-link");

document.documentElement.addEventListener("click", function (e) {
    if (e.target.closest(".glass-calc")) {
        if (e.target.classList.contains("glass-contact__btn-submit--next")) {
            glassContactOverlay.style.display = "block";
            glassFormContacts.style.display = "block";
        }

        if (!e.target.closest(".glass-contact") && !e.target.classList.contains("glass-contact__btn-submit--next") || e.target.classList.contains("glass-contact__close-link")) {
            glassFormContacts.style.display = "none";
            glassContactOverlay.style.display = "none";
        }
        if (e.target.closest(".glass-contact")) {
            return;
        }
    }

});
