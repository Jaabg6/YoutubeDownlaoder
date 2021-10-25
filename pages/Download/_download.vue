<template>
    <div>
        <h1 class="text-center">Download {{this.$route.params.download}}</h1>

    <!-- <iframe :src="`https://api.vevioz.com/@api/button/mp3/320/${this.$route.params.download}`" class="d-opacity" scrolling="no"></iframe> -->
<iframe :src="`https://api.vevioz.com/@api/button/mp3/320/${this.$route.params.download}`" style="width:100%;height:150px;border:none;" scrolling="no"></iframe>
        <!-- <DownloadLink :title="'hola'"/> -->
    </div>
</template>

<script>
// import DownloadLink from "../components/DownloadLink";
export default {
    components:{
        // DownloadLink
    }
    
}
</script>