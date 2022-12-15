import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import { Image } from './Image';

Enzyme.configure({adapter: new Adapter()});

describe('Image', () => {
    it('should contain correct src value', () => {    
            const image = shallow(<Image imagePathURL="123"/>)
            const testImage = image.find("img")
            const src = testImage.prop('src')
            expect(src).toContain("123");
          
    })
});