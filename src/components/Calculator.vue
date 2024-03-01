<script setup>
import { ref } from 'vue';


const expression = ref('0')

function btn(value) {
    if (expression.value === '0' && value !== 'ac') {
        expression.value = '';
    }

    if (value === 'ac') {
        expression.value = '0';
    } else if (value === '=') {
        calculate();
    } else if (value === 'del') {
        expression.value = expression.value.slice(0, -1);
    } else {
        expression.value += value;
    }
}


function calculate() {
    try {
        console.log(expression.value);
        expression.value = eval(expression.value);
    } catch (error) {
        expression.value = 'Error';
    }
}



</script>

<template>
    <div class="h-screen flex flex-col justify-center items-center">
        <div class="mb-5 flex flex-col justify-center items-center">
            <img src="/src/assets/calculator.png" alt="/src/assets/calculator.png" class="w-20 h-20">
            <h2 class="font-kdam text-sm">made by - <span class="text-[#2D9596] font-semibold">Fahim Hossain
                    Munna</span>
            </h2>
        </div>
        <div class="w-[300px] bg-[#9AD0C2] box-border rounded-xl pb-5">
            <div class="w-full h-[128px] bg-[#265073] flex justify-end items-end px-3 py-3 mb-7 rounded-t-xl">
                <h2 v-text="expression" class="text-[#F1FADA] font-kdam text-4xl"></h2>
            </div>
            <div class="w-full flex flex-col gap-y-4 px-3">
                <div>
                    <input readonly @click="btn('del')"
                        class="w-full h-12 bg-[#3C3633] text-center text-[#F0F3FF] font-kdam text-lg" value="Delete">
                </div>
                <div class="flex flex-wrap justify-between">
                    <input readonly @click="btn(7)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="7">

                    <input readonly @click="btn(8)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="8">


                    <input readonly @click="btn(9)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="9">


                    <input readonly @click="btn('%')"
                        class="w-20 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="%">


                </div>
                <div class="flex flex-wrap justify-between">
                    <input readonly @click="btn(4)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="4">


                    <input readonly @click="btn(5)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="5">


                    <input readonly @click="btn(6)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="6">


                    <input readonly @click="btn('*')"
                        class="w-20 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="*">


                </div>
                <div class="flex flex-wrap justify-between">
                    <input readonly @click="btn(1)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="1">


                    <input readonly @click="btn(2)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="2">


                    <input readonly @click="btn(3)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="3">


                    <input readonly @click="btn('-')"
                        class="w-20 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="-">


                </div>
                <div class="flex flex-wrap justify-between">
                    <input readonly @click="btn('ac')"
                        class="w-12 h-12 rounded-full bg-[#D7E4C0] text-center text-[#265073] font-kdam text-lg" value="AC">


                    <input readonly @click="btn(0)"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="0">


                    <input readonly @click="calculate()"
                        class="w-12 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="=">


                    <input readonly @click="btn('+')"
                        class="w-20 h-12 bg-[#2D9596] text-center text-[#F0F3FF] font-kdam text-lg" value="+">


                </div>
            </div>
        </div>
    </div>
</template>
