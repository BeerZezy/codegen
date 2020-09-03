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
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col sm="6">
                    <h5 style="color:#d8dce6;font-size:16px;">Value</h5>
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <b-row style="color:#fff;padding-top:5px;padding-bottom:40px;">
                <b-col sm="12">
                    <b-button style="background-color:#3498db;">Process</b-button>
                </b-col>
            </b-row>
            <b-row style="color:#fff;padding-top:5px;">
                <b-col sm="12">
                    <h5 style="color:#d8dce6;font-size:16px;">Result</h5>
                </b-col>
            </b-row>
            <b-row style="padding-bottom:40px;">
                <b-col sm="12">
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>