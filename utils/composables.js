export class Map {
  static isMouseDown = false
  static reduceAF

  static xOffset
  static yOffset
  static startPositionX = 0
  static startPositionY = 0
  static mouseMoveXPosition
  static mouseMoveYPosition
  static distanceX
  static distanceY
  static distancePositionX
  static distancePositionY

  static ZOOMED_LEFT_BORDER = 0
  static ZOOMED_RIGHT_BORDER = -10000
  static ZOOMED_BOTTOM_BORDER = -10000
  static ZOOMED_TOP_BORDER = 0

  static id

  static set zoomedRightBorder(width) {
    this.ZOOMED_RIGHT_BORDER = width
  }

  constructor(zoomBlock, mapSVG) {
    this.zoomBlock = zoomBlock
    this.mapSVG = mapSVG
  }

  getInstanceMap() {
    return this
  }

  computedDistance() {
    return `translateX(${this.distancePositionX}px) translateY(${this.distancePositionY}px) scale(1.7) translateZ(0px)`;
  }
//
  static onMouseDown(ev) {
    this.isMouseDown = true
    this.reduceAF = true;
    this.id = null
    this.zoomBlock.style.transitionDuration = "0ms";

    this.xOffset = this.zoomBlock.getBoundingClientRect().x;
    this.yOffset = this.zoomBlock.getBoundingClientRect().y;

    if ("ontouchstart" in document.documentElement) {
      this.startPositionX = ev.touches[0].pageX;
      this.startPositionY = ev.touches[0].pageY;
      // ev.preventDefault();
    } else {
      this.startPositionX = ev.pageX;
      this.startPositionY = ev.pageY;
    }

    this.mapSVG.style.cursor = "grabbing";
    this.mouseMoveRef = Map.onMouseMove.bind(this)
    window.addEventListener("mousemove", this.mouseMoveRef, {passive: false});
    window.addEventListener("touchmove", this.mouseMoveRef, {passive: false});
  }

  static onMouseMove(ev) {

    if ("ontouchstart" in document.documentElement)  {
      this.mouseMoveXPosition = ev.touches[0].pageX;
      this.mouseMoveYPosition = ev.touches[0].pageY;
      // ev.preventDefault();
    } else {
      this.mouseMoveXPosition = ev.pageX;
      this.mouseMoveYPosition = ev.pageY;
    }

    this.distanceX = this.mouseMoveXPosition - this.startPositionX + this.xOffset;
    this.distanceY = this.mouseMoveYPosition - this.startPositionY + this.yOffset;
    // console.log(window.innerWidth) // 1920 - (-1360) || 1440 - (-1840)
    // console.log(window.innerHeight) // 937 - (-657) || 702 - (-1052) Map.ZOOMED_RIGHT_BORDER window.innerWidth - 3280)
    if (this.distanceX < Map.ZOOMED_LEFT_BORDER && this.distanceX > window.innerWidth - 3265) {
      this.distancePositionX = this.distanceX;
    }
    if (this.distanceY > window.innerHeight - 2178 && this.distanceY < Map.ZOOMED_TOP_BORDER) {
      this.distancePositionY = this.distanceY;
    }


    if (this.reduceAF && this.isMouseDown) {
      this.reduceAF = false;

      !!this.id && window.cancelAnimationFrame(this.id);
      this.id = window.requestAnimationFrame(this.moveMap.bind(this));
    }
  }

  moveMap(timestamp) {
    this.reduceAF = true;
    this.zoomBlock.style.transform = this.computedDistance()

    this.id = requestAnimationFrame(this.moveMap);
  }

  static onMouseUp() {
    window.removeEventListener("mousemove", this.mouseMoveRef);
    window.removeEventListener("touchmove", this.mouseMoveRef);
    this.isMouseDown = false;
    this.mapSVG.style.cursor = "grab";
  }
}
