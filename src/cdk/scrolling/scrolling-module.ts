/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {BidiModule} from '@angular/cdk/bidi';
import {PlatformModule} from '@angular/cdk/platform';
import {NgModule} from '@angular/core';
import {CdkFixedSizeVirtualScroll} from './fixed-size-virtual-scroll';
import {CdkScrollable} from './scrollable';
import {CdkVirtualForOf} from './virtual-for-of';
import {CdkVirtualScrollViewport} from './virtual-scroll-viewport';
import {CdkVirtualElement} from '@angular/cdk/scrolling/virtual-element';
import {CdkVirtualElementContainer} from '@angular/cdk/scrolling/virtual-element-container';

@NgModule({
  exports: [CdkScrollable],
  declarations: [CdkScrollable]
})
export class CdkScrollableModule {}

/**
 * @docs-primary-export
 */
@NgModule({
  imports: [
    BidiModule,
    PlatformModule,
    CdkScrollableModule
  ],
  exports: [
    BidiModule,
    CdkScrollableModule,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    CdkVirtualElement,
    CdkVirtualElementContainer
  ],
  declarations: [
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    CdkVirtualElement,
    CdkVirtualElementContainer
  ],
})
export class ScrollingModule {}
