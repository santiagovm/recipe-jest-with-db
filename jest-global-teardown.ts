import isCi from 'is-ci'
import { down } from 'docker-compose'

module.exports = async () => {
  // leave the database up local
  if (isCi) {
    await down()
  }
}
