import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserResponse } from '@memo-life-task/interfaces';
import { NbDialogRef } from '@nebular/theme';
import { emailValidator } from '../../../../common/validators/email.validator';
import { EditorModel } from '../workspace-details/models/workspace-details.model';

@Component({
  selector: 'tosp-memo-life-task-modify-workspace-editors-modal',
  templateUrl: './modify-workspace-editors-modal.component.html',
  styleUrls: ['./modify-workspace-editors-modal.component.scss']
})
export class ModifyWorkspaceEditorsModalComponent implements OnInit {
  @Input() editors: IUserResponse[];
  invitedEditors: string[];
  form: FormGroup = new FormGroup({});
  me: IUserResponse | undefined;

  constructor(
    private dialogRef: NbDialogRef<ModifyWorkspaceEditorsModalComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator()])]
    });

    this.getPendingInvitations();
  }

  getPendingInvitations() {
    this.invitedEditors = ['alma1234@alma.com', 'alma1234456@alma.com'];
  }

  inviteUser() {
    const email = this.form.controls['email'].value;

    console.log(email);

    this.invitedEditors.push(email);
    this.form.controls['email'].reset();
    console.log('invite user');
  }

  undoUserInvite(email: string) {
    this.invitedEditors = this.invitedEditors.filter(
      (invitedEmail) => invitedEmail != email
    );
    console.log('undoUserInvite');
  }

  removeEditor(editor: IUserResponse) {
    this.editors = this.editors.filter(
      (editorItem) => editorItem.id != editor.id
    );
    console.log('removeEditor');
  }

  getErrorMessage(field: string) {
    if (field === 'email' && this.form.get('email')?.touched) {
      if (this.form.get('email')?.hasError('required')) {
        return 'Email is required';
      } else if (this.form.get('email')?.hasError('invalidFormat')) {
        return 'Enter valid email format';
      }
    }
    return '';
  }

  closeModal() {
    this.dialogRef.close();
  }
}
