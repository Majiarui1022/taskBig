<template>
    <div class="mw-tabs">
        <div class="mw-tabs_header">
            <div class="mw-tabs_nav-wrap">
                <div class="mw-tabs__nav-scroll">
                    <div class="mw-tabs__nav is-top is-stretch"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scope>
    .mw-tabs{
        .tabs_header{
            padding: 0;
            position: relative;
            margin: 0 0 15px;
            .mw-tabs_nav-wrap{
                overflow: hidden;
                margin-bottom: -1px;
                position: relative;
                .mw-tabs__nav-scroll{
                    overflow: hidden;
                    .is-stretch{
                        min-width: 100%;
                        display: flex;
                    }
                    .el-tabs__nav {
                        white-space: nowrap;
                        position: relative;
                        transition: transform .3s;
                        float: left;
                        z-index: 2;
                    }
                }
            }
        }
    }
</style>