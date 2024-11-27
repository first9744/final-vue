<template>
  <div class="main_card_details">
       <v-card
          :loading="loading"
          class="mx-auto my-3"
          width="95%"
          height="600"
      >
  
      <!-- <v-card height="450"> -->
        <div class="to_about">
          <h1 class="title-contact">Contact Me</h1>
        </div>
      <!-- </v-card> -->
  
      <v-row>
        
        <v-col>
          <v-card-title class="center-content"><h4 class="title-logo">Instagram</h4></v-card-title>
          <v-card-text class="center-content">
            <a href="https://www.instagram.com/firstfirst_p/">
              <img class="me_img" height="150" src="../assets/social.png"/>
            </a>
          </v-card-text>
        </v-col>
  
        <v-col>
          <v-card-title class="center-content"><h4 class="title-logo">Email</h4></v-card-title>
          <v-card-text class="center-content">
            <a href="#" @click.prevent="showEmail">
              <img class="me_img" height="150" src="../assets/email.png"/>
            </a>
          </v-card-text>
        </v-col>
  
        <v-col>
          <v-card-title class="center-content"><h4 class="title-logo">Phone</h4></v-card-title>
          <v-card-text class="center-content">
            <a href="#" @click.prevent="showPhoneNumber">
              <img class="me_img" height="150" src="../assets/phone.png"/>
            </a>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
   
  </template>
  <script>
  export default {
    methods: {
      showPhoneNumber() {
        const phoneNumber = '094 490 xxxx';
        alert('เบอร์โทร:  ' + phoneNumber);
      },
  
      showEmail() {
        const email = 'pornchanok.sra9744@gmail.com';
        alert('Email:  ' + email);
      },
    }
  }
  </script>
  
  <style>
      .title-contact{
          padding-top:20px ;
          text-align: center;
      }
  
      .title-logo {
          text-align: center;
          padding-top: 30px;
      }
  
      .center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
      }
  </style>