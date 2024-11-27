<template>
  <div>
    <v-alert v-if="!isValidScore" type="warning" class="mt-4">คะแนนไม่อยู่ในช่วงที่กำหนด</v-alert>
    
    <v-card class="card-box-text">
    <v-flex class="box-text">
        <v-text-field
            class="d-flex text-field"
            v-model="score"
            prepend-icon="mdi-cached"
            label="Grade"
            id="grade"
        >
        </v-text-field>
        <v-btn color="primary" @click="calculateGrade()">Click me</v-btn>
        <!-- <p v-if="show">{{grade}}</p> -->

    </v-flex>
    </v-card>

    <v-card width="500" class="card-box-text" v-if="grade">
        <h2>เกรดที่ได้ : {{grade}}</h2>
    </v-card>
  </div>
</template>

<script>
export default {
    data () {
        return {
            score: '',
            grade: '',
            isValidScore: true
        }
    },

    methods: {
        logGrade () {
            console.log('ค่าที่ได้: ', this.grade)

        },

        calculateGrade () {
            let grade = parseFloat(this.score)
            if (grade >= 0 && grade <= 100) {
                this.isValidScore = true
                if (grade >= 80) {
                    this.grade = 'A'
                } else if (grade >= 70) {
                    this.grade = 'B'
                } else if (grade >= 60) {
                    this.grade = 'C'
                } else if (grade >= 50) {
                    this.grade = 'D'
                } else {
                    this.grade = 'F'
                }
            } else {
                this.isValidScore = false
            }
        }
    }
}
</script>

<style>
.card-box-text {
    width: 500px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 50px;
}

</style>