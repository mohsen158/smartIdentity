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
 <div  style="  margin:  auto; width: 800px;margin-top:250px">
   <router-link to="/"> <sui-button >Back</sui-button></router-link>
  <sui-segment stacked="tall" >
   <sui-form>
    <sui-form-field>
      <label>First Name</label>
      <input v-model="firstName" placeholder="First Name" >
    </sui-form-field>
    <sui-form-field>
      <label>Last Name</label>
      <input  v-model="lastName"  placeholder="Last Name" >
    </sui-form-field>
    <sui-form-field>
    </sui-form-field>
    <sui-button v-on:click="verify" type="submit">verify(verify existing identity)</sui-button>
  </sui-form>

  </sui-segment>
  <!-- </sui-grid> -->
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










  <div>
    <sui-button @click.native="toggle">Show Modal</sui-button>
    <sui-modal v-model="open">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content image>
        <sui-image wrapped size="medium" src="static/images/avatar/large/rachel.png" />
        <sui-modal-description>
          <sui-header>Default Profile Image</sui-header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="toggle">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
  </div>



</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
 import {Courses} from  '../scripts/smartContract'

import MerkleTree from 'merkletreejs'
import SHA256 from 'crypto-js/sha256';

export default {
  name: 'home',
  data:function (){
return {firstName:'',
open:false,
lastName:''}
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    verify:function(){
      
      const leaves = [this.firstName,this.lastName].map(x => SHA256(x))
const tree = new MerkleTree(leaves, SHA256)
const root = tree.getRoot().toString('hex')
const leaf = SHA256('a')
const proof = tree.getProof(leaf)
console.log('tree') // true
var that=this
Courses.getInstructor(function(error, result){
	if(!error){
                  
                  if(root==result[0])
                  {
                    that.toggle()
                    console.log('okkkkkkkkkkkkkkkkkkkk');
                  }
 	  console.log('event recieved:',result[0]);
	  }
   else
	 console.error(error);
   });


      //  Courses.setInstructor(root,23,function (){});

      // console.log(this.firstName);
    }
  },
  components: {
    HelloWorld
  }
}
</script>
