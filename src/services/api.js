export function loadLists() {
  return [
    { 
      title: 'Tasks', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Check server traffic',
          labels: ['#251d90d9'],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        },
        {
          id: 2,
          content: 'Implemment user master-detail',
          labels: ['#251d90d9'],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        },
        {
          id: 3,
          content: 'Create unit tests for user profile',
          labels: ['#251d90d9'],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        },
        {
          id: 4,
          content: 'Implemment vendor list with filter"',
          labels: ['#54e1f7'],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        },
        {
          id: 5,
          content: 'Create deploy process in Jenking',
          labels: ['#54e1f7'],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        },
      ]
    },
    { 
      title: 'Doing', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Enable ESLint on projects',
          labels: [],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        }
      ]
    },
    { 
      title: 'Paused', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Integrate payment component with Stripe',
          labels: ['#251d90d9'],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        },
        {
          id: 8,
          content: 'Update ReactJs version',
          labels: ['#54e1f7'],
          user: 'https://dklotz-projects.s3.eu-central-1.amazonaws.com/IMG_20190718_175826.jpg'
        },
        {
          id: 9,
          content: 'Implement file upload - vendor component',
          labels: [],
        }
      ]
    },
    { 
      title: 'Done', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'E2e tests for vendor profile',
          labels: [],
        },
        {
          id: 12,
          content: 'Implemment vendor profile component',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Implemment user profile component"',
          labels: ['#251d90d9'],
        }
      ]
    },
  ];
}