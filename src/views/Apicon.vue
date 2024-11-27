<template>
  <div>
  <v-row>
    <v-col cols="12">
        <h1>API CONNECT</h1>
        <!-- <h2>{{ apidata }}</h2> -->
        <v-btn color="success" @click="newItem">NewItem</v-btn>
    </v-col>
    <v-col cols="3" v-for="(item, index) in apidata" :key="index"> 
        <v-card>
            <v-img :src="item.product_img"></v-img>
            <v-card-title>{{ item.product_name }}</v-card-title>
            <v-card-text>Price: {{ item.price }}</v-card-text>
            <v-card-text>Stock: {{ item.stock }}</v-card-text>
        
            <v-card-actions>
                <v-btn color="error" @click="saveDelete(item._id)">delete</v-btn>
                <v-btn color="info" @click="editItem(item)">Edit</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
  </v-row>

    <!-- <v-btn color="primary" @click="dialogedit = !dialogedit">Edit</v-btn> -->
    <v-dialog v-model="dialogedit" max-width="500px">
        <v-card>
            <v-card-title primary-title>{{savemode}}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-text-field 
                            name="product_name" 
                            label="product name" 
                            id="product_name" 
                            v-model="postdata.product_name">
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field 
                            name="price" 
                            label="price" 
                            id="price" 
                            v-model="postdata.price">
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field 
                            name="stock" 
                            label="stock" 
                            id="stock" 
                            v-model="postdata.stock">
                        </v-text-field>
                    
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text color="error" @click="closeData()">cancel</v-btn>
                            <v-btn text color="info" @click="saveSelect()">save</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data () {
        return {
            id: '',
            apidata: [],
            dialogedit: false,
            //เอาไว้ส่งข้อมูล
            postdata: {
                product_name: '',
                price: '',
                stock: ''
            },
            //เอาไว้ล้างข้อมูล
            postdefault: {
                product_name: '',
                price: '',
                stock: ''
            }
        }
    },

    created () {
        this.getData()
    },

    computed: {
        savemode () {
            return this.id == '' ? 'New Item' : 'Edit Item'
        }
    },

    methods: {
        newItem() {
            this.id = ''
            this.postdata = {...this.postdefault}
            this.dialogedit = true
        },
        editItem(item) {
            this.id = item._id
            this.postdata = item
            this.dialogedit = true
        },
        closeData() {
            this.id = ''
            this.postdata = {...this.postdefault}
            this.dialogedit = false
        },
        saveSelect() {
            if(this.id != ''){
                this.savePutdata()
            }else {
                this.savePostdata()
            }
        },
        getData() {
            this.axios.get('http://localhost:3000/products')
                .then((response) => {
                    console.log('response: ', response)
                    this.apidata = response.data.data
                })
        },
        async savePostdata () {
            try{
                const {data} = await this.axios.post('http://localhost:3000/products', this.postdata)
                console.log(data)
                alert('create complete!')
                this.getData()
                this.closeData()
            } catch(error) {
                console.log(error)
                alert('error')
            }
        },
        async savePutdata () {
            try{
                const {data} = await this.axios.put('http://localhost:3000/products/'+this.id, this.postdata)
                console.log(data)
                alert('update complete!')
                this.getData()
                this.closeData()
            } catch(error) {
                console.log(error)
                alert('error')
            }
        },
        async saveDelete (item) {
            try {
                if(confirm('delete it?')) {
                    const {data} = await this.axios.delete('http://localhost:3000/products/'+item)
                    console.log(data)
                    alert('delete complete!')
                    this.getData()
                    this.closeData()
                }
            } catch (error) {
                console.log(error)
                alert('error')
            }
        }
    }
}
</script>

<style>

</style>