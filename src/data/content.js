export const content = [
  {
    title: 'Persona',
    type: 'single',
    pods: [
      [
        {
          name: 'Name',
          type: 'line'
        },
        {
          name: 'Race',
          type: 'line'
        },
        {
          name: 'Class',
          type: 'line'
        },
        {
          name: 'Affiliation',
          type: 'line'
        },
        {
          name: 'Description',
          type: 'text'
        }
      ]
    ]
  },
  {
    title: 'Stats',
    type: 'dual',
    pods: [
      [
        {
          name: 'Life (maximum)',
          type: 'number'
        },
        {
          name: 'Life (current)',
          type: 'number'
        },
        {
          name: 'Sanity',
          type: 'number'
        }
      ],
      [
        {
          name: 'Strength',
          type: 'number'
        },
        {
          name: 'Intelligence',
          type: 'number'
        },
        {
          name: 'Dexterity',
          type: 'number'
        }
      ]
    ]
  }
];
