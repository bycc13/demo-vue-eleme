<template>
  <div>
    <div>---------------------------------------------------------</div>

    <div 
      v-text="msg" 
      :href="msg"
    >
      <span>v-text</span>
    </div>
    <input type="text" v-model="msg">
    
    <div>---------------------------------------------------------</div>

    <ul>
      <li 
        v-for="(item, index) in items" 
        :key="item.id" 
      >
        {{item}} + {{index}}
      </li>
    </ul>

    <div>---------------------------------------------------------</div>

    <button 
      @click="justClick()" 
      :class="[
        { 'active': active }
      ]" 
    >
      just click
    </button>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" >
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" >
    </template>

    <template>
      <label>Username</label>
      <input v-show="active" placeholder="Enter your username" >
    </template>

    <div>---------------------------------------------------------</div>

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

    <div>---------------------------------------------------------</div>

    <button @click="filterBtn()">filterdd</button>

    <div>---------------------------------------------------------</div>

    <ul>
      <template >
        <li v-for="(item, index) in items" :key="index" :href="index" v-if="item === 2">{{item}}</li>
      </template> 
    </ul>

    <div>---------------------------------------------------------</div>

    <dialog open>
      <p>Greetings, one and all!</p>
    </dialog>

    <div>---------------------------------------------------------</div>

    <div>
      <button @click="counter += 1">add 1</button>
      <p>The button abover has been clicked {{counter}} times</p>
    </div>

    <div>---------------------------------------------------------</div>

    <input @click.ctrl ="keyUpFun()" >

    <div>---------------------------------------------------------</div>

    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack3" v-model="checked">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="Joh3n" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mi3ke" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
      <span>Checked names: {{ checked }}</span>
      <input 
        type="text"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      >
    </div>

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
      checkedNames: [],
      checked: true,
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
      ],
      counter: 0
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
    },
    keyUpFun () {
      // this.config.keyCodes.c = 112
      console.log('keyup: 13')
    }
  }
}

</script>

<style>

</style>

