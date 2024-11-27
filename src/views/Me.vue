<template >
    <div class="main_Me">
        <v-row no-gutters>
            <v-col cols="12" sm="6" md="8">
                <CarddetailsVue />
            </v-col>

            <v-col cols="6" md="4" >
                <profileVue />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import profileVue from '@/components/profile.vue'
import CarddetailsVue from '@/components/Carddetails.vue'

export default {
    components: {
        profileVue,
        CarddetailsVue
    }
}
</script>

<style>
.main_Me {
    display: flex;
    flex-direction: row;
}
</style>