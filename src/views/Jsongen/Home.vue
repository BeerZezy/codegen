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
                            <b-form-textarea
                                style="color:#fff;background-color:#313c5f;border:none;"
                                id="textarea-no-resize"
                                rows="12"
                                no-resize
                                v-model="fieldName"
                            ></b-form-textarea>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col sm="6">
                    <h5 style="color:#d8dce6;font-size:16px;">Value</h5>
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-form-textarea
                                style="color:#fff;background-color:#313c5f;border:none;"
                                id="textarea-no-resize"
                                rows="12"
                                no-resize
                                v-model="valueField"
                            ></b-form-textarea>
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
                            <b-form-textarea
                                style="color:#fff;background-color:#313c5f;border:none;"
                                id="textarea-no-resize"
                                disabled
                                rows="8"
                                no-resize
                                v-model="result"
                            ></b-form-textarea>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <b-row style="color:#fff;padding-top:5px;padding-bottom:20px;">
                <b-col sm="12" style="text-align:right;">
                    <b-button @click="copyResult()" style="background-color:#3498db;">Copy</b-button>
                </b-col>
            </b-row>
        </b-container>
  </div>
</template>

<script>
export default {
    data () {
        return {
            fieldName: '',
            valueField: '',
            result: '',
            j: {}
        }
    },
    methods: {
        process () {
            let x = {
                rs_body: {
                    field_name: this.fieldName
                }
            }

            let strObj = JSON.stringify(x, undefined, 4);

            this.result = strObj
        },
        copyResult () {}
    }
}
</script>

<style>
</style>