
export default {
    template: `
    <section class="note-colors">
        <div class="colors">
            
    <span class="color" style="background-color: #03045E" @click="$emit('colorChange','#03045E')"></span>
    <span class="color" style="background-color: #0077B6" @click="$emit('colorChange','#0077B6')"></span>
    <span class="color" style="background-color: #00B4D8" @click="$emit('colorChange','#00B4D8')"></span>
    <span class="color" style="background-color: #90E0EF" @click="$emit('colorChange','#90E0EF')"></span>
    <span class="color" style="background-color: #CAF0F8" @click="$emit('colorChange','#CAF0F8')"></span>                    
     
        </div>
    </section>
    `,
    methods: {
        // colorChange(color) {
        //     this.$emit('colorChange', color)
        // }
    }
}