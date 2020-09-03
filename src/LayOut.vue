<template>
    <div>
        <v-master/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import master from '@/components/layouts/Master'

export default {
    components: {
        'v-master': master
    },
    data () {
        return {
            msg: 'navbar'
        }
    }
}
</script>

<style>
    .content {
        margin-top: 16px;
    }
</style>