import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  //Social Links
  openFacebook() {
    window.open(`https://www.facebook.com/breeo.ca?mibextid=ZbWKwL`);
  }
  openTwitter() {
    window.open(`https://twitter.com/breeoint`);
  }
  openInstagram() {
    window.open(`https://instagram.com/breeointernational?igshid=ZDdkNTZiNTM=`);
  }
  openTikTok() {
    window.open(`https://www.tiktok.com/@breeointernational?_t=8YOZv1RovME&_r=1`);
  }
}
