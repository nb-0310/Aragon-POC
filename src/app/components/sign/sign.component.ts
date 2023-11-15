// src/app/metamask-connect/metamask-connect.component.ts

import { Component, NgZone } from '@angular/core';
import { SignService } from '../../services/sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styles: [],
})
export class SignComponent {
  context: any;
  constructor (public signService: SignService) { }

  logSigner () {
    console.log(this.signService.getSigner())
  }

  async logContext () {
    const ctx = await this.signService.getContext()
    console.log(ctx)
    this.context = ctx
  }
}
