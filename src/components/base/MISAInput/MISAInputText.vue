<template>
    <!-- Input Text -->
    <div class="subcontent__form-input">
        <div class="subcontent__label">
          <label class="tooltip subcontent__name"  v-if="showLabel">
            {{label}}
            <span class="subcontent__required" v-if="required">*</span>
            <span v-if="isInputEmpty" class="error-message" :style="errorStyle">{{errorMessage}}</span>
            <MISATooltip v-if="showTooltip" :tooltip="tooltip"></MISATooltip>
          </label>
        </div>
        <input 
            :class="{ 'error': isInputEmpty }"    
            type="text"
            :id="id"
            :style="style"
            :name=" name"
            class="input__text"
            v-model="text"
            @input="handleInput"
        />
    </div>
</template>
  
<script>
import MISATooltip from '../MISATooltip.vue';

export default {
    name: 'MISAInputText',
    props: ["label", "id", "style", "name", "showLabel", "required","tooltip", "showTooltip", "errorStyle"],
    data() {
        return {
            text: "",
            isInputEmpty: false
        };
    },
    components: { MISATooltip },
    methods: {
        handleInput() {
                this.isInputEmpty = this.required && this.text.trim() === "";
            
        },
    },
    computed:{
        errorMessage() {
            return this.label + " không để trống"
        }
    }
};
</script>

<style>
@import url('../../../css/base/input.css');
@import url('../../../css/base/tooltip.css');
</style>
  