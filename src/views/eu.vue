<script>
	export default {
		name: "eumauro",
		data: () => ({
			drawer: true,
			animationSpeed: 100,
			currentIndex: 4,
			intervalId: null,
			intervalDuration: 3000,
			projetos: [
				{ title: "Sites" },
				{ title: "Videos" },
				{ title: "Artes" },
				{ title: "Sobre" },
			],
			model: null,
		}),

		mounted() {
			this.startAnimation();
			this.startAutoPlay();
		},
		beforeUnmount() {
			this.stopAutoPlay();
		},
		methods: {
			startAutoPlay() {
				this.intervalId = setInterval(() => {
					this.nextSlide();
				}, this.intervalDuration);
			},
			stopAutoPlay() {
				clearInterval(this.intervalId);
			},
			nextSlide() {
				this.currentIndex =
					(this.currentIndex + 1) % this.slides.length;
			},
			startAnimation() {
				let index = 0;
				let isDeleting = false;

				const animate = () => {
					const { text, animationSpeed } = this;

					if (isDeleting) {
						this.projetos.title = text.slice(0, index);
						index--;
					} else {
						this.projetos.title = text.slice(0, index + 1);
						index++;
					}

					if (index > text.length) {
						isDeleting = true;
					}

					if (index < 0) {
						isDeleting = false;
					}

					const delay = isDeleting
						? animationSpeed / 2
						: animationSpeed;

					if (isDeleting && index === -1) {
						index = 0;
					}

					setTimeout(animate, delay);
				};

				animate();
			},
		},
	};
</script>

<template>
	<v-container id="scrolling-content" fluid style="padding: 0">
		<!-- <v-navigation-drawer
			class="d-flex justify-center align-center"
			style="
				z-index: 30;
				box-shadow: 2px 1px 8px 2px rgb(0 0 0 / 13%);
				background: rgba(255, 255, 255, 0.251) !important;
				background: rgb(255 255 255 / 5%) !important;
				backdrop-filter: blur(2.5px) !important;
				width: 2vw;
				height: 100%;
				top: 0;
				bottom: 0px;
				width: 4vw;
			"
			v-model="drawer"
		>
			<div
				class="d-flex justify-center align-center"
				style="height: 100%"
			>
				<v-icon color="white">mdi-instagram</v-icon>
			</div>
		</v-navigation-drawer> -->

		<v-row class="bgc1">
			<div
				class="d-flex align-center"
				style="
					background-color: #0000009c;
					width: 100%;
					height: 100%;
					padding: 70px;
				"
			>
				<v-col cols="12" md="6" class="d-flex align-center">
					<h1
						style="
							font-family: raleway !important;
							font-weight: 800 !important;
							color: #fff;
							font-size: 6rem;
							line-height: 1;
							text-shadow: 0px 2px 3px #333333c9;
						"
					>
						Design e Tecnologia
					</h1>
				</v-col>
			</div>
		</v-row>
		<v-row style="margin-top: -25px">
			<v-col cols="12" md="6" offset-md="6">
				<div style="z-index: 9; margin-top: -10rem; position: absolute">
					<v-sheet
						class="mx-auto"
						style="background-color: transparent"
					>
						<v-slide-group
							v-model="currentIndex"
							class="pa-4 my-slide-group"
							the
							center-active
							show-arrows="true"
						>
							<v-slide-group-item v-for="n in projetos" :key="n">
								<v-card
									elevation="4"
									class="ma-4 efeito-vidro d-flex justify-center align-center"
									height="300"
									width="200"
								>
									<h1
										style="
											font-family: raleway;
											font-weight: 800;
											font-size: 3rem;
											color: #fff;
										"
									>
										{{ n.title }}
									</h1>
								</v-card>
							</v-slide-group-item>
						</v-slide-group>
					</v-sheet>
				</div>
			</v-col>
		</v-row>
		<v-row class="blackGradient" style="height: 400px"> </v-row>
	</v-container>
</template>

<style scoped>
	.slide-group {
		width: 400px; /* Ajuste o tamanho conforme necessário */
		height: 200px;
		overflow: hidden;
	}
	.my-slide-group .v-slide-group__control::before {
		color: white;
	}

	.my-slide-group .v-slide-group__control--next::before {
		border-left-color: white;
	}

	.my-slide-group .v-slide-group__control--prev::before {
		border-right-color: white;
	}

	.blackGradient {
		background: linear-gradient(
			180deg,
			rgba(17, 17, 17, 1) 0%,
			rgba(0, 0, 0, 1) 100%
		);
	}

	.efeito-vidro {
		background: rgba(255, 255, 255, 0.251) !important;
		backdrop-filter: blur(3.5px) !important;
		-webkit-backdrop-filter: blur(13.5px) !important;
	}
	.bgc1 {
		background-image: url("../assets/modelo1.jpg") !important;
		background-position: center;
		background-size: cover;
		height: 100vh;
	}

	.bgcSites {
		background-image: url("../assets/eumauro/bgcSites.jpg") !important;
		background-position: center;
		background-size: cover;
	}

	.background-header {
		height: 60vh;
		background-image: url("../assets/imgs/home/headerMobile.png") !important;
		/* background-image: url("../assets/imgs/	Cabo.png"); */
		background-position: left;
		background-size: cover;
	}
</style>
