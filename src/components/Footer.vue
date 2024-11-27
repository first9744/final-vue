<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
    color="#1E1C24"
  >
    <div>
      <v-btn
        dark
        v-for="icon in icons"
        :key="icon"
        :prepend-icon="icon"
        class="mx-2 my-8"
        variant="text"
        @click="openLink(icon)"
      ></v-btn>
    </div>

    <div class="pt-0 footer-text">
      <p>ติดต่อร้านค้าของเราได้ผ่านช่องทางต่าง ๆ ด้านล่างนี้:</p>
      <p>
        <strong>โทรศัพท์:</strong> 012-345-6789
      </p>
      <p>
        <strong>อีเมล:</strong> support@myshop.com
      </p>
      <p>
        <strong>ที่อยู่:</strong> 123 ถนนabc, จังหวัดdef, ประเทศไทย
      </p>
    </div>

    <v-divider></v-divider>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    methods: {
      openLink(icon) {
        const links = {
          'mdi-facebook': 'https://www.facebook.com/myshop',
          'mdi-twitter': 'https://twitter.com/myshop',
          'mdi-linkedin': 'https://www.linkedin.com/company/myshop',
          'mdi-instagram': 'https://www.instagram.com/myshop',
        };
        window.open(links[icon], '_blank');
      }
    }
  }
</script>

<style>
  .footer-text {
    color: #acacac;
  }
</style>
