import { mount } from '@vue/test-utils';
import router from '../../../src/router';
import Foo from '../../../src/Components/Main.vue';

describe('Foo', () => {
    it('renders a div', () => {
        const wrapper = mount(Foo, {
            router: router
        });
        expect(wrapper.contains('button')).toBe(true)
    })
})