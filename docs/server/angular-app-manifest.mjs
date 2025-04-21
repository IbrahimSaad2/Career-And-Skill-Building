
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'CareerAndSkillBuilding',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/login"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/signup"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/home"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/adminDashboard"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/courseDetails"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/employeerDashboard"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/jobApplication"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/jobSeekerDashboard"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/tracks"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/posts"
  },
  {
    "renderMode": 2,
    "route": "/CareerAndSkillBuilding/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11272, hash: 'caff37a9ae3282c425c02f67bd96599424e3e97ca57ab537668fc9c6d9e29ef5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6314, hash: '6fb57347d32689b7efcffd214458c875f7f873e6c7d87b1e5f748a1cba78165e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'adminDashboard/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/adminDashboard_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'courseDetails/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/courseDetails_index_html.mjs').then(m => m.default)},
    'employeerDashboard/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/employeerDashboard_index_html.mjs').then(m => m.default)},
    'jobSeekerDashboard/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/jobSeekerDashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'jobApplication/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/jobApplication_index_html.mjs').then(m => m.default)},
    'posts/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/posts_index_html.mjs').then(m => m.default)},
    'tracks/index.html': {size: 11569, hash: 'a53e9a131c4ee8be9fd607ed813816b32761bcaca6c0bc848d9f1673c845aae6', text: () => import('./assets-chunks/tracks_index_html.mjs').then(m => m.default)},
    'styles-JTE645SN.css': {size: 308045, hash: 'iVahQHrNDFs', text: () => import('./assets-chunks/styles-JTE645SN_css.mjs').then(m => m.default)}
  },
};
