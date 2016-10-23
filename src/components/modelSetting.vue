<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#model" role="tab" data-toggle="tab">模型</a></li>
            <li role="presentation"><a href="#stopPoint" role="tab" data-toggle="tab">集合点</a></li>
            <li role="presentation"><a href="#startTime" role="tab" data-toggle="tab">开始</a></li>
            <li role="presentation"><a href="#stopTime" role="tab" data-toggle="tab">结束</a></li>
            <li role="presentation"><a href="#loopTime" role="tab" data-toggle="tab">运行次数</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="model">模型</div>
            <div role="tabpanel" class="tab-pane" id="stopPoint">Profile</div>
            <div role="tabpanel" class="tab-pane" id="startTime">Messages</div>
            <div role="tabpanel" class="tab-pane" id="stopTime" >Settings</div>
            <div role="tabpanel" class="tab-pane" id="loopTime" >Settings</div>
        </div>
    </div>
</template>
