var assert = require('assert');
import Vue from 'vue';
// import Hello from '@/components/Hello'
import SearchInput from '../components/search-input.vue';

// describe('Hello.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(Hello)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.hello h1').textContent)
//       .to.equal('Welcome to Your Vue.js App')
//   })
// })

describe('search-input.vue', () => {
	it('sets the correct default data', () => {
		// expect(typeof SearchInput.data).to.equal('function'); 
		assert.equal('function', typeof SearchInput.data);

		const defaultData = SearchInput.data();
		// expect(typeof defaultData.state).to.equal('object');
		assert.equal('object', typeof defaultData.state);
	})

	// it('should has "searchInput" class and <input> element', () => {
	// 	const propsData = {
	// 		searchFunction: function(){
	// 			console.log('searchFunction');
	// 		},
	// 		endSearchFunction: function(){
	// 			console.log('endSearchFunction');
	// 		},
	// 		searchState: {
	// 			focus: false,
 //        searchText: '',
 //        blur: false
	// 		},
	// 		dataList: []
	// 	};

	// 	const Constructor = Vue.extend(SearchInput);
	// 	const vm = new Constructor(propsData).$mount();



	// });
});
