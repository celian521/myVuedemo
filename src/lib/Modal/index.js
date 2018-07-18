import KikoMessage from './message/index.js'
import KikoToolTip from './tips/index.js'
import KikoConfirm from './confirm/index.js'
import KikoLoading from './loading/index.js'

const install = function(Vue) {
  Vue.component(KikoMessage.name, KikoMessage)
  Vue.component(KikoToolTip.name, KikoToolTip)

  Vue.component(KikoConfirm.name, KikoConfirm) //

  Vue.component(KikoLoading.name, KikoLoading)

  Vue.prototype.$tooltip = KikoToolTip.installToolTip
  Vue.prototype.$message = KikoMessage.installMessage
}
export default install
