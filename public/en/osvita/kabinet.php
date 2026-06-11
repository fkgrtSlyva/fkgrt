<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
require($_SERVER["DOCUMENT_ROOT"]."/templates/header-en.php");
$APPLICATION->SetPageProperty("title", "Навчально-методичний кабінет");
$APPLICATION->SetTitle("Навчально-методичний кабінет");
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

    p, a {
        width: 100%;
    }

</style>
<div class="main" style="text-align: justify;">
 <b><span style="font-size: 22pt;">Навчально-методичний кабінет</span></b> <br>
	<p>
		 Навчально-методичний кабінет-центр навчально-методичної роботи коледжу, де зосереджуються інформаційні, нормативно-інструктивні, навчально-методичні матеріали, зразки планування та звітної документації, матеріали кращого досвіду педагогічних працівників, друкована продукція.<br>
 <br>
 <b>Основні завдання навчально-методичного кабінету:</b>
	</p>
	<ul type="disc">
		<li>Організація навчально-методичної роботи в коледжі.</li>
		<li>Вивчення, узагальнення та поширення передового педагогічного досвіду, удосконалення освітнього процесу педагогічних працівників.</li>
		<li>Вивчення та аналіз рівня методичного забезпечення освітнього процесу.</li>
		<li>Надання методичної допомоги викладачам у&nbsp;підвищенні їх фахового рівня, удосконаленні педагогічної майстерності.</li>
		<li>Накопичення та систематизація методичних матеріалів, які розробляються у закладі фахової передвищої освіти.</li>
		<li>Створення умов для безперервного удосконалення фахової освіти шляхом підвищення кваліфікації педагогічних працівників.</li>
		<li>Надання методичної допомоги цикловим комісіям в організації роботи з питань ведення навчально-методичної документації, виховання, навчання, роботи з викладачами.</li>
		<li>Підготовка навчально-методичних питань для розгляду на засіданнях педагогічної і методичної рад.</li>
	</ul>
	<p>
	</p>
	<div class="person range range-xs-center">
		<div class="cell-sm-4 text-sm-left">
			<div class="inset-sm-right-30">
 <img width="340" src="/osvita/images/simko.jpg" height="340" class="img-responsive reveal-inline-block" alt="">
			</div>
		</div>
		<div class="cell-sm-8 text-left">
			<h2 class="person__name">Семко Юлія Олегівна</h2>
			<p class="person__post">
				 кандидат геологічних наук, завідувач навчально-методичним кабінетом, викладач (спеціаліст вищої категорії)
			</p>
			<div class="offset-top-15 offset-sm-top-15">
				<hr class="divider bg-madison hr-left-0">
			</div>
			<div class="offset-top-20">
				<p>
					 Випускниця Київського національного університету імені Тараса Шевченка (2008, 2010) за спеціальністю «Геологія» спеціалізація «Економічна геологія».
				</p>
				<p>
					 2010-2013 роки - навчання в аспірантурі у Навчально-науковому інституті "Інститут геології" Київського національного університету імені Тараса Шевченка. В 2014 році захистила дисертаційну роботу на тему “Комплексна оцінка геологічних пам'яток природи на прикладі об'єктів Криворіжжя” і здобула науковий ступінь кандидата геологічних наук за спеціальністю 04.00.19 «Економічна геологія». Є автором понад 16 друкованих праць, у тому числі 5 у вітчизняних наукових фахових виданнях та 1 у іноземному (англомовному) виданні.
				</p>
				<p>
					 Працювала на геологічному факультеті Київського національного університету імені Тараса Шевченка на посаді інженера ІІ категорії науково-дослідної частини НДЛ "Мінералого – геохімічних досліджень". Була учасником організації наукових заходів кафедри геології родовищ корисних копалин, зокрема секретарем наукової міжнародної конференції «Наукові засади геолого–економічної оцінки мінерально-сировинної бази України та світу».
				</p>
				<p>
					 Розробник освітньої програми «Геотуризм», автор програм та робочих програм навчальної дисципліни «Геоморфологія та четвертинна геологія України». Творчо підходить до викладання навчальних дисциплін, застосовуючи різні методи і форми навчання.
				</p>
				<p>
					 У коледжі працює з 2013 року на посаді старшого лаборанта, а з 2014 рок - завідувача навчально-методичним кабінетом та викладача вищої категорії.
				</p>
				<p>
 <b>Викладає навчальні дисципліни:</b>&nbsp;Геологія з основами геоморфології. Геоморфологія та четвертинна геологія України.
				</p>
				<p>
 <b>Підвищення кваліфікації:&nbsp;</b>-Національна Академія педагогічних наук, ДЗВО "Університет менеджменту освіти", Центральний інститут післядипломної освіти за&nbsp; програмою підвищення кваліфікації "Менеджмент соціально-педагогічного супроводу діяльності закладів фахової передвищої освіти".&nbsp; Свідоцтво про підвищення кваліфікації СП 35830447/0409-23 від 02.06.2023.&nbsp;&nbsp;
				</p>
				<p>
 <b>Сфера наукових інтересів</b>:&nbsp;освіта, науки про Землю, економіка, методика викладання природничих дисциплін, туризм тощо.
				</p>
			</div>
		</div>
	</div>
	<div class="person range range-xs-center">
		<div class="cell-sm-4 text-sm-left">
			<div class="inset-sm-right-30">
 <img width="340" src="/osvita/images/buxanova.jpg" height="340" class="img-responsive reveal-inline-block" alt="">
			</div>
		</div>
		<div class="cell-sm-8 text-left">
			<h2 class="person__name">Буханова Олена Володимирівна</h2>
			<p class="person__post">
				 методист коледжу
			</p>
			<div class="offset-top-15 offset-sm-top-15">
				<hr class="divider bg-madison hr-left-0">
			</div>
			<div class="offset-top-20">
				<p>
					 У&nbsp;2000 році закінчила&nbsp;&nbsp;Київський національний університет&nbsp;імені Тараса Шевченка за спеціальністью "Українська мова та література" та здобула кваліфікацію філолога, спеціаліста української мови та літератури.&nbsp;<br>
					 З 2001 року працювала викладачем&nbsp;&nbsp;у Медичному інституті Української асоціації народної медицини. <br>
					 З 2006 року працювала у&nbsp;Київському національному торговельно-економічному університеті на посаді старшого викладача української мови як іноземної.<br>
					 З грудня 2022 року працює у ВСП «Фаховий коледж геологорозвідувальних технологій КНУ імені Тараса Шевченка» на посаді методиста коледжу.<br>
				</p>
				<p>
 <b>Підвищення кваліфікації</b>: Національний педагогічний університет імені М,П,Драгоманова &nbsp;за напрямом "Інноватика у викладанні української мови як іноземної". Свідоцтво 12СС 02125295/039794.
				</p>
				<p>
					 -стажування у ННІ&nbsp;"Інститут геології" Київського національного університету &nbsp;імені Тараса Шевченка, довідка про стажування № 049-12-752 від 14.12.2022.
				</p>
				<p>
					 -Національна Академія педагогічних наук, ДЗВО "Університет менеджменту освіти", Центральний інститут післядипломної освіти за&nbsp; програмою підвищення кваліфікації "Менеджмент соціально-педагогічного супроводу діяльності закладів фахової передвищої освіти".&nbsp; Свідоцтво про підвищення кваліфікації СП 35830447/0411-23 від 02.06.2023.&nbsp;&nbsp;<br>
				</p>
				<p>
 <b>Сфера наукових інтересів:</b> освіта, педагогіка, методика викладання гуманітарних дисциплін тощо.
				</p>
			</div>
		</div>
	</div>
</div>
 <br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>