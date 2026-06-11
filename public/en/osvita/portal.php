<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
require($_SERVER["DOCUMENT_ROOT"]."/templates/header-en.php");
$APPLICATION->SetPageProperty("title", "Портал навчальних ресурсів");
$APPLICATION->SetTitle("Портал навчальних ресурсів");
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
	font-weight: bFold;
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


.section {
	width: 100%;
	padding: 48px 24px;

}

.list {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 24px;
	flex-wrap: wrap; 
}

.item {
	width: 25%;

	display: flex;
	align-items: center;
	justify-content: center;

	min-width: 400px;

	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.item__image {
	height: 120px;
	width: 150px;
	flex-shrink: 0;
}

.item__image img {
	width: 100%;
	height: 100%;

	object-fit: cover;
}

.item__body {
	width: 100%;
	height: 120px;
	padding: 20px;
	box-sizing: border-box;
}

.item__title {
	display: block;
	color: #0087ab;
    font-weight: 700;
	text-align: left;
	width: 100%;
	margin-bottom: auto;
	font-size: 14px;
}

</style> <!-- Start Cources Section -->
<div class="section">
	<div class="list">
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/mceclip2.png">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/components.php" class="item__title">Обов'язкові та вибіркові&nbsp; освітні компоненти, що формують загальні компетентності&nbsp;</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special1.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/ecology.php" class="item__title">Прикладна екологія&nbsp;</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special2.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/geophysics.php" class="item__title">Розвідувальна геофізика та комп'ютерна обробка геофізичної інформації</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special2.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/geotourism.php" class="item__title">Геотуризм</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special2.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/hydrogeological.php" class="item__title">Гідрогеологічні та інженерно-геологічні дослідження для водопостачання і будівництва</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special2.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/geology.php" class="item__title">Геологічні методи пошуків та розвідки родовищ корисних копалин</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special3.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/maintenance.php" class="item__title">Технічне ослуговування та ремонт геофізичної, радіоелектронної аппаратури&nbsp; та комп'ютерної техніки</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special5.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/drilling.php" class="item__title">Буріння свердловин на тверді корисні копалини і воду</a>
			</div>
		</div>
		<div class="item">
			<div class="item__image">
 <img alt="img" src="http://fkgrt.knu.ua/images/special4.jpg">
			</div>
			<div class="item__body">
 <a href="http://fkgrt.knu.ua/osvita/subjects/motorists.php" class="item__title">Обслуговування та ремонт автомобілів і двигунів</a>
			</div>
		</div>
	</div>
</div>
<!-- End Cources Section --><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>