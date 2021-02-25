/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Directive} from '@angular/core';
import {CdkVirtualElement} from '@angular/cdk/scrolling/virtual-element';

export type CdkVirtualElementContainerContext = {
    /** The item value. */
    $implicit: T;
};

@Directive({
    selector: '[cdkVirtualElementContainer]'
})
export class CdkVirtualElementContainer {

    /**
     * Structural directive cannot use childContent, viewChild, etc.
     * So we create this function that allow CdkVirtualElement can inject
     * and call from that
     */
    createElement(element: CdkVirtualElement) {

    }

}
