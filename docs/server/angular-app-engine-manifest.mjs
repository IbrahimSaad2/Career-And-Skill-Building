
export default {
  basePath: 'CareerAndSkillBuilding',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
