import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        newTask: '',
        idTask: 0,
        shown: true,
        tasks: [
            {
                id: '',
                task: '',
                status: 'active',
            },
        ],
    },
    getters: {
        ActiveTask(state) {
            return state.tasks.filter((task) => task.status === 'active');
        },
        compoletedTask(state) {
            return state.tasks.filter((task) => task.status === 'completed');
        },
    },
    mutations: {
        addNewTask(state, task) {
            console.log('state: ', state.tasks);
            state.tasks = [
                ...state.tasks,
                { id: state.idTask, task: task, status: 'active' },
            ];
            state.idTask++;
        },
        deleteTask(state, id) {
            state.tasks.splice(id, 1);
        },
        compoletedTask(state, id) {
            state.tasks[id].status = 'completed';
            console.log(state.tasks);
        },
    },
    actions: {},
    modules: {},
});
