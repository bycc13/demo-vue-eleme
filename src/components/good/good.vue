<template>
  <div>
    <div class="pva-select">
      <div class="pva-sleect__tags">
        <span></span>
        <input type="text">
      </div>
      <div class="pva-input is-focus">
        <input type="text" class="pva-input__inner">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'todo1'
        },
        {
          id: 2,
          title: 'todo2'
        },
        {
          id: 3,
          title: 'todo3'
        },
        {
          id: 4,
          title: 'todo4'
        }
      ],
      nextTodoId: 5
    }
  },
  methods: {
    addNewTag () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .pva-select {
    position: relative;
    width: 240px;
    .pva-sleect__tags {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .pva-tag {
      margin: 3px 0 3px 6px;
      box-sizing: border-box;
      border-color: transparent;
      background-color: #f0f2f5;
    }
    .pva-input {
      display: block;
      position: relative;
      font-size: 14px;
      width: 100%;
      &--suffix {


      }
      &__inner {
        padding-left: 30px;
      }
      &.is-focus {
        .pva-input__inner {
          border-color: #409EFF;
        }
      }
    }
  }
  .pva-tag {
    display: inline-block;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 21px;
    border-radius: 4px;
    border: 1px solid rgba(64,158,255,.2);
    white-space: pre-line;
    word-break: break-all;
    // &--info {
    //   box-sizing: border-box;
    //   margin: 3px 0 3px 6px;
    //   background-color: #f0f2f5;
    // }
  }



</style>