<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <!-- 
  <div class="home" >
    
    <router-link   to="/about">
  <button>sdfdfsd</button>
</router-link>
    
  </div>-->
  <div style="  margin:  auto; width: 800px;padding-top:250px">
    <router-link to="/">
      <sui-button>Back</sui-button>
    </router-link>

    <sui-segment stacked="tall">
      <sui-form>
        <sui-grid>
          <sui-grid-row>
            <sui-grid-column :width="8">
              <sui-form-field>
                <label>First Name</label>
                <input v-model="firstName" :disabled="hFirstName != ''" placeholder="First Name">
              </sui-form-field>
            </sui-grid-column>
            <sui-grid-column :width="8">
              <sui-form-field>
                <label>Hash of First Name</label>
                <input v-model="hFirstName" :disabled="firstName != ''" placeholder="First Name">
              </sui-form-field>
            </sui-grid-column>
          </sui-grid-row>

          <sui-grid-row>
            <sui-grid-column :width="8">
              <sui-form-field>
                <label>Last Name</label>
                <input v-model="lastName" :disabled="hLastName != ''" placeholder="Last Name">
              </sui-form-field>
            </sui-grid-column>
            <sui-grid-column :width="8">
              <sui-form-field>
                <label>Hash of Last Name</label>
                <input v-model="hLastName" :disabled="lastName != ''" placeholder="Last Name">
              </sui-form-field>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>

        <sui-form-field></sui-form-field>
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
    </div>-->
    <div>
      <sui-modal v-model="open">
        <sui-modal-header>Resualt</sui-modal-header>
        <sui-modal-content image>
          <sui-image
            wrapped
            size="small"
            src="https://cdn.iconscout.com/icon/free/png-256/grinning-face-smile-emoji-happy-37705.png"
          />
          <sui-modal-description>
            <sui-header>Information is valid</sui-header>
            <p>means that your entered identity is completly compatible with correct information</p>
            <p>:D</p>
          </sui-modal-description>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button positive @click.native="toggle">OK</sui-button>
        </sui-modal-actions>
      </sui-modal>

      <sui-modal v-model="openError">
        <sui-modal-header>Resualt</sui-modal-header>
        <sui-modal-content image>
          <sui-image
            wrapped
            size="small"
            src="https://png.pngtree.com/element_our/md/20180626/md_5b321cab44ec7.png"
          />
          <sui-modal-description>
            <sui-header>Information is not valid</sui-header>
            <p>means that your entered identity is not compatible with correct information</p>
            <p>:/</p>
          </sui-modal-description>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button positive @click.native="toggleError">OK</sui-button>
        </sui-modal-actions>
      </sui-modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Courses } from "../scripts/smartContract";

import MerkleTree from "merkletreejs";
import SHA256 from "crypto-js/sha256";

export default {
  name: "home",
  data: function() {
    return {
      firstName: "",
      hFirstName: "",
      hLastName: "",
      open: false,
      openError: false,
      lastName: ""
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    toggleError() {
      this.openError = !this.openError;
    },
    verify: function() {
      if (
        (this.firstName != "" || this.hFirstName != "") &&
        (this.lastName != "" || this.hLastName != "")
      ) {
        let leaves = [];
        leaves = [this.firstName, this.lastName].map(x => SHA256(x));
        this.firstName != ""
          ? (leaves[0] = SHA256(this.firstName))
          : (leaves[0] = this.hFirstName);
        this.lastName != ""
          ? (leaves[1] = SHA256(this.lastName))
          : (leaves[1] = this.hLastName);
        const tree = new MerkleTree(leaves, SHA256);
        const root = tree.getRoot().toString("hex");
        // const proof = tree.getProof(leaf);
        var that = this;
        console.log("root in page2", root);
        Courses.getIdentityHash(function(error, result) {
          if (!error) {
            if (root == result) {
              that.toggle();
              console.log("okkkkkkkkkkkkkkkkkkkk");
            } else {
              that.toggleError();
            }
            console.log("event recieved:", result);
          } else alert(error);
        });
      }
      //  Courses.setInstructor(root,23,function (){});

      // console.log(this.firstName);
    }
  }
};
</script>
