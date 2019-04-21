function elementVisible (el, vis) {
        el.click(function (e) {
            e.preventDefault();
            vis.toggleClass('active');
        });
    };
    function formVisible (el, vis) {
        el.click(function (e) {
            $(this).siblings(vis).toggleClass('hidd');
        });
    };
    function popupVisible (el, vis) {
        el.click(function (e) {
            e.preventDefault();
            vis.removeClass('hidd');
            $('.overlay').removeClass('hidd');
        });
    }
    function popupClose (el, popup) {
        el.click(function (e) {
            popup.addClass('hidd');
            $('.overlay').addClass('hidd');
            $('.login-form__lg-form').removeClass('active');
        });
    }
    function dinamicClass (el) {
        if ($(window).width() > 1023) {
        el.addClass('acc-toggle'); 
        el.removeClass('pp-toggle'); 
    }
    else {
       el.removeClass('acc-toggle'); 
       el.addClass('pp-toggle');  
    }
};
$(document).ready(function () {
    dinamicClass($('.login-form__login'));
    function productsThumb() {
        $('.owl-carousel').owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        items: 3,
        autoplay: true,
        smartSpeed:1000,
        autoWidth:true,
        autoplayTimeout:3500,
        responsive: false,
        center: true
    });   
    }
    productsThumb();
    $('body').click (function (e) {
        var target = $(e.target);
        if ( !target.is('.toggle-btn') && !target.is('a[href]')) $('.main-nav').removeClass('active');
    })
    $('.overlay').click(function (e) {
            $(this).addClass('hidd');
            $('.login-form__lg-form').addClass('hidd');
            $('.modal').addClass('hidd');
        });
    elementVisible($('.toggle-btn'), $('.main-nav'));
    popupClose ($('.modal-close'), $('.modal'));
    popupClose ($('.login-close'), $('.login-form__lg-form'));
    popupVisible($('.login-form__register'), $('.modal-attention'));
    popupVisible($('.tag-new'), $('.modal-new'));
    $(document).on('click', '.login-form__login', function (e) {
       if ($(this).hasClass('acc-toggle')) {
        $('.login-form__lg-form').toggleClass('active');
       }
       if (!$(this).hasClass('acc-toggle')) {
        $('.login-form__lg-form').removeClass('hidd');
        $('.overlay').removeClass('hidd');
       }
    })
    function clickDetails () {
        $('.product-item__toggle').click(function (event){
        event.preventDefault();
        $(this).toggleClass('active');
        var parent = $(this).parent();
        parent.toggleClass('active').find('.product-item__bottom').toggleClass('active');
        var close = function(e){
    if(!$(e.target).closest(parent).length){
        parent.find('.product-item__bottom').removeClass('active');
        parent.find('.product-item__toggle').removeClass('active');
        $(document).unbind("click", close)
    }
  }
      $(document).bind("click", close)
    })
    }
    function getProductList (val) {
        if (val != 'default') {
        var file = val + '[1].json';
        $.getJSON(file, function (data) {
            var labels = [];
                while (labels.length < 5) {
                    var n = Math.floor(Math.random() * 30) + 1;
                    if (labels.indexOf(n) == -1) {
                        labels.push(n);
                    }
                }
            var result = [];
            $.each(data, function(key, val) {
                var product = {
                    name: '<p class="product-item__name">' + val['name'] + '</p>',
                    price: '<p class="product-item__price">' + val['price'] + ' <span class="rub">р</span></p>',
                    options: '<div class="product-item__options"><p>' + val['description'] + '</p></div>',
                    wrapper_top: '<div class="product-item"><a href="#" class="product-item__link"><div class="product-item__top"><div class="product-item__stars"><div class="rating-wrapper"><input class="rating-input" id="rating-input-1-5" type="radio" name="rating-input-1" /><label class="rating-star" for="rating-input-1-5"></label><input class="rating-input" id="rating-input-1-4" type="radio" name="rating-input-1" /><label class="rating-star" for="rating-input-1-4"></label><input class="rating-input" id="rating-input-1-3" type="radio" name="rating-input-1" /><label class="rating-star" for="rating-input-1-3"></label><input class="rating-input" id="rating-input-1-2" type="radio" name="rating-input-1" /><label class="rating-star" for="rating-input-1-2"></label><input class="rating-input" id="rating-input-1-1" type="radio" name="rating-input-1" /><label class="rating-star" for="rating-input-1-1"></label></div><div class="stars-total">12 оценок</div></div>',
                    wrapper_bottom: '</div><div class="product-item__toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="Open" transform="translate(-511 -391)"><g id="Ellipse_1" data-name="Ellipse 1" class="cls-1" transform="translate(511 391)"><circle class="cls-3" cx="16" cy="16" r="16"/><circle class="cls-4" cx="16" cy="16" r="15"/></g><path id="Path_5" data-name="Path 5" class="cls-2" d="M8.048,4.952,0,0V9.9Z" transform="translate(531.905 404) rotate(90)"/></g></svg></div></div></div>',
                    thumb: '<div class="product-item__thumb"><img src="' + val['iamges'][0] + '" alt="' + val['name'] +'"></div>',
                    gallery: val['iamges'],
                    tag: '<div class="tags"><span class="tag-new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.031 45"><g id="NEW" transform="translate(-604.291 -184)"><g id="Group_21" data-name="Group 21" transform="translate(651.323 184) rotate(90)"><path id="Path_990" data-name="Path 990" class="cls-1-new" d="M23.917.693l3.511,4.374a1.868,1.868,0,0,0,1.91.616L34.758,4.2A1.857,1.857,0,0,1,37.1,5.867l.308,5.606a1.812,1.812,0,0,0,1.17,1.6l5.236,2.033a1.792,1.792,0,0,1,.862,2.71L41.6,22.5a2,2,0,0,0,0,2.033l3.08,4.682a1.867,1.867,0,0,1-.862,2.71l-5.236,2.033a1.786,1.786,0,0,0-1.17,1.6L37.1,41.164a1.834,1.834,0,0,1-2.341,1.663l-5.421-1.478a1.868,1.868,0,0,0-1.91.616l-3.511,4.374a1.8,1.8,0,0,1-2.834,0l-3.511-4.374a1.868,1.868,0,0,0-1.91-.616l-5.421,1.478A1.857,1.857,0,0,1,7.9,41.164l-.308-5.606a1.812,1.812,0,0,0-1.17-1.6L1.187,31.924a1.792,1.792,0,0,1-.862-2.71L3.4,24.532a2,2,0,0,0,0-2.033L.324,17.818a1.867,1.867,0,0,1,.862-2.71l5.236-2.033a1.786,1.786,0,0,0,1.17-1.6L7.9,5.867A1.834,1.834,0,0,1,10.242,4.2l5.421,1.478a1.868,1.868,0,0,0,1.91-.616L21.083.693A1.8,1.8,0,0,1,23.917.693Z" transform="translate(0 0)"/></g><text id="NEW-2" data-name="NEW" class="cls-2-new" transform="translate(616.521 210.917)"><tspan x="0" y="0">NEW</tspan></text></g></svg></span></div>'
                };
                    var item = [];
                    item.push(product.wrapper_top);
                    if (jQuery.inArray(key, labels) != -1) item.push(product.tag);
                    item.push(product.thumb);
                    item.push(product.name);
                    item.push(product.price);
                    var gal_images = [];
                    if (product.gallery.length > 1) {
                    var gal_list = $.each(product.gallery, function (key,value) {
                   gal_images.push('<div class="item"><img src="' + value +'" alt=""></div>');
                })
                item.push('</a></div><div class="product-item__wrapper"><div class="product-item__bottom"><hr><div class="owl-carousel owl-theme" id="product-thumbs">' + gal_images.join('') + '</div>');
                    } else {
                    item.push('</a></div><div class="product-item__wrapper"><div class="product-item__bottom"><hr>');
                }
                item.push(product.options);
                item.push(product.wrapper_bottom);
                result.push(item.join(''));
            });
             $('.products-list').html(result.join(''));
             productsThumb();
             popupVisible($('.tag-new'), $('.modal-new'));
             clickDetails();
        });
        }
    }
    var filter = $('select[name="category"]').val();
    if (filter != 'default') getProductList (filter);
    $('select[name="category"]').change(function () {
        getProductList ($(this).val());
    });
    clickDetails();
   $('input[name="phone"]').mask('+7 (999) 999-99-99');
   function stripString (val, limit){
     var newVal = val.replace(/[^\d]+/g, '');
     if( newVal == '' ){
      return false;
     }else{
      return newVal.substring(0, limit);
     }
    }
    function resultString(newVal){
     var res = '';
     for(var i = 0; i < newVal.length; i++){
          if (i == 0){
         res += '+7 (';
         res += newVal.charAt(i);
         } 
        else if (i == 3) {
            res += ') ';
            res += newVal.charAt(i);
        }
        else if (i == 6 || i == 8) {
            res += '-';
            res += newVal.charAt(i);
        }
        else{
             res += newVal.charAt(i);
            }
     }
     return res;
    }
     $('input[name="phone"]').on('input', function(){
      var val = $(this).val(),
      limit = 10;
      if(val == '') return;
      var newVal = stripString(val, limit);
      console.log(newVal);
        if(!newVal){
            $(this).val('');
            return;
        }
      var res = resultString(newVal);
      $(this).val(res);
     });
     function sendAjaxForm(main_order, form, url) {
            $.ajax({
                url: url, 
                type: "POST",
                dataType: "html",
                data: $("#" + form).serialize(), 
                success: function(response) { 
                    result = $.parseJSON(response);
                    document.location.href='/thank.html';
                },
                error: function(response) { 
                    $('.login-form__lg-form').append('<p class="attention">Ошибка. Данные не отправлены.</p>');
                    $('.login-form__lg-form').addClass('active');
                }
            });
        }
     $("#login-form").submit(function() {
                    sendAjaxForm('login-form__lg-form', 'login-form', 'send.php');
                    return false;
                });
});
$(window).resize(function () {
    dinamicClass($('.login-form__login'));
})