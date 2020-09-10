<template>
  <div>
        <b-container fluid>
            <b-row style="color:#fff;padding-top:5px;padding-bottom:20px;">
                <b-col sm="12">
                    <h5 style="color:#d8dce6;">{ JSON generator }</h5>
                </b-col>
            </b-row>
            <b-row style="padding-bottom:20px;">
                <b-col sm="6">
                    <h5 style="color:#d8dce6;font-size:16px;">Field</h5>
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-row>
                                <div class="line-number">
                                    <ul>
                                        <li v-for="(linenumber, index) in lineCountFieldName" :key="index">{{linenumber}}</li>
                                    </ul>
                                </div>
                                <b-col sm="11">
                                    <b-form-textarea
                                        style="color:#fff;background-color:#313c5f;border:none;"
                                        id="textarea-no-resize"
                                        rows="12"
                                        no-resize
                                        v-model="fieldName"
                                    ></b-form-textarea>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col sm="6">
                    <h5 style="color:#d8dce6;font-size:16px;">Value</h5>
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-row>
                                <div class="line-number">
                                    <ul>
                                        <li v-for="(linenumber, index) in lineCountValueField" :key="index">{{linenumber}}</li>
                                    </ul>
                                </div>
                                <b-col sm="11">
                                    <b-form-textarea
                                        style="color:#fff;background-color:#313c5f;border:none;"
                                        id="textarea-no-resize"
                                        rows="12"
                                        no-resize
                                        v-model="valueField"
                                    ></b-form-textarea>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <b-row style="color:#fff;padding-top:5px;padding-bottom:40px;">
                <b-col sm="12" style="text-align:right;">
                    <b-button @click="process()" style="background-color:#3498db;">Process</b-button>
                </b-col>
            </b-row>
            <b-row style="color:#fff;padding-top:5px;">
                <b-col sm="12">
                    <h5 style="color:#d8dce6;font-size:16px;">Result</h5>
                </b-col>
            </b-row>
            <b-row style="padding-bottom:20px;">
                <b-col sm="12">
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-row>
                                <div class="line-number">
                                    <ul>
                                        <li v-for="(linenumber, index) in lineCountResult" :key="index">{{linenumber}}</li>
                                    </ul>
                                </div>
                                <b-col sm="11">
                                    <b-form-textarea
                                        style="color:#fff;background-color:#313c5f;border:none;"
                                        id="textarea-no-resize"
                                        disabled
                                        rows="8"
                                        no-resize
                                        v-model="result"
                                    ></b-form-textarea>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <b-row v-if="result != ''" style="color:#fff;padding-top:5px;padding-bottom:20px;">
                <b-col sm="12" style="text-align:right;">
                    <b-button @click="copyResult()" style="background-color:#3498db;">Copy</b-button>
                </b-col>
            </b-row>
        </b-container>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    data () {
        return {
            fieldName: '',
            valueField: '',
            result: ''
        }
    },
    computed: {
        lineCountFieldName () {
            // Return number of lines using regex if not empty
            return this.fieldName.length ? this.fieldName.split(/\r\n|\r|\n/).length : 0
        },
        lineCountValueField () {
            return this.valueField.length ? this.valueField.split(/\r\n|\r|\n/).length : 0
        },
        lineCountResult() {
            return this.result.length ? this.result.split(/\r\n|\r|\n/).length : 0
        }
    },
    methods: {
        process () {
            // check empty
            if (this.fieldName == '' || this.valueField == '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Field or value is empty!'
                })
                return
            }

            let field_name = this.fieldName.split('\n')
            let value_field = this.valueField.split('\n')

            // filter value not empty
            if (field_name.length > 0 && value_field.length > 0) {
                field_name = field_name.filter((el) => { return el != '' })
                value_field = value_field.filter((el) => { return el != '' })
            }
            
            // console.log('field_name', field_name)
            // console.log('value_field', value_field)

            // compare index two Arrays
            let is_index = field_name.length == value_field.length
            if (is_index == false) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Field and value not match!'
                })
                return
            }

            // remove all whitespace in field_name
            field_name = field_name.map((el) => {
                return el.replace(/ /g, '')
                // return e.trim()
            })

            // prepare json data
            let obj = { rs_body: {} }
            field_name.forEach((key, i) => {
                obj.rs_body[key] = value_field[i]
            })

            let strObj = JSON.stringify(obj, undefined, 4)

            this.result = strObj
        },
        copyResult () {
            this.$copyText(this.result).then((e) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Copied',
                    showConfirmButton: false,
                    timer: 1000
                })
                // console.log(e)
            }, (e) => {
                alert('Can not copy')
                console.log(e)
            })
        }
    }
}
</script>

<style>
    .line-number {
        border-right: 1px solid red;
    }
    .line-number ul {
        padding: 6px 12px;
        font-size: 1rem;
        list-style-type: none;
    }
    .line-number ul li {
        color:#ffffff80;
    }
</style>