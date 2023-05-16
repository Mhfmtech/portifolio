<template>
	<v-container fluid>
		<v-row
		style="padding-top: 90px !important"
		justify="center"
		align="center"
		>
			<v-col cols="12" md="12" style="padding: 0px">
				<div
				class="alinhadoMeio flex-column marginMedia"
				>
					<v-img
					class="tamanhoMob widthImagemTopo"
					:src="`https://blogs.abare.cloud/assets/${blog.imagem}`"
					v-if="blog.id"
					width="100%"
					/>
				</div>
				<v-divider/>
				<h2 style="line-height: 1;" class="titleBlog text-center">
					{{ blog.titulo }}
				</h2>
				<div style="line-height: 1;"
					class="texts align-center justify-center textMobile"
					v-html="blog.Texto">
				</div>
				<div class="textMobile" style="padding: 80px 150px 0px 150px">
					<p class="styleFontAutor">
						Escrito por: {{ blog.autor }}
					</p>
					<br/>
				</div>
			</v-col>
		</v-row>

		<v-row class="marginAvatar">
			<v-col cols="12" md="6">
				<v-btn
					to="/blogs"
					class="marginBtnMobile styleBotaoVoltar"
					>Voltar
				</v-btn>
			</v-col>
		</v-row>

			<!-- <v-col cols="12" md="12" style="padding-bottom: 20px">
				<transition name="social" appear>
					<v-row class="pad30" style="background-color: transparent">
						<v-col cols="12" md="3"></v-col>
						<v-col
							cols="12"
							md="6"
							class="text-center d-flex justify-center align-center"
						>
							<twitter-button
								shareUrl="https://github.com/"
								shareDescription="GitHub is where people build software."
							/>
							<facebook-button
								shareUrl="https://github.com/"
								shareDescription="GitHub is where people build software."
							/>
							<whatsapp-button
								shareUrl="https://github.com/"
								shareDescription="GitHub is where people build software."
							/>

							<a target="_blank" href="https://www.instagram.com/abaremarketing/">
								<v-icon large class="socialIconsFooter" color=" darken-2"
								>mdi-share</v-icon
								>
							</a>
							<a target="_blank" href="https://www.facebook.com/abaremarketing/">
								<v-icon large class="socialIconsFooter" color=" darken-2"
								>mdi-whatsapp</v-icon
								>
							</a> 
						</v-col> -->
		<v-row>
			<v-col cols="12" md="12">
			<p class="styleFiquePorDentro">
				Fique por dentro!
			</p>
			<p class="styleDescricaoComents">
				Receba os nossos conteúdos em seu e-mail:
			</p>
			</v-col>
		</v-row>

		<v-row style="padding:0px 150px" class="paddingRow">
			<v-col cols="12" md="12">
				<v-row>
					<v-col cols="12" md="6">
						<v-text-field
						variant="outlined"
						label="Nome*"
						v-model="comentario.nome"
						></v-text-field>
					</v-col>

					<v-col cols="12" md="6">
						<v-text-field
						variant="outlined"
						label="E-mail*"
						v-model="comentario.email"
						></v-text-field>
					</v-col>

					<v-col cols="12" md="6">
						<v-text-field
						variant="outlined"
						label="Telefone*"
						v-mask="'(00) 00000-0000'"
						v-model="comentario.telefone"
						></v-text-field>
					</v-col>

					<v-col
					cols="12"
					md="12"
					class="flex-column d-flex"
					style="padding-bottom: 0px"
					>
						<p class="styleAceitoTermos">
							Aceito os termos e condições de
							privacidade*
						</p>
						<div class="">
							<v-checkbox
							color="orange"
							v-model="comentario.aceite"
							label="Sim"
							:value="true"
							></v-checkbox>
						</div>
					</v-col>

					<v-col
					cols="12"
					md="12"
					style="padding-top: 0px"
					class="alinhadoMeio"
					>
						<v-btn
						style="
						text-transform: none;
						background-color: #ff770f;
						color: #fff;
						border-radius: 5px;
						"
						@click="enviarComentario"
						>Enviar</v-btn
						>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-divider class="mt-10"/>
		<!-- Mostrando comentários -->
		<!-- <v-row class="mt-10">
			<v-col cols="12" md="8" offset="2">
				<v-card
					v-for="c in comentarios"
					:key="c.id"
					class="pad20 mt-10"
				>
					<v-card-text>
						{{ c.comentario }}
					</v-card-text>
					<v-card-subtitle>
						<b>{{ c.nome }}</b>
					</v-card-subtitle>
					<v-card-text>{{
						c.date_created
					}}</v-card-text>
				</v-card>
			</v-col>
		</v-row> -->
	</v-container>
</template>

<script>
	// import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
	// import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
	// import WhatsappButton from "vue-share-buttons/src/components/WhatsAppButton";

	export default {
		// components: { TwitterButton, FacebookButton, WhatsappButton },
		data: () => ({
			blog: [],
			comentario: { nome: "", email: "", telefone: "", aceite: "" },
			comentarios: [],
		}),

		mounted() {
			window.scrollTo(0, 0);
		},

		created() {
			let idblog = this.$route.params.id_blog;
			fetch(
				"https://blogs.abare.cloud/items/Ribus/" +
					idblog +
					"?fields=*,autor.cargo,autor.avatar,autor.first_name,autor.last_name"
			)
				.then((response) => response.json())
				.then((data) => {
					this.blog = data.data;
				});
			fetch(
				"https://blogs.abare.cloud/items/comentarios_ribus?sort=-date_created&filter[id_blog][_eq]=" +
					idblog
			)
				.then((response) => response.json())
				.then((data) => {
					this.comentarios = data.data;
				});
		},

		methods: {
			toTop() {
				this.$vuetify.goTo(0);
			},

			enviarComentario() {
				if (
					this.comentario.nome == "" ||
					this.comentario.email == "" ||
					this.comentario.telefone == "" ||
					this.comentario.aceite == ""
				) {
					window.alert(
						"Por favor, aceite os termos e condições de privacidade."
					);
				} else {
					this.comentario.id_blog = this.blog.id;
					this.comentario.status = "published";
					fetch("https://blogs.abare.cloud/items/comentarios_ribus", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: JSON.stringify(this.comentario),
					})
						.then((response) => response.text())
						.then((data) => {
							window.console.log(data);
							// alert("Comentario");
							this.comentarios.unshift(this.comentario);
							this.comentario = {
								nome: "",
								email: "",
								telefone: "",
								aceite: "",
							};
							this.text =
								"Seu comentário foi publicado! Fique por dentro das interações.";
							this.snackbar = true;
						});
				}
			},
		},

		metaInfo() {
			return {
				title: this.blog.titulo,
				meta: [
					{
						name: "descricao",
						content: this.blog.descricao,
					},
					{ property: "og:title", content: this.blog.titulo },
					{ property: "og:site_name", content: "Abaré Marketing" },
					{ property: "og:type", content: "website" },
					{ name: "robots", content: "index,follow" },
				],
			};
		},
	};
</script>

<style scoped>
@media (min-device-width: 360px) and (max-device-width: 731px) {
		.tamanhoMob {
			width: 95% !important;
			height: auto !important;
		}
		.paddingRow{
			padding: 0px 0px !important;
		}
		.texts {
			font-family: roboto;
			font-weight: 300;
			color: #000000;
			word-break: none;
		}
		.marginAvatar {
			margin: 0px !important;
		}
		.textMobile {
			padding: 0px 15px !important;
		}

		.marginCard {
			margin-left: 0px !important;
		}

		.marginBtnMobile {
			margin-left: 145px !important;
		}

		.marginMedia {
			margin-top: 30px !important;
		}
		.titleBlog {
			font-weight: 900;
			color: #000000 !important;
			font-family: Roboto;
			line-height: 1;
			letter-spacing: -1px;
			padding: 30px 15px !important;
		}
}
.alinhadoMeio{
	align-items: center;
	justify-content: center;
	display: flex
}
.texts img {
	max-width: 100vw !important;
}
.titleBlog {
	font-weight: 500;
	color: #000000;
	font-family: CASaygon;
	line-height: 1;
	font-size:30px;
	letter-spacing: -1px;
	padding: 30px 200px;
}
.texts {
	font-family: CASaygon;
	margin-top: 20px;
	padding: 0px 150px;
}
.widthImagemTopo{
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 70vh;
	margin: 0px;
	opacity: 100%;
}
.styleFontAutor{
	font-family: CASaygon;
	font-weight: 500;
	margin-bottom:0px;
	padding-bottom:0px
}
.styleBotaoVoltar{
	margin-top: 0px;
	font-family: CASaygon;
	text-transform: none;
	background-color: #ff770f;
	color: #ffffff !important;
	margin-left: 140px;
}
.styleFiquePorDentro{
	font-family: CASaygon;
	font-size: 18px;
	font-weight: 700;
	text-align: center;
}
.styleDescricaoComents{
	font-family: CASaygon;
	font-size: 15px;
	font-weight: 400;
	text-align: center;
}
.styleAceitoTermos{
	font-family: CASaygon;
	font-size: 15px;
	color: #a7a7a7;
	font-weight: 500;
}
</style>
