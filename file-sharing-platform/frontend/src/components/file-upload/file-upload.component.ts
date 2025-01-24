import { Component } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: any = null;
  password: string = '';
  expiryDate: string = '';
  downloadLink: string | null = null;

  constructor(private fileService: FileService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('password', this.password);
      formData.append('expiryDate', this.expiryDate);

      this.fileService.uploadFile(formData).subscribe(response => {
        this.downloadLink = response.link;
      });
    }
  }
}
