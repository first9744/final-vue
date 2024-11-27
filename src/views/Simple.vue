<template>
  <div>
    <h1>Simple Page</h1>
    <h2 v-if="show">{{name}}</h2>
    <v-btn color="success" @click="show = !show">switch</v-btn>
    <v-row>
        <v-col cols="3" v-for="(item, index) in items" :key = "index">
            <v-card>
                <v-img :src="item.img"></v-img>
                <v-card-text>{{item.name}}</v-card-text>
                <v-card-actions><v-btn color="success" @click="display()">show</v-btn></v-card-actions>
            </v-card>
        </v-col>
        <v-col>
            <simcom :name="name" @callAlert="callAlert"/>
        </v-col>
    </v-row>
    <!-- <ul>
        <li v-for="(item, index) in items" :key = "index">{{item.name}}</li>
    </ul> -->
    <v-btn color="success" @click="callSim()">callSim</v-btn>
  </div>
</template>

<script>
import simcom from '../components/SimpleComponent.vue'
import {EventBus} from '../EventBus'

export default {
    components: {
        simcom
    },
    
    data() {
        return {
            name: 'Pornchanok Srakaew',
            show: false,
            items: [
                {name: 'Foo', img: 'https://th.bing.com/th/id/OIP.ZCyqsR6UAYmA23yl617VCQHaEK?rs=1&pid=ImgDetMain'}, 
                {name: 'Bar', img: 'https://th.bing.com/th/id/OIP.ZCyqsR6UAYmA23yl617VCQHaEK?rs=1&pid=ImgDetMain'}
            ]
        }
    },

    // data: () => ({ name: 'Pornchanok Srakaew', show: false})

    methods : {
        display () {
            alert('Display Fuction')
        },

        callAlert () {
            alert('โฮ่ง')
        },
        callSim() {
            EventBus.$emit('SimComCallAlert')
        }
    },

    mounted() {
        EventBus.$on('MainCallAlert', this.callAlert)
    }
}
</script>

<style>

</style>