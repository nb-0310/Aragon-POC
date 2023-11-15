import { Component } from '@angular/core';
import { GetDaoService } from '../../services/get-dao.service';

@Component({
  selector: 'app-get-dao',
  templateUrl: './get-dao.component.html',
  styleUrl: './get-dao.component.css'
})
export class GetDaoComponent {
  dao: any;
  constructor (public getDaoService: GetDaoService) { }

  async getDetails () {
    const dao = await this.getDaoService.getDao()
    this.dao = dao
    console.log(dao)
  }
}
