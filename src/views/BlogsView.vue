<template>
		<v-row
		class="paddingRowMobileInicial"
		style="padding:98px 85px 0px 85px">
			<v-col
			v-for="(blog, i) in primeirosBlogs(5)"
			:key="i"
			cols="6"
			sm="4"
			:md="i in [1, 1] ? '3' : '6'"
			style="padding:3px"
			>
				<router-link :to="'../read/' + blog.id + '/' + blog.titulo">
					<v-card class="estiloCard">
						<v-img
						cover
						class="scaleImg corImagemTopo"
						style="height: 200px !important;"
						:src="`https://blogs.abare.cloud/assets/${blog.imagem}`">
							<div class="estiloDivCor"/>
						</v-img>
						<h2
						class="tituloBlogTopo">
						{{ blog.titulo.substring(0, 50) }}
						</h2>
					</v-card>
				</router-link>
			</v-col>
		</v-row>

		<v-row
		class="rowMaginMobile"
		style="padding-top: 10px;"
		data-aos="fade-right"
		data-aos-duration="1500">	
			<v-col
			cols="12"
			md="12"
			class="justify-center d-flex flex-column"
			data-aos="fade-up"
			data-aos-duration="1500">
				<h1 class="fontUltimosArtigos">
						{{categoriaSelecionada == ''? 'Últimos artigos' : categoriaSelecionada}}
				</h1>
			</v-col>
		</v-row>

		<v-row style="padding: 20px 85px;" class="paddingRowMobile posicaoColsMobile">
			<v-col cols="12" md="3"
			v-if="intBreakPoint < 2"
			style="background-color:#ECECECA4; padding-top:0px"
			class="d-flex flex-column align-self-start">
				<h2 class="fontMenuCategorias">
					Categorias:
				</h2>
				<div
				v-for="(categorias, i) in categoria"
				:key="i">
					<v-btn
					v-model="categoriaSelecionada"
					class="styleFiltroCategorias"
					variant="text"
					@click="this.categoriaSelecionada = categorias.value"
					>
						{{categorias.nome}}
					</v-btn>
				</div>
			</v-col>

			<v-col cols="12" md="9" sm="12" class="d-flex align-center align-self-start">
				<v-row style="padding:0px 85px 0px 0px" class="paddingRowMobile">
					<template v-for="blog in blogs" :key="blog.titulo">
					<v-col
					v-if="categoriaSelecionada == ''?
					blog.categoria.nome_da_categoria == blog.categoria.nome_da_categoria :
					blog.categoria.nome_da_categoria == categoriaSelecionada"
					cols="12"
					md="6"
					sm="6"
					data-aos="fade-up"
					data-aos-duration="1500"
					>
						<v-card class="flex-column estiloCardsBlogs">
							<router-link :to="'../read/' + blog.id + '/' + blog.titulo">
								<v-img
								:src="`https://blogs.abare.cloud/assets/${blog.imagem}`"
								style="max-height: 222px !important"
								class=""
								/>
							</router-link>
							<div>
								<p
								v-if="blog.categoria"
								class="styleFontCategoria">
									{{ blog.categoria.nome_da_categoria }}
								</p>
								<v-card-title
									v-if="blog.titulo"
									class="styleFontTituloBlogCard">
									{{ blog.titulo.substring(0, 28) + '...' }}
								</v-card-title>
								<v-card-text
									v-if="blog.Descricao"
									class="mb0 styleFontDescricaoBlog"
									v-html="blog.Descricao.substring(0, 80) + '...'"
								></v-card-text>
								<small class="styleFontAutor">
									{{ blog.autor }}
								</small>
								<br/>
								<router-link
								style="text-decoration: none;"
								:to="'../read/' + blog.id + '/' + blog.titulo">
									<v-btn
									variant="text"
									class="styleBotaoLerArtigo"
									>
										Leia o artigo
									</v-btn>
								</router-link>
							</div>
						</v-card>
					</v-col>
				</template>
				</v-row>
			</v-col>

			<v-col cols="12" md="3"
			v-if="intBreakPoint >= 2"
			style="background-color:#ECECECA4;"
			class="d-flex flex-column align-self-start">
				<h2 class="fontMenuCategorias">
					Categorias:
				</h2>
				<div
				v-for="(categorias, i) in categoria"
				:key="i">
					<v-btn
					v-model="categoriaSelecionada"
					class="styleFiltroCategorias"
					variant="text"
					@click="this.categoriaSelecionada = categorias.value"
					>
						{{categorias.nome}}
					</v-btn>
				</div>
			</v-col>
		</v-row>
</template>

<script>
	import axios from "axios";
	export default {
		name: "blog",
		data: () => ({
			// model: 0,
			blogs: [],
			categoria: [
				{nome:'Últimos Artigos', value:''},
				{nome:'Informativo Ribus', value:'Informativo Ribus'},
				{nome:'Token Ribus', value:'Token Ribus'},
				{nome:'Cripto News', value:'Cripto News'},
				{nome:'Educativus', value:'Educativus'},
			],
			categoriaSelecionada: '',
		}),

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

		async mounted() {
			window.scrollTo(0, 0);
		},

	

		methods: {
			primeirosBlogs(limiteBlogs) {
				return this.blogs.slice(0, limiteBlogs);
			},
			toTop() {
				this.$vuetify.goTo(0);
			},
			changeRoute(a) {
				this.$router.push({ path: a.src });
				console.log(a);
			},
			async getBlogs() {
				const { data } = await axios.get(
					"https://blogs.abare.cloud/items/Ribus?fields=*,categoria.nome_da_categoria&status=published"
				);
				this.blogs = data.data;
				// console.log(this.blogs);
				console.log(this.categoriaSelecionada);
			},
		},

		async created() {
			// this.blogs = fetch(
			// 	"https://blogs.abare.cloud/items/Ribus?fields=*,categoria.nome_da_categoria&status=published"
			// )
			// 	.then((response) => response.json())
			// 	.then((data) => {
			// 		this.blogs = data.data;
			// 		console.log(this.blogs);
			// 	});

			await this.getBlogs();

			console.log(this.blogs);
			console.log(this.blogs[0]);
			console.log(this.blogs[0].id);
			window.scrollTo(0, 0);
		},

		filters: {
			strippedContent: function (string) {
				return string.replace(/<\/?[^>]+>/gi, " ");
			},
		},

		metaInfo() {
			return {
				title: "Ribus Blog",
				meta: [
					{
						name: "Descricao",
						content:
							"Fique atualizado, quer saber mais sobre nossas tecnologias, cultura ou acessar materiais que podem ajudar a alavancar a sua carreira?.",
					},
					{ property: "og:title", content: "Blog - Abaré Marketing" },
					{ property: "og:site_name", content: "Abaré Marketing" },
					{ property: "og:type", content: "website" },
					{ name: "robots", content: "index,follow" },
				],
			};
		},
	};
</script>

<style scoped>
@media (min-device-width: 320px) and (max-device-width: 640px) {

	.v-row{
			margin: 0px !important
	}

	.paddingRowMobileInicial{
		padding:98px 0px 0px 0px !important;
		margin: 0px !important 
	}
	.paddingRowMobile{
		padding:20px 0px 0px 0px !important;
		margin: 0px !important 
	}
	.fontUltimosArtigos{
		font-size:30px !important;
		padding-left: 20px !important;
	}
	.rowMaginMobile{
		margin: 0px !important
	}
}
.estiloCard{
	border-radius:3px;
	padding:0px;
	cursor: pointer;
}
.scaleImg:hover{
	transform: scale(1.15);
	transition: 0.5s ease;
}
.tituloBlogTopo{
	font-size:20px;
	font-weight:400;
	font-family: CASaygon;
	color: #ffffff;
	position: absolute;
	bottom:20px;
	left:18px;
	z-index:999;
}
.estiloDivCor{
	height: 100%;
	background-color: #002C5083;
	opacity:0.8;
}
.fontUltimosArtigos{
	font-family: CASaygon;
	font-size: 42px;
	font-weight: 500;
	color: #4a4a4a;
	padding-bottom: 15px;
	padding-left:70px;
}
.estiloCardsBlogs{
	border:0.5px solid #4A4A4A1A;
	background-color: transparent;
	margin: 8px 0px;
	box-shadow: none !important;
	max-width: 400px;
	max-height: 500.09px;
}
.styleFontCategoria{
	font-family: CASaygon;
	line-height: 1.3 !important;
	letter-spacing: -1px;
	word-break: break-all !important;
	font-size: 15px !important;
	color: #01124a;
	padding: 2px 10px !important;
	margin-top: 10px;
}
.styleFontTituloBlogCard{
	font-family: CASaygon;
	line-height: 1.3 !important;
	letter-spacing: -1px;
	word-break: break-all !important;
	font-size: 18px !important;
	color: #000000;
	padding: 2px 10px !important;
	margin-top: 10px;
}
.styleFontDescricaoBlog{
	font-family: CASaygon;
	color: #7a7a7a;
	font-size: 15px;
	padding: 2px 10px !important;
	word-break: normal;
	height: 70px !important;
}
.styleFontAutor{
	font-family: CASaygon;
	color: #7a7a7a;
	font-size: 15px;
	padding: 2px 10px !important;
	word-break: normal;
}
.styleBotaoLerArtigo{
	font-family: CASaygon;
	color: #ff770f;
	text-transform: none;
	font-size:18px;
	padding-left:10px
}
.fontMenuCategorias{
	font-family: CASaygon;
	font-size: 18px;
	font-weight: 500;
	color:#2a2a2a
}
.styleFiltroCategorias{
	text-transform: none;
	padding-left:0px;
	font-family: CASaygon;
	color:#4a4a4a
}
</style>
