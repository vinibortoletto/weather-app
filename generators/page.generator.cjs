module.exports = {
  description: 'application component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message:
        'What is the page name? If the page has more than one word, insert a space between them.'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/index.ts',
      templateFile: './templates/page/index.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: './templates/page/page.tsx.hbs'
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile: './templates/page/test.tsx.hbs'
    }
  ]
}
