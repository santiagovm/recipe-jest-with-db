import * as childProcess from 'child_process'
import { exec, upAll } from 'docker-compose'
import * as path from 'path'
import * as util from 'util'

const isPortReachable = require('is-port-reachable')

module.exports = async () => {
  const isDatabasePortReachable = await isPortReachable(54310)

  if (!isDatabasePortReachable) {
    // docker compose up
    await upAll({
      cwd: path.join(__dirname),
      log: true,
    })

    // wait until container is ready
    await exec(
      'database',
      ['sh', '-c', 'until pg_isready ; do sleep 1 ; done'],
      {
        cwd: path.join(__dirname)
      })
  }

  console.log('⚡️ database port is reachable')

  // run db migrations
  const childExec = util.promisify(childProcess.exec)
  await childExec('npm run db:migrate')

  console.log('👍 database is ready')
}
