
export default {

    template: `
        <section class="main-header">
          
            <nav class="header-container flex space-between align-center">
                <div class="logo flex"><router-link to="/" exact>Appsus</router-link></div>  
                
                <div class="header-links flex" v-if="showHamburger" >
                    
                    <router-link to="/" exact>Home</router-link> 
                    <router-link to="/book" exact> Miss Books</router-link> 
                    <router-link to="/keep" exact>Miss Keep</router-link> 
                    <router-link to="/mail" exact>Mister Mail</router-link> 
                    <router-link to="/about">About Us</router-link> 
                </div>

                <span @click="toggleMenu" class="fas fa-th hamburger"></span>
               
            </div>
            </nav>
     
        </section>
    `,
    data() {
        return {

            showHamburger: true
        }
    },
    methods: {
        toggleMenu() {
            this.showHamburger = !this.showHamburger
        }
    },
}