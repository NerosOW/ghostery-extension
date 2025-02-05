/**
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2017-present Ghostery GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import { html } from 'hybrids';

export default {
  render: () => html`
    <template layout="column padding:2:2:1">
      <ui-text type="label-s" layout="margin:bottom">
        <slot name="header"></slot>
      </ui-text>
      <slot></slot>
    </template>
  `.css`
    :host {
      background: linear-gradient(180deg, #F0F2F7 0%, #FFFFFF 90%);
    }
  `,
};
