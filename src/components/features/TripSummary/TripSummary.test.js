import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link address', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';

    const component = shallow(<TripSummary link={expectedLink} id={expectedId} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('shoud render correct src, alt for img', () => {
    const expectedSrc = 'http://image.jpg';
    const expectedAlt = 'Lorem ipsum';
    const component = shallow(<TripSummary name={expectedAlt} image={expectedSrc} id='1' />);

    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
  });

  it('should render correct props name, cost, days', () => {
    const expectedName = 'Name test';
    const expectedCost = '123';
    const expectedDays = 10;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id='1' />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details>span').at(0).text()).toEqual(expectedDays + ' days');
    expect(component.find('.details>span').at(1).text()).toEqual('from ' + expectedCost);
  });

  it('should render tags in spans', () => {
    const expectedTags = ['a', 'b', 'c'];
    const component = shallow(<TripSummary tags={expectedTags} id='1'/>);

    expect(component.find('.tags>span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags>span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags>span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should throw error without tags', () => {
    const component = shallow(<TripSummary id='1'/>);

    expect(component.hasClass('tags')).toBe(false);
  });
});
