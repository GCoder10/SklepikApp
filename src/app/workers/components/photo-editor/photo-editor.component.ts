import { UserService } from './../../../shared/services/user.service';
import { AuthService } from './../../../auth/shared/services/auth.service';
import { environment } from './../../../../environments/environment';
import { Photo } from './../../../shared/models/Photo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;

  constructor(private authService: AuthService,
              private userService: UserService) { }


  ngOnInit() {
    this.initializeUploader();
  }


  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  initializeUploader() {
    this.uploader = new FileUploader({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);
        if (photo.isMain) {
              this.authService.changeMemberPhoto(photo.url);
              this.authService.currentUser.photoUrl = photo.url;
              localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
        }
      }
    };
  }


  setMainPhoto(photo: Photo) {
    var alertify = require('alertifyjs/build/alertify.js');
    this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(() => {
      this.currentMain = this.photos.filter(p => p.isMain === true)[0];
      this.currentMain.isMain = false;
      photo.isMain = true;
      this.authService.changeMemberPhoto(photo.url);
      this.authService.currentUser.photoUrl = photo.url;
      localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
    }, error => {
      alertify.error(error);
    });
  }


  deletePhoto(id: number) {
    var alertify = require('alertifyjs/build/alertify.js');
    alertify.confirm('Are you sure you want to delete this photo?', () => {
      this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
        this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
        alertify.success('Photo has been deleted');
      }, error => {
        alertify.error('Failed to delete the photo');
      });
    });
  }

}
