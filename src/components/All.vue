<template>
    <div class="to-do-home">
        <div class="to-do-home-add-task">
            <button @click="addTask" class="btn btn-success mr-5">
                <FontAwesomeIcon color="white" icon="plus-square" /> افزودن
            </button>
            <input
                class="to-do-home-add-task-input"
                placeholder="کار جدید را وارد کنید..."
                v-model.lazy="newTask"
            />
        </div>
        <h4
            v-if="index !== 0"
            class="to-do-home-items"
            dir="rtl"
            v-for="(task, index) in getTasks"
            :key="index"
        >
            <span v-if="shown"> {{ index }}- {{ task.task }} </span>
            <span>
                <!-- <button class="btn btn-danger"> -->
                <FontAwesomeIcon
                    v-if="task.task"
                    @click="deleteTask(index)"
                    color="red"
                    icon="trash"
                />
                <!-- </button> -->
                <!-- <button class="btn btn-info"> -->
                <!-- <FontAwesomeIcon color="gray" icon="edit" /> -->
                <!-- </button> -->
                <!-- <button class="btn btn-success"> -->
                <FontAwesomeIcon
                    v-if="task.task"
                    @click="compoletedTask(index)"
                    color="green"
                    icon="check-square"
                />
                <!-- </button> -->
            </span>
        </h4>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            newTask: '',
            idTask: 0,
            shown: true,
            // tasks: [
            //     {
            //         id: '',
            //         task: '',
            //         status: 'active',
            //     },
            // ],
        };
    },
    computed: {
        // ...mapState(['tasks']),
        getTasks() {
            return this.$store.state.tasks;
        },
    },
    created() {
        console.log('allllll: ', this.getTasks);
    },
    methods: {
        ...mapMutations(['addNewTask', 'deleteTask', 'compoletedTask']),
        addTask() {
            this.addNewTask(this.newTask);
            this.newTask = '';
        },
        // addTask() {
        //     this.$store.commit('addNewTask', { task: this.newTask });
        //     console.log(this.tasks);
        // this.tasks = [
        //     ...this.tasks,
        //     { id: this.idTask, task: this.newTask, status: 'active' },
        // ];
        // this.newTask = '';
        // this.idTask++;
        // console.log(this.tasks);
        // },
        // deleteTask(id) {
        //     this.tasks.splice(id, 1);
        // },
        // compoletedTask(id) {
        //     this.tasks[id].status = 'completed';
        //     console.log(this.tasks);
        // },
    },
};
</script>

<style lang="scss">
.to-do-home {
    &-add-task {
        // border: 1px solid blue;
        &-input {
            width: 60%;
            height: 50px;
            border: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
            text-align: right;
            padding-right: 20px;
            margin-left: 20px;
            border-radius: 10px;
            direction: rtl;
        }
    }
    &-items {
        border: 1px solid rgba(0, 0, 0, 0.1);
        width: 70%;
        margin-left: 15%;
        margin-top: 30px;
    }
}
</style>
