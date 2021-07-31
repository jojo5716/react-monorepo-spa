/* eslint-env node, jest */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */

import React from 'react';
import { shallow } from 'enzyme';
import ContentPage from '../src';

describe('ContentPage', () => {
    let fixtures;

    beforeEach(() => {
        fixtures = {
            headerTitle: 'Galeria',
            headerSubtitle: 'subtext',
            headerPhoto: 'http://url',
            headerMode: 'photo',
            description: 'Empieza hoy y aquí mismo tus vacaciones',
            readMoreText: 'Más',
            readLessText: 'Menos',

        };
    });

    it('when description is empty, do not render ReadMore component ', () => {
        fixtures.description = undefined;
        const wrapper = shallow(<ContentPage {...fixtures} />);
        wrapper.find('.read-more').should.have.lengthOf(0);
    });
});
