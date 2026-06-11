<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
require($_SERVER["DOCUMENT_ROOT"]."/templates/header-en.php");
$APPLICATION->SetPageProperty("title", "Інформаційні посилання");
$APPLICATION->SetTitle("Інформаційні посилання");
?><style>
.padding-lg {
	display: block;
	padding-top: 90px;
	padding-bottom: 90px;
}
.our-cources h2, .our-impotance h2, .how-study h2, .why-choose h2, .news-events h2, .campus-tour h2, .testimonial h2, .about h2, .browse-teacher h2, .how-apply h2, .have-question h2 {
	display: block;
	padding-bottom: 44px;
	font-family: 'texgyreadventorbold', arial;
	font-size: 36px;
	text-transform: uppercase;
	text-align: left;
}
.our-cources h2 span, .our-impotance h2 span, .how-study h2 span, .why-choose h2 span, .news-events h2 span, .campus-tour h2 span, .browse-teacher h2 span, .how-apply h2 span {
	display: block;
	font-family: 'texgyreadventorregular', arial;
	font-size: 14px;
	opacity: 0.8;
}
.our-cources {
	
}

.our-cources .container {
	position: relative;
	z-index: 2;
}
.our-cources h2 {
	color: #fff;
}
.our-cources h2 span {
	color: #d5d4d3;
}
.our-cources ul.course-list {
	display: block;
	padding-top: 20px;
}
.our-cources ul.course-list li {
	display: block;
	background: url(http://geophys.knu.ua/images/book-bg.png) no-repeat center top;
	position: relative;
}
.our-cources ul.course-list li:after {
	width: 1px;
	height: 100%;
	position: absolute;
	right: 0px;
	top: 0px;
	display: block;
	background: #fff;
	content: " ";
	opacity: 0.3;
}
.our-cources ul.course-list li .inner {
	width: 198px;
	margin: 0 auto;
	height: 280px;
	padding: 54px 0 0 30px;
	position: relative;
}
.our-cources ul.course-list li .inner figure {
	position: absolute;
	left: 4px;
	top: 1px;
	opacity: 0.3;
}
.our-cources ul.course-list li h3 {
	display: block;
	padding-bottom: 0px;
	font-size: 18px;
	text-transform: uppercase;
	line-height: 20px;
	color: #fff;
	position: relative;
	text-align: left;
	font-weight: bold;
	margin-top: -20px;
}
.our-cources ul.course-list li h3 span {
	display: block;
}
.our-cources ul.course-list li p {
	display: block;
	padding-bottom: 12px;
	font-size: 12px;
	line-height: 18px;
	color: #fff;
	opacity: 0.8;
}
.our-cources ul.course-list li .fess-box {
	display: inline-block;
	padding: 0 12px;
	background: #ff9600;
	font-size: 11px;
	font-weight: 700;
	color: #fff;
	position: relative;
	text-transform: uppercase;
}
.our-cources ul.course-list li .fess-box span {
	font-family: 'texgyreadventorbold', arial;
	font-size: 16px;
}
.our-cources ul.course-list li .bottom-txt {
	width: 100%;
	padding: 18px 30px;
	position: absolute;
	bottom: 0px;
	left: 0px;
}
.our-cources ul.course-list li .duration {
	width: 81%;
	float: left;
}
.our-cources ul.course-list li .duration h4 {
	display: block;
	font-family: 'texgyreadventorbold', arial;
	font-size: 16px;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
}
.our-cources ul.course-list li .duration span {
	display: block;
	font-size: 11px;
	font-weight: 700;
	color: #fff;
	line-height: 16px;
	text-transform: uppercase;
	opacity: 0.8;
}
.our-cources ul.course-list li a {
	display: block;
	position: absolute;
	right: 18px;
	top: 22px;
}
.our-cources ul.course-list li a .icon-more-icon {
	font-size: 23px;
	color: #fff;
	opacity: 0.5;
	transition: all 0.3s ease 0s;
}
.our-cources ul.course-list li a:hover .icon-more-icon {
	opacity: 1;
}

a:hover {
	color: #0087ab;
}

</style> <style>
    .content-item {
        padding-left: 16px !important;
    }

	.img-wrap {
		width: 230px;
		height: 230px;
		overflow: hidden;
		border-radius: 50%;
	}

	.img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

    .main {
        margin-top: 60px;
        padding-bottom: 30px;
    }

    .content {
        padding: 0 32px;
    }

    .menu {

    }

    .menu__item {
        font-size: 16px !important;
    }

    .person__name {
        font-size: 24px;
        font-weight: bold;
    }

    .person__post {
        font-size: 16px;
        font-weight: bold;
    }

	.main {
		width: 100%;
		display: flex;
		padding: 0 36px;
		padding-bottom: 24px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.card {
		width: calc(25% - 16px);
		min-width: 280px;
		margin: 8px;
		margin-top: 0;
		background-color: #fff;
		box-shadow: 4px 4px 8px #ddd;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
	}

	.card:last-child {
		margin-bottom: 8px;
	}

	.card__img {
		width: 100%;
		position: relative;
		height: 0;
		overflow: hidden;
		padding-top: 56%;
	}

	.card__img img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card__link {
		font-size: 18px;
		display: block;
		margin: 10px auto;
		font-weight: 700;
		height: 80px; 
	}

    a, p {
        width: 100%;
    }

</style>
<p class="main" style="text-align: justify;">
 <b><span style="font-size: 22pt;">Інформаційні посилання:</span></b><br>
 <a href="/osvita/docs/1.pdf"></a>
</p>
<p>
 <a href="/osvita/docs/1.pdf"></a>
</p>
<p style="text-align: justify;">
 <a href="/osvita/docs/1.pdf"></a>
</p>
 <b>
<p style="text-align: center;">
	 Академічна доброчесність
</p>
 </b>
<ul style="text-align: justify;">
	<li><a href="/osvita/docs/1.pdf" style="text-align: justify;">Лист МОН щодо видів порушень академічної доброчесності</a></li>
	<li> <a href="https://fkgrt.knu.ua/osvita/docs/2.pdf">Методичні рекомендації для закладів освіти з підтримки принципів академічної доброчесності</a> </li>
	<li> <a href="/osvita/docs/3.pdf">Розширений глосарій термінів та понять із академічної доброчесності&nbsp;</a> </li>
	<li> <a href="/osvita/docs/4.pdf">Лист МОН&nbsp; щодо питань уникнення проблем і помилок у практиках забезпечення академічної доброчесності&nbsp;</a> </li>
	<li> <a href="/osvita/docs/5.pdf">Академічна доброчесність. Інформаційний бюллетень: "Як підтримати чесність дистанційного навчання?"&nbsp;</a> </li>
	<li> <a href="/osvita/docs/6.pdf">Академічна доброчесність. Інформаційний бюллетень: "Як поліпшити (не) дистанційне викладання"</a></li>
	<li><a href="/about/docs/doc62.pdf">Положення про дотримання академічної доброчесності</a><br>
 </li>
</ul>
<p style="text-align: center;">
 <b><span style="font-size: 14pt;">Підвищення кваліфікації&nbsp;</span></b>
</p>
<p style="text-align: center;">
</p>
<ul style="text-align: justify;">
	<li style="text-align: justify;">
	<p>
 <a href="https://fkgrt.knu.ua/about/docs/doc4.pdf">Положення про підвищення кваліфікації та стажування педагогічних працівників</a>
	</p>
 </li>
	<li>
	<p>
 <a href="/about/docs/Випуск%20курсів%20підвищення%20квалфікації%20педагогічних%20працівників.pdf">Випуск курсів підвищення кваліфікації педагогічних працівників коледжу у 2023 році</a>
	</p>
 </li>
</ul>
 <span style="text-align: justify;">
<p style="text-align: center;">
 <b><span style="font-size: 14pt;">Атестація педагогічних працівників</span></b>
</p>
<p style="text-align: center;">
</p>
<ul>
	<li>
	<p>
 <a href="https://fkgrt.knu.ua/about/docs/doc54.pdf">Положення про Рейтингову систему оцінки роботи педагогічних працівників</a>
	</p>
 </li>
	<li>
	<p>
 <a href="https://fkgrt.knu.ua/about/docs/doc50.pdf">Положення про Відкриті заняття</a>
	</p>
 </li>
	<li>
	<p>
 <a href="https://fkgrt.knu.ua/osvita/docs/16.pdf">Рейтингова система оцінки &nbsp;діяльності викладачів</a>
	</p>
 </li>
</ul>
 </span>
<ul style="text-align: justify;">
</ul>
<p style="text-align: center;">
 <b><span style="font-size: 14pt;">Рекомендації з навчально-методичного забезпечення</span></b>
</p>
<p style="text-align: justify;">
</p>
<ul style="text-align: justify;">
	<li><a href="/osvita/21062022_mr_compressed-1.pdf">Методичні&nbsp; рекомендації розроблення ОПП та навчального плану (рекомендації МІНІСТЕРСТВА ОСВІТИ І НАУКИ УКРАЇНИ ДЕРЖАВНОЇ СЛУЖБИ ЯКОСТІ ОСВІТИ УКРАЇНИ, ДЕРЖАВНОЇ УСТАНОВИ "НАУКОВО-МЕТОДИЧНИЙ ЦЕНТР ВИЩОЇ ТА ФАХОВОЇ ПЕРЕДВИЩОЇ ОСВІТИ")</a></li>
	<li> <a href="/osvita/Норми%20часу%20педагогічних%20працівників">Норми часу для планування і обліку навчальної роботи та переліків видів навчальної, методичної, інноваційної, наукової, організаційної роботи&nbsp; та іншої педагогічної діяльності педагогічних і науково-педагогічних працівників (Наказ МОН від 18.06.2021 № 686)</a></li>
</ul>
<ul style="text-align: justify;">
	<li><a href="/about/docs/Методичні%20рекомендації%20щодо%20підготовки%20та%20проведення%20відкритого%20заняття%20.pdf">Методичні рекомендації щодо підготовки та проведення відкритого заняття</a></li>
	<li><a href="/about/docs/Методична%20розробка%20занять%20та%20вимоги%20до%20неї.pdf">Методична розробка занять та вимоги до неї</a></li>
</ul>
<ul style="text-align: justify;">
	<li><a href="/about/docs/docs.pdf">Положення про Методичну раду </a><br>
 </li>
	<li><a href="/about/docs/doc74.pdf">Положення про Методичну роботу</a></li>
	<li>
	<p>
 <a href="https://fkgrt.knu.ua/about/docs/doc2.pdf">Положення про Циклову комісію</a>
	</p>
 </li>
</ul>
<ul style="text-align: justify;">
	<li><a href="/about/docs/doc63.pdf">Положення&nbsp;</a><a href="https://fkgrt.knu.ua/about/docs/doc63.pdf">про Навчально-методичний комплекс дисципліни</a></li>
	<li><a href="/about/docs/doc%2064.pdf">Положення про Програму та робочу&nbsp;програму &nbsp;навчальної дисципліни&nbsp;</a></li>
	<li><a href="/about/docs/doc72.pdf">Положення про Силабус освітнього компонента (дисципліни)</a></li>
</ul>
<ul style="text-align: justify;">
	<li> <a href="/osvita/docs/17.pdf">Програми загальноосвітніх дисциплін профільної середньої освіти (рекомендації МОН України)</a></li>
</ul>
<p style="text-align: center;">
 <b><span style="font-size: 14pt;">Дистанційне навчання</span></b>
</p>
<ul style="text-align: justify;">
	<li><a href="/about/docs/Організація%20дистанційного%20навчання%20%20коледжу.pdf"><b>Організація дистанційного навчання коледжу</b></a></li>
	<li><a href="https://fkgrt.knu.ua/about/docs/%D0%9E%D1%81%D0%BE%D0%B1%D0%BB%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D1%96%20%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B8%20%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%BC%D0%B5%D0%B4%D1%96%D0%B9%D0%BD%D0%B8%D1%85%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D1%96%D0%B9.pdf"><b>Особливості підготовки мультимедійних презентацій</b></a></li>
	<li><b><a href="/about/docs/doc61.pdf">Положення про дистанційне навчання&nbsp;</a></b></li>
</ul>
<ul style="text-align: justify;">
	<li><a href="/lecturer/algorytm_stvorennya_classroom.pdf">Алгортм створення&nbsp; Classroom</a></li>
	<li><a href="/lecturer/provedennya_videokonferenciy_z_vykorystannyam_zoom.pdf">Проведення відеоконференції з використанням Zoom&nbsp;</a></li>
</ul>
 <a href="/about/docs/doc61.pdf"> </a>
<ul style="text-align: justify;">
</ul>
<ul style="text-align: justify;">
	<li>
	<p>
 <a href="https://www.google.com/url?q=https%3A%2F%2Fprometheus.org.ua%2F&sa=D&sntz=1&usg=AOvVaw1sjXKaQKXc1kFLvbEkO-J9" target="_blank">Prometheus -&nbsp;</a><a href="https://www.google.com/url?q=https%3A%2F%2Fprometheus.org.ua%2F&sa=D&sntz=1&usg=AOvVaw1sjXKaQKXc1kFLvbEkO-J9" target="_blank">НАЙКРАЩІ ОНЛАЙН-КУРСИ УКРАЇНИ ТА СВІТУ</a>
	</p>
 </li>
	<li>
	<p>
 <a href="https://Moodle.org/course/view.php?id=17228">Ресурс української спільноти&nbsp; користувачів Moodle</a>
	</p>
 </li>
	<li>
	<p>
 <a href="https://www.google.com/url?q=https%3A%2F%2Fvseosvita.ua%2F&sa=D&sntz=1&usg=AOvVaw3hmKa44RNeuCsuBbPqDQGW" target="_blank">Вcеосвіта - Національна освітня платформа</a>
	</p>
 </li>
	<li>
	<p>
		 Освітній проект <a href="https://naurok.com.ua/">"На Урок"</a><br>
	</p>
 </li>
	<li>
	<p>
 <a href="https://www.google.com/url?q=https%3A%2F%2Fthedigital.gov.ua%2Fnews%2Fservisi-distantsiynogo-navchannya-dlya-vchiteliv%3Ffbclid%3DIwAR32wdy0XzBfxCvTJauk_I0Ekwrr-bfYbtG8RwWJy-N2NIYav5WT8O6dqUE&sa=D&sntz=1&usg=AOvVaw2YepYagqjaWQebcoein46M" target="_blank">Сервіси дистанційного навчання для вчителів</a>
	</p>
 </li>
	<li>
	<p>
 <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.conspectus.online%2F2020%2F04%2Fgoogle-sheets-table-evaluation.html%3Fm%3D1&sa=D&sntz=1&usg=AOvVaw1AnYi90MhDHBDT0HQHXNML" target="_blank">Шаблон таблиці для оцінювання</a>
	</p>
 </li>
	<li>
	<p>
 <a href="https://youtu.be/eqySSuo-5ew" target="_blank">Додаткові налаштування класу (Google Classroom від О.Стечкевич)</a>
	</p>
 </li>
</ul>
<p style="text-align: justify;">
 <a href="/lecturer/provedennya_videokonferenciy_z_vykorystannyam_zoom.pdf"></a><br>
 <br>
 <br>
</p>
<p>
</p>
<p>
</p>
<p style="text-align: justify;">
 <br>
</p>
<p style="text-align: justify;">
</p>
<p style="text-align: justify;">
</p>
<p style="text-align: justify;">
</p>
<p style="text-align: justify;">
 <br>
</p>
<p style="text-align: justify;">
</p>
<p style="text-align: justify;">
</p>
<p style="text-align: justify;">
</p><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>