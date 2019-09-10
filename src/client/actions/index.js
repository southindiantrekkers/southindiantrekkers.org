import { action } from '../helpers/actionCreator';
import * as actions from '../constants/index';

export const openGallery = (payload) => action(actions.OPEN_GALLERY, payload );
export const closeGallery = () => action(actions.CLOSE_GALLERY, {});
export const searchActivities = (payload) => action(actions.SEARCH_ACTIVITIES, payload);