import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'modify-workspace-modal',
  templateUrl: './modify-workspace-modal.component.html',
  styleUrls: ['./modify-workspace-modal.component.scss']
})
export class ModifyWorkspaceModalComponent implements OnInit {
  @Input() title: string;
  @Input() despc: string;

  form: FormGroup = new FormGroup({});

  constructor(
    private dialogRef: NbDialogRef<ModifyWorkspaceModalComponent>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.title, Validators.compose([Validators.required])],
      description: [this.despc, Validators.compose([Validators.required])]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  modifyWorkspace() {
    this.dialogRef.close();
    console.log('modify');
  }

  getErrorMessage(field: string) {
    if (field === 'name' && this.form.get('name')?.touched) {
      if (this.form.get('name')?.hasError('required')) {
        return 'Name is required';
      }
    } else if (
      field === 'description' &&
      this.form.get('description')?.touched
    ) {
      if (this.form.get('description')?.hasError('required')) {
        return 'Description is required';
      }
    }

    return '';
  }
}
