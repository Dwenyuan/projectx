<!-- 脚本管理弹出框，主要用于添加脚本 -->
<template>
    <!-- Modal -->
    <div class="modal fade" id="scriptManager" tabindex="-1" role="dialog" aria-labelledby="scriptManager" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">上传脚本</h4>
                </div>
                <div class="modal-body">
                   <form action="uploadscript" method="post" formenctype="multipart/form-data">
                       <input type="file" class="btn" multiple="true">
                   </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    mounted() {
        
    }
}
</script>
<style type="text/css"></style>
