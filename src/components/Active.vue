<template>
    <div>
        <div v-for="(task, index) in ActiveTask">
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
        ...mapGetters(['ActiveTask']),
    },
};
</script>
