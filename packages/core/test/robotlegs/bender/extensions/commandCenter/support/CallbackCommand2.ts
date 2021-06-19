// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { inject, injectable, named } from "inversify";
import { ICommand } from "../../../../../../src/robotlegs/bender/extensions/commandCenter/api/ICommand";

@injectable()
export class CallbackCommand2 implements ICommand {
    protected _callback: Function;

    public constructor(
        @inject("Function")
        @named("executeCallback")
        callback: Function
    ) {
        this._callback = callback;
    }

    public execute(): void {
        this._callback();
    }
}
