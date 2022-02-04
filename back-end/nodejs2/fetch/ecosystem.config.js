module.exports = {
    apps: [
      {
        script: "back.js",
        args: 'start',
        cwd: './backend/',
        name: 'Backend',
        watch: true
      },
      {
        script: "front.js",
        args: 'start',
        cwd: './frontend/',
        name: 'Frontend',
        watch: true
      }
    ]
}