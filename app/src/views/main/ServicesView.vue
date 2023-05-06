<template>
    <v-main>
      <v-container>
        <h1 class="text-center">Our Services</h1>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-card class="service-card">
              <v-card-media
                :src="require('@/assets/images/service1.jpg')"
                height="200px"
              ></v-card-media>
              <v-card-title>Service 1</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                commodo eleifend ligula, in bibendum est. Morbi volutpat, tortor
                ac congue mattis, enim augue dapibus est, at tristique augue arcu
                in magna.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" text>Read More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="service-card">
              <v-card-media
                :src="require('@/assets/images/service2.jpg')"
                height="200px"
              ></v-card-media>
              <v-card-title>Service 2</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                commodo eleifend ligula, in bibendum est. Morbi volutpat, tortor
                ac congue mattis, enim augue dapibus est, at tristique augue arcu
                in magna.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" text>Read More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="service-card">
              <v-card-media
                :src="require('@/assets/images/service3.jpg')"
                height="200px"
              ></v-card-media>
              <v-card-title>Service 3</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                commodo eleifend ligula, in bibendum est. Morbi volutpat, tortor
                ac congue mattis, enim augue dapibus est, at tristique augue arcu
                in magna.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" text>Read More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script>
  export default {
    name: "ServicesView",
  };
  </script>
  
  <style scoped>
  .service-card {
    margin: 20px;
    text-align: center;
  }
  </style>
  