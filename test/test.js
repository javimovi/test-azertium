import { mount } from '@vue/test-utils'
import Main from '@/views/Main.vue';
import {buildStore} from "@/stores/Store";


/**
 * Test para comprobar que el componente de búsqueda está bien renderizado, tras el evento Mount
 */
test('Check input search component', () => {
  const wrapper = mount(Main, {
    store: buildStore()
  })
  
  const input = wrapper.find('.inputSearch')
  expect(input).not.toBeNull()
})