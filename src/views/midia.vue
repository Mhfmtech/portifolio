<script>
	import axios from "axios";

	export default {
		name: "blog",
		data: () => ({
            midia: [],
        }),
    
		methods: {

			async getMidia() {
				const { data } = await axios.get(
					"https://blogs.abare.cloud/items/ribus_midia?fields=*.*&filter[status][_eq]=published"
				);
				this.midia = data.data;
				// console.log(this.blogs);
			},
		},

        mounted() {
			window.scrollTo(0, 0);
        },

        async created() {

			await this.getMidia();
		},
    }
</script>

<template>
	<v-container id="scrolling-content" fluid style="padding: 0">
        <v-row class="mt-10 padMobile" style="padding: 60px 60px">

            <v-col cols="12" md="12">
                <h1 style=" font-family: CASaygon; font-weight: 800; line-height: 1; color: #01124a; ">Ribus na mídia</h1>
                <p class="mt-5" style=" font-family: CASaygon; font-weight: 400; line-height: 1; color: #01124a; ">Acompanhe as notícias sobre a Ribus.</p>
            </v-col>
            <template v-for="noticia in midia" :key="noticia.titulo">
            <v-col cols="12" md="4">
                <a target="_blank" :href="noticia.url">
                    <v-card style="padding: 15px; border-radius: 20px">
                        <div style="border-radius: 20px">
                            <div
                                style="
                                    
                                    border-radius: 20px;
                                "
                            >
                                <v-img
                                    contain
                                    :src="`https://blogs.abare.cloud/assets/${noticia.imagem.filename_disk}`"
                                    style="border-radius: 15px; border: 1px solid rgb(51 51 51 / 18%); background-color: #fff;"
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
                                    text-align: center;
                                    font-size: 1.5rem;
                                "
                            >
                                {{noticia.titulo}}
                            </h1>
                        </div>
                    </v-card>
                </a>
            </v-col>
        </template>
        </v-row>        
    </v-container>
</template>
        
<style scoped>
	@media (min-device-width: 360px) and (max-device-width: 730px) {
        .padMobile {
			padding: 60px 10px !important;
		}
    }
</style>