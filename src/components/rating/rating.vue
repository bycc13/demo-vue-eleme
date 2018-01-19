<template>
  <div >
    <button 
      @click="justClick()" 
      :class="[
        { 'active': active }
      ]" 
    >
      just click
    </button>

    <div>{{msg}}</div>
    <div 
      v-text="msg" 
      :href="msg"
    >
      <span>v-text</span>
    </div>

    <input type="text" v-model="msg">

    <ul>
      <li 
        v-for="(item, index) in items" 
        :key="item.id" 
      >
        {{item}} + {{index}}
      </li>
    </ul>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>

    <template>
      <label>Username</label>
      <input v-show="active" placeholder="Enter your username" >
    </template>

    <ul>
      <li 
        v-for="item in person" 
        :key="item.index" 
        :id="item.index" 
      >
        {{item.name}} - {{item.email}}
        <a 
          href="javascript:;" 
          @click="deleteItem(item)"
        >
          delete
        </a>
      </li>
    </ul>

    <button @click="filterBtn()">filterdd</button>

    <ul>
      <template >
        <li v-for="(item, index) in items" :key="index" :href="index" v-if="item === 2">{{item}}</li>
      </template> 
    </ul>

    <dialog open>
      <p>Greetings, one and all!</p>
    </dialog>

  </div>
  
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'teee',
      items: [1, 2, 3, 52554, 5],
      active: false,
      loginType: 'username',
      person: [
        {
          name: 'kacj',
          email: 'kacj@163.com',
          age: 325
        },
        {
          name: 'yoona',
          email: 'yoona@163.com',
          age: 2
        },
        {
          name: 'ty',
          email: 'ty@163.com',
          age: 8
        }
      ]
    }
  },
  methods: {
    deleteItem (item) {
      this.person.splice(item, 1)
    },
    justClick () {
      this.active = !(this.active)
      if (this.loginType === 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = 'username'
      }
      this.$nextTick(function () {
        console.log('$nextTick中打印：', this.$el.children[1].innerText)
      })
      console.log('直接打印：', this.$el.children[1].innerText)
    },
    filterBtn () {
      this.person = this.person.filter(function (item) {
        return item.match(/2/)
      })
    }
  }
}
</script>

<style>

</style>

