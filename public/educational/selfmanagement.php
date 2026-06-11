<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
require($_SERVER["DOCUMENT_ROOT"]."/templates/header.php");
$APPLICATION->SetPageProperty("title", "Студентське самоврядування");
$APPLICATION->SetTitle("Студентське самоврядування");
?><style>
	.person {
		display: flex;
		padding: 24px 32px;
	}

	.person__photo {
		width: 40%;
		
	}

	.photo {
		width: 100%;
		height: 0;
		padding-top: 100%;
		position: relative;
		
	}

	.photo img {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		object-fit: cover;
	}

	.person__info {
		width: 100%;
		text-align: left;
		padding: 0 32px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.person__name {
		font-size: 24px;
		color: #000;   
		margin-bottom: 8px;
	}

	.person__title {
		font-size: 18px;
		margin-bottom: 8px;
	}
		
	.person__contacts {
		margin-top: auto;
	}
</style> <a href="http://sp.knu.ua/"><span style="font-size: 14pt;">Студентський парламент університету</span></a> <br>
 <a href="http://studmisto.knu.ua/"><span style="font-size: 14pt;">Студмістечко КНУ</span></a> <br>
 <a href="http://www.wek.kiev.ua/"><span style="font-size: 14pt;">Енциклопедія міста Києва</span></a> <br>
 <a href="http://www.univ.kiev.ua/ua/resources/online-payment/"><span style="font-size: 14pt;">Оплата навчання та послуг університету</span></a> <br>
 <br>
 <a href="/about/docs/Stydsamovryad.pdf"><span class="fa-file-text-o text-middle icon-xs text-madison"><span style="font-size: 14pt;"> Положення про студентське самоврядування</span></span></a><br>
 <br>
 <br>
<h2><i>Студентська рада коледжу</i></h2>
 <section>
<div class="person">
	<div class="person__info">
		<ul class="list list-unstyled person__contacts">
			<li><br>
 </li>
		</ul>
	</div>
</div>
 </section> <section>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/shokal2.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Шокал Анастасія
		</p>
		<p class="person__title">
			 Голова студентського самоврядування, група Е-31
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/zasuha2.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Засуха Яна
		</p>
		<p class="person__title">
			 Заступник голови студентського самоврядування, група І-31
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/kalinichenko.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Калініченко Крістіна
		</p>
		<p class="person__title">
			 Секретар, група І-31
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
 </section>
<h2><i>Сектор культурно-масової роботи</i></h2>
 <section>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/ermolenko.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Єрмоленко Володимир
		</p>
		<p class="person__title">
			 група А-31
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/klimenko.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Клименко Олександр
		</p>
		<p class="person__title">
			 група A-41
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/volynets.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Волинець Іван
		</p>
		<p class="person__title">
			 група Г-31
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/frelih.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Фреліх Мирослава 
		</p>
		<p class="person__title">
			 група АЕ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/naumenko.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Науменко Дарія
		</p>
		<p class="person__title">
			 група АЕ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/livshun.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Лівшун Софія
		</p>
		<p class="person__title">
			 група АЕ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/shulyar.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Шуляр Анастасія
		</p>
		<p class="person__title">
			 група ГРТ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/glushenko.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Глушенко Михайло
		</p>
		<p class="person__title">
			 група ГРТ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
 </section> <section>
<div class="person">
	<div class="person__photo">
 <br>
	</div>
</div>
 </section>
<h2><i>Сектор навчальної роботи</i></h2>
 <section>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/ulianytskiy.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Уляницький Олександр
		</p>
		<p class="person__title">
			 група Г-31
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/dvoynos.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Двойнос Аліна
		</p>
		<p class="person__title">
			 група ГРТ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
 </section> <section> </section> <section> </section>
<h2 class="text-bold"><i>Сектор інформаційного забезпечення</i></h2>
 <section>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/trotsyk.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Троцик Максим
		</p>
		<p class="person__title">
			 група AE-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/grushytska.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Грушитська Уляна
		</p>
		<p class="person__title">
			 група АЕ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/volynets.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Волинець Євген
		</p>
		<p class="person__title">
			 група АЕ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/hursa.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Хурса Станіслав
		</p>
		<p class="person__title">
			 група ГІТ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/prokopenko.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Прокопенко Віктор
		</p>
		<p class="person__title">
			 група Г-21
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
 </section> <section>
<div class="person">
	<div class="person__info">
		<ul class="list list-unstyled person__contacts">
			<li><br>
 </li>
		</ul>
	</div>
</div>
 </section> <section> </section>
<h2 class="text-bold">Сектор спортивно-оздоровчої роботи</h2>
 <section>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/filonenko.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Філоненко Владислав
		</p>
		<p class="person__title">
			 група АЕ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/kononets.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Кононець Віктор
		</p>
		<p class="person__title">
			 група ГРТ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/yatskiv.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Яцків Олексій
		</p>
		<p class="person__title">
			 група ГРТ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
<div class="person">
	<div class="person__photo">
		<div class="photo">
 <img src="/educational/images/shkilnyi.jpg">
		</div>
	</div>
	<div class="person__info">
		<p class="person__name">
			 Шкільний Іван
		</p>
		<p class="person__title">
			 група АЕ-11
		</p>
		<ul class="list list-unstyled person__contacts">
			<li><span class="icon icon-xs mdi mdi-phone text-middle text-madison"></span><a class="reveal-inline-block text-dark inset-left-10" href="tel:+38(000)000-00-00">+38(000)000-00-00</a></li>
			<li><span class="icon icon-xs mdi mdi-email-open text-middle text-madison"></span><a class="reveal-inline-block inset-left-10" href="mailto:kgrt@univ.kiev.ua">example@gmail.com</a></li>
		</ul>
	</div>
</div>
 </section><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>