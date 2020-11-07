
export default {
    template: `
    <section class="home-page ">

        <!-- <h1 class="home-page-title">Welcome</h1> -->

            <section class="home-page-container flex"> 
                
                
                <div class="home-page-img-container flex space-between ">

                   <div class="image-container-home"> 
                       <h2 class="home-page-title">Miss Books</h2>
                            <router-link to="/book" exact>
                                <img src="js/asset/img/book-1.jpeg"/>
                            </router-link> 
                    </div>
                   
                   <div class="image-container-home"> 
                       <h2 class="home-page-title">Miss Keeps</h2>
                            <router-link to="/keep" exact>
                                <img src="js/asset/img/note-1.jpeg"/>
                            </router-link>
                    </div>
                   
                   <div class="image-container-home"> 
                       <h2 class="home-page-title">Mister Mail</h2>
                            <router-link to="/mail" exact>
                                <img src="js/asset/img/mail-1.jpeg"/>
                            </router-link> 
                    </div>
                   
  

                    <!-- <router-link to="/keep" exact><img src="/js/asset/img/note-1.jpeg"/></router-link>
          
                    <router-link to="/mail" exact><img src="/js/asset/img/mail-1.jpeg"/></router-link>  -->
                    <!-- <router-link to="/book" exact><img src="/js/asset/img/book-1.jpeg"/></router-link>
                    <img src="/js/asset/img/note-1.jpeg"/>
                    <img src="/js/asset/img/mail-1.jpeg"/> -->
                </div>
               

            </section>

    </section>
    `,
    methods: {

    },

    created() {
        console.log('home page created');
    },

}