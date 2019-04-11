//callback button in header
var callbackButton = document.querySelector('.menu-r__dropdown');
var callbackList = document.querySelector('.menu-r__list')
var callbackSvg = document.querySelector('.list-svg');
$('.menu-r__dropdown').click(function(e) {
	var $message = $('.menu-r__list');
	if ($message.css('display') != 'block') {
		callbackList.classList.toggle('opened-list');
		callbackSvg.classList.toggle('rotated-svg');
		var firstClick = true;
		$(document).bind('click.myEvent', function(e) {
			if (!firstClick && $(e.target).closest('#message').length == 0) {
				callbackList.classList.remove('opened-list');
				callbackSvg.classList.remove('rotated-svg');
				$(document).unbind('click.myEvent');
			}
			firstClick = false;
		});
	}
	e.preventDefault();
});

//close popup by "esc" button
window.onkeydown = function( event ) {
	if ( event.keyCode == 27 ) {
		callbackList.classList.remove('opened-list');
		callbackSvg.classList.remove('rotated-svg');
		selectorMenu.classList.remove('opened');
		body.style.overflowY = 'auto';
		svgMenu.style.display = 'block';
		svgClose.style.display = 'none';
		popup.style.zIndex = '-1';
		popup.style.opacity = '0';
		popupOverlay.style.opacity = '0';
		popupOverlay.style.zIndex = '-1';
		body.style.overflowY = 'auto';
	}
};

// mask for "tel" input
var input = document.querySelectorAll('input[type="tel"]')
var mask = new Inputmask("+7 (999) 999-99-99");
for (i = 0; i < input.length; i++){
var input = document.querySelectorAll('input[type="tel"]')
	mask.mask(input[i]);
}

//only numbers in the fields
$('#phone input').on('keydown', function(e){
	if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
	  return false;
	};
})

//smoothscroll
new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    after: function() {
        document.querySelector("body").style.overflow = "", document.querySelector("body").style.paddingRight = "0px"
    }
});

//send mail
var sendMail = function sendMail(selector) {
  return fetch('mail.php', {
	method: 'POST',
	body: new FormData(document.querySelector(selector))
  }).catch(function (error) {
	alertify.error("Ошибка. Повторите отправку позже");
  });
};

// form for sendmail method with yandex counter
var sendMessage = function() {
	document.querySelector(".footerblock__content-form-button"); // button selector
	document.querySelector(".footerblock__content-form").onsubmit = function(n) { //menu selector
		n.preventDefault(), sendMail(".footerblock__content-form").then(function(e) { //menu selector
			return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*,
			yaCounter********.reachGoal('****', function () {})*/,
			document.querySelector(".footerblock__content-form").reset();
		})
	};
}
sendMessage();

// form for sendmail method with yandex counter
var sendPopup = function() {
	document.querySelector(".popup__container-form-button"); // button selector
	document.querySelector(".popup__container-form").onsubmit = function(n) { //menu selector
		n.preventDefault(), sendMail(".popup__container-form").then(function(e) { //menu selector
			return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*,
			yaCounter********.reachGoal('****', function () {})*/,
			document.querySelector(".popup__container-form").reset();
		})
	};
}
sendPopup();

//mobile menu
var svgMenu = document.querySelector('.menuicon');
var svgClose = document.querySelector('.closeicon');
var selectorMenu = document.querySelector('.moblist'); // menu selector
var selectorClose = document.querySelector('selector'); // button close selector
var body = document.body;
svgMenu.onclick = function() {
	selectorMenu.classList.add('opened');
	body.style.overflowY = 'hidden';
	svgMenu.style.display = 'none';
	svgClose.style.display = 'block';
}
svgClose.onclick = function() {
	selectorMenu.classList.remove('opened');
	body.style.overflowY = 'auto';
	svgMenu.style.display = 'block';
	svgClose.style.display = 'none';
}

//popup
var popupButton = document.querySelectorAll('.callback');
var popup = document.querySelector('.popup');
var popupOverlay = document.querySelector('.popup-overlay');
var popupClose = document.querySelector('.popup__container-close');
var body = document.body;
for (i = 0; i < popupButton.length; i++) {
	popupButton[i].onclick = function() {
		popup.style.zIndex = '9999';
		popupOverlay.style.zIndex = '9998';
		popup.style.opacity = '1';
		popupOverlay.style.opacity = '1';
		body.style.overflowY = 'hidden';
	}
}
popupOverlay.onclick = function() {
	popup.style.zIndex = '-1';
	popup.style.opacity = '0';
	popupOverlay.style.opacity = '0';
	popupOverlay.style.zIndex = '-1';
	body.style.overflowY = 'auto';
}
popupClose.onclick = function() {
	popup.style.zIndex = '-1';
	popup.style.opacity = '0';
	popupOverlay.style.opacity = '0';
	popupOverlay.style.zIndex = '-1';
	body.style.overflowY = 'auto';
}

const data2 = {
	'Facebook': {
		img: '/images/map.png',
	},
	'Одноклассники': {
		img: '/images/map.png',
	},
	'Вконтакте': {
		img: '/images/map.png',
	},
	'Instagram': {
		img: '/images/map.png',
	},
}

void function() {
	const select = [...document.querySelectorAll('.galleryblock__items-item')];
	const img = document.querySelector('#map');

	select.forEach(option => option.onclick = e => {
		select[i].dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}));

		[].forEach.call(select, function(el) {
			el.classList.remove('galleryblock__items-item-active');
		});
		option.classList.add('galleryblock__items-item-active');
	});
	select[i].addEventListener('change', (e) => {
		img.src = data2[e.detail.value].img;
	})
}();
