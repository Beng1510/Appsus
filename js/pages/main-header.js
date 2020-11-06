
export default {
   
    template: `
        <section class="main-header">
          
            <nav class="header-container flex space-between align-center">
                <div class="logo flex"><router-link to="/" exact>Appsus</router-link></div>  
            <!-- <h2 class="header-title">Appsus</h2> -->
                <div class="header-links flex ">
                    
                    <router-link to="/" exact>Home</router-link> 
                    <router-link to="/book" exact> Miss Books</router-link> 
                    <router-link to="/keep" exact>Miss Keep</router-link> 
                    <router-link to="/mail" exact>Mister Mail</router-link> 
                    <router-link to="/about">About Us</router-link> 
                </div>

                <!-- <span @click="toggleMenu" class="fas fa-th hamburger"></span> -->

            </nav>
     
        </section>
    `,
    methods: {
        toggleMenu() {
            console.log('toggling');
        }
    },
    components: {
       
    }
}