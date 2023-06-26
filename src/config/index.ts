import { avatar } from '../components/avatar/avatar'
import { breadcrumb } from '../components/breadcrumb/breadcrumb'
import { button } from '../components/button/button'
import { dropdown } from '../components/dropdown/dropdown'
import { dialog } from '../components/dialog/dialog'
import { kbd } from '../components/kbd/kbd'
import { toggle } from '../components/toggle/toggle'
import { input } from '../components/input/input'
import { checkbox } from '../components/checkbox/checkbox'
import { formGroup } from '../components/form-group/form-group'
import { nav } from '../components/nav/nav'
import { colors } from '../preset'

export const appConfig = {
  ui: {
    // colors
    colors,
    // components
    avatar,
    breadcrumb,
    button,
    checkbox,
    dropdown,
    dialog,
    formGroup,
    input,
    kbd,
    nav,
    toggle,
  },
}
