import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';



export interface GALLERY_CONF {
  imageBorderRadius?: string;
  imageOffset?: string;
  imagePointer?: boolean;
  showDeleteControl?: boolean;
  showCloseControl?: boolean;
  showExtUrlControl?: boolean;
  showImageTitle?: boolean;
  showThumbnails?: boolean;
  closeOnEsc?: boolean;
  reactToKeyboard?: boolean;
  reactToMouseWheel?: boolean;
  reactToRightClick?: boolean;
  thumbnailSize?: number;
  backdropColor?: string;
  inline?: boolean;
  showArrows?: boolean;
}



export interface GALLERY_IMAGE {
  url: string;
  thumbnailUrl?: string;
  altText?: string;
  title?: string;
  extUrl?: string;
  extUrlTarget?: string;
}

@Component({
  selector: 'app-galeria-biura',
  templateUrl: './galeria-biura.component.html',
  styleUrls: ['./galeria-biura.component.css']
})



export class GaleriaBiuraComponent implements OnInit {
BGGaleriaBiura: string;



@ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  conf: GALLERY_CONF = {
  imageBorderRadius: '3px',
  imageOffset: '20px',
  showDeleteControl: false,
  showCloseControl: true,
  showExtUrlControl: true,
  showImageTitle: true,
  showThumbnails: true,
  closeOnEsc: true,
  reactToKeyboard: true,
  reactToMouseWheel: true,
  reactToRightClick: false,
  thumbnailSize: 60,
  backdropColor: 'rgba(13,13,14,0.85)',
  inline: false,
  showArrows: true
  };


  images: GALLERY_IMAGE[] = [
    {
      url: 'assets/images/GaleriaBiura/biuro1.jpg',
      altText: 'Konferencyjna',
      title: 'Konferencyjna',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro1.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro2.jpg',
      altText: 'Basen',
      title: 'Basen',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro2.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro3.jpg',
      altText: 'Konferencyjna - spotkanie',
      title: 'Konferencyjna - spotkanie',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro3.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro4.jpg',
      altText: 'Wnętrze 1',
      title: 'Wnętrze 1',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro4.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro5.jpg',
      altText: 'Wnętrze 2',
      title: 'Wnętrze 2',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro5.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro6.jpg',
      altText: 'Tygrys w wodzie',
      title: 'Tygrys w wodzie',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro6.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro7.jpg',
      altText: 'Żaby',
      title: 'Żaby',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro7.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro8.jpg',
      altText: 'Konferencyjna - wnętrze',
      title: 'Konferencyjna - wnętrze',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro8.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro9.jpg',
      altText: 'Konferencyjna - wnętrze 2',
      title: 'Konferencyjna - wnętrze 2',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro9.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro10.jpg',
      altText: 'Tygrysie oko',
      title: 'Tygrysie oko',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro10.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro11.jpg',
      altText: 'Jaszczurka',
      title: 'Jaszczurka',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro11.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro12.jpg',
      altText: 'Sowa',
      title: 'Sowa',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro12.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro13.jpg',
      altText: 'Stado',
      title: 'Stado',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro13.jpg'
    },
    {
      url: 'assets/images/GaleriaBiura/biuro14.jpg',
      altText: 'Planeta - góry',
      title: 'Planeta - góry',
      thumbnailUrl: 'assets/images/GaleriaBiura/biuro14.jpg'
    },
  ];


  constructor() { }

  ngOnInit() {
    this.BGGaleriaBiura = 'assets/images/BGsignin2.jpg';
  }


  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }


  closeGallery() {
    this.ngxImageGallery.close();
  }


  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }


  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }


  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }


  galleryOpened(index) {
    console.log('Gallery opened at index ', index);
  }


  galleryClosed() {
    console.log('Gallery closed.');
  }


  galleryImageClicked(index) {
    console.log('Gallery image clicked with index ', index);
  }


  galleryImageChanged(index) {
    console.log('Gallery image changed to index ', index);
  }


  deleteImage(index) {
    console.log('Delete image at index ', index);
  }
}


