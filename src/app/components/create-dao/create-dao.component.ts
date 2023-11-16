import { Component } from '@angular/core';
import { CreateDaoService } from '../../services/create-dao.service';
import { GetDaoService } from '../../services/get-dao.service';

@Component({
  selector: 'app-create-dao',
  templateUrl: './create-dao.component.html',
  styleUrl: './create-dao.component.css',
})
export class CreateDaoComponent {
  dao: any;
  constructor(public createDaoService: CreateDaoService, public getDaoService: GetDaoService) {}

  createDao(event: Event) {
    event.preventDefault();
    try {
      const d = this.createDaoService.createDao();
      this.dao = d;
    } catch (error) {
      console.error(error);
    }
  }
}
