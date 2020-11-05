import { eventBus } from "../service/event-bus.js"

export default {
    template: `
        <section class="user-msg" v-if="msg" :class="msgClass">
            <h2>{{msg.type}} <button @click="msg=null">x</button></h2>
            <p>{{msg.txt}}</p>

        </section>
    `,
    data() {
        return {
            msg: null,
        }
    },
    computed: {
        msgClass() {
            return { success: this.msg.type === 'Success', error: this.msg.type === "Error" }
        }
    },
    created() {
        eventBus.$on('show-msg', msg => {
            this.msg = msg
            setTimeout(() => {
                this.msg = null;
            }, 3000);
        })

    }
}