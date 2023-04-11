import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { BOOKING_APP } from '../shared/constants/ticket-booking-constants';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  return sessionStorage.getItem(BOOKING_APP.apiKey)? true : createUrlTreeFromSnapshot(next, ['/', 'login']);
};
