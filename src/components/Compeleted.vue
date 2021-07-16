<template>
    <div>
        <div v-for="(task, index) in compoletedTask" key="index">
            {{ task.task }}
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['compoletedTask']),
    },
};
</script>
