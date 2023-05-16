<script setup>
	import fundin from "../assets/fundin.mp4";
	import logo from "../assets/logoNormal.webp";
</script>

<script>
	import SvgIcon from "@jamescoyle/vue-icon";
	import { mdiChevronDown } from "@mdi/js";

	export default {
		name: "my-component",
		components: {
			SvgIcon,
		},
		data() {
			return {
				path: mdiChevronDown,
			};
		},

		mounted() {
			window.scrollTo(0, 0);
        },
	};
</script>

<template>
	<v-container fluid style="padding: 0px">
		<video-background
			class="bgcVideoColor alturaVideoMob"
			preload="auto"
			:loop="true"
			:autoplay="true"
			:src="fundin"
			style="/* max-height: 35rem; */ height: 100vh"
		>
			<v-row style="height: 100vh; padding: 20px">
				<v-col
					cols="12"
					md="6"
					offset-md="6"
					style="height: 100%"
					class="d-flex align-center"
				>
					<div
						class="d-flex flex-column"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<h1
							class="fontMobile2"
							style="
								font-family: CASaygon;
								font-weight: 800;
								line-height: 1.2;
								color: #0d1d2d;
								font-size: 5rem;
							"
						>
							O que é a <br />
							Ribus?
						</h1>
						<v-divider
							class="border-opacity-100 mt-10"
							color="#0D1D2D"
						></v-divider>
					</div>
				</v-col>
				<img
					class="posicaoMobile"
					style="
						position: absolute;
						bottom: 0;
						left: 45%;
						opacity: 50%;
					"
					src="../assets/down.gif"
					width="120"
				/>
			</v-row>
		</video-background>
		<v-row class="padMobile" style="padding: 60px 60px">
			<v-col cols="12" md="6">
				<p
					data-aos="fade-up"
					data-aos-duration="1000"
					style="
						font-family: CASaygon;
						font-weight: 400;
						line-height: 1.2;
						color: #0d1d2d;
						font-size: 1rem;
					"
				>
					Devido aos altos valores praticados no setor imobiliário,
					trabalhar com compras, vendas e investimentos nessa área não
					é para todos. Como as barreiras financeiras e de
					complexidade do negócio são altas para aqueles que desejam
					fazer parte desse ramo, uma grande iliquidez é a
					consequência natural do negócio.
					<br />
					<br />
					Nasce então a Ribus - uma empresa que traz
					<b> solução tecnológica para o mercado imobiliário </b>,
					tendo como objetivo a democratização do acesso a esse
					mercado assim como a consequente liquidez. <br /><br />
					Através do uso da <b> tecnologia Blockchain e da Web3</b>,
					com transações transparentes e seguras, e do Token Ribus, o
					primeiro Token Utilitário para o mercado imobiliário do
					Brasil, agora é possível transacionar e investir no setor de
					maneira rápida, desburocratizada e com tickets dos mais
					diversos valores. Se antes era necessário ter uma alta
					quantidade de capital disponível para ingresso,
					<b>
						hoje isso não é mais verdade – qualquer pessoa hoje pode
						se tornar um investidor do mercado imobiliário através
						da Ribus.
					</b>
				</p>
			</v-col>
			<v-col
				cols="12"
				md="6"
				class="d-flex align-center justify-center flex-column"
			>
				<v-img :src="logo" contain width="330"></v-img>
			</v-col>
		</v-row>

		<v-row class="bgcCoin padMobile" style="padding: 60px 60px">
			<v-col cols="12" md="12" class="" style="margin-top: 00px">
				<h1
					class="fontMobile"
					data-aos="fade-up"
					data-aos-duration="2000"
					style="
						font-family: CASaygon;
						font-weight: 800;
						line-height: 1.2;
						color: #fff;
						font-size: 5rem;
					"
				>
					Como funciona<br />
					a Ribus?
				</h1>
			</v-col>
			<v-col cols="12" md="6" offset-md="6">
				<v-card
					class="efeito-vidro"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<p
						style="
							font-family: CASaygon;
							font-weight: 400;
							line-height: 1.2;
							color: #fff;
							font-size: 1rem;
						"
					>
						Tendo sua base em grandes empreendimentos e empresas
						renomadas do mercado imobiliário, como a plataforma de
						terrenos Agrega, que utiliza a tecnologia para captação
						e venda de terrenos com foco em incorporação e a
						incorporadora e construtora Braemp, responsável por
						operações imobiliárias em capitais e estados como
						Espírito Santo, Rio de Janeiro e outros, além de um
						longo histórico dos sócios com tanto o concreto quanto o
						digital, o objetivo da Ribus se materializa através do
						Token Ribus.
						<br /><br />
						O Ribus é um Utility Token ou Token Utilitário, ou seja,
						criado com um propósito específico, que é fornecer
						acesso a serviços ou produtos específicos dentro do
						ecossistema através da nossa plataforma. Além disso, ele
						é um Token para o Mercado Imobiliário, gerando, assim,
						resultados para o setor.
					</p>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<v-card
					class="efeito-vidro"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<p
						style="
							font-family: CASaygon;
							font-weight: 400;
							line-height: 1.2;
							color: #fff;
							font-size: 1rem;
						"
					>
						Como o Ribus é um Token voltado especificamente para o
						mercado imobiliário, ele não é um ativo digital que deve
						ser usado para especulação. Seu foco não é a compra e
						venda rápida, pois, como sabemos, o setor imobiliário é
						um setor que trabalha com longos prazos, uma vez que o
						processo todo de concepção de um projeto até sua
						concretização leva, em média, 30 meses. Dessa forma, é
						importante que todo aquele que deseja se tornar um
						Tokenista Ribus tenha em mente que a expectativa de
						resultado sobre o Token deve ser de longo prazo também.
						<br /><br />
						Por conta desse fator de longo prazo e, principalmente,
						por ser um Token Utilitário, o Ribus tem como sua
						premissa o objetivo de fornecimento de acesso a produtos
						ou serviços dentro de uma plataforma. Assim, o Token
						Ribus funciona como um voucher de acesso a essa rede,
						que é o Ecossistema Ribus.
					</p>
				</v-card>
			</v-col>
		</v-row>

		<v-row class="padMobile" style="padding: 60px 60px">
			<v-col cols="12" md="6">
				<h1
					data-aos="fade-up"
					data-aos-duration="2000"
					class="fontMobile"
					style="
						font-family: CASaygon;
						font-weight: 800;
						line-height: 1;
						color: #0d1d2d;
						font-size: 3rem;
					"
				>
					O que compõe o <br />
					Ecossistema Ribus?
				</h1>
				<p
					data-aos="fade-up"
					data-aos-duration="1000"
					class="mt-10"
					style="
						font-family: CASaygon;
						font-weight: 400;
						line-height: 1.2;
						color: #0d1d2d;
						font-size: 1rem;
					"
				>
					O Ecossistema Ribus é composto por empresas e operações
					criadas e geridas para trazer usabilidade ao Token e
					garantir sua circulação, uso, adoção e valorização. Dentro
					desse ecossistema é possível permutar bens e serviços,
					comprar recebíveis, reformar, comprar e vender imóveis,
					entre outros.
				</p>
			</v-col>

			<v-col cols="12" md="12">
				<p
					data-aos="fade-up"
					data-aos-duration="1000"
					class="mt-10"
					style="
						font-family: CASaygon;
						font-weight: 400;
						text-align: center;
						line-height: 1.2;
						color: #0d1d2d;
						font-size: 1rem;
					"
				>
					O ecossistema é composto pelas seguintes empresas e
					operações:
				</p>

				<v-row>
					<v-col cols="6" sm="12" md="3">
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
									src="../assets/logoAzul.png"
									width="200"
									alt=""
									class="sizeMob"
								/>
							</div>
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									color: #818181;
									text-align: center;
								"
							>
								Marketplace voltado para profissionais da área
								de arquitetura e decoração;
							</p>
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

					<v-col cols="6" sm="12" md="3">
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
									src="../assets/beneficius.png"
									width="200"
									alt=""
									class="sizeMob"
								/>
							</div>
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									color: #818181;
									text-align: center;
								"
							>
								Clube de Benefícios para Tokenistas Ribus,
								funcionando como um programa de pontos/milhas.
							</p>
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

					<v-col cols="6" sm="12" md="3">
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
									src="../assets/permutus.png"
									width="200"
									alt=""
									class="sizeMob"
								/>
							</div>
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									color: #818181;
									text-align: center;
								"
							>
								Permuta de Ativos por Ribus e Reais;
							</p>
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

					<v-col cols="6" sm="12" md="3">
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
									src="../assets/recibus.png"
									width="200"
									class="sizeMob"
									alt=""
								/>
							</div>
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									color: #818181;
									text-align: center;
								"
							>
								Fintech focada em compra de recebíveis via
								emissão de token para as operações;
							</p>
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

					<v-col cols="6" sm="12" md="3" class="d-flex justify-center">
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
									src="../assets/consignatus.png"
									width="200"
									class="sizeMob"
									alt=""
								/>
							</div>
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									text-align: center;
									color: #818181;
								"
							>
								Revenda consignada de Token Ribus;
							</p>
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

					<v-col cols="6" sm="12" md="3" class="d-flex justify-center">
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
									src="../assets/braemp.png"
									width="200"
									class="sizeMob"
									alt=""
								/>
							</div>
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									color: #818181;
									text-align: center;
								"
							>
								Incorporadora e construtora parceira com atuação
								centrada no Espírito Santo e Rio de Janeiro.
							</p>
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

					<v-col cols="12" sm="12" md="3" class="d-flex justify-center">
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
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									color: #818181;
									text-align: center;
								"
							>
								Empresa de Reforma, Modernização e Acabamento,
								totalmente subsidiados, para valorização do
								imóvel e geração de liquidez.
							</p>
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

					<v-col cols="12" sm="12" md="3" class="d-flex justify-center">
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
							<p
								class="mt-5"
								style="
									font-family: CASaygon;
									font-size: 12px;
									line-height: 1.2;
									color: #818181;
									text-align: center;
								"
							>
								Empresa parceira especializada em terrenos
								urbanos e rurais para incorporação imobiliária e
								construção, nos diversos segmentos e produtos do
								mercado.
							</p>
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

				<v-row class="padMobile" style="padding: 60px 60px">
					<v-col cols="12" md="10" offset-md="1">
						<h1
							data-aos="fade-up"
							data-aos-duration="2000"
							style="
								font-family: CASaygon;
								font-weight: 800;
								line-height: 1;
								color: #0d1d2d;
								text-align: center;
								font-size: 3rem;
							"
						>
							Dúvidas?!
						</h1>
						<v-expansion-panels
							compact
							style="box-shadow: none !important"
							variant="popout"
							class="my-4 mt-10"
						>
							<v-expansion-panel
								style="
									box-shadow: none !important;
									font-family: CASaygon;
									font-size: 15px;
									line-height: 1.2;
								"
								class="d-flex justify-center flex-column align-center"
								title="O que a Ribus faz com o dinheiro investido pelos Tokenistas? "
								text="Como o Ribus é um token para o mercado imobiliário, parte do capital que é investido pelos tokenistas é direcionado para operações imobiliárias, ou seja, para compra de terrenos, incorporação e construção de empreendimentos imobiliários assim como a venda desses. Essas operações imobiliárias são desenvolvidas em parceria com grandes empresas do setor, em diversas localidades e com diferentes públicos-alvo."
							>
								<svg-icon
									style="
										opacity: 50%;
										position: absolute;
										right: 0px;
										top: 10px;
									"
									type="mdi"
									:path="path"
								></svg-icon>
							</v-expansion-panel>

							<v-expansion-panel
								style="
									box-shadow: none !important;
									font-family: CASaygon;
									font-size: 15px;
									line-height: 1.2;
								"
								title="O que a Ribus faz com o resultado dessas vendas? "
								text="No White Paper do Token Ribus está estipulado que todo resultado obtido deve ser revertido para a Ribus, a fim de gerar novas operações imobiliárias e também a valorização do Token. De acordo com nossas diretrizes, 50% do resultado é investido na construção de novos empreendimentos e os outros 50% são reinjetados na Ribus, sendo destinados para o processo de recompra e queima, que gera a escassez e a valorização do Token. 

Dessa forma, ao contrário de outros ativos digitais, a Ribus não depende da adoção do Token para garantia de sua valorização, uma vez que os resultados das operações imobiliárias são responsáveis pela valorização e perpetuação do Ribus. "
							>
								<svg-icon
									style="
										opacity: 50%;
										position: absolute;
										right: 0px;
										top: 10px;
									"
									type="mdi"
									:path="path"
								></svg-icon>
							</v-expansion-panel>

							<v-expansion-panel
								style="
									box-shadow: none !important;
									font-family: CASaygon;
									font-size: 15px;
									line-height: 1.2;
								"
								title="O que é um White Paper?"
								text="Um white paper de criptoativo é um documento técnico que descreve um projeto de criptomoeda, token ou plataforma blockchain de forma detalhada, fornecendo informações importantes sobre a tecnologia subjacente, o propósito do projeto, a visão da equipe, o modelo de negócios, a arquitetura do sistema e outros detalhes relevantes. Ele é utilizado para permitir que os investidores e entusiastas de criptomoedas entendam melhor o projeto e avaliem se ele tem potencial para ser bem-sucedido, além de também poder ser usado para obter financiamento para o projeto. "
							>
								<svg-icon
									style="
										opacity: 50%;
										position: absolute;
										right: 0px;
										top: 10px;
									"
									type="mdi"
									:path="path"
								></svg-icon>
							</v-expansion-panel>

							<v-expansion-panel
								style="
									box-shadow: none !important;
									font-family: CASaygon;
									font-size: 15px;
									line-height: 1.2;
								"
								title="O que garante a legalidade das transações da Ribus? "
								text="Em Dezembro de 2022 a Ribus recebeu um ofício da CVM (Comissão de Valores Mobiliários), declarando que a empresa não é um valor mobiliário, desta forma corroborando com a alegação de que somos o Primeiro Utility Token do Setor Imobiliário. Esse ofício é algo inédito, com várias empresas tendo recebido stop orders em suas operações, e nos protege dessa situação e permite que a oferta pública seja totalmente legal e sem impedimentos para atuação no Brasil. 
								Além disso, o Token Ribus e seu Contrato Inteligente passaram por uma auditoria pela empresa alemã SolidProof, especialista em segurança de blockchain. Como resultado dessa auditoria, a Solidproof concedeu a Ribus o Selo de Aprovação TRIPLE A, selo que garante aos nossos tokenistas segurança e confiabilidade em nossas transações, com a certeza de que operamos dentro dos padrões de excelência do mercado cripto e da blockchain. 
								Assim, vemos que a Ribus é comprometida com a geração de valor e negócios para o mercado imobiliário e para seus tokenistas através do Token Ribus, o primeiro token utilitário do Brasil para o mercado imobiliário. "
							>
								<svg-icon
									style="
										opacity: 50%;
										position: absolute;
										right: 0px;
										top: 10px;
									"
									type="mdi"
									:path="path"
								></svg-icon>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<style>
	@media (min-device-width: 360px) and (max-device-width: 730px) {
		.cardMinH {
			max-height: 255px !important;
			min-height: 255px !important;
		}

		.sizeMob {
			width: 130px !important;
		}

		.padMobile {
			padding: 10px !important;
		}

		.posicaoMobile {
			left: 32% !important;
		}

		.fontMobile2 {
			font-size: 3rem !important;
		}

		.fontMobile {
			font-size: 2rem !important;
		}

		.alturaVideoMob {
			height: 80vh !important;
		}
	}

	.v-expansion-panel__shadow {
		box-shadow: none !important;
	}
	.btnConhecer {
		border: 2px solid #eb9c00 !important;
		text-transform: capitalize;
		font-family: CASaygon;
		box-shadow: none;
		font-weight: 400;
		font-size: 15px;
		border-radius: 50px;
		letter-spacing: normal;
	}
	.efeito-vidro {
		padding: 25px;
		background: rgb(255 255 255 / 16%);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(1.5px);
		-webkit-backdrop-filter: blur(13.5px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.bgcCoin {
		background-image: url("../assets/coinCity.png");
		background-repeat: repeat;
		background-attachment: fixed;
		background-size: cover;
		opacity: 2;
		/* height: 100vh; */
		background-position: center;
	}

	@media (min-width: 1024px) {
		.about {
			min-height: 100vh;
			display: flex;
			align-items: center;
		}
	}
</style>

<!-- <script>
	export default {};
</script> -->
