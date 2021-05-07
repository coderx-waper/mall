<template>
    <div class="TabBarItem" @click="itemClick" :style="normalStyle">
        <div v-if="!isActive">
            <slot name="ions"></slot>
        </div>
        <div v-else>
            <slot name="ions-active"></slot>
        </div>
        <!-- 动态绑定 style -->
        <div :style="activeStyle">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        path: String, // 跳转的路径
        activeColor: {
            type: String, // 活跃时候的文字颜色
            default: '#d81e06'
        },
        normalColor: {
            type: String, // 正常时候的文字颜色
            default: '#bfbfbf'
        }
    },
    data() {
        return {}
    },
    name: 'TabBarItem',
    methods: {
        itemClick() {
            if (this.$route.path !== this.path) {
                this.$router.replace(this.path)
            }
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? { color: this.activeColor } : {}
        },
        normalStyle() {
            return this.normalColor ? { color: this.normalColor } : {}
        }
    }
}
</script>

<style scoped>
.active {
    color: #d81e06,
}

.TabBarItem {
    margin: 5px;
    font-size: 12px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
