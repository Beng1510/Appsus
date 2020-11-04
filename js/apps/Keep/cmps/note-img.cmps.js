
export default {
    props: ['info', 'id'],
    template: `
        <section class="note-img">

            <h3> 
                {{info.title}}
            </h3>

            <img :src="info.url" :title="info.title">

        </section>
`,

}