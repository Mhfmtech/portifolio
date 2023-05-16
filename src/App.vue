<script setup>
	import { RouterLink, RouterView } from "vue-router";
	// import telegram from "../assets/telegram.png";
	// import tiktok from "../assets/tiktok.png";
</script>

<script>
	import SvgIcon from "@jamescoyle/vue-icon";
	import { mdiInstagram } from "@mdi/js";
	import { mdiLinkedin } from "@mdi/js";
	import { mdiFacebook } from "@mdi/js";
	import { mdiYoutube } from "@mdi/js";
	import { mdiTwitter } from "@mdi/js";
	import { mdiMenu } from "@mdi/js";
	import { mdiCloseBoxOutline } from "@mdi/js";
	export default {
		components: { SvgIcon },
		data() {
			return {
				menuRibus: false,
				politica: false,
				path: mdiMenu,
				path1: mdiInstagram,
				path2: mdiCloseBoxOutline,
				path3: mdiLinkedin,
				path4: mdiYoutube,
				path5: mdiTwitter,
				path6: mdiFacebook,
				items: [
					{ type: "subheader", title: "Group #1" },
					{
						title: "- Entenda o Projeto",
						value: 1,
					},
					{
						title: "- Ecossistema",
						value: 2,
					},
					{
						title: "- Blog",
						value: 2,
					},
					{
						title: "- Ribus na mídia",
						value: 2,
					},
				],
				items2: [
					{ text: "Instagram", icon: "mdi-clock" },
					{ text: "Linkedin", icon: "mdi-account" },
					{ text: "Youtube", icon: "mdi-flag" },
					{ text: "Telegram", icon: "mdi-flag" },
					{ text: "TikTok", icon: "mdi-flag" },
					{ text: "Twitter", icon: "mdi-flag" },
				],
			};
		},
		method: {
			handleScroll() {
				const pageHeight = window.innerHeight;
				const offSet = window.scrollY;

				// Check the current screen Y position and update the header color accordingly
				if (offSet > pageHeight * 0.1) {
					// If the user has scrolled down by 10% of the page height
					this.headerColor = true;
					console.log("Header color updated!");
				} else {
					this.headerColor = false;
				}
			},
		},

		computed: {
			intBreakPoint() {
				switch (this.$vuetify.display.name) {
					case "xs":
						return 0;
					case "sm":
						return 1;
					case "md":
						return 2;
					case "lg":
						return 3;
					case "xl":
						return 4;
					default:
						return 0;
				}
			},
		},

		mounted() {
			window.addEventListener("scroll", this.handleScroll);
		},
		beforeDestroy() {
			window.removeEventListener("scroll", this.handleScroll);
		},
	};
</script>

<template>
	<v-app>
		<v-app-bar
			class="padMobile d-flex justify-center colorFundo"
			style="
				width: 100%;
				padding: 0px 65px;
				box-shadow: none;
				height: 75px;
				box-shadow: 2px 1px 8px 2px rgb(0 0 0 / 13%);
				background: rgba(255, 255, 255, 0.251) !important;
				background: rgb(255 255 255 / 5%) !important;
				backdrop-filter: blur(2.5px) !important;
			"
		>
			<v-row data-aos="fade-down" data-aos-duration="1000">
				<v-col cols="8" md="9">
					<h1 style="font-family: dosis !important; font-weight: 200 !important; color: #fff">Mauro Henrique</h1>
				</v-col>	
				<v-col
					v-if="intBreakPoint >= 2"
					cols="12"
					md="3"
					class="d-flex align-center justify-end flex-wrap"
				>
					<p style="font-family: raleway !important; font-weight: 200 !important; color: #fff">Projetos</p>
					<v-spacer></v-spacer>
					<p style="font-family: raleway !important; font-weight: 200 !important; color: #fff">Galeria</p>
					<v-spacer></v-spacer>
					<p style="font-family: raleway !important; font-weight: 200 !important; color: #fff">contato</p>
				</v-col>
			</v-row>
		</v-app-bar>
		<!-- <v-app-bar
			v-else
			class="d-flex justify-center"
			style="
				width: 100%;
				padding: 0px 65px;
				box-shadow: none;
				height: 75px;
				background-color: transparent;
			"
		>
			<v-row data-aos="fade-down" data-aos-duration="1000">
				<v-col cols="12" md="4">
					<img src="./assets/logoNormal.webp" width="150" />
				</v-col>
				<v-col cols="12" md="4" class="d-flex justify-center">
					<svg-icon
						style="cursor: pointer"
						@click="menuRibus = true"
						type="mdi"
						size="30"
						:path="path"
					></svg-icon>
				</v-col>
				<v-col cols="12" md="4" class="d-flex align-center justify-end">
					<v-btn class="btnBorder">SEJA TOKENISTA</v-btn>
				</v-col>
			</v-row>
		</v-app-bar> -->
		<router-view />

		<v-footer class="padMobile" style="padding: 50px" color="#030609">
			<v-row>
			
			</v-row>
		</v-footer>

		<v-dialog v-model="politica">
			<svg-icon
				data-aos="fade-down"
				data-aos-duration="2000"
				style="
					cursor: pointer;
					position: absolute;
					right: 10px;
					top: 10px;
					z-index: 5;
				"
				@click="politica = false"
				type="mdi"
				size="50"
				color="black"
				:path="path2"
			></svg-icon>
			<v-card style="padding: 50px">
				<v-row>
					<h2>
						<span style="color: rgb(68, 68, 68)"
							>Política Privacidade</span
						>
					</h2>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>A sua privacidade é importante para nós. É política
							do Ribus respeitar a sua privacidade em relação a
							qualquer informação sua que possamos coletar no site
							<a href="https://ribus.com.br/">Ribus</a>, e outros
							sites que possuímos e operamos.</span
						>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>Solicitamos informações pessoais apenas quando
							realmente precisamos delas para lhe fornecer um
							serviço. Fazemo-lo por meios justos e legais, com o
							seu conhecimento e consentimento. Também informamos
							por que estamos coletando e como será usado.</span
						>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>Apenas retemos as informações coletadas pelo tempo
							necessário para fornecer o serviço solicitado.
							Quando armazenamos dados, protegemos dentro de meios
							comercialmente aceitáveis para evitar perdas e
							roubos, bem como acesso, divulgação, cópia, uso ou
							modificação não autorizados.</span
						>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>Não compartilhamos informações de identificação
							pessoal publicamente ou com terceiros, exceto quando
							exigido por lei.</span
						>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>O nosso site pode ter links para sites externos que
							não são operados por nós. Esteja ciente de que não
							temos controle sobre o conteúdo e práticas desses
							sites e não podemos aceitar responsabilidade por
							suas respectivas&nbsp;</span
						><a
							href="https://politicaprivacidade.com/"
							rel="noopener noreferrer"
							target="_blank"
							style="
								background-color: transparent;
								color: rgb(68, 68, 68);
							"
							>políticas de privacidade</a
						><span style="color: rgb(68, 68, 68)">.</span>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>Você é livre para recusar a nossa solicitação de
							informações pessoais, entendendo que talvez não
							possamos fornecer alguns dos serviços
							desejados.</span
						>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>O uso continuado de nosso site será considerado
							como aceitação de nossas práticas em torno de
							privacidade e informações pessoais. Se você tiver
							alguma dúvida sobre como lidamos com dados do
							usuário e informações pessoais, entre em contacto
							connosco.</span
						>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							><ul>
								<li>
									<span style="color: rgb(68, 68, 68)"
										>O serviço Google AdSense que usamos
										para veicular publicidade usa um cookie
										DoubleClick para veicular anúncios mais
										relevantes em toda a Web e limitar o
										número de vezes que um determinado
										anúncio é exibido para você.</span
									>
								</li>
								<li>
									<span style="color: rgb(68, 68, 68)"
										>Para mais informações sobre o Google
										AdSense, consulte as FAQs oficiais sobre
										privacidade do Google AdSense.</span
									>
								</li>
								<li>
									<span style="color: rgb(68, 68, 68)"
										>Utilizamos anúncios para compensar os
										custos de funcionamento deste site e
										fornecer financiamento para futuros
										desenvolvimentos. Os cookies de
										publicidade comportamental usados por
										este site foram projetados para garantir
										que você forneça os anúncios mais
										relevantes sempre que possível,
										rastreando anonimamente seus interesses
										e apresentando coisas semelhantes que
										possam ser do seu interesse.</span
									>
								</li>
								<li>
									<span style="color: rgb(68, 68, 68)"
										>Vários parceiros anunciam em nosso nome
										e os cookies de rastreamento de
										afiliados simplesmente nos permitem ver
										se nossos clientes acessaram o site
										através de um dos sites de nossos
										parceiros, para que possamos creditá-los
										adequadamente e, quando aplicável,
										permitir que nossos parceiros afiliados
										ofereçam qualquer promoção que pode
										fornecê-lo para fazer uma compra.</span
									>
								</li>
							</ul>
							<p><br /></p
						></span>
					</p>
					<h3>
						<span style="color: rgb(68, 68, 68)"
							>Compromisso do Usuário</span
						>
					</h3>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>O usuário se compromete a fazer uso adequado dos
							conteúdos e da informação que o Ribus oferece no
							site e com caráter enunciativo, mas não
							limitativo:</span
						>
					</p>
					<ul>
						<li>
							<span style="color: rgb(68, 68, 68)"
								>A) Não se envolver em atividades que sejam
								ilegais ou contrárias à boa fé a à ordem
								pública;</span
							>
						</li>
						<li>
							<span style="color: rgb(68, 68, 68)"
								>B) Não difundir propaganda ou conteúdo de
								natureza racista, xenofóbica, </span
							><span style="color: rgb(33, 37, 41)"
								><a
									href="https://apostasonline.guru/betano-apostas/"
									style="
										color: inherit !important;
										text-decoration: none !important;
										font-size: inherit !important;
									"
									>betano</a
								></span
							><span style="color: rgb(68, 68, 68)">
								ou azar, qualquer tipo de pornografia ilegal, de
								apologia ao terrorismo ou contra os direitos
								humanos;</span
							>
						</li>
						<li>
							<span style="color: rgb(68, 68, 68)"
								>C) Não causar danos aos sistemas físicos
								(hardwares) e lógicos (softwares) do Ribus, de
								seus fornecedores ou terceiros, para introduzir
								ou disseminar vírus informáticos ou quaisquer
								outros sistemas de hardware ou software que
								sejam capazes de causar danos anteriormente
								mencionados.</span
							>
						</li>
					</ul>
					<h3>
						<span style="color: rgb(68, 68, 68)"
							>Mais informações</span
						>
					</h3>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>Esperemos que esteja esclarecido e, como mencionado
							anteriormente, se houver algo que você não tem
							certeza se precisa ou não, geralmente é mais seguro
							deixar os cookies ativados, caso interaja com um dos
							recursos que você usa em nosso site.</span
						>
					</p>
					<p>
						<span style="color: rgb(68, 68, 68)"
							>Esta política é efetiva a partir de&nbsp;23 March
							2023 17:23</span
						>
					</p>
				</v-row>
			</v-card>
		</v-dialog>

		<v-dialog
			data-aos="fade-right"
			data-aos-duration="1000"
			fullscreen
			v-model="menuRibus"
			style="overflow: hidden !important; background-color: #000912f0"
		>
			<svg-icon
				data-aos="fade-down"
				data-aos-duration="2000"
				style="
					cursor: pointer;
					position: absolute;
					right: 10px;
					top: 10px;
				"
				@click="menuRibus = false"
				type="mdi"
				size="50"
				color="white"
				:path="path2"
			></svg-icon>
			<v-row style="background-color: #0009121c; padding: 60px 15px; overflow-x: hidden !important;">
				<v-col cols="12" md="7" class="d-flex justify-end flex-column">
					<a href="/">
						<img
							data-aos="zoom-in"
							data-aos-duration="2000"
							src="./assets/logoRibusXG.png"
							width="150"
						/>
					</a>
					<v-spacer></v-spacer>
					<h1 class="fontMenu"
						data-aos="fade-right"
						data-aos-duration="3000"
						style="
							font-family: CASaygon;
							font-weight: 800;
							line-height: 1;
							font-size: 4.3rem;
							color: #fff;
						"
					>
						A Ribus é do digital <br />
						ao concreto.
					</h1>
				</v-col>
				<v-divider
					class="border-opacity-50"
					color="warning"
					vertical
				></v-divider>
				<v-col cols="12" md="5">
					<v-list
						color="#fff"
						density="compact"
						bg-color="transparent"
					>
						<router-link to="about" @click="menuRibus = false">
							<v-list-item
								data-aos="fade-right"
								data-aos-duration="2000"
								class="menuHover"
								style="
									color: #fff;
									font-family: CASaygon;
									font-weight: 400;
									font-size: 1.3rem;
								"
							>
								Entenda o Projeto
							</v-list-item>
						</router-link>

						<!-- <a href="#secao1">
							<v-list-item
								data-aos="fade-right"
								data-aos-duration="2000"
								class="menuHover"
								style="
									color: #fff;
									font-family: CASaygon;
									font-weight: 400;
									font-size: 1.3rem;
								"
							>
								Ecossistema
							</v-list-item>
						</a> -->
						<a href="/blogs">
							<v-list-item
								data-aos="fade-right"
								data-aos-duration="2000"
								class="menuHover"
								style="
									color: #fff;
									font-family: CASaygon;
									font-weight: 400;
									font-size: 1.3rem;
								"
							>
								Blog
							</v-list-item>
						</a>

						<router-link to="midia" @click="menuRibus = false">
							<v-list-item
								data-aos="fade-right"
								data-aos-duration="2000"
								class="menuHover"
								style="
									color: #fff;
									font-family: CASaygon;
									font-weight: 400;
									font-size: 1.3rem;
								"
							>
								Ribus na mídia
							</v-list-item>
						</router-link>
					</v-list>
					<div class="mt-10">
						<v-spacer></v-spacer>
						<a
							href="https://app.ribus.com.br/login"
							target="_blank"
						>
							<v-btn class="btnBorder2">Seja um Tokenista</v-btn>
						</a>
					</div>
				</v-col>
			</v-row>
		</v-dialog>
	</v-app>
</template>

<style>
	@media (min-device-width: 360px) and (max-device-width: 730px) {

		.v-row{
			margin: 0px !important
	}

		.fontMenu{
			font-size: 2.3rem !important;
		}

		.justifyMobile {
			justify-content: end !important;
		}

		.padMobile {
			padding: 15px !important;
		}
	}

	a {
		text-decoration: none !important;
		color: inherit !important;
	}

	.effectHover:hover {
		color: #ff9c07;
		cursor: pointer;
	}

	.listStyle:hover {
		background-color: transparent !important;
		background: transparent !important;
	}

	.listStyle {
		padding: 0 !important;
		margin: 0 !important;
		font-weight: 300 !important;
		background-color: transparent !important;
		color: #fff !important;
		font-family: CASaygon !important;
	}

	.menuHover:hover {
		color: #ff9c07 !important;
		font-size: 1.5rem !important;
		cursor: pointer;
		transition-property: width !important;
		transition-duration: 2s !important;
		transition-timing-function: linear !important;
		transition-delay: 1s !important;
	}

	.colorFundo {
		background-color: transparent !important;
	}

	@font-face {
		font-family: "raleway";
		src: url("./assets/eumauro/Raleway-ExtraLight.ttf") format("truetype");
		font-display: swap;
		font-weight: 200;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "raleway";
		src: url("./assets/eumauro/Raleway-Light.ttf") format("truetype");
		font-display: swap;
		font-weight: 300;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "raleway";
		src: url("./assets/eumauro/Raleway-Regular.ttf") format("truetype");
		font-display: swap;
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "raleway";
		src: url("./assets/eumauro/Raleway-Medium.ttf") format("truetype");
		font-display: swap;
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "raleway";
		src: url("./assets/eumauro/Raleway-bold.ttf") format("truetype");
		font-display: swap;
		font-weight: 700;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "raleway";
		src: url("./assets/eumauro/Raleway-ExtraBold.ttf") format("truetype");
		font-display: swap;
		font-weight: 800;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "raleway";
		src: url("./assets/eumauro/Raleway-ExtraLight.ttf") format("truetype");
		font-display: swap;
		font-weight: 200;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "dosis";
		src: url("./assets/eumauro/Dosis-ExtraLight.ttf") format("truetype");
		font-display: swap;
		font-weight: 200;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "dosis";
		src: url("./assets/eumauro/Dosis-Light.ttf") format("truetype");
		font-display: swap;
		font-weight: 300;
		font-style: normal;
		font-stretch: normal;
	}

	@font-face {
		font-family: "dosis";
		src: url("./assets/eumauro/Dosis-Regular.ttf") format("truetype");
		font-display: swap;
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
	}

	::-webkit-scrollbar {
		width: 15px;
	}

	::-webkit-scrollbar-track {
		background-color: #e4e4e4;
		border-radius: 100px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 100px;
		border: 4px solid transparent;
		background-clip: content-box;
		background-color: #00294b;
	}

	.scroller {
		width: 300px;
		height: 100px;
		overflow-y: scroll;
		scrollbar-color: rgb(71, 108, 230) green;
	}

	.btnBorder {
		background-color: transparent !important;
		border: 2px solid #ff9c07 !important;
		color: #0e1c78 !important;
		border-radius: 50px !important;
	}

	.btnBorder2 {
		background-color: #ff9c07 !important;
		/* border: 2px solid #ff9c07 !important; */
		color: #ffffff !important;
		border-radius: 0px 50px 50px 0 !important;
	}

	.btnBorder2:hover {
		background-color: transparent !important;
		border: 2px solid #ff9c07 !important;
		color: #ffffff !important;
	}
</style>
