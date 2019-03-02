/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import {
  GameSettingsManager,
} from './services/game-settings-manager';
import {
  EventEmitter,
} from '@stencil/core';
import {
  HeroInitData,
} from './models/hero-models';
import {
  AppState,
} from './models/models';
import {
  GameSetting,
} from './global/game-setting';
import {
  TaskMode,
} from './models/task-models';


export namespace Components {

  interface SqCreateHeroScreen {
    'gameSettingsMgr': GameSettingsManager;
  }
  interface SqCreateHeroScreenAttributes extends StencilHTMLAttributes {
    'gameSettingsMgr'?: GameSettingsManager;
    'onStartNewHero'?: (event: CustomEvent<HeroInitData>) => void;
  }

  interface SqPlayScreen {
    'appState': AppState;
    'availableHeroes': {hash: string, name: string}[];
    'gameSetting': GameSetting;
  }
  interface SqPlayScreenAttributes extends StencilHTMLAttributes {
    'appState'?: AppState;
    'availableHeroes'?: {hash: string, name: string}[];
    'gameSetting'?: GameSetting;
    'onBuildNewHero'?: (event: CustomEvent) => void;
    'onClearAllGameData'?: (event: CustomEvent) => void;
    'onDeleteHero'?: (event: CustomEvent<string>) => void;
    'onPlayNewHero'?: (event: CustomEvent<string>) => void;
    'onTaskModeAction'?: (event: CustomEvent<TaskMode>) => void;
  }

  interface SqProgressBar {
    'currentValue': number;
    'tapOverlayText': string;
    'totalValue': number;
  }
  interface SqProgressBarAttributes extends StencilHTMLAttributes {
    'currentValue'?: number;
    'tapOverlayText'?: string;
    'totalValue'?: number;
  }

  interface SqApp {}
  interface SqAppAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SqCreateHeroScreen': Components.SqCreateHeroScreen;
    'SqPlayScreen': Components.SqPlayScreen;
    'SqProgressBar': Components.SqProgressBar;
    'SqApp': Components.SqApp;
  }

  interface StencilIntrinsicElements {
    'sq-create-hero-screen': Components.SqCreateHeroScreenAttributes;
    'sq-play-screen': Components.SqPlayScreenAttributes;
    'sq-progress-bar': Components.SqProgressBarAttributes;
    'sq-app': Components.SqAppAttributes;
  }


  interface HTMLSqCreateHeroScreenElement extends Components.SqCreateHeroScreen, HTMLStencilElement {}
  var HTMLSqCreateHeroScreenElement: {
    prototype: HTMLSqCreateHeroScreenElement;
    new (): HTMLSqCreateHeroScreenElement;
  };

  interface HTMLSqPlayScreenElement extends Components.SqPlayScreen, HTMLStencilElement {}
  var HTMLSqPlayScreenElement: {
    prototype: HTMLSqPlayScreenElement;
    new (): HTMLSqPlayScreenElement;
  };

  interface HTMLSqProgressBarElement extends Components.SqProgressBar, HTMLStencilElement {}
  var HTMLSqProgressBarElement: {
    prototype: HTMLSqProgressBarElement;
    new (): HTMLSqProgressBarElement;
  };

  interface HTMLSqAppElement extends Components.SqApp, HTMLStencilElement {}
  var HTMLSqAppElement: {
    prototype: HTMLSqAppElement;
    new (): HTMLSqAppElement;
  };

  interface HTMLElementTagNameMap {
    'sq-create-hero-screen': HTMLSqCreateHeroScreenElement
    'sq-play-screen': HTMLSqPlayScreenElement
    'sq-progress-bar': HTMLSqProgressBarElement
    'sq-app': HTMLSqAppElement
  }

  interface ElementTagNameMap {
    'sq-create-hero-screen': HTMLSqCreateHeroScreenElement;
    'sq-play-screen': HTMLSqPlayScreenElement;
    'sq-progress-bar': HTMLSqProgressBarElement;
    'sq-app': HTMLSqAppElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
