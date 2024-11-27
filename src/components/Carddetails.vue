<template>
    <div class="main_card_details">
      <v-card
        :loading="loading"
        class="mx-auto my-3"
        width="95%"
        height="100%"
      >
        <div class="to_about">
          <h1>Hi, I am <span class="name_">Pornchanok 😊 </span></h1>
          <p class="motto">"Believe in yourself and all that you are."</p>
          <button class="button button2" @click="$router.push('/contact')">Go to Contact</button>
        </div>
  
        <v-row>
          <v-col>
            <v-card-title class="custom-title"><h4>HOBBY</h4></v-card-title>
            <v-card-text class="custom-text">
              <v-chip-group>
                <button class="button pink-button">📖Reading</button>
                <button class="button pink-button">🎵Listen to music</button>
              </v-chip-group>
            </v-card-text>
          </v-col>
  
          <v-col>
            <v-card-title class="custom-title"><h4>FAVORITE SPORT</h4></v-card-title>
            <v-card-text class="custom-text">
              <v-chip-group>
                <button class="button blue-button">🎾Badminton</button>
                <button class="button blue-button">🏊Swimming</button>
              </v-chip-group>
            </v-card-text>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col>
            <v-card-title class="custom-title"><h4>LIKE</h4></v-card-title>
            <v-card-text class="custom-text">
              <v-chip-group>
                <button class="button green-button">🥤Bubble Tea</button>
                <button class="button green-button">🎥Movies</button>
                <button class="button green-button">🏕️Traveling</button>
              </v-chip-group>
            </v-card-text>
          </v-col>
  
          <v-col>
            <v-card-title class="custom-title"><h4>DISLIKE</h4></v-card-title>
            <v-card-text class="custom-text">
              <v-chip-group>
                <button class="button red-button">🌶️Spicy Food</button>
                <button class="button red-button">👨‍👩‍👧‍👦Crowded Places</button>
                <button class="button red-button">📢Noise</button>
              </v-chip-group>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  h1 {
    font-size: 40px;
    text-align: center;
    margin: 30px;
  }
  .name_ {
    color: rgb(143, 74, 24);
  }
  .button {
    padding: 12px 20px;
    border: none;
    border-radius: 25px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 5px;
    cursor: pointer;
  }
  .button2 {
    background-color: #04aa6d; /* สีเขียวเข้ม */
    padding: 12px 52px; /* ขนาดพิเศษสำหรับปุ่ม Go to Contact */
  }
  .green-button {
    background-color: #4caf50; /* สีเขียว */
  }
  .red-button {
    background-color: #f44336; /* สีแดง */
  }
  .pink-button {
    background-color: #ffc0cb; /* สีชมพูอ่อน */
    color: black;
  }
  .blue-button {
    background-color: #add8e6; /* สีฟ้าอ่อน */
    color: black;
  }
  .to_about {
    text-align: center;
    padding: 130px 0;
  }
  /* เพิ่มขนาดตัวอักษรสำหรับส่วน HOBBY, FAVORITE SPORT, LIKE และ DISLIKE */
  .custom-title h4 {
    font-size: 24px;
    font-weight: bold;
  }
  .custom-text {
    font-size: 20px;
  }
  </style>
  