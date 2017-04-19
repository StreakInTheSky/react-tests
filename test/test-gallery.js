import React from 'react';
import TestUtils from 'react-dom/test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery component', function() {
  it('Renders a gallery of imagaes', function() {
    const images = [
      {
        url: "http://www.example.com/image1.png",
        description: "Example description 1"
      },
      {
        url: "http://www.example.com/image2.png",
        description: "Example description 2"
      }
    ];

    const renderer = TestUtils.createRenderer();
    renderer.render(<Gallery images={images} />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('gallery');
    result.props.children.length.should.equal(images.length);

    const img = result.props.children[0];
    img.props.should.include.keys('url', 'description');
  })
})
