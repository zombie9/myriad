const emptyCharacter = {
  persona: {
    name: '',
    race: '',
    class: '',
    affiliation: '',
    description: ''
  },
  stats: {
    karma: '0',
    strength: '0',
    life: '0',
    intelligence: '0',
    sanity: '0',
    dexterity: '0',
    experience: '0'
  },
  skills: [
    {
      name: 'Perception',
      stat: 'intelligence',
      description: 'The ability to notice stuff',
      value: '0'
    }
  ],
  equipment: '',
  notes: ''
};

const savedCharacter = localStorage.getItem('myriad');

export const buildCharacter = () => {
  if (savedCharacter) return JSON.parse(savedCharacter);
  return emptyCharacter;
};
