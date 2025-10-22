import { NODE_WIDTH_PX, NODE_HEIGHT_PX, MOBILE_NODE_WIDTH_PX, MOBILE_NODE_HEIGHT_PX } from '../constants';

/**
 * Get node dimensions based on device type
 */
export function getNodeDimensions(isMobile: boolean): { width: number; height: number } {
  return {
    width: isMobile ? MOBILE_NODE_WIDTH_PX : NODE_WIDTH_PX,
    height: isMobile ? MOBILE_NODE_HEIGHT_PX : NODE_HEIGHT_PX,
  };
}
