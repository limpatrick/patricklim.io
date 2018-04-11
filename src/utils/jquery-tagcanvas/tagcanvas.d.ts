interface Options {
  activeCursor:
    | 'auto'
    | 'crosshair'
    | 'default'
    | 'e-resize'
    | 'help'
    | 'move'
    | 'n-resize'
    | 'ne-resize'
    | 'nw-resize'
    | 'pointer'
    | 'progress'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'text'
    | 'w-resize'
    | 'wait'
    | string;
  animTiming: 'Smooth' | 'Linear';
  bgColour: string | null;
  bgOutline: string | null;
  bgOutlineThickness: number;
  bgRadius: number;
  centreFunc: (() => void) | null;
  centreImage: string | null;
  clickToFront: number | null;
  decel: number;
  depth: number;
  dragControl: boolean;
  dragThreshold: number;
  fadeIn: number;
  freezeActive: boolean;
  freezeDecel: boolean;
  frontSelect: boolean;
  hideTags: boolean;
  imageAlign: 'centre' | 'left' | 'right';
  imageMode: 'image' | 'text' | 'both' | null;
  imagePadding: number;
  imagePosition: 'left' | 'right' | 'top' | 'bottom';
  imageRadius: number;
  imageScale: number | null;
  imageVAlign: 'middle' | 'top' | 'bottom';
  initial: [number, number] | null;
  interval: number;
  lock: 'x' | 'y' | 'xy' | null;
  maxBrightness: number;
  maxSpeed: number;
  minBrightness: number;
  minSpeed: number;
  minTags: number;
  noMouse: boolean;
  noSelect: boolean;
  noTagsMessage: boolean;
  offsetX: number;
  offsetY: number;
  outlineColour: 'tag' | 'tagbg' | string;
  outlineDash: number;
  outlineDashSpace: number;
  outlineDashSpeed: number;
  outlineIncrease: number;
  outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none';
  outlineOffset: number;
  outlineRadius: number;
  outlineThickness: number;
  padding: number;
  paused: boolean;
  pinchZoom: boolean;
  pulsateTime: number;
  pulsateTo: number;
  radiusX: number;
  radiusY: number;
  radiusZ: number;
  repeatTags: number;
  reverse: boolean;
  scrollPause: boolean;
  shadow: string;
  shadowBlur: number;
  shadowOffset: [number, number];
  shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring' | string;
  shuffleTags: boolean;
  splitWidth: number;
  stretchX: number;
  stretchY: number;
  textAlign: 'centre' | 'left' | 'right';
  textColour: string | null;
  textFont: string | null;
  textHeight: number;
  textVAlign: 'middle' | 'top' | 'bottom';
  tooltip: 'native' | 'div' | null;
  tooltipClass: string;
  tooltipDelay: number;
  txtOpt: boolean;
  txtScale: number;
  weight: boolean;
  weightFrom: string | null;
  weightGradient: { [key: number]: string };
  weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline';
  weightSize: number;
  weightSizeMax: number | null;
  weightSizeMin: number | null;
  wheelZoom: boolean;
  zoom: number;
  zoomMax: number;
  zoomMin: number;
  zoomStep: number;
}

interface TagToFrontOptions {
  id: string;
  index: number;
  text: string;
  time: number;
  callback: () => void;
  active: boolean;
}

interface RotateTagOptions {
  id: string;
  index: number;
  text: string;
  time: number;
  callback: () => void;
  active: boolean;
  lat: number;
  lng: number;
}

declare class TagCanvas {
  constructor(cid: string, lctr?: string, opt?: Partial<Options>);
  static options: {
    z0: number;
    z1: number;
    z2: number;
  } & Options;
  static Start(id: string, tagListId?: string, options?: Partial<Options>): void;
  static Pause(id: string): void;
  static Resume(id: string): void;
  static Reload(id: string): void;
  static Update(id: string): void;
  static TagToFront(id: string, options?: Partial<TagToFrontOptions>): void;
  static RotateTag(id: string, options?: Partial<RotateTagOptions>): void;
  static SetSpeed(id: string, speed: [number, number]): void;
  static Delete(id: string): void;
}
