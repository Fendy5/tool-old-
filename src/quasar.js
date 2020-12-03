import Vue from 'vue';

import './styles/quasar.scss';
import '@quasar/extras/material-icons/material-icons.css';
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QExpansionItem,
  QCheckbox,
  QInput,
  QSelect,
  QUploader,
  Notify,
  QAjaxBar,
} from 'quasar';

Vue.use(Quasar, {
  config: {
    notify: {
      position: 'top',
      timeout: 2500,
    },
  },
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QExpansionItem,
    QCheckbox,
    QInput,
    QUploader,
    QSelect,
    QAjaxBar,
  },
  directives: {
  },
  plugins: {
    Notify,
  },
});
