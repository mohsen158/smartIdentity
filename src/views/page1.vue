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

<!-- <sui-grid divided="vertically" style="  margin:250px auto; width: 50%;"  > -->
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
    <sui-button v-on:click="save" type="submit">Save(create transaction)</sui-button>
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
 import {Courses} from  '../scripts/smartContract'

import MerkleTree from 'merkletreejs'
import SHA256 from 'crypto-js/sha256';
// const SHA256 = require('crypto-js/sha256')



// var Courses = CoursesContract.at('0xbB92a826526f7B5de92434811Eb6EFaE289A5A06');
// Courses.setInstructor('Stephen Hawking', 76)
export default {
  name: 'home',
  data:function (){
return {firstName:'',
lastName:''}
  },
  methods: {
    save:function(){
      
      const leaves = [this.firstName,this.lastName].map(x => SHA256(x))
const tree = new MerkleTree(leaves, SHA256)
const root = tree.getRoot().toString('hex')
const leaf = SHA256('a')
const proof = tree.getProof(leaf)
console.log('tree') // true
       Courses.setInstructor(root,23,function (){});

      // console.log(this.firstName);
    }
  },

  components: {
    HelloWorld
  }
}
</script>
