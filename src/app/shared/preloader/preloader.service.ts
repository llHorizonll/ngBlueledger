import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

export class PreloaderService {
  showPreloader = new BehaviorSubject<Boolean>(false);

  constructor() { }

  setShowPreloader(status: boolean) {
      setTimeout(() => this.showPreloader.next(status), 0);
  }
}