import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IInvitationResponse,
  ISendInvitationRequestBody,
  IUserResponse
} from '@memo-life-task/interfaces';
import { NbDialogRef } from '@nebular/theme';
import { emailValidator } from '../../../../common/validators/email.validator';
import { SendInvitaitionService } from '../services/send-invitation.service';
import { EditorModel } from '../workspace-details/models/workspace-details.model';

@Component({
  selector: 'tosp-memo-life-task-modify-workspace-editors-modal',
  templateUrl: './modify-workspace-editors-modal.component.html',
  styleUrls: ['./modify-workspace-editors-modal.component.scss']
})
export class ModifyWorkspaceEditorsModalComponent implements OnInit {
  @Input() editors: IUserResponse[];
  @Input() invitations: string[];
  @Input() workspaceId: number;
  form: FormGroup = new FormGroup({});
  me: IUserResponse | undefined;

  constructor(
    private dialogRef: NbDialogRef<ModifyWorkspaceEditorsModalComponent>,
    private formBuilder: FormBuilder,
    private sendInvitaitionService: SendInvitaitionService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator()])]
    });
  }

  async inviteUser() {
    const email = this.form.controls['email'].value;

    const request: ISendInvitationRequestBody = {
      email: email,
      workspaceId: +this.workspaceId
    };

    await this.sendInvitaitionService.sendInvitaitionApi(request);

    console.log(email);

    this.invitations.push(email);
    this.form.controls['email'].reset();
    console.log('invite user');
  }

  undoUserInvite(email: string) {
    /*     this.invitedEditors = this.invitedEditors.filter(
      (invitedEmail) => invitedEmail != email
    ); */
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
