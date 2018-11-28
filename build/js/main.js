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
	'11': {
		title: 'Национальная Технологическая Инициатива',
		link: 'https://asi.ru/nti',
		href: 'https://asi.ru/nti/',
		img: 'url("http://localhost:3000/images/brands/11.png")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'10': {
		title: 'Технополис Москва',
		link: 'https://technomoscow.ru',
		href: 'https://technomoscow.ru/',
		img: 'url("http://localhost:3000/images/brands/10.jpg")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'9': {
		title: 'Sk Сколково',
		link: 'http://sk.ru',
		href: 'http://sk.ru/',
		img: 'url("http://localhost:3000/images/brands/9.png")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'8': {
		title: 'Российский экспортный центр',
		link: 'https://www.exportcenter.ru',
		href: 'https://www.exportcenter.ru/',
		img: 'url("http://localhost:3000/images/brands/8.jpg")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'7': {
		title: 'Корпорация МСП',
		link: 'https://corpmsp.ru',
		href: 'https://corpmsp.ru/',
		img: 'url("http://localhost:3000/images/brands/7.jpg")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'6': {
		title: '"ВЭБ Инновации"',
		link: 'http://vebinnovation.ru',
		href: 'http://vebinnovation.ru/',
		img: 'url("http://localhost:3000/images/brands/6.png")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'5': {
		title: 'Фонд развития промышленности',
		link: 'http://frprf.ru',
		href: 'http://frprf.ru/',
		img: 'url("http://localhost:3000/images/brands/5.jpg")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'4': {
		title: 'Фонд содействия инновациям',
		link: 'http://fasie.ru',
		href: 'http://fasie.ru/',
		img: 'url("http://localhost:3000/images/brands/4.png")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'3': {
		title: 'Минсельхоз РФ',
		link: 'mcx.ru',
		href: 'http://mcx.ru/',
		img: 'url("http://localhost:3000/images/brands/3.jpg")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'2': {
		title: 'Название',
		link: '#',
		href: '#',
		img: 'url("http://localhost:3000/images/brands/2.png")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
	'1': {
		title: 'Минпромторг России',
		link: 'http://minpromtorg.gov.ru',
		href: 'http://minpromtorg.gov.ru/',
		img: 'url("http://localhost:3000/images/brands/1.png")',
		text: 'Сущность и концепция маркетинговой программы изящно специфицирует инструмент маркетинга. Тем не менее, процесс стратегического планирования основан на тщательном анализе. К тому же внутрифирменная реклама ускоряет конструктивный целевой сегмент рынка. В рамках концепции Акоффа и Стэка, рейт-карта пока плохо отражает медиаплан.',
		prop1: '10 млрд.',
		prop2: '10 млн.',
		prop3: 'промышленная, стартап',
	},
}

void function() {
	const select = [...document.querySelectorAll('.galleryblock__items-item')];
	const title = document.querySelector('.galleryblock__info-title');
	const link = document.querySelector('.galleryblock__info-link');
	const img = document.querySelector('.galleryblock__info-image');
	const text = document.querySelector('.galleryblock__info-text');
	const props = [...document.querySelectorAll('.galleryblock__info-prop span')];
	select.forEach(option => option.onclick = e => {
		select[i].dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}));
	});
	select[i].addEventListener('change', (e) => {
		title.textContent = data2[e.detail.value].title;
		link.textContent = data2[e.detail.value].link;
		link.href = data2[e.detail.value].href;
		img.style.background = data2[e.detail.value].img;
		img.style.backgroundSize = 'contain';
		img.style.backgroundRepeat = 'no-repeat';
		img.style.backgroundPosition = '50% 50%';
		text.textContent = data2[e.detail.value].text;
		props[0].textContent = data2[e.detail.value].prop1;
		props[1].textContent = data2[e.detail.value].prop2;
		props[2].textContent = data2[e.detail.value].prop3;
	})
}();
