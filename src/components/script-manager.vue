<template>
    <!-- Modal -->
    <div class="modal fade" id="scriptManager" tabindex="-1" show="true" role="dialog" aria-labelledby="scriptManager">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">上传脚本</h4>
                </div>
                <div class="modal-body">
                    <label class="btn btn-primary"><span ref="file">选择文件</span></label>
                    <div class="list-group">
                        <a href="javascript:;" class="list-group-item" v-for="item in uploadfiles">
                            <h6 class="list-group-item-heading">{{item.file.name}}</h6>
                            <p class="list-group-item-text">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-info" role="progressbar" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100" :style="{width:item.percent*100+'%'}">
                                        {{item.percent*100}}%
                                    </div>
                                </div>
                            </p>
                        </a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" @click="cleanQueued">Close</button>
                    <button type="button" class="btn btn-primary" @click="startupload">开始上传</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import WebUploader from 'webuploader'
export default {
    props: [],
    mounted() {
        this.$nextTick(() => {

        })
    },
    data() {
        return {
            uploader: null,
            UploaderSwf: require('../../node_modules/webuploader/dist/Uploader.swf'),
            uploadfiles: [
                /*{
                                file:{},
                                precent:0,
                                error:false,
                                errormsg:''
                            }*/
            ]
        }
    },
    computed: {

    },
    methods: {
        createUploader(url) {
            if (this.uploader) this.uploader.destroy()
            this.uploader = WebUploader.create({
                swf: this.UploaderSwf,
                server: url,
                pick: this.$refs.file,
                resize: false
            })
            this.uploader.on('fileQueued', file => this.uploadfiles.push({
                file,
                percent: 0,
                error: false
            }))
            this.uploader.on('uploadProgress',
                (file, percentage) => this.uploadfiles.map(value => value.file === file ? value.percent = percentage : ''))
            this.uploader.on('uploadError',
                (file, reason) => this.uploadfiles.map(value => value.file === file ? value.error = true : ''))
        },
        cleanQueued() {
            // 请空上传队列
            this.uploadfiles = []
            this.uploader.getFiles().map(value => this.uploader.removeFile(value))
        },
        startupload() {
            this.uploader ? this.uploader.upload() : ''
        }
    }
}
</script>
