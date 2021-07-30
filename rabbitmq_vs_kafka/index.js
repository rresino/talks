const { Marpit, Element } = require('@marp-team/marpit')

const marpit = new Marpit({
  container: [
    new Element('article', { id: 'presentation' }),
    new Element('div', { class: 'slides' }),
  ],
  slideContainer: new Element('div', { class: 'slide' }),
})