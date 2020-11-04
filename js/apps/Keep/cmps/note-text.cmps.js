

export default {
    props: ['info', 'id'],
    template: `
        <section class="note-text">

            <h2>
                {{info.txt}}
            </h2>


            <div class="keep-list-controls">
                      
                            <div class="colors">
                                <span class="color" style="background-color: #006D77" @click="$emit('colorChange','#006D77')"></span>
                                <span class="color" style="background-color: #83C5BE" @click="$emit('colorChange','#83C5BE')"></span>
                                <span class="color" style="background-color: #EDF6F9" @click="$emit('colorChange','#EDF6F9')"></span>
                                <span class="color" style="background-color: #FFDDD2" @click="$emit('colorChange','#FFDDD2')"></span>
                                <span class="color" style="background-color: #E29578" @click="$emit('colorChange','#E29578')"></span>  
                            </div>
                   </div>
        </section>
`,



}