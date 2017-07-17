<template>
  <el-input 
  type='text' 
  icon="search" 
  class='searchInput' 
  placeholder='搜索问题'  
  v-model='state.text' 
  @focus='focusSearch' 
  @blur='blurSearch'
  @click='searchQuestion'
  @keyup.enter.native='searchQuestion'
  />
</template>

<script>
  import {
    searchPresetQuestion
  } from 'api/api.js';
  
  import {
    formatRow
  } from 'assets/js/util.js';

  export default {
    name: 'search-input',
    props: {
      searchFunction: {
        type: Function,
        required: true
      },
      endSearchFunction: {
        type: Function,
        required: false,
        default: function() {}
      },
      searchState: {
        // 包含的状态:
        // {
        //     focus: false,
        //     searchText: '',
        //     blur: false   
        // }
        type: Object,
        required: true
      },
      dataList: {
        type: Array,
        required: true
      }
    },
    data: function() {
      return {
        state: {
          focus: false,
          text: '',
          blur: false,
          searched: false
        }
        // searchText: '',
        // endSearch: false
      }
    },
    watch: {
      state: {
        immediate: true,
        deep: true,
        handler: function(value, oldValue) {
          console.log('state changed', this.state);
          Object.assign(this.searchState, this.state);
        }
      }
    },
    methods: {
      focusSearch: function() {
        this.state.focus = true;
        this.state.blur = false;
        // this.searchState.endSearch = false;
      },
      blurSearch: function() {
        if (!this.state.text) {
          // this.searchState.endSearch = true;
          this.state.focus = false;
          this.state.blur = true;
          this.state.searched = false;

          this.endSearchFunction && this.endSearchFunction();
        }
      },
      searchQuestion: function() {
        if (!this.state.text) {
          return;
        }
        this.state.searched = true;

        this.searchFunction(this.state.text).then(data => {
          if (data.err == 0) {
            console.log('getSearchQuestion', data);
            this.dataList.splice(0, this.dataList.length);

            if (data.rows) {
              this.dataList.push(...formatRow(data));
            }

          }
        })
      },
    }
  }
</script>

<style lang='scss'>
  @import '~assets/css/_variable';

  .searchInput {
		/*input {
			border-color: transparent;
		}*/
    .el-input__icon {
      color: $lightGray;

      &:hover {
        cursor: pointer;
      }
    }
	}
</style>