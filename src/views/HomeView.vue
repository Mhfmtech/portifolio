<script setup>
	import fundin from "../assets/fundin.mp4";
	import city5 from "../assets/city5.mp4";
	import city4 from "../assets/city4.mp4";
	import daniel from "../assets/daniel.jpg";
	import marcelo from "../assets/marcelo.jpg";
	import bruno from "../assets/bruno.jpg";
	import aielo from "../assets/aielo.jpg";
	import noticia1 from "../assets/noticia1.jpg";
	import noticia2 from "../assets/noticia2.jpg";
	import noticia3 from "../assets/noticia3.jpg";
	import noticia4 from "../assets/noticia4.jpg";
	import { ref, onMounted } from "vue";
	const name = ref(0);
	const imageUrl = ref(
		new URL(`../assets/frames/LOGO ANIMADO_00000.png`, import.meta.url).href
	);
	const lastScroll = ref(0);

	const verificaZero = (num) => {
		if (num.length === 1) {
			num = "00" + num;
		}
		if (num.length === 2) {
			num = "0" + num;
		}

		// console.log(num);
		return num;
	};

	onMounted(() => {
		window.addEventListener("scroll", () => {
			const el = document.getElementById("motion");
			const scrollTop = window.scrollY;
			const scrollBottom = scrollTop + window.innerHeight;
			const elTop = el.offsetTop;
			const elBottom = elTop + el.offsetHeight;
			// console.log(lastScroll.value)

			if (lastScroll.value < scrollTop && elTop < scrollBottom) {
				name.value = name.value == 239 ? 239 : name.value + 1;
				imageUrl.value = new URL(
					`../assets/frames/LOGO ANIMADO_00${verificaZero(
						name.value.toString()
					)}.png`,
					import.meta.url
				).href;
				// console.log(imageUrl.value);
			} else {
				name.value = name.value == 0 ? 0 : name.value - 1;
				imageUrl.value = new URL(
					`../assets/frames/LOGO ANIMADO_00${verificaZero(
						name.value.toString()
					)}.png`,
					import.meta.url
				).href;
			}

			lastScroll.value = scrollTop;
		});
	});
</script>

<script>
	import axios from "axios";
	import VScrollLock from "v-scroll-lock";
	import SvgIcon from "@jamescoyle/vue-icon";
	import { mdiDownloadCircleOutline } from "@mdi/js";
	import { mdiSendOutline } from "@mdi/js";
	import { mdiPlus } from "@mdi/js";
	import { mdiChartLineVariant } from "@mdi/js";
	import { mdiCheckAll } from "@mdi/js";
	import { mdiLinkedin } from "@mdi/js";
	import { mdiArrowRight } from "@mdi/js";
	import scrollEffect from "@/directives/scroll-effect";
	import scrollFrame from "@/directives/scroll-frame";
	// import scroll2Effect from "@/directives/scroll2-effect";
	export default {
		directives: {
			scrollEffect,
			scrollFrame,
			scrollLock: VScrollLock,
		},
		components: { SvgIcon },
		data() {
			return {
				positionElement: false,
				midia: [],
				cotacao: {},
				historico: [],
				frasesIndex: 0,
				frases: [
					"Participa do ecossistema imobiliário",
					"Contrata profissionais do mercado imobiliário",
					"Pode adquirir imóveis com Rib Token",
				],
				path: mdiDownloadCircleOutline,
				path2: mdiSendOutline,
				path3: mdiPlus,
				path4: mdiChartLineVariant,
				path5: mdiCheckAll,
				path6: mdiLinkedin,
				path7: mdiArrowRight,
				lista: [
					{ text: "Real-Time", icon: "mdi-clock" },
					{ text: "Audience", icon: "mdi-account" },
					{ text: "Conversions", icon: "mdi-flag" },
				],
				desserts: [
					{
						name: "867,06",
						calories: "3.612,7904",
						preco: "0,24",
					},
					{
						name: "2.099,17",
						calories: "5.356,9748",
						preco: "0,24",
					},
				],
			};
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

		methods: {
			async getHistorico() {
				const { data } = await axios.get(
					"https://api.flowbtc.com.br:8443/ap/GetL2Snapshot?OMSId=1&InstrumentId=26&Depth=2"
				);
				this.historico = data;
				// console.log(data);
			},

			async getCotacao() {
				const { data } = await axios.get(
					"https://api.flowbtc.com.br:8443/ap/GetLevel1?OMSId=1&InstrumentId=26"
				);
				this.cotacao = data;
				// console.log(data);
			},

			async getMidia() {
				const { data } = await axios.get(
					"https://blogs.abare.cloud/items/ribus_midia?fields=*.*&filter[status][_eq]=published&limit=4"
				);
				this.midia = data.data;
				// console.log(this.blogs);
			},

			scrollRotate() {
				this.$refs.image.style.transform =
					"rotate(" + window.scrollY / 0.9 + "deg)";
				this.$refs.image1.style.transform =
					"rotate(" + window.scrollY / 0.1 + "deg)";
				// this.$refs.image.style.transform =  `translate(${window.scrollY}px, ${window.scrollY}px)`;
			},

			// scrollRotate2() {
			// 	this.$refs.image2.style.transform =  `translate(${window.scrollY}px, ${window.scrollY}px)`;

			// },

			scrollSection() {
				document.querySelector(function () {
					document.querySelector(window).load(function () {
						// On load
						document.querySelector("main").css({
							height: document.querySelector(window).height(),
						});
						document.querySelector("main").css({
							"margin-top": document
								.querySelector(window)
								.height(),
						});
					});
					document.querySelector(window).resize(function () {
						// On resize
						document.querySelector("main").css({
							height: document.querySelector(window).height(),
						});
					});
				});

				document.querySelector(document).ready(function () {
					var s = document.querySelector("main");
					var pos = s.position();
					document.querySelector(window).scroll(function () {
						var windowpos =
							document.querySelector(window).scrollTop;
						if (
							windowpos > document.querySelector(window).height()
						) {
							s.classList.add("stick");
						} else {
							s.classList.remove("stick");
						}
					});
				});
			},
		},

		async created() {
			await this.getMidia();
			await this.getCotacao();
			await this.getHistorico();
		},

		mounted() {
			window.addEventListener("scroll", this.scrollRotate);

			window.scrollTo(0, 0);

			if (this.$vuetify.display.name !== "xs") {
				const scrollContent = this.$el.querySelector(".scroll-content");
				scrollContent.addEventListener("wheel", (event) => {
					event.preventDefault();
					scrollContent.scrollLeft += event.deltaY;
				});
			}
			setInterval(
				function () {
					this.frasesIndex++;
					if (this.frasesIndex == this.frases.length) {
						this.frasesIndex = 0;
					}
				}.bind(this),
				2000
			);
		},

		beforeRouteLeave(to, from, next) {
			clearInterval(this.interval);
			window.removeEventListener("scroll", this.scrollRotate);
			next();
		},
	};
</script>

<template>
	<v-container id="scrolling-content" fluid style="padding: 0">
		<video-background
			class="bgcVideoColor"
			preload="auto"
			:loop="true"
			:autoplay="true"
			:src="city5"
			style="/* max-height: 35rem; */ height: 100vh"
		>
			<v-row
				class="padMobile"
				style="padding: 100px 60px; height: 100vh; z-index: 9"
			>
				<v-col
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					cols="12"
					md="8"
					style="height: 100%"
					class="d-flex justify-center flex-column mobileStyles"
				>
					<p
						style="
							z-index: 9;
							font-family: CASaygon;
							font-weight: 400;
							color: #fff;
							font-size: 25px;
							font-size: 1.5rem;
						"
					>
						A Ribus é do digital ao concreto!
					</p>
					<h1
						style="
							z-index: 9;
							font-family: CASaygon;
							font-weight: 800;
							line-height: 1;
							color: #fff;
							font-size: 2rem;
							text-align: left;
						"
					>
						Ecossistema com tecnologia blockchain voltado para o
						mercado imobiliário.
					</h1>
				</v-col>

				<v-col
					cols="12"
					md="6"
					class="d-flex justify-center align-center flex-column"
				>
				</v-col>
			</v-row>
		</video-background>

		<v-row class="alturaMobile">
			<v-col
				class="d-flex justify-center align-center flex-column"
				cols="12"
				md="6"
				offset-md="6"
			>
				<div
					class="d-flex cardMobileStyles"
					style="position: absolute; top: 19rem"
				>
					<v-card
						class="efeito-vidro cardSizeMobile"
						data-aos="fade-up"
						data-aos-duration="3000"
						style="
							border-radius: 18px;
							min-height: 355px;
							max-height: 355px;
						"
					>
						<img
							ref="image1"
							src="../assets/logoAnimado.gif"
							width="260"
						/>
					</v-card>
					<a
						href="https://equipe.gitbook.io/ribus-whitepaper/"
						target="_blank"
					>
						<v-btn
							data-aos="fade-up"
							data-aos-duration="3000"
							class="tip1"
						>
							<svg-icon
								type="mdi"
								size="20"
								:path="path"
							></svg-icon>
							WHITE PAPER
						</v-btn>
					</a>
					<a href="https://t.me/comunidaderibus" target="_blank">
						<v-btn
							data-aos="fade-up"
							data-aos-duration="3000"
							class="tip2"
						>
							<svg-icon
								type="mdi"
								size="20"
								:path="path2"
							></svg-icon>
							COMUNIDADE
						</v-btn>
					</a>

					<a href="https://app.ribus.com.br/login" target="_blank">
						<v-btn
							data-aos="fade-up"
							data-aos-duration="2000"
							class="tip3"
						>
							<svg-icon
								type="mdi"
								size="20"
								:path="path3"
							></svg-icon>
							SEJA TOKENISTA
						</v-btn>
					</a>

					<router-link to="about">
						<v-btn
							data-aos="fade-up"
							data-aos-duration="2000"
							class="tip4"
						>
							<svg-icon
								type="mdi"
								size="20"
								:path="path"
							></svg-icon>
							ENTENDA O PROJETO
						</v-btn>
					</router-link>

					<div
						data-aos="fade-up"
						data-aos-duration="2000"
						class="tip5"
					>
						<v-card style="border-radius: 18px">
							<div class="d-flex" style="">
								<div
									class="circle flex-column"
									style="margin: 10px"
								>
									<svg-icon
										type="mdi"
										size="40"
										color="green"
										:path="path4"
									></svg-icon>
									<!-- <span class="variacao">+ 18,03%</span> -->
								</div>
								<div>
									<small
										style="
											font-family: CASaygon;
											padding: 0px !important;
											font-size: 10px !important;
										"
										>Última negociação</small
									>
									<p
										style="
											font-family: CASaygon;
											font-size: 28px;
											padding: 0px !important;
											line-height: 1;
										"
									>
										R$
										{{
											parseFloat(
												cotacao.LastTradedPx
											).toFixed(2)
										}}
									</p>
								</div>
							</div>
							<div>
								<v-table density="compact">
									<thead>
										<tr>
											<th
												style="
													font-family: CASaygon;
													font-size: 10px;
												"
												class="text-left"
											>
												Total
											</th>
											<th
												style="
													font-family: CASaygon;
													font-size: 10px;
												"
												class="text-left"
											>
												Qtde
											</th>
											<th
												style="
													font-family: CASaygon;
													font-size: 10px;
												"
												class="text-left"
											>
												Preço
											</th>
										</tr>
									</thead>
									<tbody>
										<tr
											v-for="item in historico.slice(
												0,
												2
											)"
											:key="item.name"
										>
											<td
												style="
													font-family: CASaygon;
													font-size: 10px;
												"
											>
												{{ item[2] }}
											</td>
											<td
												style="
													font-family: CASaygon;
													font-size: 10px;
												"
											>
												{{ item[9] }}
											</td>
											<td
												style="
													font-family: CASaygon;
													font-size: 10px;
												"
											>
												{{ item[7] }}
											</td>
										</tr>
									</tbody>
								</v-table>
							</div>
						</v-card>
					</div>
				</div>
			</v-col>
		</v-row>

		<v-row class="padMobile" style="height: 400px; padding: 0 60px">
			<v-col
				data-aos="fade-up"
				data-aos-duration="3000"
				cols="12"
				md="6"
				sm="12"
				class="d-flex align-center"
			>
				<p
					style="
						font-family: CASaygon;
						font-size: 20px;
						line-height: 1.2;
					"
				>
					A <b style="color: #eb9c00">Ribus</b> é uma empresa que
					oferece soluções em blockchain para o mercado imobiliário.
					Através da web 3.0, garantimos segurança e confiabilidade
					para seus rendimentos. Unindo o que há de
					<b style="color: #eb9c00"> mais seguro no digital </b> com
					toda a solidez do mercado imobiliário.
				</p>
			</v-col>

			<v-col
				data-aos="fade-up"
				data-aos-duration="3000"
				cols="12"
				md="6"
				sm="12"
				class="d-flex justify-end flex-column"
			>
				<p
					style="
						font-family: CASaygon;
						font-size: 20px;
						color: #01124a;
						font-weight: 800;
						margin-bottom: 0px;
					"
					class="mt-5"
				>
					Com o nosso token você
				</p>
				<!-- ******* OPÇOES ******* -->
				<p
					style="
						font-family: CASaygon;
						font-size: 28px;
						line-height: 1;
						color: #ff7e00;
						font-weight: 500;
					"
					class=""
				>
					{{ frases[frasesIndex] }}
				</p>
			</v-col>
		</v-row>

		<v-row style="padding: 0 60px" class="mt-10 padMobile">
			<v-col cols="12" md="12">
				<h1
					id="secao1"
					data-aos="fade-up"
					data-aos-duration="1000"
					style="
						font-family: CASaygon;
						font-weight: 800;
						line-height: 1;
						color: #01124a;
					"
				>
					Empresas do ecossistema:
				</h1>
			</v-col>

			<v-col cols="12" md="10" offset-md="1">
				<v-row>
					<v-col cols="6" md="3">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									src="../assets/logoAzul.png"
									width="200"
									alt=""
								/>
							</div>

							<div class="d-flex justify-center">
								<a
									href="https://houseus.com.br/"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>

					<v-col cols="6" md="3">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									class="imgSizeMobile"
									src="../assets/beneficius.png"
									width="200"
									alt=""
								/>
							</div>

							<div class="d-flex justify-center">
								<a
									href="https://ribus.com.br/beneficius"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>

					<v-col cols="6" md="3">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									class="imgSizeMobile"
									src="../assets/permutus.png"
									width="200"
									alt=""
								/>
							</div>

							<div class="d-flex justify-center">
								<a
									href="https://ribus.com.br/permutusimoveis"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>

					<v-col cols="6" md="3">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									class="imgSizeMobile"
									src="../assets/recibus.png"
									width="200"
									alt=""
								/>
							</div>

							<div class="d-flex justify-center">
								<a
									href="https://ribus.com.br/recibusEmbreve"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>

					<v-col cols="6" md="3" class="d-flex justify-center">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									class="imgSizeMobile"
									src="../assets/consignatus.png"
									width="200"
									alt=""
								/>
							</div>

							<div class="d-flex justify-center">
								<a
									href="https://ribus.com.br/consignatus"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>

					<v-col cols="6" md="3" class="d-flex justify-center">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									class="imgSizeMobile"
									src="../assets/braemp.png"
									width="200"
									alt=""
								/>
							</div>

							<div class="d-flex justify-center">
								<a
									href="https://braemp.com.br/"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>

					<v-col cols="6" md="3">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column cardMinH"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									src="../assets/retrofitus.png"
									width="200"
									alt=""
									class="sizeMob"
								/>
							</div>
							<div class="d-flex justify-center">
								<a
									href="https://ribus.com.br/retrofitus"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>

					<v-col cols="6" md="3" class="d-flex justify-center">
						<v-card
							data-aos="fade-up"
							data-aos-duration="3000"
							class="d-flex justify-end flex-column cardMinH"
							style="
								border-radius: 15px;
								box-shadow: none;
								padding: 15px;
								max-width: 290px;
								max-height: 235px;
								min-height: 235px;
							"
						>
							<div class="d-flex justify-center">
								<img
									src="../assets/agrega.png"
									width="200"
									class="sizeMob"
									alt=""
								/>
							</div>

							<div class="d-flex justify-center">
								<a
									href="https://agregabr.com.br/"
									target="_blank"
								>
									<v-btn
										density="compact"
										class="btnConhecer mt-5"
										style=""
										>Conhecer</v-btn
									>
								</a>
							</div>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row class="padMobile" style="padding: 0 60px">
			<v-col cols="12" md="12">
				<h1 class="borderFont" style="font-size: 48px">
					<span style="color: #01124a">T</span
					><span style="color: #112d6c">o</span
					><span style="color: #22498f">k</span
					><span style="color: #3367b2">e</span
					><span style="color: #4a85d4">n</span
					><span style="color: #66a1f1">o</span
					><span style="color: #89b8f7">m</span
					><span style="color: #b5d5fb">i</span
					><span style="color: #d9e9fd">c</span
					><span style="color: #f2f8fe">s</span>
				</h1>
			</v-col>

			<v-col
				class="bgStatic d-flex padLMobile"
				style="padding-left: 4rem"
				cols="6"
				md="6"
			>
				<div class="d-flex flex-column">
					<v-divider
						oll-effect="'scrov-scrll2-effect'"
						style="height: 200px; left: 1rem"
						class="border-opacity-75"
						color="warning"
						vertical
					></v-divider>
					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">135MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Venda privada
						</p>
					</div>

					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">48MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Token exchanges
						</p>
					</div>

					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">45MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Conselho consultivo
						</p>
					</div>

					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">21MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Oportunidades Ribus
						</p>
					</div>

					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">12MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Equipe
						</p>
					</div>

					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">15MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Programa de incentivo
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">24MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Marketing e parceria
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						class="boxTokenomicks"
					>
						<h1 class="fontTokenomics">300MM</h1>
						<p
							style="
								line-height: 1;
								font-family: CASaygon;
								font-size: 20px;
								text-align: center;
								color: #01124a;
							"
						>
							Fornecimento total
						</p>
					</div>
				</div>
			</v-col>

			<v-col cols="6" md="6" class="d-flex justify-center bgcCoin">
				<img
					ref="image"
					class="fixedBox sizeImgMob"
					v-scroll-effect="'scroll-effect'"
					id="motion"
					:src="imageUrl"
					width="350"
					height="350"
				/>

				<!-- <GifPlayer gifUrl="../assets/logoAnimado.gif" /> -->
			</v-col>
		</v-row>

		<v-row class="videoSec mt-10">
			<v-col
				cols="12"
				md="8"
				offset-md="2"
				offset-sm="1"
				sm="10"
				class="d-flex justify-center"
			>
				<v-card
					class="cardStyleMob"
					style="
						width: 68rem;
						background-color: transparent;
						border: none;
						box-shadow: none;
						border-radius: 20px;
						box-shadow: 0px 3px 7px 4px rgba(0, 0, 0, 0.2);
					"
				>
					<video-background
						class="bgcVideoColor"
						preload="auto"
						:loop="true"
						:autoplay="true"
						:src="fundin"
						style="
							max-height: 35rem;
							height: 35rem;
							border-radius: 20px;
						"
					>
						<div class="padLMobile" style="padding: 60px">
							<h1
								style="
									font-family: CASaygon;
									font-size: 2rem;
									font-weight: bold;
									color: #01124a;
									text-align: center;
									line-height: 1.2;
								"
							>
								Parcerias e certificações
							</h1>

							<v-row
								justify="center"
								align="center"
								class="mt-10"
							>
								<v-col
									cols="12"
									md="12"
									class="d-flex justify-center"
								>
									<img
										data-aos="fade-up"
										data-aos-duration="2000"
										src="../assets/flow.png"
										width="200"
									/>
								</v-col>
								<v-col
									cols="12"
									md="12"
									class="d-flex justify-center"
								>
									<img
										data-aos="fade-up"
										data-aos-duration="2000"
										src="../assets/coins.png"
										width="200"
									/>
								</v-col>
								<v-col
									cols="12"
									md="12"
									class="d-flex justify-center"
								>
									<img
										data-aos="fade-up"
										data-aos-duration="2000"
										src="../assets/solid.png"
										width="200"
									/>
								</v-col>
							</v-row>
						</div>
					</video-background>
				</v-card>
			</v-col>

			<v-col cols="12" md="12" style="">
				<div
					v-if="intBreakPoint >= 2"
					class="scrollable scroll-content"
					v-scroll-lock
					style="
						scrollbar-color: transparent !important;
						display: -webkit-box;
						overflow-x: hidden;
						overflow-y: hidden;
					"
				>
					<v-card
						class="d-flex justify-center flex-column"
						style="
							background-color: transparent;
							width: 20rem;
							padding: 10px;
						"
					>
						<h2
							style="
								font-family: CASaygon;
								font-weight: 800;
								line-height: 1;
								color: #fff;
								text-align: left;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Daniel Carius
						</h2>
						<p
							style="
								margin-top: 5px;
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Founder e CVO RIBUS
						</p>
						<p
							class="mt-5"
							style="
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1.3;
								color: #fff;
								font-size: 0.9rem;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Formado em Direito com Especialização em Mediação e
							Conciliação pela FGV - Fundação Getulio Vargas.
							Apaixonado por tecnologia, em 2018 ingressou em uma
							empresa como Analista e gerente de projetos,
							supervisionou uma área de pesquisas em blockchain e
							criptoativos, em 2020 fundou uma Consultoria para
							Empresas de Tokenização e Gestão de Ativos Digitais,
							onde desenvolveu 3 grandes projetos de Cripto.
						</p>

						<a
							href="https://www.linkedin.com/in/daniel-carius-933618186/"
							target="_blank"
						>
							<svg-icon
								data-aos="fade-up"
								data-aos-duration="2000"
								class="mt-5"
								style="color: #fff"
								type="mdi"
								:path="path6"
							></svg-icon>
						</a>
					</v-card>

					<v-card class="" style="width: 20rem">
						<v-img style="height: 100%" :src="daniel" cover></v-img>
					</v-card>

					<v-card
						class="d-flex justify-center flex-column"
						style="
							background-color: transparent;
							width: 20rem;
							padding: 10px;
						"
					>
						<h2
							style="
								font-family: CASaygon;
								font-weight: 800;
								line-height: 1;
								color: #fff;
								text-align: left;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Marcelo Magalhães
						</h2>
						<p
							style="
								margin-top: 5px;
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							CEO Ribus e CEO Agrega
						</p>
						<p
							class="mt-5"
							style="
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1.3;
								font-size: 0.9rem;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Bacharelado, Pós e MBA voltados para a área de
							finanças e negócios, especializado em estruturações
							e desenvolvimentos de incorporações imobiliárias em
							terrenos urbanos produtivos. Anos de experiência em
							grandes incorporadoras e construtoras do país, com
							cerca de 8 mil unidades imobiliárias desenvolvidas e
							entregues.
						</p>

						<a
							href="https://www.linkedin.com/in/marcelo-bolelli-magalh%C3%A3es-54605443/"
							target="_blank"
						>
							<svg-icon
								data-aos="fade-up"
								data-aos-duration="2000"
								class="mt-5"
								style="color: #fff"
								type="mdi"
								:path="path6"
							></svg-icon>
						</a>
					</v-card>

					<v-card class="" style="width: 20rem">
						<v-img
							style="height: 100%"
							:src="marcelo"
							cover
						></v-img>
					</v-card>

					<v-card
						class="d-flex justify-center flex-column"
						style="
							background-color: transparent;
							width: 20rem;
							padding: 10px;
						"
					>
						<h2
							style="
								font-family: CASaygon;
								font-weight: 800;
								line-height: 1;
								text-align: left;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Bruno Faria
						</h2>
						<p
							style="
								margin-top: 5px;
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							COO Ribus e CEO & Founder Abaré
						</p>
						<p
							class="mt-5"
							style="
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1.3;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Formado em contabilidade pela PUC-SP com
							especialização no mercado financeiro pela Saint Paul
							Escola de Negócios - SP. Atuou na Ernst & Young (EY)
							de 2009 a 2016 como consultor e auditor de
							instituições financeiras, logo após iniciou como
							assessor de investimentos em um escritório vinculado
							ao Banco Genial, no qual ficou 1 ano, em 2017 foi
							para um escritório de finanças corporativas e
							investimos em sua primeira startup.
						</p>

						<a
							href="https://www.linkedin.com/in/bruno-faria-74120b24/"
							target="_blank"
						>
							<svg-icon
								data-aos="fade-up"
								data-aos-duration="2000"
								class="mt-5"
								style="color: #fff"
								type="mdi"
								:path="path6"
							></svg-icon>
						</a>
					</v-card>

					<v-card class="" style="width: 20rem">
						<v-img style="height: 100%" :src="bruno" cover></v-img>
					</v-card>

					<v-card
						class="d-flex justify-center flex-column"
						style="
							background-color: transparent;
							width: 20rem;
							padding: 10px;
						"
					>
						<h2
							style="
								font-family: CASaygon;
								font-weight: 800;
								line-height: 1;
								color: #fff;
								text-align: left;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Rodrigo Aiello Praes
						</h2>
						<p
							style="
								margin-top: 5px;
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							CTO Ribus e CTO Agrega
						</p>
						<p
							class="mt-5"
							style="
								font-family: CASaygon;
								font-weight: 300;
								line-height: 1.3;
								color: #fff;
							"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							Formado em Sistemas de Informação pela PUC-Rio,
							Rodrigo Aiello possui mais de 15 anos de experiência
							em arquitetura e desenvolvimento de sistemas,
							durante todos esses anos, atuou como consultor em
							engenharia de software, em projetos para o
							Ministério Público, Anbima e Banco Central.
						</p>

						<a
							href="https://www.linkedin.com/in/rodrigo-aiello-a9777b31/"
							target="_blank"
						>
							<svg-icon
								data-aos="fade-up"
								data-aos-duration="2000"
								class="mt-5"
								style="color: #fff"
								type="mdi"
								:path="path6"
							></svg-icon>
						</a>
					</v-card>

					<v-card class="" style="width: 20rem">
						<v-img style="height: 100%" :src="aielo" cover></v-img>
					</v-card>
				</div>

				<div v-if="intBreakPoint < 2">
					<v-window show-arrows>
						<v-window-item>
							<div
								style=""
								class="d-flex flex-column justify-center align-center"
							>
								<v-card
									class="d-flex justify-center flex-column"
									style="
										background-color: transparent;
										padding: 20px 20px;
									"
								>
									<h2
										style="
											font-family: CASaygon;
											font-weight: 800;
											line-height: 1;
											color: #fff;
											text-align: left;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Daniel Carius
									</h2>
									<p
										style="
											margin-top: 5px;
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Founder e CVO RIBUS
									</p>
									<p
										class="mt-5"
										style="
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1.3;
											color: #fff;
											font-size: 0.9rem;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Formado em Direito com Especialização em
										Mediação e Conciliação pela FGV -
										Fundação Getulio Vargas. Apaixonado por
										tecnologia, em 2018 ingressou em uma
										empresa como Analista e gerente de
										projetos, supervisionou uma área de
										pesquisas em blockchain e criptoativos,
										em 2020 fundou uma Consultoria para
										Empresas de Tokenização e Gestão de
										Ativos Digitais, onde desenvolveu 3
										grandes projetos de Cripto.
									</p>

									<a
										href="https://www.linkedin.com/in/daniel-carius-933618186/"
										target="_blank"
									>
										<svg-icon
											data-aos="fade-up"
											data-aos-duration="2000"
											class="mt-5"
											style="color: #fff"
											type="mdi"
											:path="path6"
										></svg-icon>
									</a>
								</v-card>

								<v-card class="" style="width: 100%">
									<v-img
										style="height: 100%"
										:src="daniel"
										cover
									></v-img>
								</v-card>
							</div>
						</v-window-item>

						<v-window-item>
							<div
								class="d-flex flex-column justify-center align-center"
							>
								<v-card
									class="d-flex justify-center flex-column"
									style="
										background-color: transparent;
										padding: 20px 20px;
									"
								>
									<h2
										style="
											font-family: CASaygon;
											font-weight: 800;
											line-height: 1;
											color: #fff;
											text-align: left;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Marcelo Magalhães
									</h2>
									<p
										style="
											margin-top: 5px;
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										CEO Ribus e CEO Agrega
									</p>
									<p
										class="mt-5"
										style="
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1.3;
											font-size: 0.9rem;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Bacharelado, Pós e MBA voltados para a
										área de finanças e negócios,
										especializado em estruturações e
										desenvolvimentos de incorporações
										imobiliárias em terrenos urbanos
										produtivos. Anos de experiência em
										grandes incorporadoras e construtoras do
										país, com cerca de 8 mil unidades
										imobiliárias desenvolvidas e entregues.
									</p>

									<a
										href="https://www.linkedin.com/in/marcelo-bolelli-magalh%C3%A3es-54605443/"
										target="_blank"
									>
										<svg-icon
											data-aos="fade-up"
											data-aos-duration="2000"
											class="mt-5"
											style="color: #fff"
											type="mdi"
											:path="path6"
										></svg-icon>
									</a>
								</v-card>

								<v-card class="" style="width: 100%">
									<v-img
										style="height: 100%"
										:src="marcelo"
										cover
									></v-img>
								</v-card>
							</div>
						</v-window-item>

						<v-window-item>
							<div
								class="d-flex flex-column justify-center align-center"
							>
								<v-card
									class="d-flex justify-center flex-column"
									style="
										background-color: transparent;
										padding: 10px;
									"
								>
									<h2
										style="
											font-family: CASaygon;
											font-weight: 800;
											line-height: 1;
											text-align: left;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Bruno Faria
									</h2>
									<p
										style="
											margin-top: 5px;
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										COO Ribus e CEO & Founder Abaré
									</p>
									<p
										class="mt-5"
										style="
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1.3;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Formado em contabilidade pela PUC-SP com
										especialização no mercado financeiro
										pela Saint Paul Escola de Negócios - SP.
										Atuou na Ernst & Young (EY) de 2009 a
										2016 como consultor e auditor de
										instituições financeiras, logo após
										iniciou como assessor de investimentos
										em um escritório vinculado ao Banco
										Genial, no qual ficou 1 ano, em 2017 foi
										para um escritório de finanças
										corporativas e investimos em sua
										primeira startup.
									</p>

									<a
										href="https://www.linkedin.com/in/bruno-faria-74120b24/"
										target="_blank"
									>
										<svg-icon
											data-aos="fade-up"
											data-aos-duration="2000"
											class="mt-5"
											style="color: #fff"
											type="mdi"
											:path="path6"
										></svg-icon>
									</a>
								</v-card>

								<v-card class="" style="width: 100%">
									<v-img
										style="height: 100%"
										:src="bruno"
										cover
									></v-img>
								</v-card>
							</div>
						</v-window-item>

						<v-window-item>
							<div
								class="d-flex flex-column justify-center align-center"
							>
								<v-card
									class="d-flex justify-center flex-column"
									style="
										background-color: transparent;
										padding: 10px;
									"
								>
									<h2
										style="
											font-family: CASaygon;
											font-weight: 800;
											line-height: 1;
											color: #fff;
											text-align: left;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Rodrigo Aiello Praes
									</h2>
									<p
										style="
											margin-top: 5px;
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										CTO Ribus e CTO Agrega
									</p>
									<p
										class="mt-5"
										style="
											font-family: CASaygon;
											font-weight: 300;
											line-height: 1.3;
											color: #fff;
										"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										Formado em Sistemas de Informação pela
										PUC-Rio, Rodrigo Aiello possui mais de
										15 anos de experiência em arquitetura e
										desenvolvimento de sistemas, durante
										todos esses anos, atuou como consultor
										em engenharia de software, em projetos
										para o Ministério Público, Anbima e
										Banco Central.
									</p>

									<a
										href="https://www.linkedin.com/in/rodrigo-aiello-a9777b31/"
										target="_blank"
									>
										<svg-icon
											data-aos="fade-up"
											data-aos-duration="2000"
											class="mt-5"
											style="color: #fff"
											type="mdi"
											:path="path6"
										></svg-icon>
									</a>
								</v-card>

								<v-card class="" style="width: 100%">
									<v-img
										style="height: 100%"
										:src="aielo"
										cover
									></v-img>
								</v-card>
							</div>
						</v-window-item>
					</v-window>
				</div>
			</v-col>
		</v-row>

		<v-row class="padMobile" style="padding: 60px 60px">
			<v-col cols="12" md="12">
				<h1
					data-aos="fade-up"
					data-aos-duration="1000"
					style="
						font-family: CASaygon;
						font-weight: 800;
						line-height: 1;
						color: #01124a;
					"
				>
					A Ribus conta com grandes parceiros <br />
					no mercado imobiliário.
				</h1>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/crivo.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/ff.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/innover.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/nico.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/novi.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/octo.png"
					width="150"
					alt=""
				/>
			</v-col>

			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/priscila.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/teron.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="4" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/urbare.png"
					width="150"
					alt=""
				/>
			</v-col>
			<v-col cols="6" md="12" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/parceiros/vision.png"
					width="200"
					alt=""
				/>
			</v-col>
		</v-row>

		<v-row class="padMobile" style="padding: 30px 60px">
			<v-col cols="12" md="12" class="d-flex align-center flex-column">
				<img
					data-aos="fade-up"
					data-aos-duration="2000"
					src="../assets/cvm.png"
					width="200"
				/>
				<p
					class="mt-5"
					data-aos="fade-up"
					data-aos-duration="2000"
					style="
						font-family: CASaygon;
						font-size: 1rem;
						color: #01124a;
						text-align: center;
						margin: 0 25px;
					"
				>
					Em novembro de 2022, a Ribus recebeu um ofício da Comissão
					de Valores Mobiliários (CVM) eximindo o registro da oferta.
					De fato, a autarquia não viu características no ativo que
					atraíssem a competência da CVM para a oferta, confirmando
					que o Token Ribus não é um valor mobiliário.
				</p>
			</v-col>
		</v-row>

		<v-row class="colorRow">
			<v-col cols="12" md="12">
				<h1
					id="secao1"
					data-aos="fade-up"
					data-aos-duration="1000"
					style="
						font-family: CASaygon;
						font-weight: 800;
						line-height: 1;
						color: #fff;
					"
				>
					Ribus na mídia
				</h1>
			</v-col>

			<template v-for="noticia in midia" :key="noticia.titulo">
				<v-col
					data-aos="fade-up"
					data-aos-duration="1000"
					cols="12"
					md="3"
				>
					<v-card style="padding: 10px; border-radius: 20px">
						<div style="border-radius: 20px">
							<div
								style="
									box-shadow: inset 0px 0px 14px 0px
										rgba(0, 0, 0, 0.75);
									border-radius: 20px;
								"
							>
								<v-img
									contain
									:src="`https://blogs.abare.cloud/assets/${noticia.imagem.filename_disk}`"
									style="
										border-radius: 15px;
										box-shadow: inset 0px 0px 14px 0px
											rgba(0, 0, 0, 0.75);
									"
								></v-img>
							</div>
							<h1
								class="mt-5"
								data-aos="fade-up"
								data-aos-duration="1000"
								style="
									font-family: CASaygon;
									font-weight: 800;
									line-height: 1;
									color: #01124a;
									font-size: 1.5rem;
								"
							>
								{{ noticia.titulo }}
							</h1>
						</div>
					</v-card>
				</v-col>
			</template>

			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				class="mt-10 d-flex align-center justify-end"
				style="width: 100%"
			>
				<RouterLink to="midia">
					<p
						class="hoverText"
						style="
							font-family: CASaygon;
							font-weight: 600;
							line-height: 1;
							color: #fff;
						"
					>
						Ver todas as matérias
					</p>
				</RouterLink>
				<svg-icon
					class="hoverText"
					color="white"
					type="mdi"
					size="20"
					:path="path7"
				></svg-icon>
			</div>
		</v-row>

		<!-- <v-row style="padding: 60px;" class="padMobile">
			<v-col cols="12" md="6" >
				<h1 style=" font-family: CASaygon; font-weight: 600; line-height: 1; color: #01124A; text-align: left;">
					Inscreva-se para nossa newsletter semanal
				</h1>
				<p class="mt-5" style=" font-family: CASaygon; font-weight: 400; color: #01124A; text-align: left;" >Com notícias sobre economia, mercado critpo, imobiliário e análises dos especialistas da Ribus!</p>
			</v-col>
			<v-col cols="12" md="6">
				<v-form>
					<v-text-field v-model="contato.name" label="Nome" variant="outlined"></v-text-field>
					<v-text-field v-model="contato.email" label="E-mail" variant="outlined"></v-text-field>
					<v-text-field v-model="contato.telefone" label="Telefone" variant="outlined"></v-text-field>
				</v-form>
			</v-col>
		</v-row> -->
	</v-container>
</template>

<style scoped>
	@media (min-device-width: 740px) and (max-device-width: 1050px) {
		.cardMobileStyles {
			top: 40rem !important;
		}

		.sizeImgMob {
			width: 250px !important;
			height: 250px !important;
		}

		.videoSec {
			background-color: #0d1b2b !important;
		}
	}

	@media (min-device-width: 360px) and (max-device-width: 730px) {
		.v-row {
			margin: 0px !important;
		}
		.sizeMob {
			width: 100px !important;
		}
		.videoSec {
			background-color: #0d1b2b !important;
		}

		.cardStyleMob {
			width: 21rem !important;
		}

		.sizeImgMob {
			width: 100px !important;
			height: 100px !important;
		}

		.padLMobile {
			padding-left: 0 !important ;
		}

		.imgSizeMobile {
			width: 150px !important;
		}
		.tip3 {
			background-color: #fc7a10;
			border-radius: 50px;
			border: none;
			font-family: CASaygon;
			z-index: 6;
			color: #fff;
			left: 7rem !important;
			right: initial !important;
			position: absolute;
			font-weight: 600;
			top: 22rem !important;
		}

		.cardSizeMobile {
			min-height: 480px !important;
			max-height: 480px !important;
		}
		.tip4 {
			background-color: #fc7a10;
			border-radius: 50px;
			color: #fff;
			border: none;
			font-family: CASaygon;
			z-index: 6;
			right: -28px !important;
			position: absolute;
			font-weight: 600;
			top: 15rem !important;
		}
		.tip5 {
			background-color: #fff;
			border-radius: 50px;
			border: none;
			font-family: CASaygon;
			z-index: 6;
			left: initial !important;
			right: -2rem !important;
			position: absolute;
			font-weight: 600;
			bottom: -6rem !important;
		}

		.alturaMobile {
			height: 350px;
		}

		.tip2 {
			background-color: #2fa3d9;
			border-radius: 50px;
			border: none;
			font-family: CASaygon;
			color: #fff;
			z-index: 6;
			left: -29px !important;
			position: absolute;
			font-weight: 600;
			top: 19rem !important;
		}

		.tip1 {
			background-color: #fc7a10;
			border-radius: 50px;
			border: none;
			font-family: CASaygon;
			color: #fff;
			z-index: 6;
			left: -49px !important;
			position: absolute;
			font-weight: 600;
			top: 12rem !important;
		}

		.cardMobileStyles {
			top: 27rem !important;
		}
		.mobileStyles {
			height: 100%;
			justify-content: start !important;
			padding-top: 11rem !important;
		}

		.padMobile {
			padding: 10px !important;
		}
	}

	.efeito-vidro {
		background: rgb(255 255 255 / 16%);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(1.5px);
		-webkit-backdrop-filter: blur(13.5px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.hoverText:hover {
		color: #01124a !important;
		cursor: pointer;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	h1,
	h2 {
		color: #ccc;
		display: block;
		text-align: center;
	}

	.div1 {
		background-color: blue;
		z-index: 1;
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0px;
		margin-top: 0;
	}

	.div2 {
		height: 100%;
		background-color: red;
		position: relative;
		z-index: 2;
		margin-top: 100vh;
	}

	.stick {
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0px;
		margin-top: 0;
	}

	.colorRow {
		background: linear-gradient(
			180deg,
			rgba(254, 167, 41, 1) 0%,
			rgba(254, 117, 50, 1) 100%
		);

		padding: 60px;

		border-radius: 60px 60px 0px 0;
	}
	.videoSec {
		background: linear-gradient(
			180deg,
			rgba(13, 27, 43, 0) 50%,
			rgba(13, 27, 43, 1) 50%
		);
		padding: 0px !important;
	}
	.fontTokenomics {
		font-family: CASaygon;
		font-size: 3rem;
		color: #01124a;
		line-height: 1;
		font-weight: bold;
	}
	.borderFont {
		-webkit-text-stroke-width: 1px; /* largura da borda */
		-webkit-text-stroke-color: #b0b0b0; /* cor da borda */
	}
	.bgcVideoColor {
		background-color: #000 !important;
	}
	.bgStatic {
		/* background-image: url("../assets/bgc3.jpg"); */
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		/* height: 100vh;: */
		background-position: center;
	}

	.bgcCoin {
		/* background-image: url("../assets/FUNDO.gif"); */
		background-repeat: repeat;
		/* background-attachment: fixed; */
		background-size: contain;
		/* opacity: 2; */
		/* height: 100vh;: */
		background-position: center;
	}
	.fixedBox {
		/* position: fixed !important; */
		top: 9rem !important;
		opacity: 0;
	}

	.scroll-frame {
		opacity: 100;
		position: sticky;
		/* top: 50px; */
	}

	.scroll2-effect {
		opacity: 100 !important;
		position: sticky;
		top: 9rem;
	}
	.scroll-effect {
		opacity: 100;
		position: sticky;
		/* top: 50px; */
	}
	.positionElement {
		position: fixed;
	}
	.boxTokenomicks {
		margin: 70px 0;
	}

	.btnConhecer {
		border: 2px solid #eb9c00 !important;
		text-transform: capitalize;
		font-family: CASaygon;
		box-shadow: none;
		font-weight: 700;
		font-size: 15px;
		border-radius: 50px;
		letter-spacing: normal;
	}
	.variacao {
		position: absolute;
		left: 0.5rem;
		top: 3rem;
		font-family: CASaygon;
		font-size: 10px;
		font-weight: 800;
	}
	.circle {
		background-color: #eb9c00;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.tip1 {
		background-color: #fc7a10;
		border-radius: 50px;
		border: none;
		font-family: CASaygon;
		color: #fff;
		z-index: 6;
		left: -120px;
		position: absolute;
		font-weight: 600;
		top: 50px;
	}

	.tip2 {
		background-color: #2fa3d9;
		border-radius: 50px;
		border: none;
		font-family: CASaygon;
		z-index: 6;
		color: #fff !important;
		left: -120px;
		position: absolute;
		font-weight: 600;
		top: 160px;
	}

	.tip3 {
		background-color: #fc7a10;
		border-radius: 50px;
		border: none;
		font-family: CASaygon;
		z-index: 6;
		color: #fff;
		right: -120px;
		position: absolute;
		font-weight: 600;
		top: 15rem;
	}

	.tip4 {
		background-color: #fc7a10;
		border-radius: 50px;
		color: #fff;
		border: none;
		font-family: CASaygon;
		z-index: 6;
		right: -7rem;
		position: absolute;
		font-weight: 600;
		top: 10rem;
	}

	.tip5 {
		background-color: #fff;
		border-radius: 50px;
		border: none;
		font-family: CASaygon;
		z-index: 6;
		left: -70px;
		position: absolute;
		font-weight: 600;
		bottom: -60px;
	}

	.bgc1 {
		background-image: url("../assets/banner.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		background-position: center;
	}
</style>
