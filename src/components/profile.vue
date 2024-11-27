<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto my-3"
      width="95%"
      height="100%"
    >
      <v-img
        class="Me_img"
        height="525"
        src="../assets/First1.jpg"
      ></v-img>

      <v-card-title>
        <div>
          <h2>Name : Pornchanok Srakaew</h2>
          <h3>Nickname : First</h3>
        </div>
      </v-card-title>

      <v-card-text class="about-text">
        <div>🖥️Job title : System Engineer</div>
        <div>
          <p>
            🎓Education : Department of Computer Engineering<br />
            Faculty of Engineering<br />
            Prince of Songkla University
          </p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
h2 {
  font-size: 28px; /* ขยายขนาดชื่อ */
  margin: 10px 0;
}

h3 {
  font-size: 24px; /* ขยายขนาดชื่อเล่น */
  margin: 5px 0;
}

.me_img {
  margin: auto auto;
}

/* เพิ่มการปรับขนาดตัวอักษร */
.about-text {
  font-size: 20px; /* กำหนดขนาดตามต้องการ */
  font-weight: bold; /* เพิ่มความหนา (ตัวเลือกเสริม) */
  line-height: 1.6; /* ปรับระยะห่างระหว่างบรรทัด */
}
</style>
