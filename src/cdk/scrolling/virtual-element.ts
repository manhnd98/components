/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Directive, ElementRef, Input, SkipSelf} from '@angular/core';
import {CdkVirtualElementContainer} from '@angular/cdk/scrolling/virtual-element-container';

export type CdkVirtualElementContext = {
    /** The item value. */
    $implicit: T;
};

@Directive({
    selector: '[cdkVirtualElement]'
})
export class CdkVirtualElement {

    /**
     * item height in px
     */
    @Input() itemHeight: number;

    constructor(@SkipSelf() private _virtualContainer: CdkVirtualElementContainer) {
    }
}
