// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { inject, injectable, named } from "@robotlegsjs/core";
import { Payload } from "./Payload";

@injectable()
export class PayloadInjectedHook {
    @inject("Function")
    @named("hookCallback")
    public callback: Function;

    @inject(Payload)
    public payload: Payload;

    public hook(): void {
        this.callback(this, PayloadInjectedHook);
    }
}
