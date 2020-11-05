
export default {
    template: `
    <section class="note-colors">
        <div class="colors">
    
                      
                     
                          <span class="color" style="background-color: #99C1DE" @click="$emit('colorChange','#99C1DE')"></span>
                          <span class="color" style="background-color: #BCD4E6" @click="$emit('colorChange','#BCD4E6')"></span>
                          <span class="color" style="background-color: #C5DEDD" @click="$emit('colorChange','#C5DEDD')"></span>
                          <span class="color" style="background-color: #FAD2E1" @click="$emit('colorChange','#FAD2E1')"></span>
                          <span class="color" style="background-color: #EDDCD2" @click="$emit('colorChange','#EDDCD2')"></span>  
                      
            
            <!-- <span class="color" style="background-color: #C49E85" @click="colorChange('#C49E85')"></span> -->
        </div>
    </section>
    `,
    methods: {
        // colorChange(color) {
        //     this.$emit('colorChange', color)
        // }
    }
}