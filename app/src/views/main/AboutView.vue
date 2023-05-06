<template>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>About Us</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <img src="https://picsum.photos/500/300" alt="About Us" />
          </v-col>
          <v-col cols="12" md="6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit, erat quis sollicitudin faucibus, erat urna tempor
              felis, quis ultricies felis purus vel est. Etiam convallis ex at
              odio vehicula aliquam. Vivamus pulvinar urna ac neque
              imperdiet, quis suscipit nibh fermentum. In hac habitasse
              platea dictumst.
            </p>
            <p>
              Aliquam erat volutpat. Fusce eu tristique velit, in ultrices elit.
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Praesent vel urna sed metus bibendum
              iaculis vitae sed libero. Nullam condimentum sapien in ex lacinia
              vehicula. In hac habitasse platea dictumst.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script>
  export default {
    name: 'about',
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  </style>
  