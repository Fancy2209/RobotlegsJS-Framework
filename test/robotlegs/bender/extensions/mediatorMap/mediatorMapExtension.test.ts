// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import "../../../../entry";

import { assert } from "chai";

import { IContext, Context } from "@robotlegsjs/core";

import {
    ViewManagerExtension,
    MediatorMapExtension,
    IMediatorMap
} from "../../../../../src";

import { MediatorMap } from "../../../../../src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMap";

describe("MediatorMapExtension", () => {
    let context: IContext;

    beforeEach(() => {
        context = new Context();
    });

    afterEach(() => {
        context = null;
    });

    it("installing_after_initialization_throws_error", () => {
        function installExtensionAfterInitialization(): void {
            context.initialize();
            context.install(MediatorMapExtension);
        }
        assert.throws(installExtensionAfterInitialization, Error);
    });

    it("mediatorMap_is_mapped_into_injector_on_initialize", () => {
        let mediatorMap: IMediatorMap = null;
        context.install(ViewManagerExtension, MediatorMapExtension);
        context.whenInitializing(function(): void {
            mediatorMap = context.injector.get<IMediatorMap>(IMediatorMap);
        });
        context.initialize();
        assert.isNotNull(mediatorMap);
        assert.instanceOf(mediatorMap, MediatorMap);
    });
});
