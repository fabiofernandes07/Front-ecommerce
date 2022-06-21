import { UsuarioService } from './../usuario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef,  MAT_DIALOG_DATA  } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  idDelivery: any;
  rastreio:any;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UsuarioService,
    ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();

  }

  updateTracking(){
    this.userService.updateTracking({tracking:this.rastreio},this.idDelivery).subscribe();
    console.log(this.rastreio,this.idDelivery);
    window.location.reload();
  }
}
