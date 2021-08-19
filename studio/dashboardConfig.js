export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611ea4b046ba0c437d878ec3',
                  title: 'Sanity Studio',
                  name: 'lysfontene-studio',
                  apiId: 'c86cd92e-822d-4650-b30d-112a6cb5952d'
                },
                {
                  buildHookId: '611ea4b085726642727babe2',
                  title: 'Blog Website',
                  name: 'lysfontene',
                  apiId: 'b49ea6b8-5e16-4c11-a54d-69efb6525f4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lassegs/lysfontene',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lysfontene.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
