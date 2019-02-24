<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
<!-- 
  <div class="home" >
    
    <router-link   to="/about">
  <button>sdfdfsd</button>
</router-link>
    
     </div> -->

<sui-grid divided="vertically" style="  margin: auto; width: 800px; margin-top:250px"  >
  
    <sui-grid-row :columns="3">
      <sui-grid-column>
<router-link to="/page1">
      <sui-card class="raised link" >
      <sui-card-content>
        <sui-card-meta>Animals</sui-card-meta>
        <sui-image src="/static/images/wireframes/paragraph.png" />
        <sui-card-header>Save identity</sui-card-header>
      </sui-card-content>
      <sui-card-content extra>
        <span  slot="">
           Save identity on blockchain 
        </span>
      </sui-card-content>
    </sui-card></router-link>
      </sui-grid-column>
      <sui-grid-column>
      
     


<sui-card class="raised link">
      <sui-card-content>
        <sui-card-header>Cute Dog</sui-card-header>
        <sui-card-meta>Animals</sui-card-meta>
        <sui-image src="/static/images/wireframes/paragraph.png" />
      </sui-card-content>
      <sui-card-content extra>
        <span slot="" style="text-align:center">
        verify identity
        </span>
      </sui-card-content>
    </sui-card>






      </sui-grid-column>
      <sui-grid-column>
       
       


<sui-card class="raised link">
      <sui-card-content>
        <sui-card-header>Cute Dog</sui-card-header>
        <sui-card-meta>Animals</sui-card-meta>
        <sui-image src="/static/images/wireframes/paragraph.png" />
      </sui-card-content>
      <sui-card-content extra>
        <span slot="right">
          <sui-image src="/static/images/avatar/small/matt.jpg" shape="circular" size="mini" /> Matt
        </span>
      </sui-card-content>
    </sui-card>




      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
  <!-- <div>
    <sui-card class="raised link">
      <sui-card-content>
        <sui-card-header>Cute Dog</sui-card-header>
        <sui-card-meta>Animals</sui-card-meta>
        <sui-image src="/static/images/wireframes/paragraph.png" />
      </sui-card-content>
      <sui-card-content extra>
        <span slot="right">
          <sui-image src="/static/images/avatar/small/matt.jpg" shape="circular" size="mini" /> Matt
        </span>
      </sui-card-content>
    </sui-card>
  </div> -->

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
 import {Courses} from  '../scripts/smartContract'
 
// Courses.getInstructor(function(error, result){
// 	if(!error){
//  	  console.log('event recieved:',result);
// 	  }
//    else
// 	 console.error(error);
//    });

   
        
export default {
  name: 'home',
  components: {
    HelloWorld
  },
 
}
</script>
