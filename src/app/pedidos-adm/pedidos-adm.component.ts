import { UsuarioService } from './../usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-pedidos-adm',
  templateUrl: './pedidos-adm.component.html',
  styleUrls: ['./pedidos-adm.component.scss']
})
export class PedidosAdmComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'description', 'value','status', 'rastreio'];
  dataSource!: MatTableDataSource<any>;
  SalesList:any

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(row: any) {
    console.log('Row clicked', row);
    const dialog = this.dialog.open(ModalComponent,{data:row})
  }

  constructor( private userService: UsuarioService, private dialog: MatDialog) {}


  ngOnInit(): void {
    this.userService.getAllSales().subscribe((data:any)=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
