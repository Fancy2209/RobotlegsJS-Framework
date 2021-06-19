// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IConfig } from "@robotlegsjs/core";
import Stage from "openfl/display/Stage";
import { IContextView } from "../api/IContextView";

/**
 * The Context View represents the root Container for a Context
 */
export class ContextView implements IContextView, IConfig {
    private _view: Stage;

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     * The Context View represents the root Container for a Context
     *
     * @param view The root Container for this Context
     */
    public constructor(view: Stage) {
        if (view !== null && view !== undefined) {
            this._view = view;
        } else {
            throw new Error("View can't be null or undefined");
        }
    }

    /*============================================================================*/
    /* Public Properties                                                          */
    /*============================================================================*/

    /**
     *
     */
    public configure(): void {}

    /**
     * The root Container for this Context
     */
    public get view(): Stage {
        return this._view;
    }
}
